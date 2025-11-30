
## 🏷️ Tên nhóm
**Movie Recommender Team**
## 📝 Tên dự án
**Movie Recommender**

## 👥 Thành viên nhóm
| 👤 Họ và tên 🧑‍🎓 | 🆔 Mã sinh viên 🧾 | 🐙 Tên GitHub 🔗 |
|------------------|---------------------|---------------------|
| Trần Duy Anh | 23001828 | duyanhtr130905 |
| Phạm Hoàng Huy | 23001887 | justcoffeee |
| Hoàng Đức Huy | 23001884 | NilsNielsen |
| Hoàng Khánh An | 23001819 | AnHoang15 |
| Lê Thị Linh Chi | 23001836 | 23001836-pixel |

## 🗒️ Tóm tắt
Nâng cấp **Movie Recommendation System** có sẵn từ dạng console-based (dòng lệnh) thành một web application với giao diện đơn giản, tích hợp thuật toán gợi ý và thêm các tính năng tương tác cơ bản. Dự án tập trung vào việc tạo ra một sản phẩm demo hoàn chỉnh nhằm cải thiện trải nghiệm người dùng.

## 🎯 Bối cảnh
Dự án sử dụng nền tảng là một hệ thống gợi ý phim cơ bản viết bằng Python, hiện đang hoạt động trên command line với các thuật toán demographic, content-based và collaborative filtering.

**Vấn đề cần giải quyết và động lực:**
Hệ thống hiện tại gặp nhiều hạn chế ảnh hưởng đến trải nghiệm và hiệu quả:
* **Giao diện:** Chỉ chạy trên command line, thiếu giao diện trực quan cho người dùng phổ thông.
* **Hiệu suất:** Thuật toán còn cơ bản, độ chính xác (accuracy) chưa cao.
* **Trải nghiệm:** Thiếu tính năng tương tác (user interaction) và trải nghiệm người dùng (UX) kém.

## 🚀 Kế hoạch
Dự án được chia làm 4 giai đoạn chính:

* **Giai đoạn 1: Code Analysis & Setup**
    * Phân tích và hiểu rõ source code hiện tại.
    * Đánh giá hiệu năng và tìm điểm cần cải thiện.
    * Chốt công nghệ (Tech stack): Flask/Streamlit + HTML.
    * Thiết lập môi trường phát triển và cấu trúc dự án.

* **Giai đoạn 2: Core Development**
    * **Web Interface:** Xây dựng giao diện web đơn giản với Streamlit hoặc Flask.
    * **User Interaction:** Thêm tính năng cho phép người dùng nhập liệu và đánh giá (rating).
    * **Basic Features:** Phát triển tính năng lọc theo thể loại (genre) và tìm kiếm cơ bản.

* **Giai đoạn 3: Integration & Testing**
    * **System Integration:** Kết nối thuật toán gợi ý với giao diện web.
    * **Testing:** Kiểm thử toàn trình (End-to-end testing) và sửa lỗi.
    * **UI Polish:** Tinh chỉnh giao diện và cải thiện UX.


## 📚 Tài liệu tham khảo
**Datasets:**
* [TMDB 5000 Movie Dataset](https://www.kaggle.com/datasets/tmdb/tmdb-movie-metadata)
* [The Movies Dataset](https://www.kaggle.com/datasets/rounakbanik/the-movies-dataset)

**Libraries & Tools:**
* **Web Framework:** Streamlit
* **Recommendation Algorithms:** Surprise, Scikit-learn
