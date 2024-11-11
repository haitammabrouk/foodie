export interface FoodieResponse<T> {
  data: T,
  code: FoodieCodeResponse
}

enum FoodieCodeResponse {
  OK = 'OK', ACCEPTED = 'ACCEPTED', DECLINED = 'DECLINED'
}
