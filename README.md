# 🤖 Báo cáo Bài tập nhóm Môn Trí tuệ Nhân tạo

**📋 Thông tin:**

[Các thông tin này cũng cần được đưa vào báo cáo PDF và slide trình bày.]

* **📚 Môn học:** MAT3508 - Nhập môn Trí tuệ Nhân tạo  
* **📅 Học kỳ:** Học kỳ 1 - 2025-2026
* **🏫 Trường:** VNU-HUS (Đại học Quốc gia Hà Nội - Trường Đại học Khoa học Tự nhiên)  
* **📝 Tiêu đề:** Movie Recommender System  
* **📅 Ngày nộp:** 30/11/2025  
* **📄 Báo cáo PDF:** [Xem file PDF](LaTeX%20Template/Main.pdf)
* **🖥️ Slide thuyết trình:** 🖥️ [Liên kết tới slide thuyết trình trong kho lưu trữ này]  
* **📂 Kho lưu trữ:** 📁 https://github.com/duyanhtr130905/IntroAI-MiniProject-Group15

**👥 Thành viên nhóm:**

| 👤 Họ và tên      | 🆔 Mã sinh viên     | 🐙 Tên GitHub        | 🛠️ Đóng góp  |
|------------------|--------------------|----------------------|----------------------|
| Hoàng Khánh An      | 23001819          | AnHoang15           | dữ liệu và tiền xử lí         |
| Trần Duy Anh      | 23001828          | duyanhtr130905           | content-based filtering        |
| Lê Thị Linh Chi      | 23001836          | 23001836-pixel           | Kết quả và phân tích         |
| Hoàng Đức Huy      | 23001884          | NilsNielsen           | Giới thiệu và các nghiên cứu liên quan         |
| Phạm Hoàng Huy      | 23001887          | justcoffeee           | collaborative-filtering         |

---

## 📑 Tổng quan cấu trúc báo cáo

> ℹ️ **Lưu ý:** Báo cáo tập trung vào dự án Movie Recommender System sử dụng dataset TMDB-5000 với các phương pháp Content-Based và Collaborative Filtering.

### Chương 1: Giới thiệu

**📝 Tóm tắt dự án**
   - ✨ Xây dựng hệ thống gợi ý phim sử dụng TMDB-5000 dataset
   - ✨ Triển khai 7 algorithms: 4 Content-Based và 3 Collaborative Filtering
   - ✨ Đạt RMSE 1.234 (SVD), Diversity 0.687 (Hybrid CB)
   - ✨ Phát triển interactive demo application với React

**❓ Bài toán đặt ra**
   - 📌 Giải quyết vấn đề information overload trong việc chọn phim
   - 📌 So sánh hiệu quả giữa Content-Based và Collaborative Filtering
   - 📌 Đánh giá trade-offs giữa accuracy, diversity, novelty và speed

### Chương 2: Các nghiên cứu liên quan

**📚 Literature Review**
   - 🔍 Tổng quan về Recommender Systems (Ricci et al., 2015)
   - 🔍 Content-Based Filtering: TF-IDF, Cosine Similarity
   - 🔍 Collaborative Filtering: Matrix Factorization, Neighborhood methods
   - 🔍 Hybrid Approaches và Evaluation metrics

### Chương 3: Dữ liệu & Tiền xử lý

**💾 Dataset & Preprocessing**
   - 🧩 TMDB-5000: 4,772 phim (1916-2017)
   - 🧩 JSON parsing: genres, cast, crew, keywords
   - 🧩 Feature engineering: weighted_rating, decade, metadata
   - 🧩 EDA: Distribution, genre analysis, temporal trends, correlation

### Chương 4: Phương pháp & Triển khai

**⚙️ Phương pháp: Content-Based Filtering (4 methods)**
   - 🔹 Overview-based: TF-IDF trên plot summary
   - 🔹 Metadata-based: Genres + Cast + Director
   - 🔹 Hybrid: Weighted combination (0.6 × metadata + 0.4 × overview)
   - 🔹 Weighted: Hybrid + quality filtering

**⚙️ Phương pháp: Collaborative Filtering (3 methods)**
   - 🔹 SVD Matrix Factorization: k=50 latent factors
   - 🔹 User-Based CF: Cosine similarity, top-30 neighbors
   - 🔹 Item-Based CF: Item similarity matrix
   - 🔹 Synthetic ratings: 1,000 users, 54,823 ratings

**💻 Triển khai**
   - 🛠️ Python: scikit-learn, pandas, numpy
   - 🛠️ React Demo: Vite + Tailwind CSS + Lucide icons
   - 🛠️ Model persistence: .npy similarity matrices

### Chương 5: Kết quả & Phân tích

**📊 Evaluation Framework (5 dimensions)**
   - 📈 Accuracy: RMSE, MAE (Collaborative Filtering)
   - 📈 Diversity: Intra-List Diversity, Genre diversity
   - 📈 Coverage: Catalog coverage (73.8% best)
   - 📈 Novelty: Inverse popularity scores
   - 📈 Performance: Response time (<50ms)

**🔑 Key Findings**
   - 💡 SVD: Best accuracy (RMSE 1.234)
   - 💡 Hybrid CB: Best diversity (ILD 0.687)
   - 💡 SVD: Fastest (7.9ms)
   - 💡 Trade-offs: Accuracy vs Diversity clearly identified

### Chương 6: Kết luận

**✅ Achievements**
   - 🏆 7 recommendation algorithms successfully implemented
   - 🏆 Comprehensive evaluation across multiple metrics
   - 🏆 Interactive demo với 4 method comparison
   - 🏆 Full documentation: 40+ pages report

**🔭 Limitations & Future Work**
   - 🚧 Synthetic user ratings (not real behavior)
   - 🚧 No A/B testing với real users
   - 🚀 Future: Deep Learning (Neural CF), Context-aware RS

### Tài liệu tham khảo & Phụ lục

**📚 Tài liệu tham khảo chính**
   - 🔗 Ricci et al. (2015): Recommender Systems Handbook
   - 🔗 Koren et al. (2009): Matrix Factorization (Netflix Prize)
   - 🔗 Lops et al. (2011): Content-Based Survey
   - 🔗 Sarwar et al. (2001): Item-Based CF (Amazon)
   - 🔗 Burke (2002): Hybrid Systems
   - 🔗 Herlocker et al. (2004): Evaluation Metrics
   - 🔗 Pedregosa et al. (2011): Scikit-learn
   - 🔗 Kaggle (2017): TMDB-5000 Dataset

**📎 Phụ lục**
   - 📂 Cấu trúc source code (Python + React)
   - 📖 Hướng dẫn setup & chạy (pip install, npm run dev)
   - 🌐 Liên kết: GitHub repository, Dataset Kaggle

---

## 📝 Hướng dẫn nộp bài

### 📋 Yêu cầu

- **Định dạng:**  
   + 🖨️ Báo cáo phải được đánh máy, trình bày rõ ràng và xuất ra định dạng PDF (khuyến nghị dùng LaTeX).  
   + 🔁 Một bản báo cáo cần lưu trên kho GitHub của dự án, hai bản nộp trên Canvas (một cho giảng viên, một cho trợ giảng), và hai bản in (một cho giảng viên, một cho trợ giảng). Slide trình bày cũng thực hiện tương tự (không cần bản in slides).
- **Kho lưu trữ:** 📂 Bao gồm báo cáo PDF, slide, toàn bộ mã nguồn và tài liệu liên quan. Nếu vượt quá giới hạn dung lượng của GitHub, có thể tải lên Google Drive hoặc Dropbox và dẫn link trong tài liệu.
- **Làm việc nhóm:** 🤝 Cần ghi rõ đóng góp của từng thành viên trong nhóm.
- **Tài liệu hóa mã nguồn:**  
   + 🧾 Có bình luận giải thích rõ các thuật toán/phần logic phức tạp  
   + 🧪 Docstring cho hàm/phương thức mô tả tham số, giá trị trả về và mục đích  
   + 📘 File README cho từng module mã nguồn, hướng dẫn cài đặt và sử dụng  
   + 📝 Bình luận inline cho các đoạn mã không rõ ràng

### ✅ Danh sách kiểm tra trước khi nộp
- [X] ✅ Đánh dấu X vào ô để xác nhận hoàn thành  
- [x] ✍️ Điền đầy đủ các mục trong mẫu README này  
- [x] 📄 Hoàn thiện báo cáo PDF chi tiết theo cấu trúc trên  
- [x] 🎨 Tuân thủ định dạng và nội dung theo hướng dẫn giảng viên  
- [X] ➕ Thêm các mục riêng của dự án nếu cần  
- [X] 🔍 Kiểm tra lại ngữ pháp, diễn đạt và độ chính xác kỹ thuật  
- [X] ⬆️ Tải lên báo cáo PDF, slide trình bày và mã nguồn  
- [X] 🧩 Đảm bảo tất cả mã nguồn được tài liệu hóa đầy đủ với bình luận và docstring  
- [X] 🔗 Kiểm tra các liên kết và tài liệu tham khảo hoạt động đúng

### 🏆 Tiêu chí đánh giá Bài tập nhóm

Xem 📄 [Rubrics.md](Rubrics.md) để biết chi tiết về tiêu chí đánh giá bài tập nhóm, bao gồm điểm tối đa cho từng tiêu chí và mô tả các mức độ đánh giá (Xuất sắc, Tốt, Cần cải thiện).

### 📚 Liên kết hữu ích

- 📄 [Mẫu báo cáo](LaTeX%20Template/main-vi.tex) - Mẫu LaTeX để viết báo cáo  
- 📘 [Sổ tay dùng LaTeX](https://vietex.blog.fc2.com/blog-entry-516.html) - Hướng dẫn sử dụng LaTeX bằng tiếng Việt  
- 🔎 [Một số phương pháp tải bài báo khoa học](https://hoanganhduc.github.io/misc/m%E1%BB%99t-s%E1%BB%91-ph%C6%B0%C6%A1ng-ph%C3%A1p-t%E1%BA%A3i-b%C3%A0i-b%C3%A1o-khoa-h%E1%BB%8Dc/) - Hướng dẫn một số phương pháp tải bài báo khoa học  
- 📰 [AI Vietnam Blog](https://aivietnam.edu.vn/blog) - Blog với các bài viết về AI bằng tiếng Việt

