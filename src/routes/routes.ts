export enum ROUTE {
  HOME = "/pixema",
  FAVORITES = "favorites",
  ACCOUNT = "account",
  DETAILS = "details/:imdb",
  SIGN_IN = "sign-in",
  SIGN_UP = "sign-up",
  TRENDS = "trends",
  SEARCH = "search/:title",
  RECOMMENDATIONS = "../details/:imdb",
  DETAILS_TRENDS = "../details/:imdb",
  BACK_SIGN_UP = "../sign-up",
  BACK_SIGN_IN = "../sign-in",
  RESET_PASSWORD = "reset-password",
}