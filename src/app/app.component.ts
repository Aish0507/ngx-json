import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  arrayL: any;
  data: any;
  constructor() {
    this.data = {
      "AccountDetail": {
        "type": "object",
        "properties": {
          "accountSubType": {
            "description": "Account subtype.",
            "type": "String"
          },
          "accountType": {
            "description": "Type of account, Saving or Checking.",
            "type": "String"
          },
          "serviceStartDate": {
            "description": "",
            "type": "String",
            "format": "date"
          },
          "contactFirstName": {
            "description": "First Name of the account Contact.",
            "type": "String"
          },
          "contactMiddleName": {
            "description": "Middle Name of the account Contact.",
            "type": "String"
          },
          "contactFamilyName": {
            "description": "Family Name of the account Contact.",
            "type": "String"
          }
        }
      },
      "Payment": {
        "type": "object",
        "properties": {
          "specifications": {
            "description": "Name Value Pairs.",
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "name": {
                  "type": "String"
                },
                "value": {
                  "type": "String"
                }
              }
            }
          },
          "paymentMethodReference": {
            "type": "object",
            "properties": {
              "paymentMethodCode": {
                "description": "Describes the BIN payment type such as CC - Credit Card,HD - Hybrid Debit,HC - Hybrid Credit,DC - Debit Card,PD - Prepaid Debit or PC - Prepaid Credit or CHECK for bank payments.",
                "type": "String"
              },
              "defaultPaymentMethodIndicator": {
                "description": "To indicate if this payment method is default.",
                "type": "boolean"
              },
              "storedPaymentMethodId": {
                "description": "Identifer of stored payment method.",
                "type": "String"
              },
              "storePaymentMethodIndicator": {
                "description": "To identify if the current payment method needs to be stored in payment gateway.",
                "type": "boolean"
              },
              "enrolledInAutoRenewIndicator": {
                "description": "To indicate if the payment method is enrolled in automated renew payment.",
                "type": "String"
              }
            }
          },
          "paymentArrangements": {
            "$ref": "#/definitions/PaymentArrangements"
          },
          "sourceId": {
            "description": "To identify where the payment is originated from.",
            "type": "String"
          },
          "AdditionalAmountType": {
            "type": "object",
            "properties": {
              "availBal": {
                "description": "To indicate the Available balance",
                "type": "String"
              }
            }
          },
          "grandTotalPurchaseAmount": {
            "description": "Total amount of the entire payment.",
            "type": "number",
            "format": "double"
          },
          "purchases": {
            "description": "Purchase information.",
            "type": "array",
            "items": {
              "$ref": "#/definitions/PaymentPurchase"
            }
          },
          "lineItems": {
            "description": "Line Item Information for LER.",
            "type": "array",
            "items": {
              "$ref": "#/definitions/LineItem"
            }
          },
          "messages": {
            "description": "Retail application messages.",
            "type": "array",
            "items": {
              "$ref": "#/definitions/UIMessage"
            }
          },
          "customerPresentIndicator": {
            "description": "To indicate if the customer is presented when the transaction happens.",
            "type": "boolean"
          },
          "decision": {
            "description": "To indicate the decision.",
            "type": "String"
          },
          "partnerId": {
            "description": "To indicate the partnerId.",
            "type": "String"
          },
          "memberId": {
            "description": "To indicate the memberId .",
            "type": "String"
          },
          "memberIdType": {
            "description": "To indicate the memberIdType.",
            "type": "String"
          },
          "walletId": {
            "description": "To indicate the walletId.",
            "type": "String"
          },
          "authorizationId": {
            "description": "Identifier or code of the transaction authorization.",
            "type": "String"
          },
          "paymentChannelCode": {
            "description": "The channel in which the payment was originally performed.",
            "type": "String"
          },
          "businessTransactionType": {
            "description": "Type of transaction with business process, such as OTP_SPM for onetime payment with stored payment in iHAPS.",
            "type": "String"
          },
          "creationTime": {
            "description": "Time when the Payment request was created.",
            "type": "String",
            "format": "date-time"
          },
          "authorizationTime": {
            "description": "The time when the payment was authorized.",
            "type": "String",
            "format": "date-time"
          },
          "termsAgreementIndicator": {
            "description": "To indicate if the customer accept the agreement or not.",
            "type": "boolean"
          },
          "termsAgreementTime": {
            "description": "Time when the customer accepts the terms agreement.",
            "type": "String",
            "format": "date-time"
          },
          "spmTermsAgreementIndicator": {
            "description": "To indicate if the customer accept the stored payment agreement or not.",
            "type": "boolean"
          },
          "spmTermsAgreementTime": {
            "description": "Time when the customer accepts the stored payment terms agreement.",
            "type": "String",
            "format": "date-time"
          },
          "autopayTermsAgreementIndicator": {
            "description": "To indicate if the customer accept the auto pay agreement or not.",
            "type": "boolean"
          },
          "autopayTermsAgreementTime": {
            "description": "Time when the customer accepts the auto pay terms agreement.",
            "type": "String",
            "format": "date-time"
          },
          "autoPay": {
            "$ref": "#/definitions/AutoPay"
          },
          "payAction": {
            "description": "Pay action code, such as AutoPay, AutoRefill, AutoRenew",
            "type": "String"
          },
          "autoPayDocuments": {
            "$ref": "#/definitions/AutoPayDocuments"
          },
          "autoPayStartTime": {
            "description": "Time on which First Autopay transaction will be processed",
            "type": "String",
            "format": "date-time"
          },
          "transactionType": {
            "description": "The type of transaction being performed, such as onetimePayment,activation.",
            "type": "String"
          },
          "chargeAmount": {
            "description": "The total amount of the transaction inclusive of all additional amounts.",
            "type": "number",
            "format": "double"
          },
          "authorizedAmount": {
            "description": "Amount authorized by the financial institution.",
            "type": "number",
            "format": "double"
          },
          "paymentTransactionId": {
            "description": "A value assigned by the merchant to uniquely reference a transaction and any subsequent related transactions.",
            "type": "String"
          },
          "taxAmount": {
            "description": "Amount of tax included in the payment transaction.",
            "type": "number",
            "format": "double"
          },
          "paymentCardToken": {
            "description": "To indicate the payment card token.",
            "type": "String"
          },
          "onlineOfflineCode": {
            "description": "It indicates O for Online and V for VoiceAuth.",
            "type": "String"
          },
          "contactLessCategory": {
            "description": " Describes the Contactless method used to make payment such as ApplePay,SAMSUNGPay,AndroidPay,MSR,EMV.",
            "type": "String"
          },
          "chipCardIndicator": {
            "description": "Indicates if the card is Chip card or not.",
            "type": "boolean"
          },
          "debitSignatureCode": {
            "description": "Indicates if Card can be processed as Debit Signature.",
            "type": "String"
          },
          "pinLessIndicator": {
            "description": "Indicates if the CARD can be processed as PINLess Debit that doesn't required PIN or signature.",
            "type": "boolean"
          },
          "keyedOrManualCode": {
            "description": "S for Swipe,K for Keyed by Customer,M for Keyed by RSR, T for Tapped Contactless",
            "type": "String"
          },
          "parentOrderId": {
            "description": "Parent OIRder ID of the POS workflow.",
            "type": "String"
          },
          "operationType": {
            "enum": [
              "AUTH",
              "SALES",
              "CHARGE",
              "REFUND"
            ],
            "description": "Operation Type: Valid Values are AUTH for Authorization transaction, SALES for sales transaction, CHARGE for Settlement , REFUND for Refund.",
            "type": "String"
          },
          "isTokenRequired": {
            "description": "Source system to indicate if a token is required to be passed back in the response to POS from Payment Microservice.",
            "type": "boolean"
          },
          "terminalEntryCapability": {
            "description": "An identifier used to indicate the entry mode capability of the terminal.",
            "type": "String"
          },
          "terminalType": {
            "description": "An identifier used to describe the type of terminal being used for the transaction.",
            "type": "String"
          },
          "paymentId": {
            "description": "Unique Id generated at experience Microservice Level(Payment Boundary Level).",
            "type": "String"
          },
          "pkitNonce": {
            "description": "A unique code that will be used to get payment details for one time use (it is valid only 10 minutes from time of generation).",
            "type": "String"
          },
          "electronicAuthenticationCapability": {
            "description": "A code indicating the electronic (PIN) authentication capability at the Point of Sale (POS).",
            "type": "String"
          },
          "fraudCheckFlag": {
            "description": "Indicate if the process should make additional check for fraud with respect to TMOBILE.",
            "type": "boolean"
          },
          "overrideFraudReview": {
            "description": "Indicate to ovveride the fraud review decision.",
            "type": "boolean"
          },
          "merchantId": {
            "description": "A unique ID used to identify the Merchant..",
            "type": "String"
          },
          "merchantRefCode": {
            "description": "Unique ID per request that links request with CDM response.",
            "type": "String"
          },
          "isRemBalRequired": {
            "description": "Indicator for Payment Microservice to return additional amounts (ex: remaining, available, ending balance etc.) as passed by the Acquirer (First Data).",
            "type": "boolean"
          },
          "debugData": {
            "description": "To indicate the debugdata.",
            "type": "String"
          },
          "accountNumber": {
            "description": "The financial account number that identifies the account. Either orderNumber or account number should be passed.",
            "type": "String"
          },
          "orderNumber": {
            "description": "The order number this payment is associated with.",
            "type": "String"
          },
          "cardPresentIndicator": {
            "description": "To indicate if the credit card is presented.",
            "type": "boolean"
          },
          "settlementIndicator": {
            "description": "To indicate settlement code.",
            "type": "String"
          },
          "additonalAmount": {
            "description": "Indicates the Additional Amount returned from the Acquirer based on Additional Amount Type ",
            "type": "String"
          },
          "reversalAction": {
            "description": "To indicate 1.Payment Voided 2.Payment Refunded.",
            "type": "String"
          },
          "reversalReasonCode": {
            "enum": [
              "CustomerInitiated",
              "FraudRuleVoid"
            ],
            "description": "Reason code for reversed transaction",
            "type": "String"
          },
          "systemBehaviour": {
            "description": "To derive based on Business Rules.",
            "type": "String"
          },
          "fraudInvalidFields": {
            "description": "Invalid data fields for fraud Checking.",
            "type": "String"
          },
          "fraudMissingFields": {
            "description": "The missing fields for fraud checking.",
            "type": "String"
          },
          "fraudCheckId": {
            "type": "String"
          },
          "fraudCheckResult": {
            "description": "100 Successful transaction 101 The request is missing one or more required fields. 102 One or more fields in the request contains invalid data.",
            "type": "String"
          },
          "fraudReasonCode": {
            "description": "Fraud reason code from CDM.",
            "type": "String"
          },
          "businessSegment": {
            "description": "Business Segment: Valid values - Prepaid, Postpaid, Anonymous, B2B, Dealer, NationalRetail",
            "type": "String"
          },
          "productGroup": {
            "enum": [
              "HardGoods",
              "SoftGoods"
            ],
            "description": "Product grouping such as HardGoods or SoftGoods",
            "type": "String"
          },
          "orderTypes": {
            "description": "Indicates order type. Examples - ADDALINE, POSTPAYMENT_ONE_TIME_PAYMENT,POSTPAYMENT_REFUND,PURCHASEEQUIPMENT_ACCESSORY, STOREDPAYMENTS, UPGRADE etc.",
            "type": "String"
          },
          "businessUnit": {
            "description": "The T-Mobile business unit, such as TMOBILE, METROPCS, SPRINT",
            "type": "String"
          },
          "programCode": {
            "description": "Program identifier such as ZCP, ZCNP, U2POSTCP, U2PRECP, U2PRECNP, U2POSTCNP, U1POSTLEGACY",
            "type": "String"
          },
          "billerCode": {
            "description": "Billing system identifier such as SAMSON, ERICSSON, OFSLL, EIP",
            "type": "String"
          },
          "denyChannels": {
            "description": "The payment channels that are denied",
            "type": "String"
          },
          "denialTypes": {
            "description": "Payment Types that are denied, such as ALL,CHECK,CREDIT_CARD,DEBIT_CARD",
            "type": "String"
          },
          "paymentInstrument": {
            "$ref": "#/definitions/PaymentInstrument"
          },
          "loanPaymentId": {
            "description": "response paymentId got from EIPPosting",
            "type": "String"
          }
        }
      },
      "Customer": {
        "type": "object",
        "properties": {
          "customerAccountSummary": {
            "$ref": "#/definitions/CustomerAccountSummary"
          }
        }
      },
      "CustomerAccountSummary": {
        "type": "object",
        "properties": {
          "customerBlocked": {
            "description": "Indicates if the customer has a negative file or not.",
            "type": "String"
          }
        }
      },
      "BankPayment": {
        "type": "object",
        "properties": {
          "nickName": {
            "description": "Nickname for bank payment.",
            "type": "String"
          },
          "accountNumber": {
            "description": "Account number in the bank.",
            "type": "String"
          },
          "accountType": {
            "description": "Type of account, Saving or Checking.",
            "type": "String"
          },
          "routingNumber": {
            "description": "Routing Number of the bank on whom the payment instrument is drawn.",
            "type": "String"
          },
          "accountHolderNames": {
            "description": "Name of the account holder.",
            "type": "array",
            "items": {
              "type": "String"
            }
          },
          "accountHolderAddress": {
            "type": "object",
            "properties": {
              "AddressCore": {
                "$ref": "#/definitions/AddressCore"
              }
            }
          },
          "bankAccountAlias": {
            "description": "Bank account alias used by the customer.",
            "type": "String"
          }
        }
      },
      "FinancialTransaction": {
        "type": "object",
        "properties": {
          "paymentTransactionSubType": {
            "description": "paymentTransactionSubType",
            "type": "String"
          },
          "rmaNumber": {
            "description": "rmaNumber",
            "type": "String"
          },
          "phoneNumber": {
            "description": "phoneNumber",
            "type": "String"
          },
          "imei": {
            "description": "imei",
            "type": "String"
          },
          "paymentActivityId": {
            "description": "paymentActivityId",
            "type": "String"
          },
          "loanPaymentId": {
            "description": "loanPaymentId",
            "type": "String"
          },
          "loanInvoiceId": {
            "description": "loanInvoiceId",
            "type": "String"
          },
          "invoiceItemId": {
            "description": "invoiceItemId",
            "type": "String"
          },
          "financeType": {
            "description": "financeType",
            "type": "String"
          },
          "loanChargeId": {
            "description": "loanChargeId",
            "type": "String"
          },
          "paymentReasonCode": {
            "description": "paymentReasonCode",
            "type": "String"
          },
          "paymentType": {
            "description": "paymentType",
            "type": "String"
          }
        }
      },
      "AutoPayDocuments": {
        "type": "object",
        "properties": {
          "documentId": {
            "description": "Identifies the document in the document storage system.",
            "type": "array",
            "items": {
              "type": "String"
            }
          },
          "documentType": {
            "description": "Type of document",
            "type": "array",
            "items": {
              "type": "String"
            }
          }
        }
      },
      "ProductReferenceCommon": {
        "type": "object",
        "properties": {
          "productName": {
            "description": "The common name of the product, as defined in the product catalog.",
            "type": "String"
          },
          "productId": {
            "description": "Uniquely identifies a product.",
            "type": "String"
          },
          "sku": {
            "description": "The sku of the device offer variant.Only relevant if the customer purchased the device from T-Mobile.",
            "type": "String"
          }
        }
      },
      "UIMessage": {
        "type": "object",
        "properties": {
          "applicationName": {
            "description": "Name of the application, such as Ingenico/EMV Scanner or POS/mPOS.",
            "type": "String"
          },
          "uiMessage": {
            "description": "Message to be displayed on the Device (IPC, Ingenico).",
            "type": "String"
          },
          "uiAction": {
            "description": "Action or action code returned to ui",
            "type": "String"
          },
          "uiShortCode": {
            "description": "Short Code to be returned to UI.",
            "type": "String"
          }
        }
      },
      "CustomerReference": {
        "type": "object",
        "properties": {
          "customerId": {
            "description": "uniquely identifies the customer party. FAN for Ericsson and BAN for Samson",
            "type": "String"
          },
          "commonCustomerId": {
            "description": "Universal identifier of the customer, as defined in Customer Hub.",
            "type": "String"
          },
          "email": {
            "description": "email",
            "type": "String"
          },
          "languagePreference": {
            "description": "language preference",
            "type": "String"
          }
        }
      },
      "PaymentTransactionResponse": {
        "type": "object",
        "properties": {
          "cvvResponseCode": {
            "description": "Card Verification Value (CVV) response code",
            "type": "String"
          },
          "avsResponseCode": {
            "description": "Address Verification Service response code for swiped transactions where the zip code or address line information was provided as part of the request.",
            "type": "String"
          },
          "paymenInstrumentAlias": {
            "description": "Paymen instrument alias.",
            "type": "String"
          },
          "statusMessage": {
            "description": "To indicate the StatusMessage.",
            "type": "String"
          }
        }
      },
      "Reason": {
        "type": "object",
        "properties": {
          "reasonCode": {
            "description": "Status reason code",
            "type": "String"
          }
        }
      },
      "StatusBody": {
        "type": "object",
        "properties": {
          "reasonDescription": {
            "description": "Status reason description",
            "type": "String"
          }
        }
      },
      "Status": {
        "type": "object",
        "properties": {
          "statusCode": {
            "description": "Status code",
            "type": "String"
          }
        }
      },
      "ResponseCodeList": {
        "description": "Name Value Pairs.",
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "key": {
              "type": "String"
            },
            "value": {
              "type": "object",
              "properties": {
                "errors": {
                  "$ref": "#/definitions/errors"
                }
              }
            }
          }
        }
      },
      "PaymentMethod": {
        "type": "object",
        "properties": {
          "paymentMethodStatus": {
            "description": "Status of payment method, such as blocked, valid, card expired.",
            "type": "String"
          }
        }
      },
      "PaymentCard": {
        "type": "object",
        "properties": {
          "category": {
            "type": "String"
          },
          "nickName": {
            "description": "Nick name for payment card",
            "type": "String"
          },
          "cardNumber": {
            "description": "Payment card number.",
            "type": "String"
          },
          "PIN": {
            "description": "PIN code of the card.",
            "type": "String"
          },
          "cardHolderName": {
            "description": "Name of the Card Holder",
            "type": "String"
          },
          "cardHolderFirstName": {
            "description": "To indicate the card holder first name.",
            "type": "String"
          },
          "cardHolderLastName": {
            "description": "To indicate the card holder last name.",
            "type": "String"
          },
          "cvv": {
            "description": "CVV code of Credit Card.",
            "type": "String"
          },
          "typeCode": {
            "description": "Type of payment Card. Examples are Visa, MasterCard, Debit etc",
            "type": "String"
          },
          "expirationMonthYear": {
            "description": "Expiration month and year of the card",
            "type": "String"
          },
          "paymentCardAlias": {
            "description": "A nickname assigned by the customer as an alternative way to identify a stored payment card.",
            "type": "String"
          },
          "last4CardNumber": {
            "description": "Last four digits of the card used for payment.",
            "type": "String"
          },
          "bin": {
            "description": "The first 6 digits of the card used for payment.",
            "type": "String"
          },
          "cardHolderAddress": {
            "$ref": "#/definitions/CardHolderAddress"
          },
          "pinLessEligible": {
            "type": "String"
          },
          "pinEligible": {
            "type": "String"
          },
          "binStatus": {
            "type": "String"
          },
          "cardNumberLength": {
            "type": "String"
          },
          "creditCardEligible": {
            "type": "String"
          },
          "securityCodeLength": {
            "type": "String"
          }
        }
      },
      "CardHolderAddress": {
        "type": "object",
        "properties": {
          "AddressCore": {
            "$ref": "#/definitions/AddressCore"
          }
        }
      },
      "AccountExtension": {
        "type": "object",
        "properties": {
          "creditClass": {
            "description": "credit class.",
            "type": "String"
          }
        }
      },
      "PaymentArrangements": {
        "type": "object",
        "properties": {
          "paymentArrangementCategory": {
            "description": "payment arrangement category",
            "type": "String"
          },
          "paymentArrangementId": {
            "description": "payment arrangement Id",
            "type": "String"
          },
          "paymentArrangementType": {
            "description": "payment arrangement type",
            "type": "String"
          },
          "actionCode": {
            "description": "action code",
            "type": "String"
          },
          "plannedPayments": {
            "description": "Planned payments.",
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "plannedPaymentId": {
                  "type": "String"
                },
                "plannedPaymentAmount": {
                  "type": "String"
                },
                "plannedPaymentDate": {
                  "type": "String",
                  "format": "date"
                }
              }
            }
          }
        }
      },
      "PostOrderRequest": {
        "type": "object",
        "properties": {
          "processingFeeWaiveIndicator": {
            "description": "To indicate if the payment processing fee can be waived or not by manager or representative.",
            "type": "boolean"
          },
          "keys": {
            "type": "object",
            "description": "keys is a predefined object from an igniteXml model - cabinet 1026378528 build 1039414519 key 1030414646",
            "properties": {
              "domainName": {
                "description": "Domain name",
                "type": "String"
              },
              "keyName": {
                "description": "Key name",
                "type": "String"
              },
              "keyValue": {
                "description": "Key value",
                "type": "String"
              }
            }
          },
          "oneTimeCharges": {
            "description": "One time charges.",
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "type": {
                  "description": "Charge or tax type",
                  "type": "String"
                },
                "amount": {
                  "description": "Amount charged.",
                  "type": "number",
                  "format": "double"
                },
                "code": {
                  "description": "Charge code",
                  "type": "String"
                },
                "description": {
                  "description": "Description of the charges.",
                  "type": "String"
                }
              }
            }
          },
          "orderLines": {
            "description": "An array of orderLines objects.",
            "type": "array",
            "items": {
              "type": "object",
              "description": "Note from representative.",
              "properties": {
                "transactionType": {
                  "description": "Transaction type for the item",
                  "type": "String"
                },
                "transactionSubType": {
                  "description": "Transaction sub type for the item",
                  "type": "String"
                }
              }
            }
          },
          "pushToBillIndicator": {
            "description": "To indicate if customer select to push charge or fee to bill (current cycle).",
            "type": "boolean"
          },
          "quoteId": {
            "description": "Identifier of quote",
            "type": "String"
          },
          "totalDue": {
            "description": "Total due to pay today. In case refunds are applicable, the totalDue amount will encapsulate refunds too.",
            "type": "String"
          },
          "notes": {
            "description": "An array of notes objects.",
            "type": "array",
            "items": {
              "type": "object",
              "description": "Note from representative.",
              "properties": {
                "type": {
                  "description": "Type of the note.",
                  "type": "String"
                },
                "content": {
                  "description": "Text content of the note.",
                  "type": "String"
                }
              }
            }
          },
          "lines": {
            "description": "An array of lines objects.",
            "type": "array",
            "items": {
              "type": "object",
              "description": "Note from representative.",
              "properties": {
                "phoneNumber": {
                  "description": "The phone number (MSISDN) associated with the line of service.",
                  "type": "String"
                }
              }
            }
          }
        }
      },
      "PostOrderResponse": {
        "type": "object",
        "properties": {
          "orderId": {
            "description": "Identifier of order",
            "type": "String"
          },
          "oneTimeCharges": {
            "description": "One time charges.",
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "type": {
                  "description": "Charge or tax type.",
                  "type": "String"
                },
                "amount": {
                  "description": "Amount charged.",
                  "type": "number",
                  "format": "double"
                },
                "code": {
                  "description": "Charge code.",
                  "type": "String"
                },
                "description": {
                  "description": "Description of the charges.",
                  "type": "String"
                }
              }
            }
          },
          "validations": {
            "description": "Array of validation objects.",
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "category": {
                  "description": "Validation category",
                  "type": "String"
                },
                "message": {
                  "description": "Validation message",
                  "type": "String"
                }
              }
            }
          }
        }
      },
      "PostingDetails": {
        "description": "An array of posting objects.",
        "type": "array",
        "items": {
          "type": "object",
          "description": "The object required to post to billing system.",
          "properties": {
            "postingType": {
              "description": "The type of posting whether we are posting at ban level or LoanId level possible values BAN,LOANID",
              "type": "String"
            },
            "postingSubType": {
              "description": "The subType of posting this is used when multi level posting iis required possible values MSISDN,DEVICEID",
              "type": "String"
            },
            "postingIdentifier": {
              "description": "The value of the posting type needs to be passed here",
              "type": "String"
            },
            "postingSubIdentifier": {
              "description": "The value of the sub type needs to be passed here",
              "type": "String"
            },
            "postingAmount": {
              "description": "The amount to be posted to Billing system",
              "type": "number",
              "format": "double"
            },
            "financialTransaction": {
              "$ref": "#/definitions/FinancialTransaction"
            }
          }
        }
      },
      "SalesInfo": {
        "type": "object",
        "properties": {
          "createdBy": {
            "description": "The person who creats",
            "type": "String"
          },
          "checkoutBy": {
            "description": "The person who checkout",
            "type": "String"
          },
          "originalDealerCode": {
            "description": "Code of dealer who initiated transaction.",
            "type": "String"
          },
          "checkOutDealerCode": {
            "description": "Code of dealer who checkedOut transaction.",
            "type": "String"
          },
          "splitDealerCode": {
            "description": "Code of dealer who splitedOut transaction.",
            "type": "String"
          },
          "masterDealerCode": {
            "description": "Code of master dealer who made the transaction.",
            "type": "String"
          }
        }
      },
      "Specifications": {
        "type": "object",
        "properties": {
          "specifications": {
            "description": "Name Value Pairs.",
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "name": {
                  "type": "String"
                },
                "value": {
                  "type": "String"
                }
              }
            }
          }
        }
      },
      "SwipeData": {
        "type": "object",
        "properties": {
          "macAddress": {
            "description": "Media Access Control address of the device.",
            "type": "String"
          },
          "keySequenceNumber": {
            "description": "key sequence number.",
            "type": "String"
          },
          "encryptionTarget": {
            "description": "The type of the data is being encrypted.",
            "type": "String"
          },
          "encryptedContent": {
            "description": "The track data or card number provided in an encrypted block.",
            "type": "String"
          },
          "track1Data": {
            "description": "This field contains the unaltered track 1 data from the magnetic stripe of the card.",
            "type": "String"
          },
          "track2Data": {
            "description": "This field contains the unaltered track 2 data from the magnetic stripe of the card.",
            "type": "String"
          },
          "ephemeralPublicKey": {
            "description": "Ephemeral public key bytes.EC_v1 only(X.509 encoded key bytes, Base64 encoded as a String)",
            "type": "String"
          }
        }
      },
      "SalesChannelReference": {
        "type": "object",
        "properties": {
          "salesChannelId": {
            "description": "To indicate the salesChannelId.",
            "type": "String"
          }
        }
      },
      "PaymentPurchase": {
        "type": "object",
        "properties": {
          "quantity": {
            "description": "The quantity of the product being ordered on this line.",
            "type": "String"
          },
          "price": {
            "description": "Price of each item.",
            "type": "number",
            "format": "double"
          },
          "productReferenceCommon": {
            "$ref": "#/definitions/ProductReferenceCommon"
          }
        }
      },
      "LineItem": {
        "type": "object",
        "properties": {
          "itemDescription": {
            "description": "The description of the product, as defined in the product catalog..",
            "type": "String"
          },
          "productCode": {
            "description": "The sku/productCode of the device offer variant.",
            "type": "String"
          },
          "commodityCode": {
            "description": "The commodityCode of the device offer variant.",
            "type": "String"
          },
          "quantity": {
            "description": "The quantity of the product being ordered on this line.",
            "type": "integer",
            "format": "int32"
          },
          "unitPrice": {
            "description": "Price of each item.",
            "type": "number",
            "format": "double"
          },
          "unitOfMeasure": {
            "description": "The unit of measure of the product being ordered on this line.",
            "type": "String"
          },
          "itemDiscountAmount": {
            "description": "Discount on each item.",
            "type": "number",
            "format": "double"
          }
        }
      },
      "SalesContext": {
        "type": "object",
        "properties": {
          "operatorId": {
            "description": "To indicate the identifier of user/operator.",
            "type": "String"
          },
          "emailAddress": {
            "description": "Email Address.",
            "type": "String"
          },
          "ipAddress": {
            "description": "IP address where the order originated.",
            "type": "String"
          },
          "deviceFingerPrintId": {
            "description": "Device fingerprint id where the order originated.",
            "type": "String"
          }
        }
      },
      "AddressCore": {
        "type": "object",
        "properties": {
          "purposes": {
            "enum": [
              "BillTo",
              "ShipTo"
            ],
            "description": "The purpose or usage context for which address should be used.",
            "type": "String"
          },
          "addressLine1": {
            "description": "To indicate the  Address Line1.",
            "type": "String"
          },
          "addressLine2": {
            "description": "To indicate the Address Line2.",
            "type": "String"
          },
          "cityName": {
            "description": "To indicate the city name.",
            "type": "String"
          },
          "stateCode": {
            "description": "To indicate the state code.",
            "type": "String"
          },
          "zip": {
            "description": "To indicate the ZipCode.",
            "type": "String"
          },
          "countryCode": {
            "description": "To indicate the Country Code.",
            "type": "String"
          }
        }
      },
      "ShipTo": {
        "type": "object",
        "properties": {
          "ShippingContact": {
            "type": "object",
            "properties": {
              "personName": {
                "$ref": "#/definitions/PersonName"
              },
              "phoneNumber": {
                "description": "Customers phone number.",
                "type": "String"
              }
            }
          }
        }
      },
      "ShippingDetail": {
        "type": "object",
        "properties": {
          "shippingAddress": {
            "$ref": "#/definitions/ShippingAddress"
          },
          "shipTo": {
            "$ref": "#/definitions/ShipTo"
          },
          "shippingMethod": {
            "type": "String"
          },
          "shippingAmount": {
            "type": "number",
            "format": "double"
          },
          "discountAmount": {
            "type": "number",
            "format": "double"
          },
          "dutyAmount": {
            "type": "number",
            "format": "double"
          }
        }
      },
      "ShippingAddress": {
        "type": "object",
        "properties": {
          "AddressCore": {
            "$ref": "#/definitions/AddressCore"
          }
        }
      },
      "PersonName": {
        "type": "object",
        "properties": {
          "firstName": {
            "description": "The given name or first name of the person.",
            "type": "String"
          },
          "familyName": {
            "description": "The family name or surname or last name of the person.",
            "type": "String"
          }
        }
      },
      "DomainKey": {
        "type": "object",
        "properties": {
          "domainName": {
            "description": "Domain Name.",
            "type": "String"
          }
        }
      },
      "errors": {
        "description": "A collection of errors",
        "type": "array",
        "items": {
          "$ref": "#/definitions/ResponseError"
        }
      },
      "PaymentInstrument": {
        "type": "object",
        "properties": {
          "bankPayment": {
            "$ref": "#/definitions/BankPayment"
          },
          "paymentCard": {
            "$ref": "#/definitions/PaymentCard"
          },
          "chargeAccountNumberType": {
            "description": "The type of charge account number format.",
            "type": "String"
          }
        }
      },
      "PaymentsRequest": {
        "type": "object",
        "properties": {
          "applicationId": {
            "description": "Unique identification of a software application.",
            "type": "String"
          },
          "storeId": {
            "description": "Uniquely identifies a store location.",
            "type": "String"
          },
          "cardTypeIndicator": {
            "description": "Indicates which type of card data is being set.",
            "type": "String"
          },
          "terminalEntryMode": {
            "description": "Indicates how the account number was entered on the transaction at Point of Sale (POS).",
            "type": "String"
          },
          "chargeAccountNumberIndicator": {
            "description": "Form of card number being presented.AccountNumber,TemporaryToken,PermanentToken.",
            "type": "String"
          },
          "phoneNumber": {
            "description": "Customers phone number",
            "type": "String"
          },
          "MSISDN": {
            "description": "Mobile Subscriber Integrated Services Digital Network Number. A number uniquely identifying a subscription in a GSM or a UMTS mobile network. Simply put, it is the telephone number to the SIM card in a mobile/cellular phone.",
            "type": "String"
          },
          "accountDetail": {
            "$ref": "#/definitions/AccountDetail"
          },
          "postingDetails": {
            "$ref": "#/definitions/PostingDetails"
          },
          "salesInfo": {
            "$ref": "#/definitions/SalesInfo"
          },
          "postOrderRequest": {
            "$ref": "#/definitions/PostOrderRequest"
          },
          "payment": {
            "$ref": "#/definitions/Payment"
          },
          "customerReference": {
            "$ref": "#/definitions/CustomerReference"
          },
          "salesChannelReference": {
            "$ref": "#/definitions/SalesChannelReference"
          },
          "salesContext": {
            "$ref": "#/definitions/SalesContext"
          },
          "shippingDetail": {
            "$ref": "#/definitions/ShippingDetail"
          },
          "accountExtension": {
            "$ref": "#/definitions/AccountExtension"
          },
          "domainKey": {
            "$ref": "#/definitions/DomainKey"
          },
          "swipeData": {
            "$ref": "#/definitions/SwipeData"
          }
        }
      },
      "AutoPay": {
        "type": "object",
        "properties": {
          "autoPayAcceptance": {
            "description": "Customer acceptance of auto pay",
            "type": "String"
          },
          "assistingDept": {
            "description": "Department that assists the auto pay",
            "type": "String"
          },
          "discountTxnId": {
            "description": "Identifier of discount transaction given in the offer",
            "type": "String"
          },
          "unenrollReasonCode": {
            "description": "Reason code for unenrolling the auto pay.",
            "type": "String"
          }
        }
      },
      "PaymentsResponse": {
        "type": "object",
        "properties": {
          "fraudCheckStatusCode": {
            "description": "Short Code identifying the fraud check status.",
            "type": "boolean"
          },
          "transactionId": {
            "description": "Unique Id generated by payment Acquirer or issuer and used for other payments flow like void,refund etc.",
            "type": "String"
          },
          "customer": {
            "$ref": "#/definitions/Customer"
          },
          "reason": {
            "$ref": "#/definitions/Reason"
          },
          "statusBody": {
            "$ref": "#/definitions/StatusBody"
          },
          "status": {
            "$ref": "#/definitions/Status"
          },
          "paymentTransactionResponse": {
            "$ref": "#/definitions/PaymentTransactionResponse"
          },
          "postOrderResponse": {
            "$ref": "#/definitions/PostOrderResponse"
          },
          "payment": {
            "$ref": "#/definitions/Payment"
          },
          "paymentMethod": {
            "$ref": "#/definitions/PaymentMethod"
          }
        }
      },
      "ResponseError": {
        "description": "Used to pass error information in a response.",
        "type": "object",
        "properties": {
          "code": {
            "description": "Used to pass error codes",
            "type": "String"
          },
          "userMessage": {
            "description": "Use to pass human friendly information to the user.",
            "type": "String"
          },
          "systemMessage": {
            "description": "Used to pass system information.",
            "type": "String"
          }
        }
      }
    }
    this.arrayL = Object.keys(this.data).length;
  }

}
