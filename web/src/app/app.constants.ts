export class Constants {
  // Global Settings
  public static APP_NAME = 'Montrer v0.1';
  public static APP_VERSION = '0.0.1';
  // public static GOOGLE_ANALYTICS_TRACK_ID='UA-33759313-6';
  // public static GOOGLE_MAPS_KEY='12345678';
  public static BASE_URL = '';

  //EndPoints
  public static API_METHOD_USERS = '/users';
  public static API_METHOD_PRODUCTS = '/products'
  public static API_METHOD_CATEGORIES = '/categories';
  public static API_METHOD_FILES = '/upload';
  public static API_METHOD_USERFIELDS = '/userFields';
  public static API_METHOD_BUYS = '/buys';
  public static API_METHOD_AUTONUMERICS = '/autonumerics';

  public static STORAGE = {
    user_id: 'user_id',
    user: 'user'
  }

  public static LOGGED;

  public static PROGRESS = {
    'enterprise': '',
    'cost': '',
    'expenditure': '',
    'type': '', // home form control
    'amountNumber': '', // home form control
    'amount': '', // home form control
    'capitalSocial': '', // for DYG
    'socios': '', // for DYG
    'name': '',
    'phone': '',
    'email': ''
  };

  public static USER_STORAGE = 'CAUCIONAR_USER';

  public static SHOOPING = []

  public static ACTUAL_USER = '';
  public static USER_ACTIVE = false;
  public static ACTUAL_CAUTION = '';
  public static ACTUAL_CAUTION_DYG = [];
  public static ACTUAL_ADUANA = ' - ';
  public static ACTUAL_DNI = '';
  public static NOSIS_RESPONSE_OK = true;

  ///
  public static fromHome = false;

}
