import { Component, OnChanges, Input, OnInit } from '@angular/core';

export interface Segment {
  key: string;
  value: any;
  type: undefined | string;
  description: string;
  expanded: boolean;
}

@Component({
  selector: 'ngx-json-viewer',
  templateUrl: './ngx-json-viewer.component.html',
  styleUrls: ['./ngx-json-viewer.component.scss']
})
export class NgxJsonViewerComponent implements OnInit {

  @Input() json: any;
  @Input() arrayL: any;
  @Input() expanded = true;
  /**
   * @deprecated It will be always true and deleted in version 3.0.0
   */
  @Input() cleanOnChange = true;

  segments: Segment[] = [];
  arrL: any = 0;
  constructor() {
    // this.arrL = Object.keys(this.json);
    // console.log(this.json);
  }

  
  ngOnInit() {
    console.log(this.arrayL);
    this.iterate(this.json);
  }
  iterate(json) {
    // console.log(this.arrL);
    if (typeof json === 'object') {

      
      this.iterate1(json);

    } else {
      console.log('else');
      this.segments.push(this.parseKeyValue(`(${typeof this.json})`, this.json));
    }
  }

  isExpandable(segment: Segment) {
    return segment.type === 'object';
  }

  toggle(segment: Segment) {
    if (this.isExpandable(segment)) {
      segment.expanded = !segment.expanded;
    }
  }
   iterate1 = (obj) => {

    Object.keys(obj).forEach(key => {
      // console.log(Object.keys(obj));
      if (obj[key].type !== 'array') {
        // if(obj[key].properties) {

        if (obj[key].type !== undefined) {
          // console.log(JSON.stringify(this.segments));
          (this.parseKeyValue(key, obj[key]));
        }
        if (obj[key].properties) {
          // console.log(obj[key]);
        }
        if (typeof obj[key] === 'object') {
          // if(obj[key].properties) {
          //console.log(obj[key].properties);
          this.iterate1(obj[key]);
          // }

        }

        // }

      }

      // this.segments.push(this.parseKeyValue(key, obj[key]));
    })
  }

  private parseKeyValue(key: any, value: any): Segment {

    const segment: Segment = {
      key: key,
      value: value,
      type: undefined,
      description: '' + value,
      expanded: this.expanded
    };
    // console.log(segment);
    switch (typeof segment.value) {
      case 'number': {
        segment.type = 'number';
        break;
      }
      case 'boolean': {
        segment.type = 'boolean';
        break;
      }
      case 'function': {
        segment.type = 'function';
        break;
      }
      case 'string': {
        segment.type = 'string';
        segment.description = '"' + segment.value + '"';
        break;
      }
      case 'undefined': {
        segment.type = 'undefined';
        segment.description = 'undefined';
        break;
      }
      case 'object': {
        // yea, null is object
        if (segment.value === null) {
          segment.type = 'null';
          segment.description = 'null';
        } else if (Array.isArray(segment.value)) {
          segment.type = 'array';
          segment.description = 'Array[' + segment.value.length + '] ' + JSON.stringify(segment.value);
        } else if (segment.value instanceof Date) {
          segment.type = 'date';
        } else {
          segment.type = 'object';
          // console.log(JSON.stringify(segment));
          segment.description = 'Object ' + JSON.stringify(segment.value);
        }
        break;
      }
    }
    this.segments.push(segment);
    return segment;
  }
}
