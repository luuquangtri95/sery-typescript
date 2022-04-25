/**
 * enum
 *
 * - tập hơp các giá trị cùng nhóm
 * - dễ dàng quản lý và truy xuất
 * - sử dụng cho data 1 chiều
 */

/**
 * number enum có thể reverse mapping
 * Status[0] => PENDING
 * Status["DONE"] => 2
 */

enum StatusNetwork {
  PENDING, // 0
  IN_PROGRESS, // 1
  DONE, // 2
  CANCELLED, // 3
}

enum StatusNetwork2 {
  PENDING = 3, // 3
  IN_PROGRESS, // 4
  DONE, // 5
  CANCELLED, // 6
}

enum StatusNetwork3 {
  PENDING = 3, // 3
  IN_PROGRESS = 5, // 5
  DONE = 8, // 8
  CANCELLED = 10, // 10
}

// string enum: không reverse mapping đc, nên định nghĩa kiểu type union

//! không nên dùng kiểu này, vì enum đi 1 chiều
enum mediaType1 {
  JSON = "application/json",
  XML = "application/xml",
}

// todo: recommend
type mediaType = "application/json" | "application/xml";
