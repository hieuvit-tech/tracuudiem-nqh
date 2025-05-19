/* ==========================
   Cập nhật dữ liệu điểm thi
   Thay thế biến dataCsv bằng
   CSV mới nhất (SBD,HoTen,Toan,Van,Anh)
   ========================== */
const dataCsv = `
SBD,HoTen,Toan,Van,Anh
BĐ-000001,Trương Thành Châu,6.25,4.25,6
BĐ-000002,Nguyễn Quỳnh Như,6.25,5,6
BĐ-000003,Nguyễn Thị Như Quỳnh,6,6,6.75
BĐ-000004,Bùi Khánh Linh,4.25,5.25,7.75
BĐ-000005,Bùi Hải Anh,6.25,5.5,4.5
BĐ-000006,Nguyễn Huỳnh Hồng Phúc,6.5,4,6.5
BĐ-000007,Huỳnh Ngọc Mai Phương,3.5,4.25,5.25
BĐ-000008,Ngô Thanh Vy,4.25,4.75,5.5
BĐ-000009,Tô Ngọc Như Quỳnh,1.5,VẮNG,4.25
BĐ-000010,Nguyễn Thị Thảo Duy,VẮNG,VẮNG,VẮNG
BĐ-000011,Nguyễn Minh Hiếu,6.75,3.75,4.25
BĐ-000012,Hồ Quốc Khánh,3.75,4.5,4.75
BĐ-000013,Phan Thị Phụng Nghi,3.5,5.75,4.75
BĐ-000014,Nguyễn Ngọc Lan,4.5,5,5.75
BĐ-000015,Trần Hoàng Gia,5.25,6.5,5.5
BĐ-000016,Nguyễn Ngọc Thảo Nhi,2.75,5,2.25
BĐ-000017,Nguyễn Thái Bình,6.25,4,5
BĐ-000018,Đào Nhật Duy Khoa,4.25,5,5
BĐ-000019,Nguyễn Phùng Như Ý,6.75,4.75,4.25
BĐ-000020,Võ Đoàn Tiểu Long,6.75,3.5,7
BĐ-000021,Nguyễn Tấn Trung,7.25,6.5,7.5
BĐ-000022,Nguyễn Hữu Đăng Khoa ,4.25,5.25,5.75
BĐ-000023,Lê Doãn Hải Anh,2.25,3.5,3.25
BĐ-000024,Trần Tất Thành,6.5,5.5,8.25
BĐ-000025,Nguyễn Bình Nguyên ,6,6.25,6.75
BĐ-000026,Bùi Thị Anh Thư,5.25,3,4.75
BĐ-000027,Lê Hoàng Khánh Vy,2.5,5.5,4
BĐ-000028,Dương Thị Thanh An,6.5,5,7
BĐ-000029,Trương Nguyễn Đăng Khoa,6.5,6.5,4.5
BĐ-000030,Nguyễn Minh Quân,4,5,5.25
BĐ-000031,Trần Ngọc Huyền,4.5,5.5,5.25
BĐ-000032,Huỳnh Phi Long,6.75,3.75,4.5
BĐ-000033,Đỗ Hoàng Phúc Nguyên,4,3.75,6.25
BĐ-000034,Lê Quốc Huy,4.5,4.75,5.75
BĐ-000035,Vũ Huy Hoàng,2.75,1.75,4.75
BĐ-000036,Nguyễn Anh Tín,0.75,2.25,3
BĐ-000037,Đào Anh Kiệt,6.25,5,5
BĐ-000038,Nguyễn Tấn Duy,4.5,4.5,3
BĐ-000039,Nguyễn Thị Minh Thư,6,5.25,7.25
BĐ-000040,Trần Phạm Trúc Quân,4.75,5,2.75
BĐ-000041,Bùi Việt Tiến,4,4,2.25
BĐ-000042,Dương Phúc An,4.75,3,3.75
BĐ-000043,Trần Nguyễn Minh Quý,6.5,4.25,7.5
BĐ-000044,Nguyễn Nhật Tú Quyên,4.75,5,5.5
BĐ-000045,Lê Hoàng Tuấn,7.25,6,4.25
BĐ-000046,Nguyễn Trọng Phúc,3.75,4.5,4.25
BĐ-000047,Nguyễn Phạm Nhã Lam,6.75,VẮNG,6
BĐ-000048,Hoàng Mỹ Duyên,5,5.5,6
BĐ-000049,Trần Lê Gia Linh,3.5,3.5,2.5
BĐ-000050,Nguyễn Trần Thuỳ Linh,3.5,6.25,3.25
BĐ-000051,Lê Gia Vĩ,4.25,2.25,3.5
BĐ-000052,Nguyễn Hoàng Phương Linh,3.25,3.75,4.25
BĐ-000053,Nguyễn Võ Minh Phúc,2.5,3.5,5.25
BĐ-000054,Võ Nhất Thiên,1.75,2.75,2.75
BĐ-000055,Trần Dương Gia Thịnh,2,3.25,3.5
BĐ-000056,Nguyễn Mộng Hoài Bảo,2.75,3.5,2.5
BĐ-000057,Dương Mỹ Anh,4.25,3.75,4
BĐ-000058,Trần Phú Quý,7.75,6,6.5
BĐ-000059,Trần Nhã Đan,5.75,6.5,7
BĐ-000060,Nguyễn Nguyên Giáp,1.5,2.5,3.5
BĐ-000061,Ngô Quốc Hưng,3,4.5,4.5
BĐ-000062,Phạm Thanh Thuý,3.5,4,3
BĐ-000063,Lê Nguyễn Phương Trang,6,3.5,4
BĐ-000064,Võ Hoàng Phát,1.75,3.5,3
BĐ-000065,Mai Võ Phương Trinh ,6,6,5.75
BĐ-000066,Bùi Khánh Ngọc,VẮNG,5.5,6
BĐ-000067,Trương Huỳnh Gia An,5.25,4.5,4.25
BĐ-000068,Trần Nguyễn Bảo Châu,5.75,6,5.5
BĐ-000069,Đoàn Đào Bảo Ngọc,2.5,4.75,3.5
BĐ-000070,Đoàn Lê Thanh Lam,6,VẮNG,4.5
BĐ-000071,Trương Anh Trí,4.25,1.25,3.5
BĐ-000072,Nguyễn Hồng Quế,5.5,6.25,7.25
BĐ-000073,Vũ Minh Hiếu,1.5,2.5,3.25
BĐ-000074,Đào Võ Bình Nhi,6,5.25,5.5
BĐ-000075,Huỳnh Bách Gia Huy,7,4.5,7.25
BĐ-000076,Doãn Nguyễn Gia An,6.25,4.75,4.75
BĐ-000077,Phan Thanh Thủy,5,4.5,3.25
BĐ-000078,Đõ Xuân Linh,4,4.25,5.5
BĐ-000079,Đỗ Như Quỳnh,5.25,7,5
BĐ-000080,Lê Minh Thiện ,4,VẮNG,2.25
Q12NTD_001,Bùi Lê Phương Ngọc,5.5,3.25,6.5
Q12NTD_002,Trương Công Tân,5,2.25,5
Q12NTD_003,Bùi Gia Nguyên Khôi,5.25,2.5,2.5
Q12NTD_004,Trần Đỗ Duy Hưng,4,0.5,4
Q12NTD_005,Trần Ngọc Tú Quỳnh,4,4.25,3
Q12NTD_006,Lý Trần Ngọc Hân,3,2.25,4.5
Q12NTD_007,Trần Kim Diệp,5.5,4.5,7.75
Q12NTD_008,Nguyễn Yến Thanh,7,VẮNG,6
Q12NTD_009,Trần Quốc Đạt,7,2.25,5.5
Q12NTD_010,Nguyễn Ngọc Hoàng Quân ,7,5.25,7.75
Q12NTD_011,Đoàn Nguyễn Hoàng Long ,4.25,3.75,3.5
Q12NTD_012,Phan Lê Minh Anh ,4.75,VẮNG,4
Q12NTD_013,Trần Vĩnh Khang ,7.25,6.25,8.25
Q12NTD_014,Hoàng Minh Dũng ,8.25,5,7.5
Q12NTD_015,Nguyễn Lưu Ngọc Khánh ,VẮNG,VẮNG,VẮNG
Q12NTD_016,Phạm Phú Nhân ,5.5,3.5,4
Q12NTD_017,Nguyễn Ngọc Thành Danh,5.75,4.25,5.5
Q12NTD_018,Bùi Tiến Tài,8,4.25,7.5
Q12NTD_019,Trần Phạm Khánh Tâm,3.5,1.75,6.75
Q12NTD_020,Nguyễn Thanh Thảo Nhi,5.75,3.25,5.5
Q12NTD_021,Trương Tâm Băng,6.25,VẮNG,7
Q12NTD_022,Lưu Hoài Uyên Nhi,4.75,VẮNG,7
Q12NTD_023,Nguyễn Hoàng Đan Uyên,VẮNG,VẮNG,VẮNG
Q12NTD_024,Trịnh Lê Phương Trinh,3,5.25,3.5
Q12NTD_025,Phạm Nguyễn Nguyên Hưng,3.75,3,4.25
Q12NTD_026,Bùi Tấn Tài,6,2.75,2.75
Q12NTD_027,Đỗ Quỳnh Như,1.5,3,2.75
Q12NTD_028,Lương Trí Vỹ,7.25,VẮNG,8
Q12NTD_029,Bùi Nguyễn Cẩm Linh,7.25,2.75,8.25
Q12NTD_030,Nguyễn Mai Hoàng Oanh,3,3.25,4.5
Q12NTD_031,Phạm Hoàng Anh,2,1.75,2.5
Q12NTD_032,Phạm Mạnh Cường,3.75,2.5,6.5
Q12NTD_033,Trần Khánh Hưng,2.75,2.5,2.25
Q12NTD_034,Nguyễn Lê Nguyễn,1,2.25,3.5
Q12NTD_035,Trần Thị Trúc Ngân,1.5,1.5,1.75
Q12NTD_036,Dương Hoàng Đức,VẮNG,VẮNG,2.75
Q12NTD_037,Trương Thanh Vân,2,VẮNG,3.5
Q12NTD_038,Lương Thanh Thuý,VẮNG,VẮNG,2.25
Q12NTD_039,Trần Thị Kim Loan,3.75,4,3.75
Q12NTD_040,Nguyễn Ngọc Khánh Thy,VẮNG,VẮNG,2.75
Q12NTD_041,Lê Song Hoàng,4.5,VẮNG,3.5
Q12NTD_042,Trần Minh Tuấn,1.5,3,3.25
Q12NTD_043,Huỳnh Lệ Thục Uyên,3.5,3.5,3.25
Q12NTD_044,Cao Nhã Uyên,VẮNG,VẮNG,2
Q12NTD_045,Nguyễn Thị Minh Anh,4.5,2.75,4.5
Q12NTD_046,Đoàn Ngọc Bảo Trân,4.5,2,5.5
Q12NTD_047,Trần Mạnh Dũng,4.75,3,5.75
Q12NTD_048,Phạm Quốc Thắng ,3.5,VẮNG,4.25
Q12NTD_049,Trần Ngọc Linh,5.25,3.5,4.25
Q12NTD_050,Lê Đức Bình,4.25,4.25,4.25
Q12NTD_051,Nguyễn võ Mạnh Khôi,VẮNG,VẮNG,VẮNG
Q12NTD_052,Trang Hoàng Long,VẮNG,VẮNG,VẮNG
Q12NTD_053,Nguyễn Quý Khải,VẮNG,VẮNG,VẮNG
Q12NTD_054,Trần Trương Thành Nhân,6,3,4
Q12NTD_055,Trần Trúc Linh,1,3,2.75
Q12NTD_0125,Nguyễn Phương Thảo,5.75,3,3.25
Q12NTD_0128,Huỳnh Nguyễn Tường Vy,3,VẮNG,2.75
Q12NAT-000001,Phạm Vũ Nam Phương,8.5,5,6.75
Q12NAT-000002,Phạm Huy Hoàng,2.5,1.75,4.25
Q12NAT-000003,Vũ Lê Phương Anh,5.5,3.5,7
Q12NAT-000004,Đoàn Ngọc Huyền Mai,3.5,3,5.75
Q12NAT-000005,Đỗ Hoài Thương,6.75,4.75,5.75
Q12NAT-000006,Mai Thu Thảo,2,1.75,3.75
Q12NAT-000007,Phùng Thùy Trang,4.75,4.25,5
Q12NAT-000008,Trịnh Mạnh Đức,2.75,2.25,5.25
Q12NAT-000009,Nguyễn Khánh Duy,3.25,3.25,6
Q12NAT-000010,Trịnh Minh Thiện ,VẮNG,3.5,3.75
Q12NAT-000011,Nguyễn Duy Hoàng,6,3,6.5
Q12NAT-000012,Đinh Công Tuấn Khôi,3.25,2.25,5.25
Q12NAT-000013,Trần Ngọc Kim Ngân,5,4.25,5.5
Q12NAT-000014,Võ Thị Minh Nguyệt,5,4.25,7
Q12NAT-000015,Nguyễn Tuấn Đạt,6.5,3.25,2.25
Q12NAT-000016,Hồ Thiên Bảo,5.5,3,3.75
Q12NAT-000017,Võ Hoàng Minh Tiến,5,2.5,3.25
Q12NAT-000018,Lê Phương Anh Thư,6.75,2.25,4
Q12NAT-000019,Nguyễn Tùng Dương,6.25,4.5,6.25
Q12NAT-000020,Nguyễn Quốc Bảo,5.75,2.25,5.25
Q12NAT-000021,Vũ Huỳnh Quốc Bảo,4.5,VẮNG,3.5
Q12NAT-000022,Phạm Nguyễn Khánh Linh,6.5,2.25,3.5
Q12NAT-000023,Nguyễn Thị Mai Anh,3,2.5,5.5
Q12NAT-000024,Nguyễn Mạnh Kha,6.25,2.5,4.25
Q12NAT-000025,Phạm Ngô Tuấn khang,0.75,2.75,3.5
Q12NAT-000026,Đỗ Hữu Phi Long,5.5,2.75,4.5
Q12NAT-000027,Nguyễn Tấn Tài,6.75,4,4.75
Q12NAT-000028,Vũ Thị Hồng Thu,4.25,3.75,4.75
Q12NAT-000029,Nguyễn Gia Bảo,7,2.5,7.75
Q12NAT-000030,Lã Ngọc Yến,5.25,2.5,6.75
Q12NAT-000031,Nguyễn Sỹ Hoàng Anh,3.25,VẮNG,2.75
Q12NAT-000032,Ngô Bảo Ngọc,5,2.5,3
Q12NAT-000033,Dương Phạm Lan Anh,3.75,2,4
Q12NAT-000034,Phạm Gia Bảo,7,3.75,5
Q12NAT-000035,Hà Bảo Ngọc,2.25,1,2.75
Q12NAT-000036,Tôn Quốc Thịnh,3.75,1.25,2
Q12NAT-000037,Nguyễn Phương Anh,3.25,3.75,4.5
Q12NAT-000038,Nguyễn Hữu Nhân,4.5,3.25,5
Q12NAT-000039,Bạch Ngọc Mỹ Duyên,4.75,4.5,4.25
Q12NAT-000040,Nguyễn Tiến Minh Khang,7.25,2.5,5.25
Q12NAT-000041,Trần Nguyễn Vân Anh,6,4.75,6.5
Q12NAT-000042,Trần Hoàng Hồng Ân,4,2.75,3.75
Q12NAT-000043,Đào Ngọc Khánh Thy,4,5.25,2.25
Q12NAT-000044,Trần Hứa Phúc Vinh ,7,2.75,8
Q12NAT-000045,Lê Hoàng Minh Khôi,5.75,4,4.75
Q12NAT-000046,Nguyễn Lưu Ngọc Khánh,5.75,4.75,5.25
Q12NAT-000047,Đặng Ngọc Bảo Anh,3.25,VẮNG,3
Q12NAT-000048,Phạm Đăng Toàn,4,2,2.5
Q12NAT-000049,Nguyễn Anh Thư,3.75,1,5
Q12NAT-000050,Nguyễn Phương Kỳ Duyên,3.5,VẮNG,1.5
Q12NAT-000051,Trần Thị Khánh Linh,5,1.5,4
Q12NAT-000052,Nguyễn Võ Duy Thiện ,5,3.75,6
Q12NAT-000053,Phạm Bảo Anh,2.5,2,3.5
Q12NAT-000054,Trần Trương Kỳ Duyên,3.5,3,4
Q12NAT-000055,Phạm Xuân Kiên,6.25,3,4
Q12NAT-000056,Vũ Anh Thư,5.75,4.25,4.5
Q12NAT-000057,Nguyễn Đức Hải,3,1.5,VẮNG
Q12NAT-000058,Đỗ Lê Uyên Như,4.5,3.5,4.75
Q12NAT-000059,Nguyễn Thuý Quỳnh,4.5,1.75,2.25
Q12NAT-000060,Lê Ngọc Hân,2.75,VẮNG,3.5
Q12NAT-000061,Dương Ngọc Thanh Ngân,2.75,3.5,2.5
Q12NAT-000062,Lê Thiên Bảo,2.25,4.25,2.5
Q12NAT-000063,Nguyễn Ngô Lan Phương,5.25,4,3.75
Q12NAT-000064,Hồ Ánh Minh,4.25,3,5.3
Q12NAT-000065,Lê Tiến Đạt,5.75,3,3.5
Q12NAT-000066,Lưu Trần Khiết Quân,6,2.75,6
Q12NAT-000067,Diêu Bảo Trân,5.5,4,4.3
Q12NAT-000068,Thái Nguyễn Thanh Uyên,4,2.25,6
Q12NAT-000069,Bùi Anh Thư,8,VẮNG,5.3
Q12NAT-000070,Huỳnh Thiên Thanh,5.25,2,3.8
Q12NAT-000071,Đặng Minh Thu,7.75,3,7.3
Q12NAT-000072,Nguyễn Duy Nam Phong,7.25,2.25,6.8
Q12NAT-000073,Lê Phước Khang,4.75,3,5.3
Q12NAT-000074,Dương Khánh An,4,3.5,4.5
Q12NAT-000075,Vũ Minh Thư,5.25,3,5.25
Q12NAT-000076,Bùi Đức Long,8.75,3.75,7
Q12NAT-000077,Nguyễn Ngọc Minh Thùy,7.75,4.25,7
Q12NAT-000078,Nguyễn Hoàng Linh,4.75,3.25,5.3
Q12NAT-000079,Nguyễn Ngọc Tâm Như,5,VẮNG,3.3
Q12NAT-000080,Tạ Thiên Kiều,6.25,3.75,6
Q12NAT-000081,Nguyễn Quang Huy,5.25,2.5,7
Q12NAT-000082,Nguyễn Bình Minh,6,2.75,7.3
Q12NAT-000083,Phạm Nguyễn Hà Linh,2.75,1.75,5.75
Q12NAT-000084,Dương Gia Nghĩa,5.75,2.25,3.5
Q12NAT-000085,Bùi Nguyễn Phương Linh,3,3.25,6
Q12NAT-000086,Nguyễn Minh Toàn,4.75,3.5,5
Q12NAT-000087,Huỳnh Minh Phát,3,VẮNG,3.5
Q12NAT-000088,Nguyễn Phương Vy,4,2.5,5
Q12NAT-000089,Nguyễn Vũ Hoàng Quân,4.5,3.25,6.25
Q12NAT-000090,Huỳnh Mai Bảo Nhi,3.5,4.25,5.5
Q12NAT-000091,Đỗ Quốc Việt,4.25,3.25,3.75
Q12NAT-000092,Nguyễn Duy Lâm,VẮNG,VẮNG,7
Q12NAT-000093,Trần Nguyễn Vân Khánh,4,4,5.25
Q12NAT-000094,Nguyễn Công Huy,5.25,2.5,5.75
Q12NAT-000095,Nguyễn Ngọc Thanh Thảo,3.25,VẮNG,5
Q12NAT-000096,Nguyễn Khánh Vy,4.5,3,4.75
Q12NAT-000097,Đỗ Khánh Ngọc,3.25,VẮNG,5.75
Q12NAT-000098,Võ Minh Khang,4,1.5,5.5
Q12NAT-000099,Lê Thanh Bình,4.25,2.75,2.25
Q12NAT-000100,Bùi Thị Quỳnh Hoa,4.75,3.25,5.75
Q12NAT-000101,Phan Thanh Ngân,5.25,4,7
Q12NAT-000102,Nguyễn Thị Thanh Hạnh,2.5,1.25,3.75
Q12NAT-000103,Lê Trần Khánh Linh,7.5,3.25,6.25
Q12NAT-000104,Trần Kim Thành,7.25,2.75,5.25
Q12NAT-000105,Nguyễn Lê Bảo Ngọc,VẮNG,3.25,6.25
Q12NAT-000106,Nguyễn Thị Yến Linh,6.75,3.75,8.5
Q12NAT-000107,Nguyễn Thành Trung,2,KO CÓ BÀI,1.75
Q12NAT-000108,Tạ Thành Công,6.5,3.25,3
Q12NAT-000109,Trần Hoàng Khôi Nguyên,4.75,3,3.25
Q12NAT-000110,Nguyễn Hồng Vân,2.5,VẮNG,3.5
Q12NAT-000111,Trương Minh Nhật,5.75,VẮNG,8
Q12NAT-000112,Nguyễn Phương Quỳnh,2.25,VẮNG,5
Q12NAT-000113,Trần Minh Khang,2.25,2.5,4.5
Q12NAT-000114,Dương Thị Mai Hà,4.25,3.25,5.25
Q12NAT-000115,Nguyễn Ngọc Phương Vy,5.25,1.5,4.5
Q12NAT-000116,Trần Thị Phương Anh,6,VẮNG,5.25
Q12NAT-000117,Lê Hà Khánh Minh,4.5,3.25,5.5
Q12NAT-000118,Lê Minh Hoàng,6,4.75,8.5
Q12NAT-000119,Đỗ Phạm Yến Vy,2.5,VẮNG,4
Q12NAT-000120,Trần Mai Hiền,4.5,VẮNG,3.25
Q12NAT-000121,Nguyễn Đức Anh Quân,6.5,4,5.25
Q12NAT-000122,Hồ Thiên Ân,3.5,2.5,5
Q12NAT-000123,Trần Bảo Anh,1.75,VẮNG,2.75
Q12NAT-000124,Vũ Minh Ngọc,3.5,2,VẮNG
Q12NAT-000125,Nguyễn Phương Thảo,VẮNG,VẮNG,VẮNG
Q12NAT-000126,Lương Anh Thư,3,2.25,2
Q12NAT-000127,Nguyễn Lê Bảo Như,3.5,3.75,4
Q12NAT-000128,Huỳnh Nguyễn Tường Vy,VẮNG,VẮNG,VẮNG
Q12NAT-000129,Phan Hoàng Gia Huy,3,1.5,2.5
Q12NAT-000130,Trần Nguyễn Thủy Sinh,4.25,VẮNG,3.75
Q12NAT-000131,Phan Thiên Tú,6,VẮNG,3.25
Q12NAT-000132,Lê Bảo Trân,1.5,3.25,2.75
Q12NAT-000133,Phạm Ngọc Minh Anh,2,1.75,2.75
Q12NAT-000134,Trần Huyền Diệu,3.5,2,3.25
Q12NAT-000135,Đoàn Thiên Kim,6.25,4,7
Q12NAT-000136,Nguyễn Nam Thạch,VẮNG,VẮNG,7.5
Q12NAT-000137,Dương Ngọc Thùy Dung,6.75,3.75,4.75
Q12NAT-000138,Đỗ Ngọc Thảo,7.5,3,7.5
Q12NAT-000139,Lâm Duy Khoa,5.5,3,2.75
Q12NAT-000140,Lê Thị Hồng Thắm,2.25,1.75,4.25
Q12NAT-000141,Nguyễn Khánh Linh,3.75,3,3.25
Q12NAT-000142,Lê Minh Gia Hy,3.5,3,6.5
Q12NAT-000143,Võ Đinh Quán Siêu,4,2,5
Q12NAT-000144,Nguyễn Bùi Nhật Minh,6,VẮNG,3.75
Q12NAT-000145,Nguyễn Tấn Phát,4.5,1.75,5
Q12NAT-000146,Vũ Nguyễn Nhật Thương,1.25,VẮNG,3.75
Q12NAT-000147,Đoàn Ngọc Thanh Vy,2.75,VẮNG,3.25
Q12NAT-000144,Nguyễn Tuấn Hưng,3.25,VẮNG,4.25
Q12NAT-000147,Vũ Lê Quỳnh,2.75,1,5.75
Q12NAT-000034,Phạm Gia Bảo,3,3,5.75
HM-000001,Đỗ Hoài Bảo Thy,8.25,6,5.25
HM-000031,Hồ Trần Diệu My,6,4.75,4.75
HM-000032,Cao Thị Bích Ngọc,4.25,3.25,3.25
HM-000002,Đặng Ngô Phước Hải,4.75,4.5,4.5
HM-000033,Nguyễn Hoàng Bảo Nhi,4.25,5,4.5
HM-000003,Nguyễn Hoàng Huy,5,4.75,3.75
HM-000004,Vũ Văn Kiệt,2.5,4.5,2.75
HM-000005,Phạm Thị Ngọc Lan,5.5,6.25,6.5
HM-000006,Huỳnh Gia Huy,5,3,4.75
HM-000007,Nguyễn Lê Lin Đan,5,3,5.5
HM-000044,Trần Thanh,2.75,2.25,4.75
HM-000038,Huỳnh Lưu Bảo Ngọc,2.25,3.5,4
HM-000048,Nguyễn Ngọc Minh Anh,6.25,4,5.5
HM-000046,Phạm Bảo Quỳnh Như,5,4,2.75
HM-000026,Nguyễn Viết Bảo,6,4.75,4
HM-000008,Trần Khai Tâm,6.25,4.25,4
HM-000009,Trần Phạm Ngọc Linh,4.75,4.25,4.5
HM-000010,Trần Tài Dũng,2,1.5,2
HM-000011,Phạm Tuyết Ngân,5.25,4.25,3.75
HM-000039,Lê Gia Hân,3.75,3,3.5
HM-000045,Vũ Thị Minh Ngọc,4.25,5,6.3
HM-000036,Nguyễn Hoàng Trọng Nhân,4.75,2,3.25
HM-000037,Phạm Minh Quang,3,4,3.25
HM-000023,Trịnh Yến Nhi,2.75,3.75,5
HM-000047,Nguyễn Tấn Dư Phong,5.5,3.25,4.75
HM-000020,Trịnh Ngọc Quyên,1.5,4,4
HM-000012,Đặng Lê Hồng Phúc,3.75,4.75,4.25
HM-000013,Đặng Lê Minh Phúc,4.5,3.75,4
HM-000014,Hà Quang Hiếu,4,2.75,5
HM-000015,Trần Minh Khôi,4.25,4.75,5
HM-000034,Nguyễn Kim Oanh,5.75,3.5,2.25
HM-000035,Nguyễn Lê Thanh Ngân,5.5,4,3.5
HM-000024,Lê Nguyên Trung,7.25,5.5,5.75
HM-000025,Thái An Khôi,6.75,5.25,6
HM-000051,Lê Hiền Khánh Vân,2.75,3.5,4.3
HM-000018,Nguyễn Thanh Nhàn,6.25,3.75,5
HM-000041,Nguyễn Lê Bảo Thy,7,4.75,6.75
HM-000022,Nguyễn Yến Nhi ,6.25,4,5.75
HM-000021,Trần Minh Thư,5.75,3.5,6.75
HM-000017,Nguyễn Lê Song Thư,8.25,5.5,4.5
HM-000027,Lê Trần Khánh Ngọc,3.75,2.75,4
HM-000029,Vũ Quỳnh Như,2.5,3,3.25
HM-000019,Mai Thị Tuyết Nhi,7.25,4.75,6.75
HM-000030,Nguyễn Hoàng Khang,4.75,4.5,8
HM-000040,Trần Ngọc Khánh Vy,2.5,4,4.5
HM-000042,Trần Anh Tài,4.25,3.25,3.75
HM-000056,Bùi Ngọc Phương Nhi,2.25,3,4
HM-000053,Hoàng Gia Bảo,2.25,3.75,3.25
HM-000052,Pratt Nguyễn Tiểu My,3,5,5
HM-000054,Trịnh Kim Ngân,4,4.25,4.5
HM-000028,Lê Nguyễn Tuyết Trinh,3,4.25,4
HM-000016,Phạm Trương Quỳnh Anh,6,VẮNG,4.5
HM-000055,Nguyễn Ngọc Linh,4.25,3.25,4.25
HM-000050,Trương Nguyên Khang,2.25,4,4.25
HM-000049,Nguyễn Phúc Hậu,2.5,4.25,2.75
HM-000058,Nguyễn Việt Đức,4,3,3.25
HM-000059,Nguyễn Minh Minh,VẮNG,VẮNG,5
HM-000060,Nguyễn Thành Nhân,2.75,3.25,2.75
HM-000061,Trần Văn Minh Huy,3.75,VẮNG,4.25
HM-000062,Phạm Ngọc Thiên Tú,1.5,3.75,4
HM-000043,Nguyễn Thi Minh Trúc,1.5,3,2.5
HM-000057,Nguyễn Văn Chính,0,VẮNG,3.75
PN-000001,Dương Ngọc Bảo Trân,6,3.25,4.75
PN-000002,Trần Nhật Minh Châu,6.25,4,6.75
PN-000003,Nguyễn Ngọc Thuý Nga,7.5,3.5,6.75
PN-000004,Trần Mỹ Hảo,6.25,3,5.75
PN-000005,Trần Uyên Mi,7.5,3.25,6.75
PN-000006,Trương Hào,5.75,3.5,7.25
PN-000007,Vũ Minh Trí,6.75,3.5,6.25
PN-000008,Nguyễn Bảo Châu,5.5,3,6.25
PN-000009,Trần Tú Quỳnh,6.75,3.5,5
PN-000010,Trần Quang Phước,4.5,3.5,5.25
PN-000011,Hoàng Gia Bảo,1.25,2.25,VẮNG
PN-000012,Lê Gia Phú,2.5,3.5,3.75
PN-000013,Nguyễn Bảo Gia Nghi,6,3.25,5.25
PN-000014,Võ Uyên Phương,5,3,6.25
PN-000015,Thái Công Khang,6.5,4.25,8.25
PN-000016,Huỳnh Bảo Nhi,5.75,3.75,5.25
PN-000017,Đinh Thị Trúc Lam,6.5,3.5,5.75
PN-000018,Lại Gia Huy,2.5,VẮNG,VẮNG
PN-000019,Trịnh Khả Văn,4.75,3.5,5.75
PN-000020,Bùi Lê Minh Anh,4.5,3.25,6.5
PN-000021,Nguyễn Hoàng Minh,5.25,3.75,6
PN-000022,Nguyễn Nhật Minh,5.25,3.75,6.5
PN-000023,Trần Ngọc Yến Nhi,4.5,4,3.5
PN-000024,Phạm Trần An Mỹ,5.75,4.25,9
PN-000025,Trần Hà Lam,4.25,3.25,6.5
PN-000026,Trần Châu An Khánh,5.25,4.5,6.5
TĐ-000001,Nguyễn Hoàng Dũng,7,6,8
TĐ-000002,Vũ Ngọc Bảo Trân,6,6.5,6.25
TĐ-000003,Phan Dũng,5.25,5,6.75
TĐ-000004,Lương Quốc Quỳnh Anh,5,5.75,7.75
TĐ-000005,Nguyễn Thục Quyên,5.75,4.75,7
TĐ-000006,Lê Vy Bảo Trân,3.75,4,4
TĐ-000007,Đỗ Hoàng Ngọc Hà,3.25,6.5,5.25
TĐ-000008,Trần Thị Thiên Hoa,0,2,3.5
TĐ-000009,Hoàng Đỗ Gia Hân,VẮNG,5.75,4.5
TĐ-000010,Trương Nguyễn Bảo Lâm,6,5,7.75
TĐ-000011,Phạm Nguyễn Bảo Hân,5,6,6.75
TĐ-000012,Phạm Ngọc Thanh Vân,2.25,6,2.5
TĐ-000013,Đinh Trí Hoàng Minh,2.25,5,5.5
TĐ-000014,Lê Tấn Thịnh,6.5,4.25,6.75
TĐ-000015,Nguyễn Ánh Kiều Nhi,VẮNG,6.75,2.25
TĐ-000016,Lê Thị Kim Tiền,2.25,1,3.25
TĐ-000017,Trần Thị Hương,3.5,2.75,5
TĐ-000018,Vũ Lê Như Ngọc,5,6.25,6.25
TĐ-000019,Vũ Lê Khánh Ngọc,5.5,6.5,6.5
TĐ-000020,Nguyễn Cát Tường,4,5,5.25
TĐ-000021,Trần Thanh Nhật,2.25,3.5,6
TĐ-000022,Hoàng Vũ Duy Anh,5.25,4.75,4
TĐ-000023,Nguyễn Thùy Linh,5.75,4.25,7.5
TĐ-000024,Lương Hoàng Gia Phát,7.5,5,5.5
TĐ-000025,Lưu Tuấn Đạt,7,4.75,4.25
TĐ-000026,Nguyễn Thanh Nga,3,3,2.25
TĐ-000027,Phạm Lê Mỹ Uyên,5,5.75,8
TĐ-000028,Trần Ngọc Quỳnh Như,5.25,4.25,5.25
TĐ-000029,Võ Đặng Nhã Đan,2.25,2,2.25
TĐ-000030,Cao Thư Kỳ,5.25,5,7.25
TĐ-000031,Phạm Kỳ Phong,2.5,1.25,2.25
TĐ-000032,Dương Vũ Trâm Anh,4.25,3.5,6.25
TĐ-000033,Lê Đông Nhi,6.75,4.5,6
TĐ-000034,Nguyễn Chí Dũng,3,2.25,4
TĐ-000035,Lê Thị Linh Đan,5.25,2.75,4
TĐ-000036,Trần Hoàng Bảo Ngọc,5.25,2.75,5.25
TĐ-000037,Phạm Thành Khang,5.75,2.5,6.75
TĐ-000038,Đoàn Ngọc Bảo Châu,4.25,2,6.75
TĐ-000039,Lê Hoàng An,6.75,3.25,9.75
TĐ-000040,Nguyễn Thị Như Quyền,3.75,3.5,3.5
TĐ-000041,Trần Ngọc Châu,3,3.5,3.75
TĐ-000042,Khưu Huỳnh Anh,5.25,2.75,5.25
TĐ-000043,Phạm Minh Anh,5.25,VẮNG,3.75
TĐ-000044,Lê Kim Ngân,7,3.75,6.5
`;

function parseCsv(text) {
  const [header, ...rows] = text.trim().split(/\r?\n/).filter(Boolean);
  const keys = header.split(',');
  return rows.map(r => {
    const values = r.split(',');
    return keys.reduce((o, k, i) => { o[k] = values[i] ?? ''; return o; }, {});
  });
}

const DATA = parseCsv(dataCsv);

/* ---- hàm quy đổi: “VẮNG” | rỗng  → 0 ---- */
function scoreOrZero(raw) {
  if (!raw) return 0;                         // rỗng
  const val = raw.trim().toUpperCase();
  if (val === 'VẮNG' || val === 'VANG') return 0;
  const n = parseFloat(val.replace(',', '.'));
  return isNaN(n) ? 0 : n;
}

function renderTable(matches) {
  const tbody = document.querySelector('#resultTable tbody');
  tbody.innerHTML = '';
  matches.forEach(it => {
    const t = scoreOrZero(it.Toan);
    const v = scoreOrZero(it.Van);
    const a = scoreOrZero(it.Anh);
    const total = (t + v + a).toFixed(2);

    tbody.insertAdjacentHTML('beforeend', `
      <tr>
        <td>${it.SBD}</td>
        <td>${it.HoTen}</td>
        <td>${t}</td>
        <td>${v}</td>
        <td>${a}</td>
        <td><strong>${total}</strong></td>
      </tr>
    `);
  });
}

function doSearch() {
  const q = document.getElementById('searchInput').value.trim().toLowerCase();
  const matches = DATA.filter(item =>
    item.SBD.toLowerCase().includes(q) ||
    item.HoTen.toLowerCase().includes(q)
  );

  const table = document.getElementById('resultTable');
  const noRes = document.getElementById('noResult');

  if (matches.length) {
    renderTable(matches);
    table.classList.remove('hidden');
    noRes.classList.add('hidden');
  } else {
    table.classList.add('hidden');
    noRes.classList.remove('hidden');
  }
}

/* Sự kiện */
document.getElementById('searchBtn').addEventListener('click', doSearch);
document.getElementById('searchInput')
        .addEventListener('keyup', e => { if (e.key === 'Enter') doSearch(); });
