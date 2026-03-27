const vocabularyData = [
  {
    "chinese": "啊",
    "level": "A1",
    "pinyin": "ā",
    "part_of_speech": "P",
    "meaning": "a, à, á"
  },
  {
    "chinese": "愛",
    "level": "A1",
    "pinyin": "ài",
    "part_of_speech": "VS",
    "meaning": "yêu, thích"
  },
  {
    "chinese": "安靜",
    "level": "A1",
    "pinyin": "ānjìng",
    "part_of_speech": "VS",
    "meaning": "yên tĩnh"
  },
  {
    "chinese": "吧",
    "level": "A1",
    "pinyin": "ba",
    "part_of_speech": "P",
    "meaning": "nhé, hả?"
  },
  {
    "chinese": "八",
    "level": "A1",
    "pinyin": "bā",
    "part_of_speech": "Det",
    "meaning": "tám"
  },
  {
    "chinese": "把",
    "level": "A1",
    "pinyin": "bǎ",
    "part_of_speech": "Prep",
    "meaning": "trợ từ xử lý, cái ( dao, dù…)"
  },
  {
    "chinese": "爸爸",
    "level": "A1",
    "pinyin": "bàba",
    "part_of_speech": "N",
    "meaning": "cha"
  },
  {
    "chinese": "百",
    "level": "A1",
    "pinyin": "bǎi",
    "part_of_speech": "Det",
    "meaning": "trăm"
  },
  {
    "chinese": "百貨公司",
    "level": "A1",
    "pinyin": "bǎihuògōngsī",
    "part_of_speech": "N",
    "meaning": "Công ty bách hóa, TTTM"
  },
  {
    "chinese": "白色",
    "level": "A1",
    "pinyin": "báisè",
    "part_of_speech": "N",
    "meaning": "màu trắng"
  },
  {
    "chinese": "班",
    "level": "A1",
    "pinyin": "bān",
    "part_of_speech": "M",
    "meaning": "Chuyến ( xe, máy bay )"
  },
  {
    "chinese": "班",
    "level": "A1",
    "pinyin": "bān",
    "part_of_speech": "N",
    "meaning": "lớp"
  },
  {
    "chinese": "搬",
    "level": "A1",
    "pinyin": "bān",
    "part_of_speech": "VA",
    "meaning": "dời"
  },
  {
    "chinese": "半",
    "level": "A1",
    "pinyin": "bàn",
    "part_of_speech": "Det",
    "meaning": "nửa,rưỡi"
  },
  {
    "chinese": "幫",
    "level": "A1",
    "pinyin": "bāng",
    "part_of_speech": "VA",
    "meaning": "giúp"
  },
  {
    "chinese": "辦公室",
    "level": "A1",
    "pinyin": "bàngōngshì",
    "part_of_speech": "N",
    "meaning": "văn phòng"
  },
  {
    "chinese": "棒球",
    "level": "A1",
    "pinyin": "bàngqiú",
    "part_of_speech": "N",
    "meaning": "bóng chày"
  },
  {
    "chinese": "包子",
    "level": "A1",
    "pinyin": "bāozi",
    "part_of_speech": "N",
    "meaning": "bánh bao"
  },
  {
    "chinese": "報紙",
    "level": "A1",
    "pinyin": "bàozhǐ",
    "part_of_speech": "N",
    "meaning": "báo"
  },
  {
    "chinese": "杯",
    "level": "A1",
    "pinyin": "bēi",
    "part_of_speech": "M",
    "meaning": "ly"
  },
  {
    "chinese": "被",
    "level": "A1",
    "pinyin": "bèi",
    "part_of_speech": "Prep",
    "meaning": "bị, được"
  },
  {
    "chinese": "北邊",
    "level": "A1",
    "pinyin": "běi",
    "part_of_speech": "N",
    "meaning": "hướng Bắc"
  },
  {
    "chinese": "杯子",
    "level": "A1",
    "pinyin": "bēizi",
    "part_of_speech": "N",
    "meaning": "cái ly"
  },
  {
    "chinese": "本",
    "level": "A1",
    "pinyin": "běn",
    "part_of_speech": "M",
    "meaning": "cuốn"
  },
  {
    "chinese": "本子",
    "level": "A1",
    "pinyin": "běnzi",
    "part_of_speech": "N",
    "meaning": "tập"
  },
  {
    "chinese": "比",
    "level": "A1",
    "pinyin": "bǐ",
    "part_of_speech": "Prep",
    "meaning": "so sánh"
  },
  {
    "chinese": "筆",
    "level": "A1",
    "pinyin": "bǐ",
    "part_of_speech": "N",
    "meaning": "bút, viết"
  },
  {
    "chinese": "別的",
    "level": "A1",
    "pinyin": "biéde",
    "part_of_speech": "Det",
    "meaning": "cái khác"
  },
  {
    "chinese": "比較",
    "level": "A1",
    "pinyin": "bǐjiào",
    "part_of_speech": "Adv",
    "meaning": "khá là, …hơn"
  },
  {
    "chinese": "比賽",
    "level": "A1",
    "pinyin": "bǐsài",
    "part_of_speech": "N",
    "meaning": "trận đấu"
  },
  {
    "chinese": "比賽",
    "level": "A1",
    "pinyin": "bǐsài",
    "part_of_speech": "VA",
    "meaning": "thi đấu"
  },
  {
    "chinese": "不客氣",
    "level": "A1",
    "pinyin": "búkèqì",
    "part_of_speech": "Ptc",
    "meaning": "đừng khách sáo"
  },
  {
    "chinese": "不",
    "level": "A1",
    "pinyin": "bù",
    "part_of_speech": "Adv",
    "meaning": "đừng"
  },
  {
    "chinese": "不好意思",
    "level": "A1",
    "pinyin": "bùhǎoyìsi",
    "part_of_speech": "Vs",
    "meaning": "ngại"
  },
  {
    "chinese": "才",
    "level": "A1",
    "pinyin": "cái",
    "part_of_speech": "Adv",
    "meaning": "mới ( sớm )"
  },
  {
    "chinese": "菜",
    "level": "A1",
    "pinyin": "cài",
    "part_of_speech": "N",
    "meaning": "món ăn, rau"
  },
  {
    "chinese": "參加",
    "level": "A1",
    "pinyin": "cānjiā",
    "part_of_speech": "VA",
    "meaning": "tham gia"
  },
  {
    "chinese": "餐廳",
    "level": "A1",
    "pinyin": "cāntīng",
    "part_of_speech": "N",
    "meaning": "nhà hàng"
  },
  {
    "chinese": "茶",
    "level": "A1",
    "pinyin": "chá",
    "part_of_speech": "N",
    "meaning": "trà"
  },
  {
    "chinese": "長",
    "level": "A1",
    "pinyin": "cháng",
    "part_of_speech": "VS",
    "meaning": "dài"
  },
  {
    "chinese": "常常",
    "level": "A1",
    "pinyin": "chángcháng",
    "part_of_speech": "Adv",
    "meaning": "thường"
  },
  {
    "chinese": "唱歌",
    "level": "A1",
    "pinyin": "chànggē",
    "part_of_speech": "VA",
    "meaning": "ca hát"
  },
  {
    "chinese": "吵",
    "level": "A1",
    "pinyin": "chǎo",
    "part_of_speech": "VS",
    "meaning": "ồn, làm ồn"
  },
  {
    "chinese": "車(子)",
    "level": "A1",
    "pinyin": "chē(zi)",
    "part_of_speech": "N",
    "meaning": "xe"
  },
  {
    "chinese": "車站",
    "level": "A1",
    "pinyin": "chēzhàn",
    "part_of_speech": "N",
    "meaning": "trạm xe"
  },
  {
    "chinese": "成績",
    "level": "A1",
    "pinyin": "chéngjī",
    "part_of_speech": "N",
    "meaning": "thành tích"
  },
  {
    "chinese": "吃",
    "level": "A1",
    "pinyin": "chī",
    "part_of_speech": "VA",
    "meaning": "ăn"
  },
  {
    "chinese": "吃飽",
    "level": "A1",
    "pinyin": "chībǎo",
    "part_of_speech": "VS",
    "meaning": "ăn no"
  },
  {
    "chinese": "吃飯",
    "level": "A1",
    "pinyin": "chīfàn",
    "part_of_speech": "VA",
    "meaning": "ăn cơm"
  },
  {
    "chinese": "穿",
    "level": "A1",
    "pinyin": "chuān",
    "part_of_speech": "VA",
    "meaning": "mặc"
  },
  {
    "chinese": "船",
    "level": "A1",
    "pinyin": "chuán",
    "part_of_speech": "N",
    "meaning": "thuyền"
  },
  {
    "chinese": "窗",
    "level": "A1",
    "pinyin": "chuāng",
    "part_of_speech": "N",
    "meaning": "cửa sổ"
  },
  {
    "chinese": "床",
    "level": "A1",
    "pinyin": "chuáng",
    "part_of_speech": "N",
    "meaning": "giường"
  },
  {
    "chinese": "廚房",
    "level": "A1",
    "pinyin": "chúfáng",
    "part_of_speech": "N",
    "meaning": "nhà bếp"
  },
  {
    "chinese": "出國",
    "level": "A1",
    "pinyin": "chūguó",
    "part_of_speech": "VA",
    "meaning": "đi nước ngoài"
  },
  {
    "chinese": "出來",
    "level": "A1",
    "pinyin": "chūlái",
    "part_of_speech": "VA",
    "meaning": "ra"
  },
  {
    "chinese": "出去",
    "level": "A1",
    "pinyin": "chūqù",
    "part_of_speech": "VA",
    "meaning": "đi ra"
  },
  {
    "chinese": "春天",
    "level": "A1",
    "pinyin": "chūntiān",
    "part_of_speech": "N",
    "meaning": "mùa xuân"
  },
  {
    "chinese": "次",
    "level": "A1",
    "pinyin": "cì",
    "part_of_speech": "M",
    "meaning": "lần"
  },
  {
    "chinese": "從",
    "level": "A1",
    "pinyin": "cóng",
    "part_of_speech": "Prep",
    "meaning": "từ"
  },
  {
    "chinese": "錯",
    "level": "A1",
    "pinyin": "cuò",
    "part_of_speech": "VS",
    "meaning": "sai, nhầm"
  },
  {
    "chinese": "打",
    "level": "A1",
    "pinyin": "dǎ",
    "part_of_speech": "VA",
    "meaning": "đánh"
  },
  {
    "chinese": "打電話",
    "level": "A1",
    "pinyin": "dǎdiànhuà",
    "part_of_speech": "VA",
    "meaning": "gọi điện thoại"
  },
  {
    "chinese": "打開",
    "level": "A1",
    "pinyin": "dǎkāi",
    "part_of_speech": "VA",
    "meaning": "mở ra"
  },
  {
    "chinese": "大",
    "level": "A1",
    "pinyin": "dà",
    "part_of_speech": "VS",
    "meaning": "lớn"
  },
  {
    "chinese": "大家",
    "level": "A1",
    "pinyin": "dàjiā",
    "part_of_speech": "N",
    "meaning": "mọi người"
  },
  {
    "chinese": "大樓",
    "level": "A1",
    "pinyin": "dàlóu",
    "part_of_speech": "N",
    "meaning": "nhà lầu"
  },
  {
    "chinese": "大樓",
    "level": "A1",
    "pinyin": "dàngāo",
    "part_of_speech": "N",
    "meaning": "bánh kem"
  },
  {
    "chinese": "當然",
    "level": "A1",
    "pinyin": "dāngrán",
    "part_of_speech": "Adv",
    "meaning": "đương nhiên"
  },
  {
    "chinese": "到",
    "level": "A1",
    "pinyin": "dào",
    "part_of_speech": "VA",
    "meaning": "đến, tới"
  },
  {
    "chinese": "大學",
    "level": "A1",
    "pinyin": "dàxué",
    "part_of_speech": "N",
    "meaning": "đại học"
  },
  {
    "chinese": "的",
    "level": "A1",
    "pinyin": "de",
    "part_of_speech": "P",
    "meaning": "trợ từ sở hữu, nhấn mạnh"
  },
  {
    "chinese": "得",
    "level": "A1",
    "pinyin": "de",
    "part_of_speech": "P",
    "meaning": "trợ từ bổ ngữ trình độ"
  },
  {
    "chinese": "等",
    "level": "A1",
    "pinyin": "děng",
    "part_of_speech": "VA",
    "meaning": "chờ, đợi"
  },
  {
    "chinese": "第",
    "level": "A1",
    "pinyin": "dì",
    "part_of_speech": "Det",
    "meaning": "thứ tự"
  },
  {
    "chinese": "點(鐘)",
    "level": "A1",
    "pinyin": "diǎn(zhōng)",
    "part_of_speech": "M",
    "meaning": "Giờ, điểm"
  },
  {
    "chinese": "電話",
    "level": "A1",
    "pinyin": "diànhuà",
    "part_of_speech": "N",
    "meaning": "điện thoại"
  },
  {
    "chinese": "電腦",
    "level": "A1",
    "pinyin": "diànnǎo",
    "part_of_speech": "N",
    "meaning": "máy vi tính"
  },
  {
    "chinese": "電視(機)",
    "level": "A1",
    "pinyin": "diànshì(jī)",
    "part_of_speech": "N",
    "meaning": "Tivi"
  },
  {
    "chinese": "電影",
    "level": "A1",
    "pinyin": "diànyǐng",
    "part_of_speech": "N",
    "meaning": "phim"
  },
  {
    "chinese": "電影院",
    "level": "A1",
    "pinyin": "diànyǐngyuàn",
    "part_of_speech": "N",
    "meaning": "rạp chiếu phim"
  },
  {
    "chinese": "弟弟",
    "level": "A1",
    "pinyin": "dìdi",
    "part_of_speech": "N",
    "meaning": "em trai"
  },
  {
    "chinese": "地方",
    "level": "A1",
    "pinyin": "dìfāng",
    "part_of_speech": "N",
    "meaning": "nơi"
  },
  {
    "chinese": "地上",
    "level": "A1",
    "pinyin": "dìshàng",
    "part_of_speech": "N",
    "meaning": "dưới đất, trên mặt đất"
  },
  {
    "chinese": "地圖",
    "level": "A1",
    "pinyin": "dìtú",
    "part_of_speech": "N",
    "meaning": "bản đồ"
  },
  {
    "chinese": "東邊",
    "level": "A1",
    "pinyin": "dōngbiān",
    "part_of_speech": "N",
    "meaning": "hướng Đông"
  },
  {
    "chinese": "冬天",
    "level": "A1",
    "pinyin": "dōngtiān",
    "part_of_speech": "N",
    "meaning": "mùa đông"
  },
  {
    "chinese": "東西",
    "level": "A1",
    "pinyin": "dōngxī",
    "part_of_speech": "N",
    "meaning": "đồ"
  },
  {
    "chinese": "懂",
    "level": "A1",
    "pinyin": "dǒng",
    "part_of_speech": "VS",
    "meaning": "hiểu"
  },
  {
    "chinese": "都",
    "level": "A1",
    "pinyin": "dōu",
    "part_of_speech": "Adv",
    "meaning": "đều"
  },
  {
    "chinese": "對",
    "level": "A1",
    "pinyin": "duì",
    "part_of_speech": "VS",
    "meaning": "đúng, đối với"
  },
  {
    "chinese": "對不起",
    "level": "A1",
    "pinyin": "duìbùqǐ",
    "part_of_speech": "Vs",
    "meaning": "xin lỗi"
  },
  {
    "chinese": "對面",
    "level": "A1",
    "pinyin": "duìmiàn",
    "part_of_speech": "N",
    "meaning": "đối diện"
  },
  {
    "chinese": "多",
    "level": "A1",
    "pinyin": "duō",
    "part_of_speech": "Adv",
    "meaning": "nhiều lên"
  },
  {
    "chinese": "多",
    "level": "A1",
    "pinyin": "duō",
    "part_of_speech": "VS",
    "meaning": "nhiều"
  },
  {
    "chinese": "多少",
    "level": "A1",
    "pinyin": "duōshǎo",
    "part_of_speech": "Adv",
    "meaning": "bao nhiêu"
  },
  {
    "chinese": "肚子",
    "level": "A1",
    "pinyin": "dùzǐ",
    "part_of_speech": "N",
    "meaning": "bụng"
  },
  {
    "chinese": "餓",
    "level": "A1",
    "pinyin": "è",
    "part_of_speech": "VS",
    "meaning": "đói"
  },
  {
    "chinese": "二",
    "level": "A1",
    "pinyin": "èr",
    "part_of_speech": "Det",
    "meaning": "hai"
  },
  {
    "chinese": "兒子",
    "level": "A1",
    "pinyin": "érzi",
    "part_of_speech": "N",
    "meaning": "con trai ( của ai )"
  },
  {
    "chinese": "飯",
    "level": "A1",
    "pinyin": "fàn",
    "part_of_speech": "N",
    "meaning": "cơm, bữa ăn"
  },
  {
    "chinese": "放",
    "level": "A1",
    "pinyin": "fàng",
    "part_of_speech": "VA",
    "meaning": "để, đặt"
  },
  {
    "chinese": "方便",
    "level": "A1",
    "pinyin": "fāngbiàn",
    "part_of_speech": "VS",
    "meaning": "tiện lợi"
  },
  {
    "chinese": "房間",
    "level": "A1",
    "pinyin": "fángjiān",
    "part_of_speech": "N",
    "meaning": "phòng"
  },
  {
    "chinese": "房子",
    "level": "A1",
    "pinyin": "fángzi",
    "part_of_speech": "N",
    "meaning": "nhà"
  },
  {
    "chinese": "非常",
    "level": "A1",
    "pinyin": "fēicháng",
    "part_of_speech": "Adv",
    "meaning": "vô cùng"
  },
  {
    "chinese": "飛機",
    "level": "A1",
    "pinyin": "fēijī",
    "part_of_speech": "N",
    "meaning": "máy bay"
  },
  {
    "chinese": "機場",
    "level": "A1",
    "pinyin": "jīchǎng",
    "part_of_speech": "N",
    "meaning": "sân bay"
  },
  {
    "chinese": "分鐘",
    "level": "A1",
    "pinyin": "fēnzhōng",
    "part_of_speech": "M",
    "meaning": "phút"
  },
  {
    "chinese": "封",
    "level": "A1",
    "pinyin": "fēng",
    "part_of_speech": "M",
    "meaning": "bức ( thư )"
  },
  {
    "chinese": "風景",
    "level": "A1",
    "pinyin": "fēngjǐng",
    "part_of_speech": "N",
    "meaning": "phong cảnh"
  },
  {
    "chinese": "乾淨",
    "level": "A1",
    "pinyin": "gānjìng",
    "part_of_speech": "VS",
    "meaning": "sạch sẽ"
  },
  {
    "chinese": "感冒",
    "level": "A1",
    "pinyin": "gǎnmào",
    "part_of_speech": "VS",
    "meaning": "cảm"
  },
  {
    "chinese": "高",
    "level": "A1",
    "pinyin": "gāo",
    "part_of_speech": "VS",
    "meaning": "cao"
  },
  {
    "chinese": "高興",
    "level": "A1",
    "pinyin": "gāoxìng",
    "part_of_speech": "VS",
    "meaning": "vui"
  },
  {
    "chinese": "告訴",
    "level": "A1",
    "pinyin": "gàosù",
    "part_of_speech": "VA",
    "meaning": "nói cho biết"
  },
  {
    "chinese": "個",
    "level": "A1",
    "pinyin": "gè",
    "part_of_speech": "M",
    "meaning": "lượng từ: cái, người…"
  },
  {
    "chinese": "哥哥",
    "level": "A1",
    "pinyin": "gēge",
    "part_of_speech": "N",
    "meaning": "anh trai"
  },
  {
    "chinese": "給",
    "level": "A1",
    "pinyin": "gěi",
    "part_of_speech": "VA",
    "meaning": "cho"
  },
  {
    "chinese": "跟",
    "level": "A1",
    "pinyin": "gēn",
    "part_of_speech": "Conj",
    "meaning": "cùng, và"
  },
  {
    "chinese": "更",
    "level": "A1",
    "pinyin": "gèng",
    "part_of_speech": "Adv",
    "meaning": "còn…hơn nữa"
  },
  {
    "chinese": "公共汽車",
    "level": "A1",
    "pinyin": "gōnggòng",
    "part_of_speech": "N",
    "meaning": "xe buýt"
  },
  {
    "chinese": "功課",
    "level": "A1",
    "pinyin": "gōngkè",
    "part_of_speech": "N",
    "meaning": "bài tập về nhà, học hành"
  },
  {
    "chinese": "公司",
    "level": "A1",
    "pinyin": "gōngsī",
    "part_of_speech": "N",
    "meaning": "công ty"
  },
  {
    "chinese": "公寓",
    "level": "A1",
    "pinyin": "gōngyù",
    "part_of_speech": "N",
    "meaning": "chung cư"
  },
  {
    "chinese": "公園",
    "level": "A1",
    "pinyin": "gōngyuán",
    "part_of_speech": "N",
    "meaning": "công viên"
  },
  {
    "chinese": "工作",
    "level": "A1",
    "pinyin": "gōngzuò",
    "part_of_speech": "N",
    "meaning": "công việc"
  },
  {
    "chinese": "狗",
    "level": "A1",
    "pinyin": "gǒu",
    "part_of_speech": "N",
    "meaning": "chó"
  },
  {
    "chinese": "關",
    "level": "A1",
    "pinyin": "guān",
    "part_of_speech": "VA",
    "meaning": "đóng"
  },
  {
    "chinese": "貴",
    "level": "A1",
    "pinyin": "guì",
    "part_of_speech": "VS",
    "meaning": "mắc tiền"
  },
  {
    "chinese": "過",
    "level": "A1",
    "pinyin": "guò",
    "part_of_speech": "P",
    "meaning": "…qua"
  },
  {
    "chinese": "過",
    "level": "A1",
    "pinyin": "guò",
    "part_of_speech": "VA",
    "meaning": "đi qua"
  },
  {
    "chinese": "國家",
    "level": "A1",
    "pinyin": "guójiā",
    "part_of_speech": "N",
    "meaning": "nước, đất nước"
  },
  {
    "chinese": "孩子",
    "level": "A1",
    "pinyin": "háizi",
    "part_of_speech": "N",
    "meaning": "con, trẻ"
  },
  {
    "chinese": "海邊",
    "level": "A1",
    "pinyin": "hǎibiān",
    "part_of_speech": "N",
    "meaning": "bãi biển"
  },
  {
    "chinese": "還是",
    "level": "A1",
    "pinyin": "háishì",
    "part_of_speech": "Conj",
    "meaning": "hay là"
  },
  {
    "chinese": "寒假",
    "level": "A1",
    "pinyin": "hánjià",
    "part_of_speech": "N",
    "meaning": "nghỉ đông"
  },
  {
    "chinese": "好",
    "level": "A1",
    "pinyin": "hǎo",
    "part_of_speech": "Adv",
    "meaning": "rất"
  },
  {
    "chinese": "好",
    "level": "A1",
    "pinyin": "hǎo",
    "part_of_speech": "VS",
    "meaning": "tốt"
  },
  {
    "chinese": "好吃",
    "level": "A1",
    "pinyin": "hǎochī",
    "part_of_speech": "VS",
    "meaning": "ăn ngon"
  },
  {
    "chinese": "好像",
    "level": "A1",
    "pinyin": "hǎoxiàng",
    "part_of_speech": "Adv",
    "meaning": "hình như"
  },
  {
    "chinese": "好玩",
    "level": "A1",
    "pinyin": "hǎowán",
    "part_of_speech": "VS",
    "meaning": "chơi vui"
  },
  {
    "chinese": "號",
    "level": "A1",
    "pinyin": "hào",
    "part_of_speech": "M",
    "meaning": "số, ngày"
  },
  {
    "chinese": "號碼",
    "level": "A1",
    "pinyin": "hàomǎ",
    "part_of_speech": "N",
    "meaning": "số"
  },
  {
    "chinese": "喝",
    "level": "A1",
    "pinyin": "hē",
    "part_of_speech": "VA",
    "meaning": "uống"
  },
  {
    "chinese": "和",
    "level": "A1",
    "pinyin": "hé",
    "part_of_speech": "Conj",
    "meaning": "và"
  },
  {
    "chinese": "很",
    "level": "A1",
    "pinyin": "hěn",
    "part_of_speech": "Adv",
    "meaning": "rất"
  },
  {
    "chinese": "紅色",
    "level": "A1",
    "pinyin": "hóngsè",
    "part_of_speech": "N",
    "meaning": "màu đỏ"
  },
  {
    "chinese": "後面",
    "level": "A1",
    "pinyin": "hòumiàn",
    "part_of_speech": "N",
    "meaning": "phía sau"
  },
  {
    "chinese": "花(兒)",
    "level": "A1",
    "pinyin": "huā(er)",
    "part_of_speech": "N",
    "meaning": "bông hoa"
  },
  {
    "chinese": "畫",
    "level": "A1",
    "pinyin": "huà",
    "part_of_speech": "N",
    "meaning": "tranh"
  },
  {
    "chinese": "畫畫",
    "level": "A1",
    "pinyin": "Huà",
    "part_of_speech": "VA",
    "meaning": "vẽ tranh"
  },
  {
    "chinese": "壞",
    "level": "A1",
    "pinyin": "huài",
    "part_of_speech": "VS",
    "meaning": "xấu, hư"
  },
  {
    "chinese": "換",
    "level": "A1",
    "pinyin": "huàn",
    "part_of_speech": "VA",
    "meaning": "đổi"
  },
  {
    "chinese": "黃色",
    "level": "A1",
    "pinyin": "huángsè",
    "part_of_speech": "N",
    "meaning": "màu vàng"
  },
  {
    "chinese": "歡迎",
    "level": "A1",
    "pinyin": "huānyíng",
    "part_of_speech": "VS",
    "meaning": "hoan nghênh"
  },
  {
    "chinese": "華語/華文",
    "level": "A1",
    "pinyin": "huáyǔ",
    "part_of_speech": "N",
    "meaning": "tiếng Hoa"
  },
  {
    "chinese": "回家",
    "level": "A1",
    "pinyin": "huíjiā",
    "part_of_speech": "VA",
    "meaning": "về nhà"
  },
  {
    "chinese": "回來",
    "level": "A1",
    "pinyin": "huílái",
    "part_of_speech": "VA",
    "meaning": "quay lại"
  },
  {
    "chinese": "回去",
    "level": "A1",
    "pinyin": "huíqù",
    "part_of_speech": "VA",
    "meaning": "đi về"
  },
  {
    "chinese": "會",
    "level": "A1",
    "pinyin": "huì",
    "part_of_speech": "VS",
    "meaning": "biết, sẽ"
  },
  {
    "chinese": "活動",
    "level": "A1",
    "pinyin": "huódòng",
    "part_of_speech": "N",
    "meaning": "hoạt động, chương trình"
  },
  {
    "chinese": "火車",
    "level": "A1",
    "pinyin": "huǒchē",
    "part_of_speech": "N",
    "meaning": "xe lửa"
  },
  {
    "chinese": "幾",
    "level": "A1",
    "pinyin": "jǐ",
    "part_of_speech": "Det",
    "meaning": "mấy, vài"
  },
  {
    "chinese": "寄",
    "level": "A1",
    "pinyin": "jì",
    "part_of_speech": "VA",
    "meaning": "gửi"
  },
  {
    "chinese": "加",
    "level": "A1",
    "pinyin": "jiā",
    "part_of_speech": "VA",
    "meaning": "thêm, cộng"
  },
  {
    "chinese": "家",
    "level": "A1",
    "pinyin": "jiā",
    "part_of_speech": "N",
    "meaning": "nhà, gia đình"
  },
  {
    "chinese": "家人",
    "level": "A1",
    "pinyin": "jiārén",
    "part_of_speech": "N",
    "meaning": "người nhà"
  },
  {
    "chinese": "間",
    "level": "A1",
    "pinyin": "jiān",
    "part_of_speech": "M",
    "meaning": "căn ( phòng )"
  },
  {
    "chinese": "件",
    "level": "A1",
    "pinyin": "jiàn",
    "part_of_speech": "M",
    "meaning": "chiếc ( áo )"
  },
  {
    "chinese": "健康",
    "level": "A1",
    "pinyin": "jiànkāng",
    "part_of_speech": "VS",
    "meaning": "khỏe mạnh"
  },
  {
    "chinese": "見面",
    "level": "A1",
    "pinyin": "jiànmiàn",
    "part_of_speech": "VA",
    "meaning": "gặp mặt"
  },
  {
    "chinese": "腳",
    "level": "A1",
    "pinyin": "jiǎo",
    "part_of_speech": "N",
    "meaning": "chân"
  },
  {
    "chinese": "腳踏車",
    "level": "A1",
    "pinyin": "jiǎotàchē",
    "part_of_speech": "N",
    "meaning": "xe đạp"
  },
  {
    "chinese": "叫",
    "level": "A1",
    "pinyin": "jiào",
    "part_of_speech": "VA",
    "meaning": "tên là, được gọi là"
  },
  {
    "chinese": "教室",
    "level": "A1",
    "pinyin": "jiàoshì",
    "part_of_speech": "N",
    "meaning": "phòng học"
  },
  {
    "chinese": "記得",
    "level": "A1",
    "pinyin": "jìdé",
    "part_of_speech": "VS",
    "meaning": "nhớ"
  },
  {
    "chinese": "接",
    "level": "A1",
    "pinyin": "jiē",
    "part_of_speech": "VA",
    "meaning": "đón"
  },
  {
    "chinese": "結束",
    "level": "A1",
    "pinyin": "jiéshù",
    "part_of_speech": "VS",
    "meaning": "kết thúc"
  },
  {
    "chinese": "介紹",
    "level": "A1",
    "pinyin": "jièshào",
    "part_of_speech": "VA",
    "meaning": "giới thiệu"
  },
  {
    "chinese": "今年",
    "level": "A1",
    "pinyin": "jīnnián",
    "part_of_speech": "N",
    "meaning": "năm nay"
  },
  {
    "chinese": "今天",
    "level": "A1",
    "pinyin": "jīntiān",
    "part_of_speech": "N",
    "meaning": "hôm nay"
  },
  {
    "chinese": "近",
    "level": "A1",
    "pinyin": "jìn",
    "part_of_speech": "VS",
    "meaning": "gần"
  },
  {
    "chinese": "進步",
    "level": "A1",
    "pinyin": "jìnbù",
    "part_of_speech": "VS",
    "meaning": "tiến bộ"
  },
  {
    "chinese": "進來",
    "level": "A1",
    "pinyin": "jìnlái",
    "part_of_speech": "VA",
    "meaning": "đi vào"
  },
  {
    "chinese": "進去",
    "level": "A1",
    "pinyin": "jìnqù",
    "part_of_speech": "VA",
    "meaning": "đi vô"
  },
  {
    "chinese": "九",
    "level": "A1",
    "pinyin": "jiǔ",
    "part_of_speech": "Det",
    "meaning": "chín"
  },
  {
    "chinese": "久",
    "level": "A1",
    "pinyin": "jiǔ",
    "part_of_speech": "VS",
    "meaning": "lâu"
  },
  {
    "chinese": "酒",
    "level": "A1",
    "pinyin": "jiǔ",
    "part_of_speech": "N",
    "meaning": "rượu"
  },
  {
    "chinese": "就",
    "level": "A1",
    "pinyin": "jiù",
    "part_of_speech": "Adv",
    "meaning": "thì"
  },
  {
    "chinese": "舊",
    "level": "A1",
    "pinyin": "jiù",
    "part_of_speech": "VS",
    "meaning": "cũ"
  },
  {
    "chinese": "覺得",
    "level": "A1",
    "pinyin": "juédé",
    "part_of_speech": "VS",
    "meaning": "cảm thấy"
  },
  {
    "chinese": "咖啡",
    "level": "A1",
    "pinyin": "kāfēi",
    "part_of_speech": "N",
    "meaning": "cà phê"
  },
  {
    "chinese": "開",
    "level": "A1",
    "pinyin": "kāi",
    "part_of_speech": "VA",
    "meaning": "lái, mở"
  },
  {
    "chinese": "開車",
    "level": "A1",
    "pinyin": "kāichē",
    "part_of_speech": "VA",
    "meaning": "lái xe"
  },
  {
    "chinese": "開始",
    "level": "A1",
    "pinyin": "kāishǐ",
    "part_of_speech": "VS",
    "meaning": "bắt đầu"
  },
  {
    "chinese": "看",
    "level": "A1",
    "pinyin": "kàn",
    "part_of_speech": "VA",
    "meaning": "xem"
  },
  {
    "chinese": "考試",
    "level": "A1",
    "pinyin": "kǎoshì",
    "part_of_speech": "N",
    "meaning": "kì thi"
  },
  {
    "chinese": "考試",
    "level": "A1",
    "pinyin": "kǎoshì",
    "part_of_speech": "VA",
    "meaning": "thi"
  },
  {
    "chinese": "卡片",
    "level": "A1",
    "pinyin": "kǎpiàn",
    "part_of_speech": "N",
    "meaning": "thiệp"
  },
  {
    "chinese": "可樂",
    "level": "A1",
    "pinyin": "kělè",
    "part_of_speech": "N",
    "meaning": "coca"
  },
  {
    "chinese": "可能",
    "level": "A1",
    "pinyin": "kěnéng",
    "part_of_speech": "Adv",
    "meaning": "có thể, có lẽ"
  },
  {
    "chinese": "可是",
    "level": "A1",
    "pinyin": "kěshì",
    "part_of_speech": "Conj",
    "meaning": "nhưng"
  },
  {
    "chinese": "可以",
    "level": "A1",
    "pinyin": "kěyǐ",
    "part_of_speech": "Adv",
    "meaning": "có thể, được"
  },
  {
    "chinese": "課",
    "level": "A1",
    "pinyin": "kè",
    "part_of_speech": "N",
    "meaning": "bài, khóa học"
  },
  {
    "chinese": "客廳",
    "level": "A1",
    "pinyin": "kètīng",
    "part_of_speech": "N",
    "meaning": "phòng khách"
  },
  {
    "chinese": "褲子",
    "level": "A1",
    "pinyin": "kùzi",
    "part_of_speech": "N",
    "meaning": "quần"
  },
  {
    "chinese": "快",
    "level": "A1",
    "pinyin": "kuài",
    "part_of_speech": "Adv",
    "meaning": "mau"
  },
  {
    "chinese": "快",
    "level": "A1",
    "pinyin": "kuài",
    "part_of_speech": "VS",
    "meaning": "nhanh"
  },
  {
    "chinese": "塊",
    "level": "A1",
    "pinyin": "kuài",
    "part_of_speech": "M",
    "meaning": "đồng, cục, viên, miếng"
  },
  {
    "chinese": "快樂",
    "level": "A1",
    "pinyin": "kuàilè",
    "part_of_speech": "VS",
    "meaning": "vui vẻ"
  },
  {
    "chinese": "來",
    "level": "A1",
    "pinyin": "lái",
    "part_of_speech": "VA",
    "meaning": "đến"
  },
  {
    "chinese": "籃球",
    "level": "A1",
    "pinyin": "lánqiú",
    "part_of_speech": "N",
    "meaning": "bóng rổ"
  },
  {
    "chinese": "老師",
    "level": "A1",
    "pinyin": "lǎoshī",
    "part_of_speech": "N",
    "meaning": "giáo viên"
  },
  {
    "chinese": "了",
    "level": "A1",
    "pinyin": "le",
    "part_of_speech": "P",
    "meaning": "…rồi"
  },
  {
    "chinese": "了",
    "level": "A1",
    "pinyin": "le",
    "part_of_speech": "P",
    "meaning": "đã…"
  },
  {
    "chinese": "累",
    "level": "A1",
    "pinyin": "lèi",
    "part_of_speech": "VS",
    "meaning": "mệt"
  },
  {
    "chinese": "冷",
    "level": "A1",
    "pinyin": "lěng",
    "part_of_speech": "VS",
    "meaning": "lạnh"
  },
  {
    "chinese": "冷氣(機)",
    "level": "A1",
    "pinyin": "lěngqì(jī)",
    "part_of_speech": "N",
    "meaning": "máy lạnh"
  },
  {
    "chinese": "離",
    "level": "A1",
    "pinyin": "lí",
    "part_of_speech": "VA",
    "meaning": "cách"
  },
  {
    "chinese": "離開",
    "level": "A1",
    "pinyin": "líkāi",
    "part_of_speech": "VA",
    "meaning": "rời xa"
  },
  {
    "chinese": "裡面",
    "level": "A1",
    "pinyin": "lǐmiàn",
    "part_of_speech": "N",
    "meaning": "bên trong"
  },
  {
    "chinese": "兩",
    "level": "A1",
    "pinyin": "liǎng",
    "part_of_speech": "Det",
    "meaning": "hai"
  },
  {
    "chinese": "六",
    "level": "A1",
    "pinyin": "liù",
    "part_of_speech": "Det",
    "meaning": "sáu"
  },
  {
    "chinese": "樓",
    "level": "A1",
    "pinyin": "lóu",
    "part_of_speech": "M",
    "meaning": "lầu"
  },
  {
    "chinese": "樓上",
    "level": "A1",
    "pinyin": "lóushàng",
    "part_of_speech": "N",
    "meaning": "trên lầu"
  },
  {
    "chinese": "樓下",
    "level": "A1",
    "pinyin": "lóuxià",
    "part_of_speech": "N",
    "meaning": "dưới lầu"
  },
  {
    "chinese": "路",
    "level": "A1",
    "pinyin": "lù",
    "part_of_speech": "N",
    "meaning": "đường, lộ"
  },
  {
    "chinese": "路口",
    "level": "A1",
    "pinyin": "lùkǒu",
    "part_of_speech": "N",
    "meaning": "giao lộ"
  },
  {
    "chinese": "旅行",
    "level": "A1",
    "pinyin": "lǚxíng",
    "part_of_speech": "VA",
    "meaning": "du lịch"
  },
  {
    "chinese": "綠色",
    "level": "A1",
    "pinyin": "lǜsè",
    "part_of_speech": "N",
    "meaning": "màu xanh lá"
  },
  {
    "chinese": "嗎",
    "level": "A1",
    "pinyin": "ma",
    "part_of_speech": "P",
    "meaning": "trợ từ nghi vấn"
  },
  {
    "chinese": "媽媽",
    "level": "A1",
    "pinyin": "māma",
    "part_of_speech": "N",
    "meaning": "mẹ"
  },
  {
    "chinese": "買",
    "level": "A1",
    "pinyin": "mǎi",
    "part_of_speech": "VA",
    "meaning": "mua"
  },
  {
    "chinese": "賣",
    "level": "A1",
    "pinyin": "mài",
    "part_of_speech": "VA",
    "meaning": "bán"
  },
  {
    "chinese": "忙",
    "level": "A1",
    "pinyin": "máng",
    "part_of_speech": "VS",
    "meaning": "bận"
  },
  {
    "chinese": "貓",
    "level": "A1",
    "pinyin": "māo",
    "part_of_speech": "N",
    "meaning": "mèo"
  },
  {
    "chinese": "毛",
    "level": "A1",
    "pinyin": "máo",
    "part_of_speech": "M",
    "meaning": "lông"
  },
  {
    "chinese": "每",
    "level": "A1",
    "pinyin": "měi",
    "part_of_speech": "Det",
    "meaning": "mỗi"
  },
  {
    "chinese": "美國",
    "level": "A1",
    "pinyin": "měiguó",
    "part_of_speech": "N",
    "meaning": "nước Mỹ"
  },
  {
    "chinese": "沒",
    "level": "A1",
    "pinyin": "méi",
    "part_of_speech": "Adv",
    "meaning": "đã không, không có"
  },
  {
    "chinese": "沒(有)",
    "level": "A1",
    "pinyin": "méi(yǒu)",
    "part_of_speech": "P",
    "meaning": "không, không có"
  },
  {
    "chinese": "沒關係",
    "level": "A1",
    "pinyin": "méiguānxì",
    "part_of_speech": "VS",
    "meaning": "không sao"
  },
  {
    "chinese": "沒問題",
    "level": "A1",
    "pinyin": "méiwèntí",
    "part_of_speech": "VS",
    "meaning": "không vấn đề"
  },
  {
    "chinese": "妹妹",
    "level": "A1",
    "pinyin": "mèimei",
    "part_of_speech": "N",
    "meaning": "em gái"
  },
  {
    "chinese": "門",
    "level": "A1",
    "pinyin": "mén",
    "part_of_speech": "N",
    "meaning": "cửa"
  },
  {
    "chinese": "門口",
    "level": "A1",
    "pinyin": "ménkǒu",
    "part_of_speech": "N",
    "meaning": "ngoài cửa"
  },
  {
    "chinese": "面",
    "level": "A1",
    "pinyin": "miàn",
    "part_of_speech": "N",
    "meaning": "mì"
  },
  {
    "chinese": "麵包",
    "level": "A1",
    "pinyin": "miànbāo",
    "part_of_speech": "N",
    "meaning": "bánh mì"
  },
  {
    "chinese": "明年",
    "level": "A1",
    "pinyin": "míngnián",
    "part_of_speech": "N",
    "meaning": "năm tới"
  },
  {
    "chinese": "明天",
    "level": "A1",
    "pinyin": "míngtiān",
    "part_of_speech": "N",
    "meaning": "ngày mai"
  },
  {
    "chinese": "名字",
    "level": "A1",
    "pinyin": "míngzì",
    "part_of_speech": "N",
    "meaning": "tên"
  },
  {
    "chinese": "拿",
    "level": "A1",
    "pinyin": "ná",
    "part_of_speech": "VA",
    "meaning": "lấy"
  },
  {
    "chinese": "哪裡/兒",
    "level": "A1",
    "pinyin": "nǎlǐ/er",
    "part_of_speech": "N",
    "meaning": "đâu"
  },
  {
    "chinese": "那裡/兒",
    "level": "A1",
    "pinyin": "nàlǐ/er",
    "part_of_speech": "N",
    "meaning": "chỗ đó"
  },
  {
    "chinese": "那些",
    "level": "A1",
    "pinyin": "nàxiē",
    "part_of_speech": "Det",
    "meaning": "những thứ đó"
  },
  {
    "chinese": "難",
    "level": "A1",
    "pinyin": "nán",
    "part_of_speech": "VS",
    "meaning": "khó"
  },
  {
    "chinese": "南(邊)",
    "level": "A1",
    "pinyin": "nán(biān)",
    "part_of_speech": "N",
    "meaning": "phía nam"
  },
  {
    "chinese": "男孩",
    "level": "A1",
    "pinyin": "nánhái",
    "part_of_speech": "N",
    "meaning": "con trai, cậu bé"
  },
  {
    "chinese": "男生",
    "level": "A1",
    "pinyin": "nánshēng",
    "part_of_speech": "N",
    "meaning": "con trai"
  },
  {
    "chinese": "呢",
    "level": "A1",
    "pinyin": "ne",
    "part_of_speech": "P",
    "meaning": "trợ từ ngữ khí: thì sao? Nè?"
  },
  {
    "chinese": "能",
    "level": "A1",
    "pinyin": "néng",
    "part_of_speech": "Adv",
    "meaning": "có thể"
  },
  {
    "chinese": "你",
    "level": "A1",
    "pinyin": "nǐ",
    "part_of_speech": "N",
    "meaning": "bạn"
  },
  {
    "chinese": "你們",
    "level": "A1",
    "pinyin": "nǐmen",
    "part_of_speech": "N",
    "meaning": "các bạn"
  },
  {
    "chinese": "年",
    "level": "A1",
    "pinyin": "nián",
    "part_of_speech": "N",
    "meaning": "năm"
  },
  {
    "chinese": "您",
    "level": "A1",
    "pinyin": "nín",
    "part_of_speech": "N",
    "meaning": "ngài, ông, bà, anh, chị"
  },
  {
    "chinese": "牛奶",
    "level": "A1",
    "pinyin": "niúnǎi",
    "part_of_speech": "N",
    "meaning": "sữa bò"
  },
  {
    "chinese": "女兒",
    "level": "A1",
    "pinyin": "nǚér",
    "part_of_speech": "N",
    "meaning": "con gái ( của ai )"
  },
  {
    "chinese": "女孩",
    "level": "A1",
    "pinyin": "nǚhái",
    "part_of_speech": "N",
    "meaning": "con gái, cô bé"
  },
  {
    "chinese": "女生",
    "level": "A1",
    "pinyin": "nǚshēng",
    "part_of_speech": "N",
    "meaning": "con gái"
  },
  {
    "chinese": "跑步",
    "level": "A1",
    "pinyin": "pǎobù",
    "part_of_speech": "VA",
    "meaning": "chạy bộ"
  },
  {
    "chinese": "朋友",
    "level": "A1",
    "pinyin": "péngyǒu",
    "part_of_speech": "N",
    "meaning": "bạn bè"
  },
  {
    "chinese": "便宜",
    "level": "A1",
    "pinyin": "piányi",
    "part_of_speech": "VS",
    "meaning": "rẻ tiền"
  },
  {
    "chinese": "票",
    "level": "A1",
    "pinyin": "piào",
    "part_of_speech": "N",
    "meaning": "vé"
  },
  {
    "chinese": "漂亮",
    "level": "A1",
    "pinyin": "piāoliàng",
    "part_of_speech": "VS",
    "meaning": "xinh đẹp"
  },
  {
    "chinese": "皮包",
    "level": "A1",
    "pinyin": "píbāo",
    "part_of_speech": "N",
    "meaning": "túi xách"
  },
  {
    "chinese": "瓶",
    "level": "A1",
    "pinyin": "píng",
    "part_of_speech": "M",
    "meaning": "chai"
  },
  {
    "chinese": "七",
    "level": "A1",
    "pinyin": "qī",
    "part_of_speech": "Det",
    "meaning": "7"
  },
  {
    "chinese": "騎",
    "level": "A1",
    "pinyin": "qí",
    "part_of_speech": "VA",
    "meaning": "chạy xe 2 bánh"
  },
  {
    "chinese": "千",
    "level": "A1",
    "pinyin": "qiān",
    "part_of_speech": "Det",
    "meaning": "ngàn"
  },
  {
    "chinese": "錢",
    "level": "A1",
    "pinyin": "qián",
    "part_of_speech": "N",
    "meaning": "tiền"
  },
  {
    "chinese": "前面",
    "level": "A1",
    "pinyin": "qiánmiàn",
    "part_of_speech": "N",
    "meaning": "phía trước"
  },
  {
    "chinese": "錢包",
    "level": "A1",
    "pinyin": "qiánbāo",
    "part_of_speech": "N",
    "meaning": "ví tiền"
  },
  {
    "chinese": "起床",
    "level": "A1",
    "pinyin": "qǐchuáng",
    "part_of_speech": "VA",
    "meaning": "thức dậy"
  },
  {
    "chinese": "請",
    "level": "A1",
    "pinyin": "qǐng",
    "part_of_speech": "VA",
    "meaning": "mời, xin"
  },
  {
    "chinese": "請問",
    "level": "A1",
    "pinyin": "qǐngwèn",
    "part_of_speech": "VA",
    "meaning": "xin hỏi"
  },
  {
    "chinese": "球",
    "level": "A1",
    "pinyin": "qiú",
    "part_of_speech": "N",
    "meaning": "bóng,banh"
  },
  {
    "chinese": "秋天",
    "level": "A1",
    "pinyin": "qiūtiān",
    "part_of_speech": "N",
    "meaning": "mùa thu"
  },
  {
    "chinese": "去",
    "level": "A1",
    "pinyin": "qù",
    "part_of_speech": "VA",
    "meaning": "đi"
  },
  {
    "chinese": "去年",
    "level": "A1",
    "pinyin": "qùnián",
    "part_of_speech": "N",
    "meaning": "năm ngoái"
  },
  {
    "chinese": "熱",
    "level": "A1",
    "pinyin": "rè",
    "part_of_speech": "VS",
    "meaning": "nóng"
  },
  {
    "chinese": "熱狗",
    "level": "A1",
    "pinyin": "règǒu",
    "part_of_speech": "N",
    "meaning": "hotdog"
  },
  {
    "chinese": "熱鬧",
    "level": "A1",
    "pinyin": "rènào",
    "part_of_speech": "VS",
    "meaning": "náo nhiệt"
  },
  {
    "chinese": "人",
    "level": "A1",
    "pinyin": "rén",
    "part_of_speech": "N",
    "meaning": "người"
  },
  {
    "chinese": "認識",
    "level": "A1",
    "pinyin": "rènshi",
    "part_of_speech": "VS",
    "meaning": "quen biết, nhận ra"
  },
  {
    "chinese": "日本",
    "level": "A1",
    "pinyin": "rìběn",
    "part_of_speech": "N",
    "meaning": "Nhật bản"
  },
  {
    "chinese": "容易",
    "level": "A1",
    "pinyin": "róngyì",
    "part_of_speech": "VS",
    "meaning": "dễ"
  },
  {
    "chinese": "肉",
    "level": "A1",
    "pinyin": "ròu",
    "part_of_speech": "N",
    "meaning": "thịt"
  },
  {
    "chinese": "三",
    "level": "A1",
    "pinyin": "sān",
    "part_of_speech": "Det",
    "meaning": "3"
  },
  {
    "chinese": "傘",
    "level": "A1",
    "pinyin": "sǎn",
    "part_of_speech": "N",
    "meaning": "dù"
  },
  {
    "chinese": "山",
    "level": "A1",
    "pinyin": "shān",
    "part_of_speech": "N",
    "meaning": "núi"
  },
  {
    "chinese": "上",
    "level": "A1",
    "pinyin": "shàng",
    "part_of_speech": "VA",
    "meaning": "lên, trên"
  },
  {
    "chinese": "上面",
    "level": "A1",
    "pinyin": "shàng",
    "part_of_speech": "N",
    "meaning": "phía trên"
  },
  {
    "chinese": "上班",
    "level": "A1",
    "pinyin": "shàngbān",
    "part_of_speech": "VA",
    "meaning": "vào làm, đi làm"
  },
  {
    "chinese": "商店",
    "level": "A1",
    "pinyin": "shāngdiàn",
    "part_of_speech": "N",
    "meaning": "cửa hàng"
  },
  {
    "chinese": "上課",
    "level": "A1",
    "pinyin": "shàngkè",
    "part_of_speech": "VA",
    "meaning": "lên lớp"
  },
  {
    "chinese": "上網",
    "level": "A1",
    "pinyin": "shàngwǎng",
    "part_of_speech": "VA",
    "meaning": "lên mạng"
  },
  {
    "chinese": "上午",
    "level": "A1",
    "pinyin": "shàngwǔ",
    "part_of_speech": "N",
    "meaning": "buổi sáng"
  },
  {
    "chinese": "少",
    "level": "A1",
    "pinyin": "shǎo",
    "part_of_speech": "VS",
    "meaning": "ít"
  },
  {
    "chinese": "誰",
    "level": "A1",
    "pinyin": "shéi",
    "part_of_speech": "N",
    "meaning": "ai"
  },
  {
    "chinese": "生病",
    "level": "A1",
    "pinyin": "shēngbìng",
    "part_of_speech": "VS",
    "meaning": "bị bệnh"
  },
  {
    "chinese": "生日",
    "level": "A1",
    "pinyin": "shēngrì",
    "part_of_speech": "N",
    "meaning": "sinh nhật"
  },
  {
    "chinese": "身體",
    "level": "A1",
    "pinyin": "shēntǐ",
    "part_of_speech": "N",
    "meaning": "cơ thể, sức khỏe"
  },
  {
    "chinese": "什麼",
    "level": "A1",
    "pinyin": "shénme",
    "part_of_speech": "Det",
    "meaning": "gì, cái gì"
  },
  {
    "chinese": "十",
    "level": "A1",
    "pinyin": "shí",
    "part_of_speech": "Det",
    "meaning": "10"
  },
  {
    "chinese": "時候",
    "level": "A1",
    "pinyin": "shíhòu",
    "part_of_speech": "N",
    "meaning": "lúc, khi"
  },
  {
    "chinese": "時間",
    "level": "A1",
    "pinyin": "shíjiān",
    "part_of_speech": "N",
    "meaning": "thời gian"
  },
  {
    "chinese": "時鐘",
    "level": "A1",
    "pinyin": "shízhōng",
    "part_of_speech": "N",
    "meaning": "đồng hồ"
  },
  {
    "chinese": "是",
    "level": "A1",
    "pinyin": "shì",
    "part_of_speech": "VA",
    "meaning": "là, phải"
  },
  {
    "chinese": "收到",
    "level": "A1",
    "pinyin": "shōudào",
    "part_of_speech": "VA",
    "meaning": "nhận được"
  },
  {
    "chinese": "手",
    "level": "A1",
    "pinyin": "shǒu",
    "part_of_speech": "N",
    "meaning": "tay"
  },
  {
    "chinese": "手機",
    "level": "A1",
    "pinyin": "shǒujī",
    "part_of_speech": "N",
    "meaning": "điện thoại di động"
  },
  {
    "chinese": "書",
    "level": "A1",
    "pinyin": "shū",
    "part_of_speech": "N",
    "meaning": "sách"
  },
  {
    "chinese": "書包",
    "level": "A1",
    "pinyin": "shūbāo",
    "part_of_speech": "N",
    "meaning": "cặp đựng sách"
  },
  {
    "chinese": "舒服",
    "level": "A1",
    "pinyin": "shūfú",
    "part_of_speech": "VS",
    "meaning": "dễ chịu"
  },
  {
    "chinese": "暑假",
    "level": "A1",
    "pinyin": "shǔjià",
    "part_of_speech": "N",
    "meaning": "nghỉ hè"
  },
  {
    "chinese": "樹",
    "level": "A1",
    "pinyin": "shù",
    "part_of_speech": "N",
    "meaning": "cây"
  },
  {
    "chinese": "雙",
    "level": "A1",
    "pinyin": "shuāng",
    "part_of_speech": "M",
    "meaning": "đôi( giày, tay )"
  },
  {
    "chinese": "水",
    "level": "A1",
    "pinyin": "shuǐ",
    "part_of_speech": "N",
    "meaning": "nước"
  },
  {
    "chinese": "水果",
    "level": "A1",
    "pinyin": "shuǐguǒ",
    "part_of_speech": "N",
    "meaning": "trái cây"
  },
  {
    "chinese": "睡覺",
    "level": "A1",
    "pinyin": "shuìjiào",
    "part_of_speech": "VA",
    "meaning": "ngủ"
  },
  {
    "chinese": "說",
    "level": "A1",
    "pinyin": "shuō",
    "part_of_speech": "VA",
    "meaning": "nói"
  },
  {
    "chinese": "說話",
    "level": "A1",
    "pinyin": "shuōhuà",
    "part_of_speech": "VA",
    "meaning": "nói chuyện"
  },
  {
    "chinese": "四",
    "level": "A1",
    "pinyin": "sì",
    "part_of_speech": "Det",
    "meaning": "4"
  },
  {
    "chinese": "宿舍",
    "level": "A1",
    "pinyin": "sùshè",
    "part_of_speech": "N",
    "meaning": "ký túc xá"
  },
  {
    "chinese": "歲",
    "level": "A1",
    "pinyin": "suì",
    "part_of_speech": "M",
    "meaning": "tuổi"
  },
  {
    "chinese": "算",
    "level": "A1",
    "pinyin": "suàn",
    "part_of_speech": "VA",
    "meaning": "tính"
  },
  {
    "chinese": "送",
    "level": "A1",
    "pinyin": "sòng",
    "part_of_speech": "VA",
    "meaning": "tặng, đưa tiễn"
  },
  {
    "chinese": "所以",
    "level": "A1",
    "pinyin": "suǒyǐ",
    "part_of_speech": "Conj",
    "meaning": "cho nên"
  },
  {
    "chinese": "他/她",
    "level": "A1",
    "pinyin": "tā/tā",
    "part_of_speech": "N",
    "meaning": "anh ấy, cô ấy"
  },
  {
    "chinese": "他們/她們",
    "level": "A1",
    "pinyin": "tāmen/tāmen",
    "part_of_speech": "N",
    "meaning": "bọn họ"
  },
  {
    "chinese": "太",
    "level": "A1",
    "pinyin": "tài",
    "part_of_speech": "Adv",
    "meaning": "quá"
  },
  {
    "chinese": "太太",
    "level": "A1",
    "pinyin": "tàitài",
    "part_of_speech": "N",
    "meaning": "bà, vợ"
  },
  {
    "chinese": "糖",
    "level": "A1",
    "pinyin": "táng",
    "part_of_speech": "N",
    "meaning": "kẹo, đường"
  },
  {
    "chinese": "特別",
    "level": "A1",
    "pinyin": "tèbié",
    "part_of_speech": "VS",
    "meaning": "đặc biệt"
  },
  {
    "chinese": "踢",
    "level": "A1",
    "pinyin": "tī",
    "part_of_speech": "VA",
    "meaning": "đá"
  },
  {
    "chinese": "天",
    "level": "A1",
    "pinyin": "tiān",
    "part_of_speech": "M",
    "meaning": "ngày"
  },
  {
    "chinese": "天",
    "level": "A1",
    "pinyin": "tiān",
    "part_of_speech": "N",
    "meaning": "ngày, trời"
  },
  {
    "chinese": "天氣",
    "level": "A1",
    "pinyin": "tiānqì",
    "part_of_speech": "N",
    "meaning": "thời tiết"
  },
  {
    "chinese": "跳舞",
    "level": "A1",
    "pinyin": "tiàowǔ",
    "part_of_speech": "VA",
    "meaning": "nhảy múa"
  },
  {
    "chinese": "聽",
    "level": "A1",
    "pinyin": "tīng",
    "part_of_speech": "VA",
    "meaning": "nghe"
  },
  {
    "chinese": "痛",
    "level": "A1",
    "pinyin": "tòng",
    "part_of_speech": "VS",
    "meaning": "đau"
  },
  {
    "chinese": "同學",
    "level": "A1",
    "pinyin": "tóngxué",
    "part_of_speech": "N",
    "meaning": "bạn học"
  },
  {
    "chinese": "頭",
    "level": "A1",
    "pinyin": "tóu",
    "part_of_speech": "N",
    "meaning": "đầu"
  },
  {
    "chinese": "圖片",
    "level": "A1",
    "pinyin": "túpiàn",
    "part_of_speech": "N",
    "meaning": "hình"
  },
  {
    "chinese": "圖書館",
    "level": "A1",
    "pinyin": "túshūguǎn",
    "part_of_speech": "N",
    "meaning": "thư viện"
  },
  {
    "chinese": "外面",
    "level": "A1",
    "pinyin": "wàimiàn",
    "part_of_speech": "N",
    "meaning": "bên ngoài"
  },
  {
    "chinese": "完",
    "level": "A1",
    "pinyin": "wán",
    "part_of_speech": "VS",
    "meaning": "hết, xong"
  },
  {
    "chinese": "玩(兒)",
    "level": "A1",
    "pinyin": "wán(er)",
    "part_of_speech": "VA",
    "meaning": "chơi"
  },
  {
    "chinese": "碗",
    "level": "A1",
    "pinyin": "wǎn",
    "part_of_speech": "N",
    "meaning": "cái chén, cái tô"
  },
  {
    "chinese": "碗",
    "level": "A1",
    "pinyin": "wǎn",
    "part_of_speech": "M",
    "meaning": "chén, tô"
  },
  {
    "chinese": "晚安",
    "level": "A1",
    "pinyin": "wǎnān",
    "part_of_speech": "VS",
    "meaning": "ngủ ngon"
  },
  {
    "chinese": "晚餐/晚飯",
    "level": "A1",
    "pinyin": "wǎncān/wǎnfàn",
    "part_of_speech": "N",
    "meaning": "cơm tối"
  },
  {
    "chinese": "晚上",
    "level": "A1",
    "pinyin": "wǎnshàng",
    "part_of_speech": "N",
    "meaning": "buổi tối"
  },
  {
    "chinese": "往",
    "level": "A1",
    "pinyin": "wǎng",
    "part_of_speech": "Prep",
    "meaning": "về phía, hướng về"
  },
  {
    "chinese": "網球",
    "level": "A1",
    "pinyin": "wǎngqiú",
    "part_of_speech": "N",
    "meaning": "tennis"
  },
  {
    "chinese": "網站",
    "level": "A1",
    "pinyin": "wǎngzhàn",
    "part_of_speech": "N",
    "meaning": "website, trang web"
  },
  {
    "chinese": "忘",
    "level": "A1",
    "pinyin": "wàng",
    "part_of_speech": "VS",
    "meaning": "quên"
  },
  {
    "chinese": "喂",
    "level": "A1",
    "pinyin": "wéi",
    "part_of_speech": "VS",
    "meaning": "alo"
  },
  {
    "chinese": "位",
    "level": "A1",
    "pinyin": "wèi",
    "part_of_speech": "M",
    "meaning": "Vị (anh, chị, ông, bà)"
  },
  {
    "chinese": "為什麼",
    "level": "A1",
    "pinyin": "wèishénme",
    "part_of_speech": "Adv",
    "meaning": "tại sao"
  },
  {
    "chinese": "問",
    "level": "A1",
    "pinyin": "wèn",
    "part_of_speech": "VA",
    "meaning": "hỏi"
  },
  {
    "chinese": "問題",
    "level": "A1",
    "pinyin": "wèntí",
    "part_of_speech": "N",
    "meaning": "vấn đề, câu hỏi"
  },
  {
    "chinese": "我",
    "level": "A1",
    "pinyin": "wǒ",
    "part_of_speech": "N",
    "meaning": "tôi"
  },
  {
    "chinese": "我們",
    "level": "A1",
    "pinyin": "wǒmen",
    "part_of_speech": "N",
    "meaning": "chúng ta, chúng tôi"
  },
  {
    "chinese": "五",
    "level": "A1",
    "pinyin": "wǔ",
    "part_of_speech": "Det",
    "meaning": "5"
  },
  {
    "chinese": "午餐/午飯",
    "level": "A1",
    "pinyin": "wǔcān/wǔfàn",
    "part_of_speech": "N",
    "meaning": "cơm trưa"
  },
  {
    "chinese": "洗",
    "level": "A1",
    "pinyin": "xǐ",
    "part_of_speech": "VA",
    "meaning": "rửa, tắm"
  },
  {
    "chinese": "下",
    "level": "A1",
    "pinyin": "xià",
    "part_of_speech": "VA",
    "meaning": "xuống"
  },
  {
    "chinese": "西邊",
    "level": "A1",
    "pinyin": "xībiān",
    "part_of_speech": "N",
    "meaning": "phía tây"
  },
  {
    "chinese": "下麵",
    "level": "A1",
    "pinyin": "xiàmiàn",
    "part_of_speech": "N",
    "meaning": "phía dưới"
  },
  {
    "chinese": "下班",
    "level": "A1",
    "pinyin": "xiàbān",
    "part_of_speech": "VA",
    "meaning": "tan ca"
  },
  {
    "chinese": "下課",
    "level": "A1",
    "pinyin": "xiàkè",
    "part_of_speech": "VS",
    "meaning": "tan học"
  },
  {
    "chinese": "夏天",
    "level": "A1",
    "pinyin": "xiàtiān",
    "part_of_speech": "N",
    "meaning": "mùa hè"
  },
  {
    "chinese": "下午",
    "level": "A1",
    "pinyin": "xiàwǔ",
    "part_of_speech": "N",
    "meaning": "buổi chiều"
  },
  {
    "chinese": "下雨",
    "level": "A1",
    "pinyin": "xiàyǔ",
    "part_of_speech": "VA",
    "meaning": "trời mưa"
  },
  {
    "chinese": "先",
    "level": "A1",
    "pinyin": "xiān",
    "part_of_speech": "Adv",
    "meaning": "trước"
  },
  {
    "chinese": "先生",
    "level": "A1",
    "pinyin": "xiānshēng",
    "part_of_speech": "N",
    "meaning": "ông, anh, mr"
  },
  {
    "chinese": "現在",
    "level": "A1",
    "pinyin": "xiànzài",
    "part_of_speech": "N",
    "meaning": "bây giờ"
  },
  {
    "chinese": "想",
    "level": "A1",
    "pinyin": "xiǎng",
    "part_of_speech": "VA",
    "meaning": "nghĩ, nhớ"
  },
  {
    "chinese": "像",
    "level": "A1",
    "pinyin": "xiàng",
    "part_of_speech": "VA",
    "meaning": "giống"
  },
  {
    "chinese": "小",
    "level": "A1",
    "pinyin": "xiǎo",
    "part_of_speech": "VS",
    "meaning": "nhỏ"
  },
  {
    "chinese": "小孩",
    "level": "A1",
    "pinyin": "xiǎohái",
    "part_of_speech": "N",
    "meaning": "con, con nít"
  },
  {
    "chinese": "小姐",
    "level": "A1",
    "pinyin": "xiǎojiě",
    "part_of_speech": "N",
    "meaning": "cô, miss"
  },
  {
    "chinese": "小時",
    "level": "A1",
    "pinyin": "xiǎoshí",
    "part_of_speech": "N",
    "meaning": "giờ, tiếng đồng hồ"
  },
  {
    "chinese": "小心",
    "level": "A1",
    "pinyin": "xiǎoxīn",
    "part_of_speech": "VS",
    "meaning": "cẩn thận"
  },
  {
    "chinese": "鞋子",
    "level": "A1",
    "pinyin": "xiézi",
    "part_of_speech": "N",
    "meaning": "giày"
  },
  {
    "chinese": "寫",
    "level": "A1",
    "pinyin": "xiě",
    "part_of_speech": "VA",
    "meaning": "viết"
  },
  {
    "chinese": "寫字",
    "level": "A1",
    "pinyin": "xiězì",
    "part_of_speech": "VA",
    "meaning": "viết chữ"
  },
  {
    "chinese": "謝謝",
    "level": "A1",
    "pinyin": "xièxie",
    "part_of_speech": "VS",
    "meaning": "cảm ơn"
  },
  {
    "chinese": "喜歡",
    "level": "A1",
    "pinyin": "xǐhuān",
    "part_of_speech": "VS",
    "meaning": "thích"
  },
  {
    "chinese": "洗衣機",
    "level": "A1",
    "pinyin": "xǐyījī",
    "part_of_speech": "N",
    "meaning": "máy giặt"
  },
  {
    "chinese": "洗澡",
    "level": "A1",
    "pinyin": "xǐzǎo",
    "part_of_speech": "VA",
    "meaning": "tắm"
  },
  {
    "chinese": "新",
    "level": "A1",
    "pinyin": "xīn",
    "part_of_speech": "VS",
    "meaning": "mới"
  },
  {
    "chinese": "新年",
    "level": "A1",
    "pinyin": "xīnnián",
    "part_of_speech": "N",
    "meaning": "năm mới"
  },
  {
    "chinese": "信",
    "level": "A1",
    "pinyin": "xìn",
    "part_of_speech": "N",
    "meaning": "thư"
  },
  {
    "chinese": "信封",
    "level": "A1",
    "pinyin": "xìnfēng",
    "part_of_speech": "N",
    "meaning": "bìa thư"
  },
  {
    "chinese": "星期",
    "level": "A1",
    "pinyin": "xīngqí",
    "part_of_speech": "N",
    "meaning": "tuần"
  },
  {
    "chinese": "行",
    "level": "A1",
    "pinyin": "xíng",
    "part_of_speech": "VS",
    "meaning": "ok, được"
  },
  {
    "chinese": "姓",
    "level": "A1",
    "pinyin": "xìng",
    "part_of_speech": "VA",
    "meaning": "họ"
  },
  {
    "chinese": "休息",
    "level": "A1",
    "pinyin": "xiūxí",
    "part_of_speech": "VA",
    "meaning": "nghỉ ngơi"
  },
  {
    "chinese": "學",
    "level": "A1",
    "pinyin": "xué",
    "part_of_speech": "VA",
    "meaning": "học"
  },
  {
    "chinese": "學生",
    "level": "A1",
    "pinyin": "xuéshēng",
    "part_of_speech": "N",
    "meaning": "học sinh"
  },
  {
    "chinese": "學校",
    "level": "A1",
    "pinyin": "xuéxiào",
    "part_of_speech": "N",
    "meaning": "trường học"
  },
  {
    "chinese": "眼睛",
    "level": "A1",
    "pinyin": "yǎnjīng",
    "part_of_speech": "N",
    "meaning": "mắt"
  },
  {
    "chinese": "要",
    "level": "A1",
    "pinyin": "yào",
    "part_of_speech": "VA",
    "meaning": "muốn, cần, phải, sẽ"
  },
  {
    "chinese": "藥",
    "level": "A1",
    "pinyin": "yào",
    "part_of_speech": "N",
    "meaning": "thuốc"
  },
  {
    "chinese": "也",
    "level": "A1",
    "pinyin": "yě",
    "part_of_speech": "Adv",
    "meaning": "cũng"
  },
  {
    "chinese": "一",
    "level": "A1",
    "pinyin": "yī",
    "part_of_speech": "Det",
    "meaning": "1"
  },
  {
    "chinese": "醫生",
    "level": "A1",
    "pinyin": "yīshēng",
    "part_of_speech": "N",
    "meaning": "bác sỹ"
  },
  {
    "chinese": "一點兒",
    "level": "A1",
    "pinyin": "yìdiǎnr",
    "part_of_speech": "Det",
    "meaning": "một ít"
  },
  {
    "chinese": "一定",
    "level": "A1",
    "pinyin": "yídìng",
    "part_of_speech": "Adv",
    "meaning": "nhất định"
  },
  {
    "chinese": "衣服",
    "level": "A1",
    "pinyin": "yīfú",
    "part_of_speech": "N",
    "meaning": "quần áo"
  },
  {
    "chinese": "醫院",
    "level": "A1",
    "pinyin": "yīyuàn",
    "part_of_speech": "N",
    "meaning": "bệnh viện"
  },
  {
    "chinese": "一共",
    "level": "A1",
    "pinyin": "yígòng",
    "part_of_speech": "Adv",
    "meaning": "tổng cộng"
  },
  {
    "chinese": "以後",
    "level": "A1",
    "pinyin": "yǐhòu",
    "part_of_speech": "N",
    "meaning": "sau này, sau khi"
  },
  {
    "chinese": "已經",
    "level": "A1",
    "pinyin": "yǐjīng",
    "part_of_speech": "Adv",
    "meaning": "đã"
  },
  {
    "chinese": "以前",
    "level": "A1",
    "pinyin": "yǐqián",
    "part_of_speech": "N",
    "meaning": "trước đây, trước khi"
  },
  {
    "chinese": "椅子",
    "level": "A1",
    "pinyin": "yǐzi",
    "part_of_speech": "N",
    "meaning": "ghế"
  },
  {
    "chinese": "一起",
    "level": "A1",
    "pinyin": "yìqǐ",
    "part_of_speech": "Adv",
    "meaning": "cùng nhau"
  },
  {
    "chinese": "一些",
    "level": "A1",
    "pinyin": "yìxiē",
    "part_of_speech": "Det",
    "meaning": "một vài"
  },
  {
    "chinese": "一樣",
    "level": "A1",
    "pinyin": "yíyàng",
    "part_of_speech": "VS",
    "meaning": "giống nhau"
  },
  {
    "chinese": "一直",
    "level": "A1",
    "pinyin": "yìzhí",
    "part_of_speech": "Adv",
    "meaning": "cứ, hoài, mãi"
  },
  {
    "chinese": "意思",
    "level": "A1",
    "pinyin": "yìsī",
    "part_of_speech": "N",
    "meaning": "ý nghĩa"
  },
  {
    "chinese": "銀行",
    "level": "A1",
    "pinyin": "yínháng",
    "part_of_speech": "N",
    "meaning": "ngân hàng"
  },
  {
    "chinese": "因為",
    "level": "A1",
    "pinyin": "yīnwèi",
    "part_of_speech": "Conj",
    "meaning": "bởi vì"
  },
  {
    "chinese": "音樂",
    "level": "A1",
    "pinyin": "yīnyuè",
    "part_of_speech": "N",
    "meaning": "âm nhạc"
  },
  {
    "chinese": "英國",
    "level": "A1",
    "pinyin": "yīngguó",
    "part_of_speech": "N",
    "meaning": "Anh Quốc"
  },
  {
    "chinese": "英文",
    "level": "A1",
    "pinyin": "yīngwén",
    "part_of_speech": "N",
    "meaning": "tiếng Anh"
  },
  {
    "chinese": "郵局",
    "level": "A1",
    "pinyin": "yóujú",
    "part_of_speech": "N",
    "meaning": "bưu điện"
  },
  {
    "chinese": "郵票",
    "level": "A1",
    "pinyin": "yóupiào",
    "part_of_speech": "N",
    "meaning": "tem thư"
  },
  {
    "chinese": "游泳",
    "level": "A1",
    "pinyin": "yóuyǒng",
    "part_of_speech": "VA",
    "meaning": "bơi"
  },
  {
    "chinese": "游泳池",
    "level": "A1",
    "pinyin": "yóuyǒngchí",
    "part_of_speech": "N",
    "meaning": "hồ bơi"
  },
  {
    "chinese": "有",
    "level": "A1",
    "pinyin": "yǒu",
    "part_of_speech": "VA",
    "meaning": "có"
  },
  {
    "chinese": "有點(兒)",
    "level": "A1",
    "pinyin": "yǒudiǎn(er)",
    "part_of_speech": "Adv",
    "meaning": "hơi hơi"
  },
  {
    "chinese": "有空",
    "level": "A1",
    "pinyin": "yǒukòng",
    "part_of_speech": "VS",
    "meaning": "rảnh"
  },
  {
    "chinese": "有時候",
    "level": "A1",
    "pinyin": "yǒushíhòu",
    "part_of_speech": "Adv",
    "meaning": "có khi, có lúc"
  },
  {
    "chinese": "有意思",
    "level": "A1",
    "pinyin": "yǒuyìsī",
    "part_of_speech": "VS",
    "meaning": "thú vị"
  },
  {
    "chinese": "又",
    "level": "A1",
    "pinyin": "yòu",
    "part_of_speech": "Adv",
    "meaning": "lại, nữa"
  },
  {
    "chinese": "右邊)",
    "level": "A1",
    "pinyin": "yòubiān",
    "part_of_speech": "N",
    "meaning": "bên phải"
  },
  {
    "chinese": "用",
    "level": "A1",
    "pinyin": "yòng",
    "part_of_speech": "VA",
    "meaning": "dùng, xài"
  },
  {
    "chinese": "魚",
    "level": "A1",
    "pinyin": "yú",
    "part_of_speech": "N",
    "meaning": "cá"
  },
  {
    "chinese": "元",
    "level": "A1",
    "pinyin": "yuán",
    "part_of_speech": "M",
    "meaning": "đồng ( đơn vị tiền TQ )"
  },
  {
    "chinese": "遠",
    "level": "A1",
    "pinyin": "yuǎn",
    "part_of_speech": "VS",
    "meaning": "xa"
  },
  {
    "chinese": "月",
    "level": "A1",
    "pinyin": "yuè",
    "part_of_speech": "N",
    "meaning": "tháng"
  },
  {
    "chinese": "運動",
    "level": "A1",
    "pinyin": "yùndòng",
    "part_of_speech": "N",
    "meaning": "vận động, thể thao"
  },
  {
    "chinese": "運動",
    "level": "A1",
    "pinyin": "yùndòng",
    "part_of_speech": "VA",
    "meaning": "vận động, tập thể dục"
  },
  {
    "chinese": "雨天",
    "level": "A1",
    "pinyin": "yǔtiān",
    "part_of_speech": "N",
    "meaning": "ngày mưa"
  },
  {
    "chinese": "再",
    "level": "A1",
    "pinyin": "zài",
    "part_of_speech": "Adv",
    "meaning": "thêm, tiếp"
  },
  {
    "chinese": "在",
    "level": "A1",
    "pinyin": "zài",
    "part_of_speech": "Adv",
    "meaning": "đang"
  },
  {
    "chinese": "在",
    "level": "A1",
    "pinyin": "zài",
    "part_of_speech": "Prep",
    "meaning": "ở, lúc"
  },
  {
    "chinese": "再見",
    "level": "A1",
    "pinyin": "zàijiàn",
    "part_of_speech": "VA",
    "meaning": "tạm biệt"
  },
  {
    "chinese": "早",
    "level": "A1",
    "pinyin": "zǎo",
    "part_of_speech": "VS",
    "meaning": "sớm"
  },
  {
    "chinese": "早上",
    "level": "A1",
    "pinyin": "zǎoshàng",
    "part_of_speech": "N",
    "meaning": "buổi sáng"
  },
  {
    "chinese": "怎麼",
    "level": "A1",
    "pinyin": "zěnme",
    "part_of_speech": "Adv",
    "meaning": "sao?"
  },
  {
    "chinese": "怎麼辦",
    "level": "A1",
    "pinyin": "zěnme bàn",
    "part_of_speech": "VA",
    "meaning": "làm sao? Tính sao?"
  },
  {
    "chinese": "怎麼了",
    "level": "A1",
    "pinyin": "zěnme le",
    "part_of_speech": "Vs",
    "meaning": "bị sao rồi?"
  },
  {
    "chinese": "怎麼樣",
    "level": "A1",
    "pinyin": "zěnmeyàng",
    "part_of_speech": "VsSl",
    "meaning": "như thế nào?"
  },
  {
    "chinese": "站",
    "level": "A1",
    "pinyin": "zhàn",
    "part_of_speech": "N",
    "meaning": "trạm, bến"
  },
  {
    "chinese": "站",
    "level": "A1",
    "pinyin": "zhàn",
    "part_of_speech": "VA",
    "meaning": "đứng"
  },
  {
    "chinese": "張",
    "level": "A1",
    "pinyin": "zhāng",
    "part_of_speech": "M",
    "meaning": "tờ, tấm"
  },
  {
    "chinese": "找",
    "level": "A1",
    "pinyin": "zhǎo",
    "part_of_speech": "VA",
    "meaning": "tìm"
  },
  {
    "chinese": "找到",
    "level": "A1",
    "pinyin": "zhǎodào",
    "part_of_speech": "VA",
    "meaning": "tìm được"
  },
  {
    "chinese": "照片",
    "level": "A1",
    "pinyin": "zhàopiàn",
    "part_of_speech": "N",
    "meaning": "hình chụp"
  },
  {
    "chinese": "照相",
    "level": "A1",
    "pinyin": "zhàoxiàng",
    "part_of_speech": "VA",
    "meaning": "chụp hình"
  },
  {
    "chinese": "照相機",
    "level": "A1",
    "pinyin": "zhàoxiàngjī",
    "part_of_speech": "N",
    "meaning": "máy ảnh"
  },
  {
    "chinese": "這裡/兒",
    "level": "A1",
    "pinyin": "zhèlǐ/er",
    "part_of_speech": "N",
    "meaning": "chỗ này"
  },
  {
    "chinese": "這些",
    "level": "A1",
    "pinyin": "zhèxiē",
    "part_of_speech": "Det",
    "meaning": "những thứ này"
  },
  {
    "chinese": "紙",
    "level": "A1",
    "pinyin": "zhǐ",
    "part_of_speech": "N",
    "meaning": "giấy"
  },
  {
    "chinese": "枝",
    "level": "A1",
    "pinyin": "zhī",
    "part_of_speech": "M",
    "meaning": "cây ( viết )"
  },
  {
    "chinese": "只",
    "level": "A1",
    "pinyin": "zhī",
    "part_of_speech": "M",
    "meaning": "con ( chó, mèo )"
  },
  {
    "chinese": "知道",
    "level": "A1",
    "pinyin": "zhīdào",
    "part_of_speech": "VS",
    "meaning": "biết"
  },
  {
    "chinese": "中國",
    "level": "A1",
    "pinyin": "zhōngguó",
    "part_of_speech": "N",
    "meaning": "Trung Quốc"
  },
  {
    "chinese": "中文",
    "level": "A1",
    "pinyin": "zhōngwén",
    "part_of_speech": "N",
    "meaning": "tiếng Trung"
  },
  {
    "chinese": "中午",
    "level": "A1",
    "pinyin": "zhōngwǔ",
    "part_of_speech": "N",
    "meaning": "buổi trưa"
  },
  {
    "chinese": "重要",
    "level": "A1",
    "pinyin": "zhòngyào",
    "part_of_speech": "VS",
    "meaning": "quan trọng"
  },
  {
    "chinese": "週末",
    "level": "A1",
    "pinyin": "zhōumò",
    "part_of_speech": "N",
    "meaning": "cuối tuần"
  },
  {
    "chinese": "住",
    "level": "A1",
    "pinyin": "zhù",
    "part_of_speech": "VA",
    "meaning": "sống, ở"
  },
  {
    "chinese": "桌子",
    "level": "A1",
    "pinyin": "zhuōzi",
    "part_of_speech": "N",
    "meaning": "cái bàn"
  },
  {
    "chinese": "自己",
    "level": "A1",
    "pinyin": "zìjǐ",
    "part_of_speech": "N",
    "meaning": "tự mình"
  },
  {
    "chinese": "姊姊/姐姐",
    "level": "A1",
    "pinyin": "jiějie",
    "part_of_speech": "N",
    "meaning": "chị gái"
  },
  {
    "chinese": "走",
    "level": "A1",
    "pinyin": "zǒu",
    "part_of_speech": "VA",
    "meaning": "đi"
  },
  {
    "chinese": "走路",
    "level": "A1",
    "pinyin": "zǒulù",
    "part_of_speech": "VA",
    "meaning": "đi bộ"
  },
  {
    "chinese": "足球",
    "level": "A1",
    "pinyin": "zúqiú",
    "part_of_speech": "N",
    "meaning": "bóng đá"
  },
  {
    "chinese": "最",
    "level": "A1",
    "pinyin": "zuì",
    "part_of_speech": "Adv",
    "meaning": "nhất"
  },
  {
    "chinese": "最近",
    "level": "A1",
    "pinyin": "zuìjìn",
    "part_of_speech": "Adv",
    "meaning": "dạo này,gần nhất"
  },
  {
    "chinese": "昨天",
    "level": "A1",
    "pinyin": "zuótiān",
    "part_of_speech": "N",
    "meaning": "hôm qua"
  },
  {
    "chinese": "左(邊)",
    "level": "A1",
    "pinyin": "zuǒbiān",
    "part_of_speech": "N",
    "meaning": "bên trái"
  },
  {
    "chinese": "坐",
    "level": "A1",
    "pinyin": "zuò",
    "part_of_speech": "VA",
    "meaning": "ngồi"
  },
  {
    "chinese": "做",
    "level": "A1",
    "pinyin": "zuò",
    "part_of_speech": "VA",
    "meaning": "làm"
  },
  {
    "chinese": "做飯",
    "level": "A1",
    "pinyin": "zuòfàn",
    "part_of_speech": "VA",
    "meaning": "làm cơm"
  },
  {
    "chinese": "做完",
    "level": "A1",
    "pinyin": "zuòwán",
    "part_of_speech": "VA",
    "meaning": "làm xong"
  },
  {
    "chinese": "阿姨",
    "level": "A2",
    "pinyin": "āyí",
    "part_of_speech": "N",
    "meaning": "dì"
  },
  {
    "chinese": "矮",
    "level": "A2",
    "pinyin": "ǎi",
    "part_of_speech": "VS",
    "meaning": "thấp"
  },
  {
    "chinese": "安全",
    "level": "A2",
    "pinyin": "ānquán",
    "part_of_speech": "VS",
    "meaning": "an toàn"
  },
  {
    "chinese": "白",
    "level": "A2",
    "pinyin": "bái",
    "part_of_speech": "VS",
    "meaning": "trắng"
  },
  {
    "chinese": "辦法",
    "level": "A2",
    "pinyin": "bànfǎ",
    "part_of_speech": "N",
    "meaning": "biện pháp, cách"
  },
  {
    "chinese": "棒",
    "level": "A2",
    "pinyin": "bàng",
    "part_of_speech": "VS",
    "meaning": "giỏi, tuyệt"
  },
  {
    "chinese": "幫忙",
    "level": "A2",
    "pinyin": "bāngmáng",
    "part_of_speech": "VA",
    "meaning": "giúp đỡ"
  },
  {
    "chinese": "包",
    "level": "A2",
    "pinyin": "bāo",
    "part_of_speech": "M",
    "meaning": "gói, bao"
  },
  {
    "chinese": "抱",
    "level": "A2",
    "pinyin": "bào",
    "part_of_speech": "VA",
    "meaning": "ôm, bòng"
  },
  {
    "chinese": "必須",
    "level": "A2",
    "pinyin": "bìxū",
    "part_of_speech": "Adv",
    "meaning": "cần phải"
  },
  {
    "chinese": "邊(兒)",
    "level": "A2",
    "pinyin": "biān(er)",
    "part_of_speech": "N",
    "meaning": "bên, cạnh"
  },
  {
    "chinese": "遍",
    "level": "A2",
    "pinyin": "biàn",
    "part_of_speech": "M",
    "meaning": "lần, bận"
  },
  {
    "chinese": "表",
    "level": "A2",
    "pinyin": "biǎo",
    "part_of_speech": "N",
    "meaning": "đồng hồ"
  },
  {
    "chinese": "別",
    "level": "A2",
    "pinyin": "bié",
    "part_of_speech": "Adv",
    "meaning": "đừng"
  },
  {
    "chinese": "別人",
    "level": "A2",
    "pinyin": "biérén",
    "part_of_speech": "N",
    "meaning": "người khác"
  },
  {
    "chinese": "餅乾",
    "level": "A2",
    "pinyin": "bǐnggān",
    "part_of_speech": "N",
    "meaning": "bánh quy"
  },
  {
    "chinese": "冰箱",
    "level": "A2",
    "pinyin": "bīngxiāng",
    "part_of_speech": "N",
    "meaning": "tủ lạnh"
  },
  {
    "chinese": "病",
    "level": "A2",
    "pinyin": "bìng",
    "part_of_speech": "N",
    "meaning": "bệnh"
  },
  {
    "chinese": "病人",
    "level": "A2",
    "pinyin": "bìngrén",
    "part_of_speech": "N",
    "meaning": "người bệnh"
  },
  {
    "chinese": "不錯",
    "level": "A2",
    "pinyin": "búcuò",
    "part_of_speech": "VS",
    "meaning": "khá, không tệ"
  },
  {
    "chinese": "不但",
    "level": "A2",
    "pinyin": "búdàn",
    "part_of_speech": "Conj",
    "meaning": "không những"
  },
  {
    "chinese": "不一定",
    "level": "A2",
    "pinyin": "bùyídìng",
    "part_of_speech": "Adv",
    "meaning": "không nhất định"
  },
  {
    "chinese": "不用",
    "level": "A2",
    "pinyin": "búyòng",
    "part_of_speech": "Adv",
    "meaning": "không cần"
  },
  {
    "chinese": "擦",
    "level": "A2",
    "pinyin": "cā",
    "part_of_speech": "VA",
    "meaning": "lau, chùi"
  },
  {
    "chinese": "猜",
    "level": "A2",
    "pinyin": "cāi",
    "part_of_speech": "VA",
    "meaning": "đoán"
  },
  {
    "chinese": "才",
    "level": "A2",
    "pinyin": "cái",
    "part_of_speech": "Adv",
    "meaning": "mới, vừa mới"
  },
  {
    "chinese": "菜單",
    "level": "A2",
    "pinyin": "càidān",
    "part_of_speech": "N",
    "meaning": "menu, thực đơn"
  },
  {
    "chinese": "餐桌",
    "level": "A2",
    "pinyin": "cānzhuō",
    "part_of_speech": "N",
    "meaning": "bàn ăn"
  },
  {
    "chinese": "草",
    "level": "A2",
    "pinyin": "cǎo",
    "part_of_speech": "N",
    "meaning": "cỏ"
  },
  {
    "chinese": "草地",
    "level": "A2",
    "pinyin": "cǎodì",
    "part_of_speech": "N",
    "meaning": "bãi cỏ"
  },
  {
    "chinese": "叉(子)",
    "level": "A2",
    "pinyin": "chā(zi)",
    "part_of_speech": "N",
    "meaning": "cái nĩa"
  },
  {
    "chinese": "超級市場",
    "level": "A2",
    "pinyin": "chāojí",
    "part_of_speech": "N",
    "meaning": "siêu thị"
  },
  {
    "chinese": "城市",
    "level": "A2",
    "pinyin": "chéngshì",
    "part_of_speech": "N",
    "meaning": "thành phố"
  },
  {
    "chinese": "襯衫",
    "level": "A2",
    "pinyin": "chènshān",
    "part_of_speech": "N",
    "meaning": "áo sơ mi"
  },
  {
    "chinese": "遲到",
    "level": "A2",
    "pinyin": "chídào",
    "part_of_speech": "VS",
    "meaning": "đến muộn"
  },
  {
    "chinese": "窗戶",
    "level": "A2",
    "pinyin": "chuānghù",
    "part_of_speech": "N",
    "meaning": "cửa sổ"
  },
  {
    "chinese": "吹",
    "level": "A2",
    "pinyin": "chuī",
    "part_of_speech": "VA",
    "meaning": "thổi"
  },
  {
    "chinese": "聰明",
    "level": "A2",
    "pinyin": "cōngmíng",
    "part_of_speech": "VS",
    "meaning": "thông minh"
  },
  {
    "chinese": "從前",
    "level": "A2",
    "pinyin": "cóngqián",
    "part_of_speech": "N",
    "meaning": "hồi trước"
  },
  {
    "chinese": "帶",
    "level": "A2",
    "pinyin": "dài",
    "part_of_speech": "VA",
    "meaning": "mang, dắt"
  },
  {
    "chinese": "戴",
    "level": "A2",
    "pinyin": "dài",
    "part_of_speech": "VA",
    "meaning": "đeo, đội"
  },
  {
    "chinese": "袋子",
    "level": "A2",
    "pinyin": "dàizi",
    "part_of_speech": "N",
    "meaning": "túi, bọc"
  },
  {
    "chinese": "蛋",
    "level": "A2",
    "pinyin": "dàn",
    "part_of_speech": "N",
    "meaning": "trứng"
  },
  {
    "chinese": "但是",
    "level": "A2",
    "pinyin": "dànshì",
    "part_of_speech": "Conj",
    "meaning": "nhưng mà"
  },
  {
    "chinese": "刀(子)",
    "level": "A2",
    "pinyin": "dāo(zi)",
    "part_of_speech": "N",
    "meaning": "con dao"
  },
  {
    "chinese": "倒",
    "level": "A2",
    "pinyin": "dào",
    "part_of_speech": "VA",
    "meaning": "rót, đổ"
  },
  {
    "chinese": "打掃",
    "level": "A2",
    "pinyin": "dǎsǎo",
    "part_of_speech": "VA",
    "meaning": "quét"
  },
  {
    "chinese": "打算",
    "level": "A2",
    "pinyin": "dǎsuàn",
    "part_of_speech": "VA",
    "meaning": "dự tính, định"
  },
  {
    "chinese": "大聲",
    "level": "A2",
    "pinyin": "dàshēng",
    "part_of_speech": "VS",
    "meaning": "lớn tiếng"
  },
  {
    "chinese": "大衣",
    "level": "A2",
    "pinyin": "dàyī",
    "part_of_speech": "N",
    "meaning": "áo choàng"
  },
  {
    "chinese": "德國",
    "level": "A2",
    "pinyin": "déguó",
    "part_of_speech": "N",
    "meaning": "nước Đức"
  },
  {
    "chinese": "低",
    "level": "A2",
    "pinyin": "dī",
    "part_of_speech": "VS",
    "meaning": "thấp"
  },
  {
    "chinese": "店",
    "level": "A2",
    "pinyin": "diàn",
    "part_of_speech": "N",
    "meaning": "tiệm, quán"
  },
  {
    "chinese": "電燈",
    "level": "A2",
    "pinyin": "diàndēng",
    "part_of_speech": "N",
    "meaning": "đèn điện"
  },
  {
    "chinese": "點(兒)",
    "level": "A2",
    "pinyin": "diǎn",
    "part_of_speech": "M",
    "meaning": "ít, tý"
  },
  {
    "chinese": "點(兒)",
    "level": "A2",
    "pinyin": "diǎn",
    "part_of_speech": "N",
    "meaning": "chấm"
  },
  {
    "chinese": "點菜",
    "level": "A2",
    "pinyin": "diǎncài",
    "part_of_speech": "VA",
    "meaning": "chọn món"
  },
  {
    "chinese": "點心",
    "level": "A2",
    "pinyin": "diǎnxīn",
    "part_of_speech": "N",
    "meaning": "điểm tâm"
  },
  {
    "chinese": "掉",
    "level": "A2",
    "pinyin": "diào",
    "part_of_speech": "VS",
    "meaning": "rớt"
  },
  {
    "chinese": "動",
    "level": "A2",
    "pinyin": "dòng",
    "part_of_speech": "VA",
    "meaning": "động"
  },
  {
    "chinese": "動物",
    "level": "A2",
    "pinyin": "dòngwù",
    "part_of_speech": "N",
    "meaning": "động vật"
  },
  {
    "chinese": "動物園",
    "level": "A2",
    "pinyin": "dòngwùyuán",
    "part_of_speech": "N",
    "meaning": "sở thú"
  },
  {
    "chinese": "讀",
    "level": "A2",
    "pinyin": "dú",
    "part_of_speech": "VA",
    "meaning": "đọc, học ở trường"
  },
  {
    "chinese": "讀書",
    "level": "A2",
    "pinyin": "dúshū",
    "part_of_speech": "VA",
    "meaning": "học, đọc sách"
  },
  {
    "chinese": "短",
    "level": "A2",
    "pinyin": "duǎn",
    "part_of_speech": "VS",
    "meaning": "ngắn"
  },
  {
    "chinese": "朵",
    "level": "A2",
    "pinyin": "duǒ",
    "part_of_speech": "M",
    "meaning": "đóa ( hoa, mây )"
  },
  {
    "chinese": "耳朵",
    "level": "A2",
    "pinyin": "ěrduō",
    "part_of_speech": "N",
    "meaning": "lỗ tai"
  },
  {
    "chinese": "法國",
    "level": "A2",
    "pinyin": "fǎguó",
    "part_of_speech": "N",
    "meaning": "nước Pháp"
  },
  {
    "chinese": "飯店",
    "level": "A2",
    "pinyin": "fàndiàn",
    "part_of_speech": "N",
    "meaning": "khách sạn, nhà hàng"
  },
  {
    "chinese": "方法",
    "level": "A2",
    "pinyin": "fāngfǎ",
    "part_of_speech": "N",
    "meaning": "phương pháp"
  },
  {
    "chinese": "放假",
    "level": "A2",
    "pinyin": "fàngjià",
    "part_of_speech": "VS",
    "meaning": "được nghỉ"
  },
  {
    "chinese": "放下",
    "level": "A2",
    "pinyin": "fàngxià",
    "part_of_speech": "VA",
    "meaning": "bỏ xuống"
  },
  {
    "chinese": "發生",
    "level": "A2",
    "pinyin": "fāshēng",
    "part_of_speech": "VS",
    "meaning": "xảy ra, phát sinh"
  },
  {
    "chinese": "發現",
    "level": "A2",
    "pinyin": "fāxiàn",
    "part_of_speech": "VA",
    "meaning": "phát hiện"
  },
  {
    "chinese": "飛",
    "level": "A2",
    "pinyin": "fēi",
    "part_of_speech": "VA",
    "meaning": "bay"
  },
  {
    "chinese": "父親",
    "level": "A2",
    "pinyin": "fùqīn",
    "part_of_speech": "N",
    "meaning": "cha"
  },
  {
    "chinese": "服務生",
    "level": "A2",
    "pinyin": "fúwùshēng",
    "part_of_speech": "N",
    "meaning": "phục vụ viên"
  },
  {
    "chinese": "幹",
    "level": "A2",
    "pinyin": "gān",
    "part_of_speech": "VS",
    "meaning": "khô"
  },
  {
    "chinese": "剛剛",
    "level": "A2",
    "pinyin": "gānggāng",
    "part_of_speech": "Adv",
    "meaning": "mới vừa"
  },
  {
    "chinese": "給",
    "level": "A2",
    "pinyin": "gěi",
    "part_of_speech": "Prep",
    "meaning": "cho"
  },
  {
    "chinese": "跟",
    "level": "A2",
    "pinyin": "gēn",
    "part_of_speech": "Prep",
    "meaning": "cùng với"
  },
  {
    "chinese": "恭喜",
    "level": "A2",
    "pinyin": "gōngxǐ",
    "part_of_speech": "VS",
    "meaning": "chúc mừng"
  },
  {
    "chinese": "工作",
    "level": "A2",
    "pinyin": "gōngzuò",
    "part_of_speech": "VA",
    "meaning": "làm việc"
  },
  {
    "chinese": "夠",
    "level": "A2",
    "pinyin": "gòu",
    "part_of_speech": "VS",
    "meaning": "đủ"
  },
  {
    "chinese": "掛",
    "level": "A2",
    "pinyin": "guà",
    "part_of_speech": "VA",
    "meaning": "treo"
  },
  {
    "chinese": "乖",
    "level": "A2",
    "pinyin": "guāi",
    "part_of_speech": "VS",
    "meaning": "ngoan"
  },
  {
    "chinese": "關上",
    "level": "A2",
    "pinyin": "guānshàng",
    "part_of_speech": "VA",
    "meaning": "đóng lại"
  },
  {
    "chinese": "果汁",
    "level": "A2",
    "pinyin": "guǒzhī",
    "part_of_speech": "N",
    "meaning": "nước trái cây"
  },
  {
    "chinese": "過來",
    "level": "A2",
    "pinyin": "guòlái",
    "part_of_speech": "VA",
    "meaning": "qua đây"
  },
  {
    "chinese": "過年",
    "level": "A2",
    "pinyin": "guònián",
    "part_of_speech": "VA",
    "meaning": "ăn tết"
  },
  {
    "chinese": "過去",
    "level": "A2",
    "pinyin": "guòqù",
    "part_of_speech": "N",
    "meaning": "quá khứ"
  },
  {
    "chinese": "過去",
    "level": "A2",
    "pinyin": "guòqù",
    "part_of_speech": "VA",
    "meaning": "đi qua ( bên kia )"
  },
  {
    "chinese": "故事",
    "level": "A2",
    "pinyin": "gùshì",
    "part_of_speech": "N",
    "meaning": "câu chuyện"
  },
  {
    "chinese": "還",
    "level": "A2",
    "pinyin": "hái",
    "part_of_speech": "Adv",
    "meaning": "vẫn, còn"
  },
  {
    "chinese": "海",
    "level": "A2",
    "pinyin": "hǎi",
    "part_of_speech": "N",
    "meaning": "biển"
  },
  {
    "chinese": "害怕",
    "level": "A2",
    "pinyin": "hàipà",
    "part_of_speech": "VS",
    "meaning": "e sợ"
  },
  {
    "chinese": "漢堡",
    "level": "A2",
    "pinyin": "hànbǎo",
    "part_of_speech": "N",
    "meaning": "hamburger"
  },
  {
    "chinese": "韓國",
    "level": "A2",
    "pinyin": "hánguó",
    "part_of_speech": "N",
    "meaning": "Hàn Quốc"
  },
  {
    "chinese": "漢語",
    "level": "A2",
    "pinyin": "hànyǔ",
    "part_of_speech": "N",
    "meaning": "tiếng Hán"
  },
  {
    "chinese": "漢字",
    "level": "A2",
    "pinyin": "hànzì",
    "part_of_speech": "N",
    "meaning": "chữ Hán"
  },
  {
    "chinese": "好看",
    "level": "A2",
    "pinyin": "hǎokàn",
    "part_of_speech": "VS",
    "meaning": "xinh đẹp"
  },
  {
    "chinese": "河",
    "level": "A2",
    "pinyin": "hé",
    "part_of_speech": "N",
    "meaning": "sông"
  },
  {
    "chinese": "盒子",
    "level": "A2",
    "pinyin": "hézi",
    "part_of_speech": "N",
    "meaning": "cái hộp"
  },
  {
    "chinese": "黑",
    "level": "A2",
    "pinyin": "hēi",
    "part_of_speech": "VS",
    "meaning": "đen"
  },
  {
    "chinese": "黑色",
    "level": "A2",
    "pinyin": "hēisè",
    "part_of_speech": "N",
    "meaning": "màu đen"
  },
  {
    "chinese": "紅",
    "level": "A2",
    "pinyin": "hóng",
    "part_of_speech": "VS",
    "meaning": "đỏ"
  },
  {
    "chinese": "紅包",
    "level": "A2",
    "pinyin": "hóngbāo",
    "part_of_speech": "N",
    "meaning": "bao lì xì"
  },
  {
    "chinese": "紅茶",
    "level": "A2",
    "pinyin": "hóngchá",
    "part_of_speech": "N",
    "meaning": "hồng trà"
  },
  {
    "chinese": "紅綠燈",
    "level": "A2",
    "pinyin": "hónglǜdēng",
    "part_of_speech": "N",
    "meaning": "đèn xanh đỏ"
  },
  {
    "chinese": "後來",
    "level": "A2",
    "pinyin": "hòulái",
    "part_of_speech": "N",
    "meaning": "về sau"
  },
  {
    "chinese": "護士",
    "level": "A2",
    "pinyin": "hùshì",
    "part_of_speech": "N",
    "meaning": "y tá"
  },
  {
    "chinese": "畫家",
    "level": "A2",
    "pinyin": "huàjiā",
    "part_of_speech": "N",
    "meaning": "họa sỹ"
  },
  {
    "chinese": "黃",
    "level": "A2",
    "pinyin": "huáng",
    "part_of_speech": "VS",
    "meaning": "vàng"
  },
  {
    "chinese": "花園",
    "level": "A2",
    "pinyin": "huāyuán",
    "part_of_speech": "N",
    "meaning": "vườn hoa"
  },
  {
    "chinese": "滑雪",
    "level": "A2",
    "pinyin": "huáxuě",
    "part_of_speech": "VA",
    "meaning": "trượt tuyết"
  },
  {
    "chinese": "會",
    "level": "A2",
    "pinyin": "huì",
    "part_of_speech": "Adv",
    "meaning": "sẽ"
  },
  {
    "chinese": "回答",
    "level": "A2",
    "pinyin": "huídá",
    "part_of_speech": "VA",
    "meaning": "trả lời"
  },
  {
    "chinese": "活",
    "level": "A2",
    "pinyin": "huó",
    "part_of_speech": "VS",
    "meaning": "sống"
  },
  {
    "chinese": "或",
    "level": "A2",
    "pinyin": "huò",
    "part_of_speech": "Conj",
    "meaning": "hoặc"
  },
  {
    "chinese": "或是",
    "level": "A2",
    "pinyin": "huòshì",
    "part_of_speech": "Conj",
    "meaning": "hoặc là"
  },
  {
    "chinese": "機會",
    "level": "A2",
    "pinyin": "jīhuì",
    "part_of_speech": "N",
    "meaning": "cơ hội"
  },
  {
    "chinese": "記",
    "level": "A2",
    "pinyin": "jì",
    "part_of_speech": "VA",
    "meaning": "ghi chép, nhớ"
  },
  {
    "chinese": "計程車",
    "level": "A2",
    "pinyin": "jìchéngchē",
    "part_of_speech": "N",
    "meaning": "taxi"
  },
  {
    "chinese": "計畫",
    "level": "A2",
    "pinyin": "jìhuà",
    "part_of_speech": "N",
    "meaning": "kế hoạch"
  },
  {
    "chinese": "計畫",
    "level": "A2",
    "pinyin": "jìhuà",
    "part_of_speech": "VA",
    "meaning": "dự định, lặp kế hoạch"
  },
  {
    "chinese": "家庭",
    "level": "A2",
    "pinyin": "jiātíng",
    "part_of_speech": "N",
    "meaning": "gia đình"
  },
  {
    "chinese": "簡單",
    "level": "A2",
    "pinyin": "jiǎndān",
    "part_of_speech": "VS",
    "meaning": "đơn giản"
  },
  {
    "chinese": "件",
    "level": "A2",
    "pinyin": "jiàn",
    "part_of_speech": "M",
    "meaning": "cái ( áo, quần, việc, quà )"
  },
  {
    "chinese": "講話",
    "level": "A2",
    "pinyin": "jiǎnghuà",
    "part_of_speech": "VA",
    "meaning": "nói chuyện"
  },
  {
    "chinese": "教",
    "level": "A2",
    "pinyin": "jiāo",
    "part_of_speech": "VA",
    "meaning": "dạy"
  },
  {
    "chinese": "交",
    "level": "A2",
    "pinyin": "jiāo",
    "part_of_speech": "VA",
    "meaning": "giao, nộp"
  },
  {
    "chinese": "餃子",
    "level": "A2",
    "pinyin": "jiǎozi",
    "part_of_speech": "N",
    "meaning": "há cảo"
  },
  {
    "chinese": "結婚",
    "level": "A2",
    "pinyin": "jiéhūn",
    "part_of_speech": "VA",
    "meaning": "kết hôn"
  },
  {
    "chinese": "節目",
    "level": "A2",
    "pinyin": "jiémù",
    "part_of_speech": "N",
    "meaning": "tiết mục"
  },
  {
    "chinese": "解決",
    "level": "A2",
    "pinyin": "jiějué",
    "part_of_speech": "VA",
    "meaning": "giải quyết"
  },
  {
    "chinese": "借",
    "level": "A2",
    "pinyin": "jiè",
    "part_of_speech": "VA",
    "meaning": "mượn, cho mượn"
  },
  {
    "chinese": "斤",
    "level": "A2",
    "pinyin": "jīn",
    "part_of_speech": "M",
    "meaning": "cân ( 500gr )"
  },
  {
    "chinese": "經過",
    "level": "A2",
    "pinyin": "jīngguò",
    "part_of_speech": "VA",
    "meaning": "trãi qua"
  },
  {
    "chinese": "員警",
    "level": "A2",
    "pinyin": "jǐngchá",
    "part_of_speech": "N",
    "meaning": "cảnh sát"
  },
  {
    "chinese": "緊張",
    "level": "A2",
    "pinyin": "jǐnzhāng",
    "part_of_speech": "VS",
    "meaning": "căng thẳng"
  },
  {
    "chinese": "就要",
    "level": "A2",
    "pinyin": "jiùyào",
    "part_of_speech": "Adv",
    "meaning": "sắp sửa"
  },
  {
    "chinese": "決定",
    "level": "A2",
    "pinyin": "juédìng",
    "part_of_speech": "VA",
    "meaning": "quyết định"
  },
  {
    "chinese": "句子",
    "level": "A2",
    "pinyin": "jùzi",
    "part_of_speech": "N",
    "meaning": "câu"
  },
  {
    "chinese": "開始",
    "level": "A2",
    "pinyin": "kāishǐ",
    "part_of_speech": "VA",
    "meaning": "bắt đầu"
  },
  {
    "chinese": "開水",
    "level": "A2",
    "pinyin": "kāishuǐ",
    "part_of_speech": "N",
    "meaning": "nước chín"
  },
  {
    "chinese": "開心",
    "level": "A2",
    "pinyin": "kāixīn",
    "part_of_speech": "VS",
    "meaning": "vui vẻ"
  },
  {
    "chinese": "開學",
    "level": "A2",
    "pinyin": "kāixué",
    "part_of_speech": "VS",
    "meaning": "vào học"
  },
  {
    "chinese": "看到",
    "level": "A2",
    "pinyin": "kàndào",
    "part_of_speech": "VA",
    "meaning": "nhìn được"
  },
  {
    "chinese": "看見",
    "level": "A2",
    "pinyin": "kànjiàn",
    "part_of_speech": "VA",
    "meaning": "nhìn thấy"
  },
  {
    "chinese": "烤",
    "level": "A2",
    "pinyin": "kǎo",
    "part_of_speech": "VA",
    "meaning": "nướng, quay"
  },
  {
    "chinese": "棵",
    "level": "A2",
    "pinyin": "kē",
    "part_of_speech": "M",
    "meaning": "cây ( thông, táo, lê )"
  },
  {
    "chinese": "科學",
    "level": "A2",
    "pinyin": "kēxué",
    "part_of_speech": "N",
    "meaning": "khoa học"
  },
  {
    "chinese": "渴",
    "level": "A2",
    "pinyin": "kě",
    "part_of_speech": "VS",
    "meaning": "khát"
  },
  {
    "chinese": "可愛",
    "level": "A2",
    "pinyin": "kěài",
    "part_of_speech": "VS",
    "meaning": "dễ thương"
  },
  {
    "chinese": "課本",
    "level": "A2",
    "pinyin": "kèběn",
    "part_of_speech": "N",
    "meaning": "sách giáo khoa"
  },
  {
    "chinese": "客氣",
    "level": "A2",
    "pinyin": "kèqì",
    "part_of_speech": "VS",
    "meaning": "khách sáo"
  },
  {
    "chinese": "客人",
    "level": "A2",
    "pinyin": "kèrén",
    "part_of_speech": "N",
    "meaning": "khách"
  },
  {
    "chinese": "課文",
    "level": "A2",
    "pinyin": "kèwén",
    "part_of_speech": "N",
    "meaning": "bài học"
  },
  {
    "chinese": "空氣",
    "level": "A2",
    "pinyin": "kōngqì",
    "part_of_speech": "N",
    "meaning": "không khí"
  },
  {
    "chinese": "口",
    "level": "A2",
    "pinyin": "kǒu",
    "part_of_speech": "M",
    "meaning": "miệng, ngụm"
  },
  {
    "chinese": "哭",
    "level": "A2",
    "pinyin": "kū",
    "part_of_speech": "VA",
    "meaning": "khóc"
  },
  {
    "chinese": "苦",
    "level": "A2",
    "pinyin": "kǔ",
    "part_of_speech": "VS",
    "meaning": "khổ"
  },
  {
    "chinese": "塊",
    "level": "A2",
    "pinyin": "kuài",
    "part_of_speech": "M",
    "meaning": "đồng, miếng, cục"
  },
  {
    "chinese": "筷子",
    "level": "A2",
    "pinyin": "kuàizi",
    "part_of_speech": "N",
    "meaning": "đũa"
  },
  {
    "chinese": "拉",
    "level": "A2",
    "pinyin": "lā",
    "part_of_speech": "VA",
    "meaning": "kéo"
  },
  {
    "chinese": "藍",
    "level": "A2",
    "pinyin": "lán",
    "part_of_speech": "VS",
    "meaning": "xanh lam"
  },
  {
    "chinese": "藍色",
    "level": "A2",
    "pinyin": "lánsè",
    "part_of_speech": "N",
    "meaning": "màu xanh lam"
  },
  {
    "chinese": "老",
    "level": "A2",
    "pinyin": "lǎo",
    "part_of_speech": "VS",
    "meaning": "già, cũ"
  },
  {
    "chinese": "老人",
    "level": "A2",
    "pinyin": "lǎorén",
    "part_of_speech": "N",
    "meaning": "người già"
  },
  {
    "chinese": "裡",
    "level": "A2",
    "pinyin": "lǐ",
    "part_of_speech": "N",
    "meaning": "trong, bên trong"
  },
  {
    "chinese": "裡邊",
    "level": "A2",
    "pinyin": "lǐbiān",
    "part_of_speech": "N",
    "meaning": "bên trong"
  },
  {
    "chinese": "禮物",
    "level": "A2",
    "pinyin": "lǐwù",
    "part_of_speech": "N",
    "meaning": "quà"
  },
  {
    "chinese": "臉",
    "level": "A2",
    "pinyin": "liǎn",
    "part_of_speech": "N",
    "meaning": "mặt"
  },
  {
    "chinese": "練習",
    "level": "A2",
    "pinyin": "liànxí",
    "part_of_speech": "VA",
    "meaning": "luyện tập"
  },
  {
    "chinese": "涼",
    "level": "A2",
    "pinyin": "liáng",
    "part_of_speech": "VS",
    "meaning": "lạnh, nguội"
  },
  {
    "chinese": "涼快",
    "level": "A2",
    "pinyin": "liángkuài",
    "part_of_speech": "VS",
    "meaning": "mát mẻ"
  },
  {
    "chinese": "亮",
    "level": "A2",
    "pinyin": "liàng",
    "part_of_speech": "VS",
    "meaning": "sáng"
  },
  {
    "chinese": "輛",
    "level": "A2",
    "pinyin": "liàng",
    "part_of_speech": "M",
    "meaning": "chiếc ( xe )"
  },
  {
    "chinese": "聊天",
    "level": "A2",
    "pinyin": "liáotiān",
    "part_of_speech": "VA",
    "meaning": "trò chuyện"
  },
  {
    "chinese": "零",
    "level": "A2",
    "pinyin": "líng",
    "part_of_speech": "Det",
    "meaning": "0, lẻ"
  },
  {
    "chinese": "留",
    "level": "A2",
    "pinyin": "liú",
    "part_of_speech": "VA",
    "meaning": "lưu, để lại, ở lại"
  },
  {
    "chinese": "樓",
    "level": "A2",
    "pinyin": "lóu",
    "part_of_speech": "N",
    "meaning": "lầu, tầng lầu"
  },
  {
    "chinese": "旅遊",
    "level": "A2",
    "pinyin": "lǚyóu",
    "part_of_speech": "VA",
    "meaning": "du lịch"
  },
  {
    "chinese": "綠",
    "level": "A2",
    "pinyin": "lǜ",
    "part_of_speech": "VS",
    "meaning": "xanh lục"
  },
  {
    "chinese": "亂",
    "level": "A2",
    "pinyin": "luàn",
    "part_of_speech": "VS",
    "meaning": "loạn, bậy"
  },
  {
    "chinese": "路上",
    "level": "A2",
    "pinyin": "lùshàng",
    "part_of_speech": "N",
    "meaning": "trên đường"
  },
  {
    "chinese": "麻煩",
    "level": "A2",
    "pinyin": "máfán",
    "part_of_speech": "N",
    "meaning": "phiền phức"
  },
  {
    "chinese": "麻煩",
    "level": "A2",
    "pinyin": "máfán",
    "part_of_speech": "VS",
    "meaning": "làm phiền"
  },
  {
    "chinese": "馬",
    "level": "A2",
    "pinyin": "mǎ",
    "part_of_speech": "N",
    "meaning": "ngựa"
  },
  {
    "chinese": "馬上",
    "level": "A2",
    "pinyin": "mǎshàng",
    "part_of_speech": "Adv",
    "meaning": "lặp tức"
  },
  {
    "chinese": "慢",
    "level": "A2",
    "pinyin": "màn",
    "part_of_speech": "VS",
    "meaning": "chậm"
  },
  {
    "chinese": "毛衣",
    "level": "A2",
    "pinyin": "máoyī",
    "part_of_speech": "N",
    "meaning": "áo len"
  },
  {
    "chinese": "帽子",
    "level": "A2",
    "pinyin": "màozi",
    "part_of_speech": "N",
    "meaning": "nón"
  },
  {
    "chinese": "美",
    "level": "A2",
    "pinyin": "měi",
    "part_of_speech": "VS",
    "meaning": "đẹp"
  },
  {
    "chinese": "美麗",
    "level": "A2",
    "pinyin": "měilì",
    "part_of_speech": "VS",
    "meaning": "xinh đẹp"
  },
  {
    "chinese": "年輕",
    "level": "A2",
    "pinyin": "niánqīng",
    "part_of_speech": "VS",
    "meaning": "trẻ tuổi"
  },
  {
    "chinese": "念",
    "level": "A2",
    "pinyin": "niàn",
    "part_of_speech": "VA",
    "meaning": "đọc, học"
  },
  {
    "chinese": "小鳥",
    "level": "A2",
    "pinyin": "xiăo",
    "part_of_speech": "N",
    "meaning": "chim"
  },
  {
    "chinese": "努力",
    "level": "A2",
    "pinyin": "nǔlì",
    "part_of_speech": "VS",
    "meaning": "nổ lực, cố gắng"
  },
  {
    "chinese": "暖和",
    "level": "A2",
    "pinyin": "nuǎnhuo",
    "part_of_speech": "VS",
    "meaning": "ấm áp"
  },
  {
    "chinese": "爬",
    "level": "A2",
    "pinyin": "pá",
    "part_of_speech": "VA",
    "meaning": "leo, trèo"
  },
  {
    "chinese": "爬山",
    "level": "A2",
    "pinyin": "páshān",
    "part_of_speech": "VA",
    "meaning": "leo núi"
  },
  {
    "chinese": "怕",
    "level": "A2",
    "pinyin": "pà",
    "part_of_speech": "VS",
    "meaning": "sợ"
  },
  {
    "chinese": "拍",
    "level": "A2",
    "pinyin": "pāi",
    "part_of_speech": "VA",
    "meaning": "chụp hình, vỗ"
  },
  {
    "chinese": "盤",
    "level": "A2",
    "pinyin": "pán",
    "part_of_speech": "M",
    "meaning": "dĩa, đĩa, mâm"
  },
  {
    "chinese": "盤子",
    "level": "A2",
    "pinyin": "pánzi",
    "part_of_speech": "N",
    "meaning": "cái dĩa"
  },
  {
    "chinese": "旁邊",
    "level": "A2",
    "pinyin": "pángbiān",
    "part_of_speech": "N",
    "meaning": "bênh cạnh"
  },
  {
    "chinese": "胖",
    "level": "A2",
    "pinyin": "pàng",
    "part_of_speech": "VS",
    "meaning": "mập"
  },
  {
    "chinese": "跑",
    "level": "A2",
    "pinyin": "pǎo",
    "part_of_speech": "VA",
    "meaning": "chạy"
  },
  {
    "chinese": "片",
    "level": "A2",
    "pinyin": "piàn",
    "part_of_speech": "M",
    "meaning": "miếng, lát, mãnh"
  },
  {
    "chinese": "蘋果",
    "level": "A2",
    "pinyin": "píngguǒ",
    "part_of_speech": "N",
    "meaning": "táo"
  },
  {
    "chinese": "瓶子",
    "level": "A2",
    "pinyin": "píngzi",
    "part_of_speech": "N",
    "meaning": "cái chai,cái bình"
  },
  {
    "chinese": "破",
    "level": "A2",
    "pinyin": "pò",
    "part_of_speech": "VS",
    "meaning": "bễ, vỡ"
  },
  {
    "chinese": "奇怪",
    "level": "A2",
    "pinyin": "qíguài",
    "part_of_speech": "VS",
    "meaning": "kì cục"
  },
  {
    "chinese": "汽水",
    "level": "A2",
    "pinyin": "qìshuǐ",
    "part_of_speech": "N",
    "meaning": "nước có ga"
  },
  {
    "chinese": "起",
    "level": "A2",
    "pinyin": "qǐ",
    "part_of_speech": "VA",
    "meaning": "dậy, lên"
  },
  {
    "chinese": "起來",
    "level": "A2",
    "pinyin": "qǐlái",
    "part_of_speech": "VA",
    "meaning": "dậy, mọc"
  },
  {
    "chinese": "汽車",
    "level": "A2",
    "pinyin": "qìchē",
    "part_of_speech": "N",
    "meaning": "xe hơi"
  },
  {
    "chinese": "鉛筆",
    "level": "A2",
    "pinyin": "qiānbǐ",
    "part_of_speech": "N",
    "meaning": "bút chì, viết chì"
  },
  {
    "chinese": "前天",
    "level": "A2",
    "pinyin": "qiántiān",
    "part_of_speech": "N",
    "meaning": "hôm kia"
  },
  {
    "chinese": "牆",
    "level": "A2",
    "pinyin": "qiáng",
    "part_of_speech": "N",
    "meaning": "tường"
  },
  {
    "chinese": "橋",
    "level": "A2",
    "pinyin": "qiáo",
    "part_of_speech": "N",
    "meaning": "cầu"
  },
  {
    "chinese": "巧克力",
    "level": "A2",
    "pinyin": "qiǎokèlì",
    "part_of_speech": "N",
    "meaning": "sô cô la"
  },
  {
    "chinese": "親",
    "level": "A2",
    "pinyin": "qīn",
    "part_of_speech": "VA",
    "meaning": "hôn, ruột thịt"
  },
  {
    "chinese": "輕",
    "level": "A2",
    "pinyin": "qīng",
    "part_of_speech": "VS",
    "meaning": "nhẹ"
  },
  {
    "chinese": "清楚",
    "level": "A2",
    "pinyin": "qīngchǔ",
    "part_of_speech": "VS",
    "meaning": "rõ ràng"
  },
  {
    "chinese": "晴天",
    "level": "A2",
    "pinyin": "qíngtiān",
    "part_of_speech": "N",
    "meaning": "trời nắng"
  },
  {
    "chinese": "請客",
    "level": "A2",
    "pinyin": "qǐngkè",
    "part_of_speech": "VA",
    "meaning": "mời khách, khao, bao"
  },
  {
    "chinese": "慶祝",
    "level": "A2",
    "pinyin": "qìngzhù",
    "part_of_speech": "VA",
    "meaning": "chúc mừng, ăn mừng"
  },
  {
    "chinese": "全部",
    "level": "A2",
    "pinyin": "quánbù",
    "part_of_speech": "Det",
    "meaning": "toàn bộ"
  },
  {
    "chinese": "裙子",
    "level": "A2",
    "pinyin": "qúnzi",
    "part_of_speech": "N",
    "meaning": "cái váy, đầm"
  },
  {
    "chinese": "然後",
    "level": "A2",
    "pinyin": "ránhòu",
    "part_of_speech": "Adv",
    "meaning": "sau đó"
  },
  {
    "chinese": "讓",
    "level": "A2",
    "pinyin": "ràng",
    "part_of_speech": "Prep",
    "meaning": "để, nhường, kêu, bảo"
  },
  {
    "chinese": "認為",
    "level": "A2",
    "pinyin": "rènwéi",
    "part_of_speech": "VA",
    "meaning": "cho rằng"
  },
  {
    "chinese": "認真",
    "level": "A2",
    "pinyin": "rènzhēn",
    "part_of_speech": "VS",
    "meaning": "nghiêm túc"
  },
  {
    "chinese": "日",
    "level": "A2",
    "pinyin": "rì",
    "part_of_speech": "N",
    "meaning": "ngày"
  },
  {
    "chinese": "日子",
    "level": "A2",
    "pinyin": "rìzi",
    "part_of_speech": "N",
    "meaning": "ngày ( lễ )"
  },
  {
    "chinese": "如果",
    "level": "A2",
    "pinyin": "rúguǒ",
    "part_of_speech": "Conj",
    "meaning": "nếu"
  },
  {
    "chinese": "森林",
    "level": "A2",
    "pinyin": "sēnlín",
    "part_of_speech": "N",
    "meaning": "rừng rậm"
  },
  {
    "chinese": "沙發",
    "level": "A2",
    "pinyin": "shāfā",
    "part_of_speech": "N",
    "meaning": "ghế salon"
  },
  {
    "chinese": "上來",
    "level": "A2",
    "pinyin": "shànglái",
    "part_of_speech": "VA",
    "meaning": "lên đây"
  },
  {
    "chinese": "上去",
    "level": "A2",
    "pinyin": "shàngqù",
    "part_of_speech": "VA",
    "meaning": "đi lên đó"
  },
  {
    "chinese": "上學",
    "level": "A2",
    "pinyin": "shàngxué",
    "part_of_speech": "VA",
    "meaning": "đi học ở trường"
  },
  {
    "chinese": "生活",
    "level": "A2",
    "pinyin": "shēnghuó",
    "part_of_speech": "N",
    "meaning": "cuộc sống"
  },
  {
    "chinese": "生活",
    "level": "A2",
    "pinyin": "shēnghuó",
    "part_of_speech": "VA",
    "meaning": "sinh sống"
  },
  {
    "chinese": "生氣",
    "level": "A2",
    "pinyin": "shēngqì",
    "part_of_speech": "VS",
    "meaning": "giận"
  },
  {
    "chinese": "聲音",
    "level": "A2",
    "pinyin": "shēngyīn",
    "part_of_speech": "N",
    "meaning": "âm thanh"
  },
  {
    "chinese": "事",
    "level": "A2",
    "pinyin": "shì",
    "part_of_speech": "N",
    "meaning": "việc"
  },
  {
    "chinese": "試",
    "level": "A2",
    "pinyin": "shì",
    "part_of_speech": "VA",
    "meaning": "thử"
  },
  {
    "chinese": "市場",
    "level": "A2",
    "pinyin": "shìchǎng",
    "part_of_speech": "N",
    "meaning": "chợ"
  },
  {
    "chinese": "世界",
    "level": "A2",
    "pinyin": "shìjiè",
    "part_of_speech": "N",
    "meaning": "thế giới"
  },
  {
    "chinese": "事情",
    "level": "A2",
    "pinyin": "shìqíng",
    "part_of_speech": "N",
    "meaning": "sự việc"
  },
  {
    "chinese": "石頭",
    "level": "A2",
    "pinyin": "shítóu",
    "part_of_speech": "N",
    "meaning": "đá"
  },
  {
    "chinese": "食物",
    "level": "A2",
    "pinyin": "shíwù",
    "part_of_speech": "N",
    "meaning": "thức ăn"
  },
  {
    "chinese": "手套",
    "level": "A2",
    "pinyin": "shǒutào",
    "part_of_speech": "N",
    "meaning": "găng tay"
  },
  {
    "chinese": "瘦",
    "level": "A2",
    "pinyin": "shòu",
    "part_of_speech": "VS",
    "meaning": "ốm"
  },
  {
    "chinese": "書桌",
    "level": "A2",
    "pinyin": "shūzhuō",
    "part_of_speech": "N",
    "meaning": "bàn đọc sách"
  },
  {
    "chinese": "數",
    "level": "A2",
    "pinyin": "shǔ",
    "part_of_speech": "VA",
    "meaning": "đếm"
  },
  {
    "chinese": "刷牙",
    "level": "A2",
    "pinyin": "shuāyá",
    "part_of_speech": "VA",
    "meaning": "đánh răng"
  },
  {
    "chinese": "睡",
    "level": "A2",
    "pinyin": "shuì",
    "part_of_speech": "VA",
    "meaning": "ngủ"
  },
  {
    "chinese": "酸",
    "level": "A2",
    "pinyin": "suān",
    "part_of_speech": "VS",
    "meaning": "chua"
  },
  {
    "chinese": "雖然",
    "level": "A2",
    "pinyin": "suīrán",
    "part_of_speech": "Conj",
    "meaning": "tuy"
  },
  {
    "chinese": "隨便",
    "level": "A2",
    "pinyin": "suíbiàn",
    "part_of_speech": "VS",
    "meaning": "tùy, tùy tiện"
  },
  {
    "chinese": "所有",
    "level": "A2",
    "pinyin": "suǒyǒu",
    "part_of_speech": "Det",
    "meaning": "tất cả"
  },
  {
    "chinese": "談",
    "level": "A2",
    "pinyin": "tán",
    "part_of_speech": "VA",
    "meaning": "trò chuyện"
  },
  {
    "chinese": "湯",
    "level": "A2",
    "pinyin": "tāng",
    "part_of_speech": "N",
    "meaning": "canh"
  },
  {
    "chinese": "湯匙",
    "level": "A2",
    "pinyin": "tāngchí",
    "part_of_speech": "N",
    "meaning": "muỗng canh"
  },
  {
    "chinese": "討厭",
    "level": "A2",
    "pinyin": "tǎoyàn",
    "part_of_speech": "VS",
    "meaning": "ghét, thấy ghét"
  },
  {
    "chinese": "套",
    "level": "A2",
    "pinyin": "tào",
    "part_of_speech": "M",
    "meaning": "bộ ( tem, quần áo )"
  },
  {
    "chinese": "疼",
    "level": "A2",
    "pinyin": "téng",
    "part_of_speech": "VS",
    "meaning": "đau, nhức"
  },
  {
    "chinese": "天天",
    "level": "A2",
    "pinyin": "tiāntiān",
    "part_of_speech": "Adv",
    "meaning": "ngày ngày"
  },
  {
    "chinese": "甜",
    "level": "A2",
    "pinyin": "tián",
    "part_of_speech": "VS",
    "meaning": "ngọt"
  },
  {
    "chinese": "條",
    "level": "A2",
    "pinyin": "tiáo",
    "part_of_speech": "M",
    "meaning": "con (cá, rắn), cái (quần, váy)"
  },
  {
    "chinese": "跳",
    "level": "A2",
    "pinyin": "tiào",
    "part_of_speech": "VA",
    "meaning": "nhảy"
  },
  {
    "chinese": "聽見",
    "level": "A2",
    "pinyin": "tīngjiàn",
    "part_of_speech": "VA",
    "meaning": "nghe thấy"
  },
  {
    "chinese": "聽說",
    "level": "A2",
    "pinyin": "tīngshuō",
    "part_of_speech": "VA",
    "meaning": "nghe nói"
  },
  {
    "chinese": "停",
    "level": "A2",
    "pinyin": "tíng",
    "part_of_speech": "VS",
    "meaning": "dừng"
  },
  {
    "chinese": "停車",
    "level": "A2",
    "pinyin": "tíngchē",
    "part_of_speech": "VA",
    "meaning": "dừng xe"
  },
  {
    "chinese": "通知",
    "level": "A2",
    "pinyin": "tōngzhī",
    "part_of_speech": "N",
    "meaning": "thông báo"
  },
  {
    "chinese": "通知",
    "level": "A2",
    "pinyin": "tōngzhī",
    "part_of_speech": "VA",
    "meaning": "thông báo"
  },
  {
    "chinese": "偷",
    "level": "A2",
    "pinyin": "tōu",
    "part_of_speech": "VA",
    "meaning": "trộm"
  },
  {
    "chinese": "頭髮",
    "level": "A2",
    "pinyin": "tóufǎ",
    "part_of_speech": "N",
    "meaning": "tóc"
  },
  {
    "chinese": "推",
    "level": "A2",
    "pinyin": "tuī",
    "part_of_speech": "VA",
    "meaning": "đẩy"
  },
  {
    "chinese": "腿",
    "level": "A2",
    "pinyin": "tuǐ",
    "part_of_speech": "N",
    "meaning": "chân, đùi"
  },
  {
    "chinese": "外套",
    "level": "A2",
    "pinyin": "wàitào",
    "part_of_speech": "N",
    "meaning": "áo khoác"
  },
  {
    "chinese": "危險",
    "level": "A2",
    "pinyin": "wéixiǎn",
    "part_of_speech": "VS",
    "meaning": "nguy hiểm"
  },
  {
    "chinese": "味道",
    "level": "A2",
    "pinyin": "wèidào",
    "part_of_speech": "N",
    "meaning": "mùi vị"
  },
  {
    "chinese": "無聊",
    "level": "A2",
    "pinyin": "wúliáo",
    "part_of_speech": "VS",
    "meaning": "chán, buồn chán"
  },
  {
    "chinese": "西瓜",
    "level": "A2",
    "pinyin": "xīguā",
    "part_of_speech": "N",
    "meaning": "dưa hấu"
  },
  {
    "chinese": "希望",
    "level": "A2",
    "pinyin": "xīwàng",
    "part_of_speech": "VS",
    "meaning": "hi vọng"
  },
  {
    "chinese": "習慣",
    "level": "A2",
    "pinyin": "xíguàn",
    "part_of_speech": "N",
    "meaning": "thói quen, quen"
  },
  {
    "chinese": "需要",
    "level": "A2",
    "pinyin": "xūyào",
    "part_of_speech": "VS",
    "meaning": "cần thiết"
  },
  {
    "chinese": "許多",
    "level": "A2",
    "pinyin": "xǔduō",
    "part_of_speech": "Det",
    "meaning": "rất nhiều"
  },
  {
    "chinese": "下來",
    "level": "A2",
    "pinyin": "xiàlái",
    "part_of_speech": "VA",
    "meaning": "xuống đây"
  },
  {
    "chinese": "下去",
    "level": "A2",
    "pinyin": "xiàqù",
    "part_of_speech": "VA",
    "meaning": "đi xuống"
  },
  {
    "chinese": "下雪",
    "level": "A2",
    "pinyin": "xiàxuě",
    "part_of_speech": "VA",
    "meaning": "trời tuyết"
  },
  {
    "chinese": "香",
    "level": "A2",
    "pinyin": "xiāng",
    "part_of_speech": "VS",
    "meaning": "thơm"
  },
  {
    "chinese": "鄉下",
    "level": "A2",
    "pinyin": "xiāngxià",
    "part_of_speech": "N",
    "meaning": "dưới quê"
  },
  {
    "chinese": "相信",
    "level": "A2",
    "pinyin": "xiāngxìn",
    "part_of_speech": "VS",
    "meaning": "tin tưởng"
  },
  {
    "chinese": "箱子",
    "level": "A2",
    "pinyin": "xiāngzi",
    "part_of_speech": "N",
    "meaning": "vali"
  },
  {
    "chinese": "向",
    "level": "A2",
    "pinyin": "xiàng",
    "part_of_speech": "Prep",
    "meaning": "hướng về"
  },
  {
    "chinese": "消息",
    "level": "A2",
    "pinyin": "xiāoxí",
    "part_of_speech": "N",
    "meaning": "tin tức"
  },
  {
    "chinese": "小說",
    "level": "A2",
    "pinyin": "xiǎoshuō",
    "part_of_speech": "N",
    "meaning": "tiểu thuyết"
  },
  {
    "chinese": "小偷",
    "level": "A2",
    "pinyin": "xiǎotōu",
    "part_of_speech": "N",
    "meaning": "kẻ trộm"
  },
  {
    "chinese": "小學",
    "level": "A2",
    "pinyin": "xiǎoxué",
    "part_of_speech": "N",
    "meaning": "tiểu học"
  },
  {
    "chinese": "笑",
    "level": "A2",
    "pinyin": "xiào",
    "part_of_speech": "VA",
    "meaning": "cười"
  },
  {
    "chinese": "笑話",
    "level": "A2",
    "pinyin": "xiàohuà",
    "part_of_speech": "N",
    "meaning": "chuyện cười"
  },
  {
    "chinese": "校長",
    "level": "A2",
    "pinyin": "xiàozhǎng",
    "part_of_speech": "N",
    "meaning": "hiệu trưởng"
  },
  {
    "chinese": "心",
    "level": "A2",
    "pinyin": "xīn",
    "part_of_speech": "N",
    "meaning": "tim"
  },
  {
    "chinese": "辛苦",
    "level": "A2",
    "pinyin": "xīnkǔ",
    "part_of_speech": "VS",
    "meaning": "cực khổ"
  },
  {
    "chinese": "新聞",
    "level": "A2",
    "pinyin": "xīnwén",
    "part_of_speech": "N",
    "meaning": "tin tức, thời sự"
  },
  {
    "chinese": "星星",
    "level": "A2",
    "pinyin": "xīngxīng",
    "part_of_speech": "N",
    "meaning": "ngôi sao"
  },
  {
    "chinese": "興趣",
    "level": "A2",
    "pinyin": "xìngqù",
    "part_of_speech": "N",
    "meaning": "sở thích, hứng thú"
  },
  {
    "chinese": "學習",
    "level": "A2",
    "pinyin": "xuéxí",
    "part_of_speech": "VA",
    "meaning": "học tập"
  },
  {
    "chinese": "雪",
    "level": "A2",
    "pinyin": "xuě",
    "part_of_speech": "N",
    "meaning": "tuyết"
  },
  {
    "chinese": "牙刷",
    "level": "A2",
    "pinyin": "yáshuā",
    "part_of_speech": "N",
    "meaning": "bàn chải đánh răng"
  },
  {
    "chinese": "顏色",
    "level": "A2",
    "pinyin": "yánsè",
    "part_of_speech": "N",
    "meaning": "màu sắc"
  },
  {
    "chinese": "眼鏡",
    "level": "A2",
    "pinyin": "yǎnjìng",
    "part_of_speech": "N",
    "meaning": "mắt kính"
  },
  {
    "chinese": "鑰匙",
    "level": "A2",
    "pinyin": "yàoshí",
    "part_of_speech": "N",
    "meaning": "chìa khóa"
  },
  {
    "chinese": "要是",
    "level": "A2",
    "pinyin": "yàoshì",
    "part_of_speech": "Conj",
    "meaning": "nếu như"
  },
  {
    "chinese": "羊",
    "level": "A2",
    "pinyin": "yáng",
    "part_of_speech": "N",
    "meaning": "con dê"
  },
  {
    "chinese": "樣子",
    "level": "A2",
    "pinyin": "yàngzi",
    "part_of_speech": "N",
    "meaning": "kiểu dáng, dáng vẻ"
  },
  {
    "chinese": "也許",
    "level": "A2",
    "pinyin": "yěxǔ",
    "part_of_speech": "Adv",
    "meaning": "có lẻ"
  },
  {
    "chinese": "爺爺",
    "level": "A2",
    "pinyin": "yéye",
    "part_of_speech": "N",
    "meaning": "ông nội"
  },
  {
    "chinese": "一半",
    "level": "A2",
    "pinyin": "yíbàn",
    "part_of_speech": "Det",
    "meaning": "1 nửa"
  },
  {
    "chinese": "一邊",
    "level": "A2",
    "pinyin": "yìbiān",
    "part_of_speech": "Adv",
    "meaning": "vừa…vừa…"
  },
  {
    "chinese": "一會兒",
    "level": "A2",
    "pinyin": "yíhuìér",
    "part_of_speech": "N",
    "meaning": "một hồi, tý nữa"
  },
  {
    "chinese": "飲料",
    "level": "A2",
    "pinyin": "yǐnliào",
    "part_of_speech": "N",
    "meaning": "thức uống"
  },
  {
    "chinese": "陰天",
    "level": "A2",
    "pinyin": "yīntiān",
    "part_of_speech": "N",
    "meaning": "trời âm u"
  },
  {
    "chinese": "應該",
    "level": "A2",
    "pinyin": "yīnggāi",
    "part_of_speech": "Adv",
    "meaning": "nên"
  },
  {
    "chinese": "永遠",
    "level": "A2",
    "pinyin": "yǒngyuǎn",
    "part_of_speech": "Adv",
    "meaning": "mãi mãi"
  },
  {
    "chinese": "有趣",
    "level": "A2",
    "pinyin": "yǒuqù",
    "part_of_speech": "VS",
    "meaning": "thú vị"
  },
  {
    "chinese": "有用",
    "level": "A2",
    "pinyin": "yǒuyòng",
    "part_of_speech": "VS",
    "meaning": "hữu dụng"
  },
  {
    "chinese": "又",
    "level": "A2",
    "pinyin": "yòu",
    "part_of_speech": "Conj",
    "meaning": "vừa…vừa…"
  },
  {
    "chinese": "雨",
    "level": "A2",
    "pinyin": "yǔ",
    "part_of_speech": "N",
    "meaning": "mưa"
  },
  {
    "chinese": "圓",
    "level": "A2",
    "pinyin": "yuán",
    "part_of_speech": "VS",
    "meaning": "tròn"
  },
  {
    "chinese": "原來",
    "level": "A2",
    "pinyin": "yuánlái",
    "part_of_speech": "Adv",
    "meaning": "hóa ra, thì ra"
  },
  {
    "chinese": "院子",
    "level": "A2",
    "pinyin": "yuànzi",
    "part_of_speech": "N",
    "meaning": "sân"
  },
  {
    "chinese": "願意",
    "level": "A2",
    "pinyin": "yuànyì",
    "part_of_speech": "VS",
    "meaning": "chịu"
  },
  {
    "chinese": "約",
    "level": "A2",
    "pinyin": "yuē",
    "part_of_speech": "VA",
    "meaning": "hẹn"
  },
  {
    "chinese": "越來越",
    "level": "A2",
    "pinyin": "yuèláiyuè",
    "part_of_speech": "Adv",
    "meaning": "ngày càng"
  },
  {
    "chinese": "月亮",
    "level": "A2",
    "pinyin": "yuèliàng",
    "part_of_speech": "N",
    "meaning": "mặt trăng"
  },
  {
    "chinese": "語法",
    "level": "A2",
    "pinyin": "yǔfǎ",
    "part_of_speech": "N",
    "meaning": "ngữ pháp"
  },
  {
    "chinese": "語言",
    "level": "A2",
    "pinyin": "yǔyán",
    "part_of_speech": "N",
    "meaning": "ngôn ngữ"
  },
  {
    "chinese": "雲",
    "level": "A2",
    "pinyin": "yún",
    "part_of_speech": "N",
    "meaning": "mây"
  },
  {
    "chinese": "髒",
    "level": "A2",
    "pinyin": "zāng",
    "part_of_speech": "VS",
    "meaning": "dơ, bẩn"
  },
  {
    "chinese": "炸雞",
    "level": "A2",
    "pinyin": "zhájī",
    "part_of_speech": "N",
    "meaning": "gà rán"
  },
  {
    "chinese": "張",
    "level": "A2",
    "pinyin": "zhāng",
    "part_of_speech": "M",
    "meaning": "tấm, tờ, miếng"
  },
  {
    "chinese": "著急",
    "level": "A2",
    "pinyin": "zhāojí",
    "part_of_speech": "VS",
    "meaning": "sốt ruột"
  },
  {
    "chinese": "著",
    "level": "A2",
    "pinyin": "zhe",
    "part_of_speech": "P",
    "meaning": "vẫn đang, có"
  },
  {
    "chinese": "這邊",
    "level": "A2",
    "pinyin": "zhèbiān",
    "part_of_speech": "N",
    "meaning": "bên này"
  },
  {
    "chinese": "真",
    "level": "A2",
    "pinyin": "zhēn",
    "part_of_speech": "Adv",
    "meaning": "thật là"
  },
  {
    "chinese": "真",
    "level": "A2",
    "pinyin": "zhēn",
    "part_of_speech": "VS",
    "meaning": "thật"
  },
  {
    "chinese": "正在",
    "level": "A2",
    "pinyin": "zhèngzài",
    "part_of_speech": "Adv",
    "meaning": "đang"
  },
  {
    "chinese": "枝",
    "level": "A2",
    "pinyin": "zhī",
    "part_of_speech": "M",
    "meaning": "cây ( bút )"
  },
  {
    "chinese": "只",
    "level": "A2",
    "pinyin": "zhī",
    "part_of_speech": "M",
    "meaning": "con ( chó, mèo )"
  },
  {
    "chinese": "只",
    "level": "A2",
    "pinyin": "zhǐ",
    "part_of_speech": "Adv",
    "meaning": "chỉ"
  },
  {
    "chinese": "只好",
    "level": "A2",
    "pinyin": "zhǐhǎo",
    "part_of_speech": "Adv",
    "meaning": "chỉ đành, đành phải"
  },
  {
    "chinese": "中間",
    "level": "A2",
    "pinyin": "zhōngjiān",
    "part_of_speech": "N",
    "meaning": "ở giữa"
  },
  {
    "chinese": "鐘頭",
    "level": "A2",
    "pinyin": "zhōngtóu",
    "part_of_speech": "N",
    "meaning": "tiếng đồng hồ"
  },
  {
    "chinese": "中心",
    "level": "A2",
    "pinyin": "zhōngxīn",
    "part_of_speech": "N",
    "meaning": "trung tâm"
  },
  {
    "chinese": "種",
    "level": "A2",
    "pinyin": "zhǒng",
    "part_of_speech": "M",
    "meaning": "loại"
  },
  {
    "chinese": "種",
    "level": "A2",
    "pinyin": "zhòng",
    "part_of_speech": "VA",
    "meaning": "trồng"
  },
  {
    "chinese": "豬",
    "level": "A2",
    "pinyin": "zhū",
    "part_of_speech": "N",
    "meaning": "heo"
  },
  {
    "chinese": "煮",
    "level": "A2",
    "pinyin": "zhǔ",
    "part_of_speech": "VA",
    "meaning": "nấu"
  },
  {
    "chinese": "祝",
    "level": "A2",
    "pinyin": "zhù",
    "part_of_speech": "VA",
    "meaning": "chúc"
  },
  {
    "chinese": "裝",
    "level": "A2",
    "pinyin": "zhuāng",
    "part_of_speech": "VA",
    "meaning": "đựng, lắp ( máy )"
  },
  {
    "chinese": "準備",
    "level": "A2",
    "pinyin": "zhǔnbèi",
    "part_of_speech": "VA",
    "meaning": "chuẩn bị"
  },
  {
    "chinese": "注意",
    "level": "A2",
    "pinyin": "zhùyì",
    "part_of_speech": "VS",
    "meaning": "chú ý"
  },
  {
    "chinese": "字",
    "level": "A2",
    "pinyin": "zì",
    "part_of_speech": "N",
    "meaning": "chữ"
  },
  {
    "chinese": "總是",
    "level": "A2",
    "pinyin": "zǒngshì",
    "part_of_speech": "Adv",
    "meaning": "luôn, cứ luôn"
  },
  {
    "chinese": "租",
    "level": "A2",
    "pinyin": "zū",
    "part_of_speech": "VA",
    "meaning": "thuê"
  },
  {
    "chinese": "嘴巴",
    "level": "A2",
    "pinyin": "zuǐbā",
    "part_of_speech": "N",
    "meaning": "cái miệng"
  },
  {
    "chinese": "做菜",
    "level": "A2",
    "pinyin": "zuòcài",
    "part_of_speech": "VA",
    "meaning": "làm đồ ăn"
  },
  {
    "chinese": "作業",
    "level": "A2",
    "pinyin": "zuòyè",
    "part_of_speech": "N",
    "meaning": "bài tập về nhà"
  },
  {
    "chinese": "阿姨",
    "level": "B1",
    "pinyin": "āyí",
    "part_of_speech": "N",
    "meaning": "Dì, cô"
  },
  {
    "chinese": "哎",
    "level": "B1",
    "pinyin": "āi",
    "part_of_speech": "Ptc",
    "meaning": "Chao ôi, ơ kìa"
  },
  {
    "chinese": "唉",
    "level": "B1",
    "pinyin": "āi",
    "part_of_speech": "Ptc",
    "meaning": "Hừ (thán từ, tỏ ý ái ngại/thở dài)"
  },
  {
    "chinese": "愛",
    "level": "B1",
    "pinyin": "ài",
    "part_of_speech": "N",
    "meaning": "Yêu"
  },
  {
    "chinese": "愛情",
    "level": "B1",
    "pinyin": "àiqíng",
    "part_of_speech": "N",
    "meaning": "Tình yêu"
  },
  {
    "chinese": "愛惜",
    "level": "B1",
    "pinyin": "àixí",
    "part_of_speech": "Vst",
    "meaning": "Yêu quý, quý trọng"
  },
  {
    "chinese": "愛心",
    "level": "B1",
    "pinyin": "àixīn",
    "part_of_speech": "N",
    "meaning": "Tình yêu/ biểu tượng trái tim"
  },
  {
    "chinese": "安定",
    "level": "B1",
    "pinyin": "āndìng",
    "part_of_speech": "Vs",
    "meaning": "ổn định, yên ổn"
  },
  {
    "chinese": "安排",
    "level": "B1",
    "pinyin": "ānpái",
    "part_of_speech": "N",
    "meaning": "Sự sắp xếp"
  },
  {
    "chinese": "安排",
    "level": "B1",
    "pinyin": "ānpái",
    "part_of_speech": "V",
    "meaning": "Sắp đặt, sắp xếp"
  },
  {
    "chinese": "安心",
    "level": "B1",
    "pinyin": "ānxīn",
    "part_of_speech": "Vs",
    "meaning": "Rắp tâm, mưu tính"
  },
  {
    "chinese": "按",
    "level": "B1",
    "pinyin": "àn",
    "part_of_speech": "Prep",
    "meaning": "Theo, dựa vào…"
  },
  {
    "chinese": "按照",
    "level": "B1",
    "pinyin": "ànzhào",
    "part_of_speech": "Prep",
    "meaning": "Dựa theo, căn cứ theo…"
  },
  {
    "chinese": "巴士",
    "level": "B1",
    "pinyin": "bāshì",
    "part_of_speech": "N",
    "meaning": "Xe buýt"
  },
  {
    "chinese": "把",
    "level": "B1",
    "pinyin": "bǎ",
    "part_of_speech": "M",
    "meaning": "Cán, quai, tay cầm, cuống"
  },
  {
    "chinese": "把握",
    "level": "B1",
    "pinyin": "băwò",
    "part_of_speech": "V",
    "meaning": "Cầm, nắm, nắm bắt"
  },
  {
    "chinese": "白",
    "level": "B1",
    "pinyin": "bái",
    "part_of_speech": "Vs",
    "meaning": "Trắng"
  },
  {
    "chinese": "白(白)",
    "level": "B1",
    "pinyin": "bái(bái)",
    "part_of_speech": "Adv",
    "meaning": "Vô ích"
  },
  {
    "chinese": "白菜",
    "level": "B1",
    "pinyin": "báicài",
    "part_of_speech": "N",
    "meaning": "Cải trắng"
  },
  {
    "chinese": "白天",
    "level": "B1",
    "pinyin": "báitian",
    "part_of_speech": "N",
    "meaning": "Ban ngày"
  },
  {
    "chinese": "擺",
    "level": "B1",
    "pinyin": "băi",
    "part_of_speech": "V",
    "meaning": "Xếp đặt, bày biện"
  },
  {
    "chinese": "百貨公司",
    "level": "B1",
    "pinyin": "băihuògōngsī",
    "part_of_speech": "N",
    "meaning": "Công ty bách hóa"
  },
  {
    "chinese": "班機",
    "level": "B1",
    "pinyin": "bānjī",
    "part_of_speech": "N",
    "meaning": "Chuyến bay"
  },
  {
    "chinese": "搬家",
    "level": "B1",
    "pinyin": "bānjiā",
    "part_of_speech": "V-sep",
    "meaning": "Dọn nhà, chuyển nhà"
  },
  {
    "chinese": "辦",
    "level": "B1",
    "pinyin": "bàn",
    "part_of_speech": "V",
    "meaning": "Xử lý, lo liệu"
  },
  {
    "chinese": "辦理",
    "level": "B1",
    "pinyin": "bànlĭ",
    "part_of_speech": "V",
    "meaning": "Giải quyết, thực hiện"
  },
  {
    "chinese": "半天",
    "level": "B1",
    "pinyin": "bàntiān",
    "part_of_speech": "N",
    "meaning": "Nửa ngày"
  },
  {
    "chinese": "半夜",
    "level": "B1",
    "pinyin": "bànyè",
    "part_of_speech": "N",
    "meaning": "Nửa đêm"
  },
  {
    "chinese": "幫助",
    "level": "B1",
    "pinyin": "bāngzhù",
    "part_of_speech": "V",
    "meaning": "Giúp đỡ"
  },
  {
    "chinese": "榜樣",
    "level": "B1",
    "pinyin": "băngyàng",
    "part_of_speech": "N",
    "meaning": "Tấm gương"
  },
  {
    "chinese": "棒",
    "level": "B1",
    "pinyin": "bàng",
    "part_of_speech": "Vs",
    "meaning": "Tốt, giỏi"
  },
  {
    "chinese": "包",
    "level": "B1",
    "pinyin": "bāo",
    "part_of_speech": "V",
    "meaning": "Bao lại, gói lại"
  },
  {
    "chinese": "包含",
    "level": "B1",
    "pinyin": "bāohán",
    "part_of_speech": "Vst",
    "meaning": "Bao hàm, hàm chứa"
  },
  {
    "chinese": "寶貝",
    "level": "B1",
    "pinyin": "băobèi",
    "part_of_speech": "N",
    "meaning": "Bảo bối, cục cưng"
  },
  {
    "chinese": "寶貴",
    "level": "B1",
    "pinyin": "băoguì",
    "part_of_speech": "Vs",
    "meaning": "Quý giá, quý báu"
  },
  {
    "chinese": "保護",
    "level": "B1",
    "pinyin": "băohù",
    "part_of_speech": "V",
    "meaning": "Bảo vệ, giữ gìn"
  },
  {
    "chinese": "保守",
    "level": "B1",
    "pinyin": "băoshǒu",
    "part_of_speech": "Vs",
    "meaning": "Tuân theo, tuân thủ"
  },
  {
    "chinese": "保養",
    "level": "B1",
    "pinyin": "băoyăng",
    "part_of_speech": "V",
    "meaning": "Bảo dưỡng, chăm sóc"
  },
  {
    "chinese": "保證/証",
    "level": "B1",
    "pinyin": "băozhèng",
    "part_of_speech": "N",
    "meaning": "Vật chứng, vật đảm bảo"
  },
  {
    "chinese": "保證/証",
    "level": "B1",
    "pinyin": "băozhèng",
    "part_of_speech": "V",
    "meaning": "Cam đoan, bảo đảm"
  },
  {
    "chinese": "抱",
    "level": "B1",
    "pinyin": "bào",
    "part_of_speech": "V",
    "meaning": "Bế, bồng, ôm"
  },
  {
    "chinese": "抱怨",
    "level": "B1",
    "pinyin": "bàoyuàn",
    "part_of_speech": "V",
    "meaning": "Oán hận, oán trách"
  },
  {
    "chinese": "報名",
    "level": "B1",
    "pinyin": "bàomíng",
    "part_of_speech": "V-sep",
    "meaning": "Đăng ký, ghi danh"
  },
  {
    "chinese": "背包",
    "level": "B1",
    "pinyin": "bēibāo",
    "part_of_speech": "N",
    "meaning": "Ba lô, túi đeo vai"
  },
  {
    "chinese": "北方",
    "level": "B1",
    "pinyin": "běifāng",
    "part_of_speech": "N",
    "meaning": "Phương Bắc"
  },
  {
    "chinese": "被動",
    "level": "B1",
    "pinyin": "bèidòng",
    "part_of_speech": "Vs",
    "meaning": "Bị động"
  },
  {
    "chinese": "背後",
    "level": "B1",
    "pinyin": "bèihòu",
    "part_of_speech": "N",
    "meaning": "Phía sau"
  },
  {
    "chinese": "背景",
    "level": "B1",
    "pinyin": "bèijĭng",
    "part_of_speech": "N",
    "meaning": "Phông nền, cảnh"
  },
  {
    "chinese": "輩子",
    "level": "B1",
    "pinyin": "bèizi",
    "part_of_speech": "N",
    "meaning": "Cuộc đời"
  },
  {
    "chinese": "本",
    "level": "B1",
    "pinyin": "běn",
    "part_of_speech": "Det",
    "meaning": "Gốc, thân"
  },
  {
    "chinese": "本人",
    "level": "B1",
    "pinyin": "běnrén",
    "part_of_speech": "N",
    "meaning": "Bản thân, tự mình"
  },
  {
    "chinese": "本子",
    "level": "B1",
    "pinyin": "běnzi",
    "part_of_speech": "N",
    "meaning": "Cuốn vở"
  },
  {
    "chinese": "笨",
    "level": "B1",
    "pinyin": "bèn",
    "part_of_speech": "Vs",
    "meaning": "Ngốc nghếch"
  },
  {
    "chinese": "逼",
    "level": "B1",
    "pinyin": "bī",
    "part_of_speech": "V",
    "meaning": "Dồn ép"
  },
  {
    "chinese": "筆",
    "level": "B1",
    "pinyin": "bĭ",
    "part_of_speech": "M",
    "meaning": "Bút"
  },
  {
    "chinese": "比",
    "level": "B1",
    "pinyin": "bǐ",
    "part_of_speech": "V",
    "meaning": "So sánh, so với"
  },
  {
    "chinese": "比如(說)",
    "level": "B1",
    "pinyin": "bǐrú(shuō)",
    "part_of_speech": "Prep",
    "meaning": "Ví dụ như"
  },
  {
    "chinese": "畢竟",
    "level": "B1",
    "pinyin": "bìjìng",
    "part_of_speech": "Adv",
    "meaning": "Rốt cuộc, suy cho cùng"
  },
  {
    "chinese": "避免",
    "level": "B1",
    "pinyin": "bìmiăn",
    "part_of_speech": "V",
    "meaning": "Tránh, phòng ngừa"
  },
  {
    "chinese": "必要",
    "level": "B1",
    "pinyin": "bìyào",
    "part_of_speech": "Vs",
    "meaning": "Cần thiết"
  },
  {
    "chinese": "鞭炮",
    "level": "B1",
    "pinyin": "biānpào",
    "part_of_speech": "N",
    "meaning": "Pháo, bánh pháo"
  },
  {
    "chinese": "變",
    "level": "B1",
    "pinyin": "biàn",
    "part_of_speech": "Vp",
    "meaning": "Thay đổi"
  },
  {
    "chinese": "變成",
    "level": "B1",
    "pinyin": "biànchéng",
    "part_of_speech": "Vpt",
    "meaning": "Biến thành, trở thành"
  },
  {
    "chinese": "變更",
    "level": "B1",
    "pinyin": "biàngēng",
    "part_of_speech": "V",
    "meaning": "Thay đổi, biến đổi"
  },
  {
    "chinese": "變化",
    "level": "B1",
    "pinyin": "biànhuà",
    "part_of_speech": "N",
    "meaning": "Sự thay đổi"
  },
  {
    "chinese": "變化",
    "level": "B1",
    "pinyin": "biànhuà",
    "part_of_speech": "Vs",
    "meaning": "Biến hóa"
  },
  {
    "chinese": "便條",
    "level": "B1",
    "pinyin": "biàntiáo",
    "part_of_speech": "N",
    "meaning": "Giấy ghi chú"
  },
  {
    "chinese": "標準",
    "level": "B1",
    "pinyin": "biāozhŭn",
    "part_of_speech": "N",
    "meaning": "Chuẩn mực"
  },
  {
    "chinese": "標準",
    "level": "B1",
    "pinyin": "biāozhŭn",
    "part_of_speech": "Vs",
    "meaning": "Tiêu chuẩn"
  },
  {
    "chinese": "表",
    "level": "B1",
    "pinyin": "biǎo",
    "part_of_speech": "N",
    "meaning": "Bề ngoài, mặt ngoài"
  },
  {
    "chinese": "表達",
    "level": "B1",
    "pinyin": "biăodá",
    "part_of_speech": "V",
    "meaning": "Bày tỏ"
  },
  {
    "chinese": "表面",
    "level": "B1",
    "pinyin": "biăomiàn",
    "part_of_speech": "N",
    "meaning": "Mặt ngoài, phía ngoài"
  },
  {
    "chinese": "表示",
    "level": "B1",
    "pinyin": "biăoshì",
    "part_of_speech": "V",
    "meaning": "Biểu thị, tỏ ý"
  },
  {
    "chinese": "表現",
    "level": "B1",
    "pinyin": "biǎoxiàn",
    "part_of_speech": "N",
    "meaning": "Biểu hiện"
  },
  {
    "chinese": "表現",
    "level": "B1",
    "pinyin": "biǎoxiàn",
    "part_of_speech": "V",
    "meaning": "Thể hiện, tỏ ra"
  },
  {
    "chinese": "表演",
    "level": "B1",
    "pinyin": "biǎoyǎn",
    "part_of_speech": "V",
    "meaning": "Biểu diễn"
  },
  {
    "chinese": "別的",
    "level": "B1",
    "pinyin": "biéde",
    "part_of_speech": "Det",
    "meaning": "Cái khác"
  },
  {
    "chinese": "冰",
    "level": "B1",
    "pinyin": "bīng",
    "part_of_speech": "N",
    "meaning": "Đá, băng"
  },
  {
    "chinese": "冰塊/冰塊兒",
    "level": "B1",
    "pinyin": "bīngkuài/bīngkuàir",
    "part_of_speech": "N",
    "meaning": "Viên đá, khối đá"
  },
  {
    "chinese": "餅",
    "level": "B1",
    "pinyin": "bǐng",
    "part_of_speech": "N",
    "meaning": "Bánh"
  },
  {
    "chinese": "病",
    "level": "B1",
    "pinyin": "bìng",
    "part_of_speech": "Vp",
    "meaning": "Bệnh, ốm đau"
  },
  {
    "chinese": "伯伯",
    "level": "B1",
    "pinyin": "bóbo",
    "part_of_speech": "N",
    "meaning": "Bác trai"
  },
  {
    "chinese": "博士",
    "level": "B1",
    "pinyin": "bóshì",
    "part_of_speech": "N",
    "meaning": "Tiến sĩ"
  },
  {
    "chinese": "播",
    "level": "B1",
    "pinyin": "bò",
    "part_of_speech": "V",
    "meaning": "Truyền bá"
  },
  {
    "chinese": "不必",
    "level": "B1",
    "pinyin": "bùbì",
    "part_of_speech": "Vaux",
    "meaning": "Không cần, khỏi phải"
  },
  {
    "chinese": "不斷",
    "level": "B1",
    "pinyin": "bùduàn",
    "part_of_speech": "Adv",
    "meaning": "Không ngừng"
  },
  {
    "chinese": "不斷",
    "level": "B1",
    "pinyin": "bùduàn",
    "part_of_speech": "Vs",
    "meaning": "Liên tục, liên tiếp"
  },
  {
    "chinese": "不過",
    "level": "B1",
    "pinyin": "bùguò",
    "part_of_speech": "Adv",
    "meaning": "Vừa mới"
  },
  {
    "chinese": "不過",
    "level": "B1",
    "pinyin": "bùguò",
    "part_of_speech": "Conj",
    "meaning": "Nhưng"
  },
  {
    "chinese": "不見(了)",
    "level": "B1",
    "pinyin": "bùjiàn(le)",
    "part_of_speech": "Vp",
    "meaning": "Không gặp, không thấy nữa"
  },
  {
    "chinese": "不論",
    "level": "B1",
    "pinyin": "bùlùn",
    "part_of_speech": "Conj",
    "meaning": "Cho dù, bất luận"
  },
  {
    "chinese": "不幸",
    "level": "B1",
    "pinyin": "bùxìng",
    "part_of_speech": "Vs",
    "meaning": "Bất hạnh"
  },
  {
    "chinese": "不用說",
    "level": "B1",
    "pinyin": "bùyòngshuō",
    "part_of_speech": "Conj",
    "meaning": "Không cần nói"
  },
  {
    "chinese": "不得不",
    "level": "B1",
    "pinyin": "bùdébù",
    "part_of_speech": "Adv",
    "meaning": "Không thể không"
  },
  {
    "chinese": "不得了",
    "level": "B1",
    "pinyin": "bùdéliăo",
    "part_of_speech": "Vs",
    "meaning": "Cực kỳ"
  },
  {
    "chinese": "不管",
    "level": "B1",
    "pinyin": "bùguǎn",
    "part_of_speech": "Conj",
    "meaning": "Cho dù, bất kể"
  },
  {
    "chinese": "不滿",
    "level": "B1",
    "pinyin": "bùmăn",
    "part_of_speech": "Vs",
    "meaning": "Không vừa lòng"
  },
  {
    "chinese": "不如",
    "level": "B1",
    "pinyin": "bùrú",
    "part_of_speech": "Conj",
    "meaning": "Không bằng"
  },
  {
    "chinese": "不少",
    "level": "B1",
    "pinyin": "bùshǎo",
    "part_of_speech": "Det",
    "meaning": "Không ít"
  },
  {
    "chinese": "不少",
    "level": "B1",
    "pinyin": "bùshǎo",
    "part_of_speech": "Vs",
    "meaning": "Nhiều"
  },
  {
    "chinese": "不足",
    "level": "B1",
    "pinyin": "bùzú",
    "part_of_speech": "Vs",
    "meaning": "Không đủ"
  },
  {
    "chinese": "部",
    "level": "B1",
    "pinyin": "bù",
    "part_of_speech": "M",
    "meaning": "Bộ phận, phòng ban"
  },
  {
    "chinese": "部分/份",
    "level": "B1",
    "pinyin": "bùfen",
    "part_of_speech": "Det",
    "meaning": "Một phần"
  },
  {
    "chinese": "部分/份",
    "level": "B1",
    "pinyin": "bùfen",
    "part_of_speech": "N",
    "meaning": "Bộ phận"
  },
  {
    "chinese": "部門",
    "level": "B1",
    "pinyin": "bùmén",
    "part_of_speech": "N",
    "meaning": "Ngành, bộ môn"
  },
  {
    "chinese": "布",
    "level": "B1",
    "pinyin": "bù",
    "part_of_speech": "N",
    "meaning": "Vài bố"
  },
  {
    "chinese": "布/佈置",
    "level": "B1",
    "pinyin": "bùzhì",
    "part_of_speech": "V",
    "meaning": "Sắp xếp, xếp đặt"
  },
  {
    "chinese": "擦",
    "level": "B1",
    "pinyin": "cā",
    "part_of_speech": "V",
    "meaning": "Chà, cọ xát"
  },
  {
    "chinese": "猜",
    "level": "B1",
    "pinyin": "cāi",
    "part_of_speech": "V",
    "meaning": "Đoán, phỏng đoán"
  },
  {
    "chinese": "材料",
    "level": "B1",
    "pinyin": "cáiliào",
    "part_of_speech": "N",
    "meaning": "Vật liệu, tư liệu"
  },
  {
    "chinese": "採用",
    "level": "B1",
    "pinyin": "căiyòng",
    "part_of_speech": "V",
    "meaning": "Áp dụng"
  },
  {
    "chinese": "餐",
    "level": "B1",
    "pinyin": "cān",
    "part_of_speech": "M",
    "meaning": "Bữa ăn"
  },
  {
    "chinese": "餐桌",
    "level": "B1",
    "pinyin": "cānzhuō",
    "part_of_speech": "N",
    "meaning": "Bàn ăn"
  },
  {
    "chinese": "參考",
    "level": "B1",
    "pinyin": "cānkăo",
    "part_of_speech": "V",
    "meaning": "Tham khảo"
  },
  {
    "chinese": "草地",
    "level": "B1",
    "pinyin": "cǎodì",
    "part_of_speech": "N",
    "meaning": "Bãi cỏ, đồng cỏ"
  },
  {
    "chinese": "草原",
    "level": "B1",
    "pinyin": "cǎoyuán",
    "part_of_speech": "N",
    "meaning": "Thảo nguyên"
  },
  {
    "chinese": "層",
    "level": "B1",
    "pinyin": "céng",
    "part_of_speech": "M",
    "meaning": "Tầng lớp"
  },
  {
    "chinese": "曾",
    "level": "B1",
    "pinyin": "céng",
    "part_of_speech": "Adv",
    "meaning": "Từng"
  },
  {
    "chinese": "曾經",
    "level": "B1",
    "pinyin": "céngjīng",
    "part_of_speech": "Adv",
    "meaning": "Đã từng"
  },
  {
    "chinese": "差別",
    "level": "B1",
    "pinyin": "chābié",
    "part_of_speech": "N",
    "meaning": "Khác biệt, chênh lệch"
  },
  {
    "chinese": "差異",
    "level": "B1",
    "pinyin": "chāyì",
    "part_of_speech": "N",
    "meaning": "Khác nhau"
  },
  {
    "chinese": "查",
    "level": "B1",
    "pinyin": "chá",
    "part_of_speech": "V",
    "meaning": "Kiểm tra, tra cứu"
  },
  {
    "chinese": "產品",
    "level": "B1",
    "pinyin": "chănpǐn",
    "part_of_speech": "N",
    "meaning": "Sản phẩm"
  },
  {
    "chinese": "產生",
    "level": "B1",
    "pinyin": "chănshēng",
    "part_of_speech": "Vpt",
    "meaning": "Sản sinh, xuất hiện"
  },
  {
    "chinese": "常",
    "level": "B1",
    "pinyin": "cháng",
    "part_of_speech": "Adv",
    "meaning": "Thường, thông thường"
  },
  {
    "chinese": "嘗/嚐試",
    "level": "B1",
    "pinyin": "chángshì",
    "part_of_speech": "V",
    "meaning": "Nếm, thử"
  },
  {
    "chinese": "場",
    "level": "B1",
    "pinyin": "chǎng",
    "part_of_speech": "M",
    "meaning": "Sân"
  },
  {
    "chinese": "超過",
    "level": "B1",
    "pinyin": "chāoguò",
    "part_of_speech": "Vpt",
    "meaning": "Vượt lên, vượt qua"
  },
  {
    "chinese": "超級",
    "level": "B1",
    "pinyin": "chāojí",
    "part_of_speech": "Vs-attr",
    "meaning": "siêu, cực kì"
  },
  {
    "chinese": "炒",
    "level": "B1",
    "pinyin": "chăo",
    "part_of_speech": "V",
    "meaning": "Xào"
  },
  {
    "chinese": "吵",
    "level": "B1",
    "pinyin": "chăo",
    "part_of_speech": "V",
    "meaning": "ồn ào, ầm ĩ"
  },
  {
    "chinese": "吵架",
    "level": "B1",
    "pinyin": "chăojià",
    "part_of_speech": "V-sep",
    "meaning": "Cãi nhau"
  },
  {
    "chinese": "車禍",
    "level": "B1",
    "pinyin": "chēhuò",
    "part_of_speech": "N",
    "meaning": "Tai nạn xe cộ"
  },
  {
    "chinese": "趁",
    "level": "B1",
    "pinyin": "chèn",
    "part_of_speech": "Prep",
    "meaning": "Nhân (lúc)"
  },
  {
    "chinese": "成",
    "level": "B1",
    "pinyin": "chéng",
    "part_of_speech": "Vpt",
    "meaning": "Hoàn thành"
  },
  {
    "chinese": "成果",
    "level": "B1",
    "pinyin": "chéngguǒ",
    "part_of_speech": "N",
    "meaning": "Kết quả, thành quả"
  },
  {
    "chinese": "成就",
    "level": "B1",
    "pinyin": "chéngjiù",
    "part_of_speech": "N",
    "meaning": "Thành tựu"
  },
  {
    "chinese": "成熟",
    "level": "B1",
    "pinyin": "chéngshóu",
    "part_of_speech": "Vs",
    "meaning": "Trưởng thành"
  },
  {
    "chinese": "成長",
    "level": "B1",
    "pinyin": "chéngzhăng",
    "part_of_speech": "Vs",
    "meaning": "Lớn, trưởng thành"
  },
  {
    "chinese": "程度",
    "level": "B1",
    "pinyin": "chéngdù",
    "part_of_speech": "N",
    "meaning": "Trình độ, mức độ"
  },
  {
    "chinese": "承認",
    "level": "B1",
    "pinyin": "chéngrèn",
    "part_of_speech": "V",
    "meaning": "Thừa nhận"
  },
  {
    "chinese": "誠實",
    "level": "B1",
    "pinyin": "chéngshí",
    "part_of_speech": "Vs",
    "meaning": "Thành thật"
  },
  {
    "chinese": "吃喝玩樂",
    "level": "B1",
    "pinyin": "chīhēwánlè",
    "part_of_speech": "Vi",
    "meaning": "Sống phóng túng"
  },
  {
    "chinese": "尺",
    "level": "B1",
    "pinyin": "chǐ",
    "part_of_speech": "M",
    "meaning": "Thước"
  },
  {
    "chinese": "充實",
    "level": "B1",
    "pinyin": "chōngshí",
    "part_of_speech": "Vs",
    "meaning": "Phong phú, đầy đủ"
  },
  {
    "chinese": "重新",
    "level": "B1",
    "pinyin": "chóngxīn",
    "part_of_speech": "Adv",
    "meaning": "Lại lần nữa, lại từ đầu"
  },
  {
    "chinese": "蟲(子)",
    "level": "B1",
    "pinyin": "chóng(zi)",
    "part_of_speech": "N",
    "meaning": "Con sâu, sâu bọ"
  },
  {
    "chinese": "抽",
    "level": "B1",
    "pinyin": "chōu",
    "part_of_speech": "V",
    "meaning": "Rút ra"
  },
  {
    "chinese": "醜",
    "level": "B1",
    "pinyin": "chŏu",
    "part_of_speech": "Vs",
    "meaning": "Xấu"
  },
  {
    "chinese": "臭",
    "level": "B1",
    "pinyin": "chòu",
    "part_of_speech": "Vs",
    "meaning": "Hôi"
  },
  {
    "chinese": "初",
    "level": "B1",
    "pinyin": "chū",
    "part_of_speech": "N",
    "meaning": "Đầu tiên, thứ nhất"
  },
  {
    "chinese": "出版",
    "level": "B1",
    "pinyin": "chūbăn",
    "part_of_speech": "V",
    "meaning": "Xuất bản"
  },
  {
    "chinese": "出差",
    "level": "B1",
    "pinyin": "chūchāi",
    "part_of_speech": "V-sep",
    "meaning": "Đi công tác"
  },
  {
    "chinese": "出門",
    "level": "B1",
    "pinyin": "chūmén",
    "part_of_speech": "V-sep",
    "meaning": "Đi ra ngoài"
  },
  {
    "chinese": "出租",
    "level": "B1",
    "pinyin": "chūzū",
    "part_of_speech": "V",
    "meaning": "Cho thuê"
  },
  {
    "chinese": "除了",
    "level": "B1",
    "pinyin": "chúle",
    "part_of_speech": "Prep",
    "meaning": "Ngoài ra"
  },
  {
    "chinese": "除夕",
    "level": "B1",
    "pinyin": "chúxì",
    "part_of_speech": "N",
    "meaning": "Giao thừa"
  },
  {
    "chinese": "廚師",
    "level": "B1",
    "pinyin": "chúshī",
    "part_of_speech": "N",
    "meaning": "Đầu bếp"
  },
  {
    "chinese": "處理",
    "level": "B1",
    "pinyin": "chŭlĭ",
    "part_of_speech": "V",
    "meaning": "Giải quyết (vấn đề)"
  },
  {
    "chinese": "傳統",
    "level": "B1",
    "pinyin": "chuántŏng",
    "part_of_speech": "Vs",
    "meaning": "Truyền thống"
  },
  {
    "chinese": "串",
    "level": "B1",
    "pinyin": "chuàn",
    "part_of_speech": "M",
    "meaning": "Xuyên suốt"
  },
  {
    "chinese": "創造",
    "level": "B1",
    "pinyin": "chuàngzào",
    "part_of_speech": "V",
    "meaning": "Sáng tạo, tạo ra"
  },
  {
    "chinese": "吹",
    "level": "B1",
    "pinyin": "chuī",
    "part_of_speech": "V",
    "meaning": "Thổi"
  },
  {
    "chinese": "春節",
    "level": "B1",
    "pinyin": "chūnjié",
    "part_of_speech": "N",
    "meaning": "Tết âm lịch"
  },
  {
    "chinese": "詞",
    "level": "B1",
    "pinyin": "cí",
    "part_of_speech": "N",
    "meaning": "Lời, từ"
  },
  {
    "chinese": "此",
    "level": "B1",
    "pinyin": "cĭ",
    "part_of_speech": "Det",
    "meaning": "Này, cái này"
  },
  {
    "chinese": "刺激",
    "level": "B1",
    "pinyin": "cìjī",
    "part_of_speech": "N",
    "meaning": "Sự thúc đẩy"
  },
  {
    "chinese": "刺激",
    "level": "B1",
    "pinyin": "cìjī",
    "part_of_speech": "Vs",
    "meaning": "Kích thích, kích động"
  },
  {
    "chinese": "從不",
    "level": "B1",
    "pinyin": "cóngbù",
    "part_of_speech": "Adv",
    "meaning": "Không bao giờ"
  },
  {
    "chinese": "從來",
    "level": "B1",
    "pinyin": "cónglái",
    "part_of_speech": "Adv",
    "meaning": "Từ trước đến nay"
  },
  {
    "chinese": "從小",
    "level": "B1",
    "pinyin": "cóngxiăo",
    "part_of_speech": "Adv",
    "meaning": "Từ nhỏ"
  },
  {
    "chinese": "醋",
    "level": "B1",
    "pinyin": "cù",
    "part_of_speech": "N",
    "meaning": "Giấm"
  },
  {
    "chinese": "存",
    "level": "B1",
    "pinyin": "cún",
    "part_of_speech": "V",
    "meaning": "Tồn tại"
  },
  {
    "chinese": "存在",
    "level": "B1",
    "pinyin": "cúnzài",
    "part_of_speech": "Vi",
    "meaning": "Tồn tại, có thật"
  },
  {
    "chinese": "寸",
    "level": "B1",
    "pinyin": "cùn",
    "part_of_speech": "M",
    "meaning": "Tấc"
  },
  {
    "chinese": "錯",
    "level": "B1",
    "pinyin": "cuò",
    "part_of_speech": "N",
    "meaning": "Sai"
  },
  {
    "chinese": "錯誤",
    "level": "B1",
    "pinyin": "cuòwù",
    "part_of_speech": "N",
    "meaning": "Sai lầm, lệch lạc"
  },
  {
    "chinese": "挫折",
    "level": "B1",
    "pinyin": "cuòzhé",
    "part_of_speech": "N",
    "meaning": "Ngăn trở, chèn ép"
  },
  {
    "chinese": "答應",
    "level": "B1",
    "pinyin": "dāyìng",
    "part_of_speech": "V",
    "meaning": "Đồng ý"
  },
  {
    "chinese": "達成",
    "level": "B1",
    "pinyin": "dáchéng",
    "part_of_speech": "Vpt",
    "meaning": "Đạt đến"
  },
  {
    "chinese": "打工",
    "level": "B1",
    "pinyin": "dăgōng",
    "part_of_speech": "V-sep",
    "meaning": "Làm thuê"
  },
  {
    "chinese": "打架",
    "level": "B1",
    "pinyin": "dăjià",
    "part_of_speech": "V-sep",
    "meaning": "Đánh nhau"
  },
  {
    "chinese": "打聽",
    "level": "B1",
    "pinyin": "dătīng",
    "part_of_speech": "V",
    "meaning": "Nghe ngóng"
  },
  {
    "chinese": "打仗",
    "level": "B1",
    "pinyin": "dăzhàng",
    "part_of_speech": "V-sep",
    "meaning": "Đánh trận"
  },
  {
    "chinese": "打折",
    "level": "B1",
    "pinyin": "dăzhé",
    "part_of_speech": "V-sep",
    "meaning": "Giảm giá"
  },
  {
    "chinese": "大大",
    "level": "B1",
    "pinyin": "dàdà",
    "part_of_speech": "Adv",
    "meaning": "Rất, cực kỳ"
  },
  {
    "chinese": "大多數",
    "level": "B1",
    "pinyin": "dàduōshù",
    "part_of_speech": "Det",
    "meaning": "Đại đa số"
  },
  {
    "chinese": "大方",
    "level": "B1",
    "pinyin": "dàfāng",
    "part_of_speech": "Vs",
    "meaning": "Rộng rãi, phóng khoáng"
  },
  {
    "chinese": "大概",
    "level": "B1",
    "pinyin": "dàgài",
    "part_of_speech": "Adv",
    "meaning": "Đại khái, sơ lược"
  },
  {
    "chinese": "大會",
    "level": "B1",
    "pinyin": "dàhuì",
    "part_of_speech": "N",
    "meaning": "Đại hội, hội nghị"
  },
  {
    "chinese": "大陸",
    "level": "B1",
    "pinyin": "dàlù",
    "part_of_speech": "N",
    "meaning": "Đại lục"
  },
  {
    "chinese": "大門",
    "level": "B1",
    "pinyin": "dàmén",
    "part_of_speech": "N",
    "meaning": "Cổng chính"
  },
  {
    "chinese": "大小",
    "level": "B1",
    "pinyin": "dàxiăo",
    "part_of_speech": "N",
    "meaning": "Lớn nhỏ"
  },
  {
    "chinese": "大約",
    "level": "B1",
    "pinyin": "dàyuē",
    "part_of_speech": "Adv",
    "meaning": "Khoảng chừng"
  },
  {
    "chinese": "袋",
    "level": "B1",
    "pinyin": "dài",
    "part_of_speech": "M",
    "meaning": "Bao, gói"
  },
  {
    "chinese": "代表",
    "level": "B1",
    "pinyin": "dàibiǎo",
    "part_of_speech": "N",
    "meaning": "Đại biểu"
  },
  {
    "chinese": "代表",
    "level": "B1",
    "pinyin": "dàibiǎo",
    "part_of_speech": "V",
    "meaning": "Đại diện"
  },
  {
    "chinese": "代替",
    "level": "B1",
    "pinyin": "dàitì",
    "part_of_speech": "V",
    "meaning": "Thay thế"
  },
  {
    "chinese": "帶來",
    "level": "B1",
    "pinyin": "dàilái",
    "part_of_speech": "V",
    "meaning": "Đem đến, mang lại"
  },
  {
    "chinese": "帶領",
    "level": "B1",
    "pinyin": "dàilĭng",
    "part_of_speech": "V",
    "meaning": "Dẫn dắt"
  },
  {
    "chinese": "單純",
    "level": "B1",
    "pinyin": "dānchún",
    "part_of_speech": "Vs",
    "meaning": "Đơn thuần"
  },
  {
    "chinese": "單身",
    "level": "B1",
    "pinyin": "dānshēn",
    "part_of_speech": "Vs",
    "meaning": "Độc thân"
  },
  {
    "chinese": "擔任",
    "level": "B1",
    "pinyin": "dānrèn",
    "part_of_speech": "V",
    "meaning": "Đảm nhiệm"
  },
  {
    "chinese": "但",
    "level": "B1",
    "pinyin": "dàn",
    "part_of_speech": "Conj",
    "meaning": "Nhưng"
  },
  {
    "chinese": "淡",
    "level": "B1",
    "pinyin": "dàn",
    "part_of_speech": "Vs",
    "meaning": "Nhạt"
  },
  {
    "chinese": "當",
    "level": "B1",
    "pinyin": "dāng",
    "part_of_speech": "Vst",
    "meaning": "Xác đáng, thích hợp"
  },
  {
    "chinese": "當場",
    "level": "B1",
    "pinyin": "dāngchăng",
    "part_of_speech": "Adv",
    "meaning": "Tại chỗ"
  },
  {
    "chinese": "當地",
    "level": "B1",
    "pinyin": "dāngdì",
    "part_of_speech": "N",
    "meaning": "Bản địa"
  },
  {
    "chinese": "當面",
    "level": "B1",
    "pinyin": "dāngmiàn",
    "part_of_speech": "Adv",
    "meaning": "Trước mặt"
  },
  {
    "chinese": "當年",
    "level": "B1",
    "pinyin": "dāngnián",
    "part_of_speech": "N",
    "meaning": "Năm đó"
  },
  {
    "chinese": "當天",
    "level": "B1",
    "pinyin": "dàngtiān",
    "part_of_speech": "N",
    "meaning": "Ngày hôm đó"
  },
  {
    "chinese": "當中",
    "level": "B1",
    "pinyin": "dāngzhōng",
    "part_of_speech": "N",
    "meaning": "Trong khi"
  },
  {
    "chinese": "當作",
    "level": "B1",
    "pinyin": "dàngzuò",
    "part_of_speech": "Vst",
    "meaning": "Coi như, xem như"
  },
  {
    "chinese": "當做",
    "level": "B1",
    "pinyin": "dàngzuò",
    "part_of_speech": "Vst",
    "meaning": "Cho rằng, coi như là"
  },
  {
    "chinese": "倒",
    "level": "B1",
    "pinyin": "dǎo",
    "part_of_speech": "V",
    "meaning": "Đảo ngược"
  },
  {
    "chinese": "島",
    "level": "B1",
    "pinyin": "dăo",
    "part_of_speech": "N",
    "meaning": "Đảo"
  },
  {
    "chinese": "導演",
    "level": "B1",
    "pinyin": "dăoyăn",
    "part_of_speech": "N",
    "meaning": "Đạo diễn"
  },
  {
    "chinese": "到",
    "level": "B1",
    "pinyin": "dào",
    "part_of_speech": "Conj",
    "meaning": "Đến"
  },
  {
    "chinese": "到",
    "level": "B1",
    "pinyin": "dào",
    "part_of_speech": "Prep",
    "meaning": "Chu đáo, đầy đủ"
  },
  {
    "chinese": "到處",
    "level": "B1",
    "pinyin": "dàochù",
    "part_of_speech": "Adv",
    "meaning": "Khắp nơi"
  },
  {
    "chinese": "到底",
    "level": "B1",
    "pinyin": "dàodĭ",
    "part_of_speech": "Adv",
    "meaning": "Đến cuối cùng"
  },
  {
    "chinese": "到底",
    "level": "B1",
    "pinyin": "dàodĭ",
    "part_of_speech": "Vs-pred",
    "meaning": "Rốt cuộc, suy cho cùng"
  },
  {
    "chinese": "道德",
    "level": "B1",
    "pinyin": "dàodé",
    "part_of_speech": "N",
    "meaning": "Đạo đức"
  },
  {
    "chinese": "道教",
    "level": "B1",
    "pinyin": "Dàojiào",
    "part_of_speech": "N",
    "meaning": "Đạo giáo"
  },
  {
    "chinese": "道理",
    "level": "B1",
    "pinyin": "dàolĭ",
    "part_of_speech": "N",
    "meaning": "Đạo lý, quy luật"
  },
  {
    "chinese": "道歉",
    "level": "B1",
    "pinyin": "dàoqiàn",
    "part_of_speech": "V-sep",
    "meaning": "Xin thứ lỗi"
  },
  {
    "chinese": "倒",
    "level": "B1",
    "pinyin": "dào",
    "part_of_speech": "Adv",
    "meaning": "Trái lại"
  },
  {
    "chinese": "倒是",
    "level": "B1",
    "pinyin": "dàoshì",
    "part_of_speech": "Adv",
    "meaning": "Ngược lại"
  },
  {
    "chinese": "得",
    "level": "B1",
    "pinyin": "dé",
    "part_of_speech": "Vaux",
    "meaning": "Được, có được"
  },
  {
    "chinese": "得到",
    "level": "B1",
    "pinyin": "dédào",
    "part_of_speech": "Vpt",
    "meaning": "Đạt được"
  },
  {
    "chinese": "得意",
    "level": "B1",
    "pinyin": "déyì",
    "part_of_speech": "Vs",
    "meaning": "Đắc ý"
  },
  {
    "chinese": "得很",
    "level": "B1",
    "pinyin": "dehěn",
    "part_of_speech": "Rất",
    "meaning": "nhiều"
  },
  {
    "chinese": "的話",
    "level": "B1",
    "pinyin": "dehuà",
    "part_of_speech": "Ptc",
    "meaning": "Nếu... thì"
  },
  {
    "chinese": "得",
    "level": "B1",
    "pinyin": "děi",
    "part_of_speech": "Vpt",
    "meaning": "Phải"
  },
  {
    "chinese": "燈光",
    "level": "B1",
    "pinyin": "dēngguāng",
    "part_of_speech": "N",
    "meaning": "Ánh đèn"
  },
  {
    "chinese": "等",
    "level": "B1",
    "pinyin": "děng",
    "part_of_speech": "V",
    "meaning": "Đợi"
  },
  {
    "chinese": "等/等等",
    "level": "B1",
    "pinyin": "děng/děngděng",
    "part_of_speech": "Ptc",
    "meaning": "Vân vân"
  },
  {
    "chinese": "等待",
    "level": "B1",
    "pinyin": "děngdài",
    "part_of_speech": "V",
    "meaning": "Chờ đợi"
  },
  {
    "chinese": "低",
    "level": "B1",
    "pinyin": "dī",
    "part_of_speech": "Vs",
    "meaning": "Thấp"
  },
  {
    "chinese": "敵人",
    "level": "B1",
    "pinyin": "dírén",
    "part_of_speech": "N",
    "meaning": "Quân địch"
  },
  {
    "chinese": "底",
    "level": "B1",
    "pinyin": "dĭ",
    "part_of_speech": "N",
    "meaning": "Của"
  },
  {
    "chinese": "底下",
    "level": "B1",
    "pinyin": "dĭxia",
    "part_of_speech": "N",
    "meaning": "Phía dưới"
  },
  {
    "chinese": "抵達",
    "level": "B1",
    "pinyin": "dĭdá",
    "part_of_speech": "V",
    "meaning": "Đến nơi"
  },
  {
    "chinese": "地",
    "level": "B1",
    "pinyin": "dì",
    "part_of_speech": "Ptc",
    "meaning": "Một cách"
  },
  {
    "chinese": "地板",
    "level": "B1",
    "pinyin": "dìbăn",
    "part_of_speech": "N",
    "meaning": "Sàn nhà, nền nhà"
  },
  {
    "chinese": "地帶",
    "level": "B1",
    "pinyin": "dìdài",
    "part_of_speech": "N",
    "meaning": "Miền, vùng"
  },
  {
    "chinese": "地點",
    "level": "B1",
    "pinyin": "dìdiăn",
    "part_of_speech": "N",
    "meaning": "Địa điểm"
  },
  {
    "chinese": "地理",
    "level": "B1",
    "pinyin": "dìlĭ",
    "part_of_speech": "N",
    "meaning": "Địa lý"
  },
  {
    "chinese": "地區",
    "level": "B1",
    "pinyin": "dìqū",
    "part_of_speech": "N",
    "meaning": "Khu vực"
  },
  {
    "chinese": "地攤",
    "level": "B1",
    "pinyin": "dìtān",
    "part_of_speech": "N",
    "meaning": "Hàng rong, vỉa hè"
  },
  {
    "chinese": "地位",
    "level": "B1",
    "pinyin": "dìwèi",
    "part_of_speech": "N",
    "meaning": "Vị trí"
  },
  {
    "chinese": "地下",
    "level": "B1",
    "pinyin": "dìxià",
    "part_of_speech": "N",
    "meaning": "Ngầm, trong lòng đất"
  },
  {
    "chinese": "地形",
    "level": "B1",
    "pinyin": "dìxíng",
    "part_of_speech": "N",
    "meaning": "Địa hình"
  },
  {
    "chinese": "點",
    "level": "B1",
    "pinyin": "diăn",
    "part_of_speech": "M",
    "meaning": "Giọt, hạt, chấm"
  },
  {
    "chinese": "點",
    "level": "B1",
    "pinyin": "diăn",
    "part_of_speech": "N",
    "meaning": "Điểm"
  },
  {
    "chinese": "點",
    "level": "B1",
    "pinyin": "diăn",
    "part_of_speech": "V",
    "meaning": "Ít, chút ít"
  },
  {
    "chinese": "點/點兒",
    "level": "B1",
    "pinyin": "diǍn/diǍnr",
    "part_of_speech": "Một",
    "meaning": "chút"
  },
  {
    "chinese": "電",
    "level": "B1",
    "pinyin": "diàn",
    "part_of_speech": "N",
    "meaning": "Điện"
  },
  {
    "chinese": "電車",
    "level": "B1",
    "pinyin": "diànchē",
    "part_of_speech": "N",
    "meaning": "Tàu điện, xe điện"
  },
  {
    "chinese": "電池",
    "level": "B1",
    "pinyin": "diànchí",
    "part_of_speech": "N",
    "meaning": "Pin, bình điện, ắc-quy"
  },
  {
    "chinese": "電燈",
    "level": "B1",
    "pinyin": "diàndēng",
    "part_of_speech": "N",
    "meaning": "Đèn điện"
  },
  {
    "chinese": "店員",
    "level": "B1",
    "pinyin": "diànyuán",
    "part_of_speech": "N",
    "meaning": "Nhân viên cửa hàng"
  },
  {
    "chinese": "調查",
    "level": "B1",
    "pinyin": "diàochá",
    "part_of_speech": "V",
    "meaning": "Điều tra"
  },
  {
    "chinese": "訂",
    "level": "B1",
    "pinyin": "dìng",
    "part_of_speech": "V",
    "meaning": "Lập, ký kết"
  },
  {
    "chinese": "丟",
    "level": "B1",
    "pinyin": "diū",
    "part_of_speech": "Vpt",
    "meaning": "Mất, thất lạc"
  },
  {
    "chinese": "東北",
    "level": "B1",
    "pinyin": "dōngběi",
    "part_of_speech": "N",
    "meaning": "Đông bắc"
  },
  {
    "chinese": "東方",
    "level": "B1",
    "pinyin": "dōngfāng",
    "part_of_speech": "N",
    "meaning": "Phương Đông"
  },
  {
    "chinese": "東南",
    "level": "B1",
    "pinyin": "dōngnán",
    "part_of_speech": "N",
    "meaning": "Đông nam"
  },
  {
    "chinese": "懂事",
    "level": "B1",
    "pinyin": "dǒngshì",
    "part_of_speech": "Vs",
    "meaning": "Hiểu việc"
  },
  {
    "chinese": "逗",
    "level": "B1",
    "pinyin": "dòu",
    "part_of_speech": "V",
    "meaning": "Đùa, giỡn"
  },
  {
    "chinese": "豆腐(˙ㄈㄨ)",
    "level": "B1",
    "pinyin": "dòufu",
    "part_of_speech": "N",
    "meaning": "Đậu phụ"
  },
  {
    "chinese": "豆漿",
    "level": "B1",
    "pinyin": "dòujiāng",
    "part_of_speech": "N",
    "meaning": "Sữa đậu nành"
  },
  {
    "chinese": "都市",
    "level": "B1",
    "pinyin": "dūshì",
    "part_of_speech": "N",
    "meaning": "Đô thị"
  },
  {
    "chinese": "毒品",
    "level": "B1",
    "pinyin": "dúpĭn",
    "part_of_speech": "N",
    "meaning": "Chất độc hại"
  },
  {
    "chinese": "獨特",
    "level": "B1",
    "pinyin": "dútè",
    "part_of_speech": "Vs",
    "meaning": "Đặc biệt"
  },
  {
    "chinese": "讀者",
    "level": "B1",
    "pinyin": "dúzhě",
    "part_of_speech": "N",
    "meaning": "Độc giả, người đọc"
  },
  {
    "chinese": "段",
    "level": "B1",
    "pinyin": "duàn",
    "part_of_speech": "M",
    "meaning": "Đoạn, quãng, khúc"
  },
  {
    "chinese": "堆",
    "level": "B1",
    "pinyin": "duī",
    "part_of_speech": "M",
    "meaning": "Chồng chất"
  },
  {
    "chinese": "對",
    "level": "B1",
    "pinyin": "duì",
    "part_of_speech": "M",
    "meaning": "Đối với"
  },
  {
    "chinese": "對",
    "level": "B1",
    "pinyin": "duì",
    "part_of_speech": "Prep",
    "meaning": "Hướng về"
  },
  {
    "chinese": "對",
    "level": "B1",
    "pinyin": "duì",
    "part_of_speech": "V",
    "meaning": "Đối chiếu"
  },
  {
    "chinese": "對方",
    "level": "B1",
    "pinyin": "duìfāng",
    "part_of_speech": "N",
    "meaning": "Đối phương"
  },
  {
    "chinese": "對話",
    "level": "B1",
    "pinyin": "duìhuà",
    "part_of_speech": "N",
    "meaning": "Đối thoại"
  },
  {
    "chinese": "對了",
    "level": "B1",
    "pinyin": "duìle",
    "part_of_speech": "Ptc",
    "meaning": "Đúng rồi, nhân tiện"
  },
  {
    "chinese": "對象",
    "level": "B1",
    "pinyin": "duìxiàng",
    "part_of_speech": "N",
    "meaning": "Đối tượng"
  },
  {
    "chinese": "多多少少",
    "level": "B1",
    "pinyin": "duōduoshăoshăo",
    "part_of_speech": "Adv",
    "meaning": "Hoặc nhiều hoặc ít"
  },
  {
    "chinese": "多麼",
    "level": "B1",
    "pinyin": "duōme",
    "part_of_speech": "Adv",
    "meaning": "Bao nhiêu, biết bao"
  },
  {
    "chinese": "朵",
    "level": "B1",
    "pinyin": "duǒ",
    "part_of_speech": "M",
    "meaning": "Đóa, đám"
  },
  {
    "chinese": "頓",
    "level": "B1",
    "pinyin": "dùn",
    "part_of_speech": "M",
    "meaning": "Đống"
  },
  {
    "chinese": "嗯",
    "level": "B1",
    "pinyin": "en",
    "part_of_speech": "Ptc",
    "meaning": "ừm"
  },
  {
    "chinese": "而",
    "level": "B1",
    "pinyin": "ér",
    "part_of_speech": "Conj",
    "meaning": "Và"
  },
  {
    "chinese": "兒童",
    "level": "B1",
    "pinyin": "értóng",
    "part_of_speech": "N",
    "meaning": "Nhi đồng"
  },
  {
    "chinese": "發",
    "level": "B1",
    "pinyin": "fā",
    "part_of_speech": "V",
    "meaning": "phát ra"
  },
  {
    "chinese": "發表",
    "level": "B1",
    "pinyin": "fābiăo",
    "part_of_speech": "V",
    "meaning": "Phát biểu"
  },
  {
    "chinese": "發財",
    "level": "B1",
    "pinyin": "fācái",
    "part_of_speech": "Vp-sep",
    "meaning": "Phát tài"
  },
  {
    "chinese": "發出",
    "level": "B1",
    "pinyin": "fāchū",
    "part_of_speech": "Vpt",
    "meaning": "Phát sinh"
  },
  {
    "chinese": "發達",
    "level": "B1",
    "pinyin": "fādá",
    "part_of_speech": "Vs",
    "meaning": "Phát đạt"
  },
  {
    "chinese": "發揮",
    "level": "B1",
    "pinyin": "fāhuī",
    "part_of_speech": "V",
    "meaning": "Phát huy"
  },
  {
    "chinese": "發覺",
    "level": "B1",
    "pinyin": "fājué",
    "part_of_speech": "Vpt",
    "meaning": "Phát giác"
  },
  {
    "chinese": "發明",
    "level": "B1",
    "pinyin": "fāmíng",
    "part_of_speech": "N",
    "meaning": "Phát minh"
  },
  {
    "chinese": "發明",
    "level": "B1",
    "pinyin": "fāmíng",
    "part_of_speech": "Vpt",
    "meaning": "Sáng chế"
  },
  {
    "chinese": "發脾氣",
    "level": "B1",
    "pinyin": "fāpíqi",
    "part_of_speech": "Vi",
    "meaning": "Nổi nóng"
  },
  {
    "chinese": "發票",
    "level": "B1",
    "pinyin": "fāpiào",
    "part_of_speech": "N",
    "meaning": "Hóa đơn"
  },
  {
    "chinese": "法律",
    "level": "B1",
    "pinyin": "fălǜ",
    "part_of_speech": "N",
    "meaning": "Pháp luật"
  },
  {
    "chinese": "翻",
    "level": "B1",
    "pinyin": "fān",
    "part_of_speech": "V",
    "meaning": "Lật, đổ"
  },
  {
    "chinese": "翻譯",
    "level": "B1",
    "pinyin": "fānyì",
    "part_of_speech": "V",
    "meaning": "Phiên dịch"
  },
  {
    "chinese": "煩惱",
    "level": "B1",
    "pinyin": "fánnăo",
    "part_of_speech": "Vs",
    "meaning": "Phiền não"
  },
  {
    "chinese": "反而",
    "level": "B1",
    "pinyin": "fănér",
    "part_of_speech": "Conj",
    "meaning": "Ngược lại"
  },
  {
    "chinese": "反應",
    "level": "B1",
    "pinyin": "fănyìng",
    "part_of_speech": "N",
    "meaning": "Phản ứng"
  },
  {
    "chinese": "犯",
    "level": "B1",
    "pinyin": "fàn",
    "part_of_speech": "Vst",
    "meaning": "Phạm (pháp)"
  },
  {
    "chinese": "範圍",
    "level": "B1",
    "pinyin": "fànwéi",
    "part_of_speech": "N",
    "meaning": "Phạm vi"
  },
  {
    "chinese": "方面",
    "level": "B1",
    "pinyin": "fāngmiàn",
    "part_of_speech": "N",
    "meaning": "Phương diện"
  },
  {
    "chinese": "方式",
    "level": "B1",
    "pinyin": "fāngshì",
    "part_of_speech": "N",
    "meaning": "Phương thức, cách thức"
  },
  {
    "chinese": "房東",
    "level": "B1",
    "pinyin": "fángdōng",
    "part_of_speech": "N",
    "meaning": "Chủ cho thuê nhà"
  },
  {
    "chinese": "房客",
    "level": "B1",
    "pinyin": "fángkè",
    "part_of_speech": "N",
    "meaning": "Khách thuê nhà"
  },
  {
    "chinese": "房屋",
    "level": "B1",
    "pinyin": "fángwū",
    "part_of_speech": "N",
    "meaning": "Nhà, tòa nhà"
  },
  {
    "chinese": "訪問",
    "level": "B1",
    "pinyin": "fǎngwèn",
    "part_of_speech": "V",
    "meaning": "Phỏng vấn"
  },
  {
    "chinese": "放心",
    "level": "B1",
    "pinyin": "fàngxīn",
    "part_of_speech": "Vs-sep",
    "meaning": "Yên tâm"
  },
  {
    "chinese": "非",
    "level": "B1",
    "pinyin": "fēi",
    "part_of_speech": "Adv",
    "meaning": "Không phải"
  },
  {
    "chinese": "非",
    "level": "B1",
    "pinyin": "fēi",
    "part_of_speech": "Vst",
    "meaning": "Sai, trái"
  },
  {
    "chinese": "飛",
    "level": "B1",
    "pinyin": "fēi",
    "part_of_speech": "Vi",
    "meaning": "Bay"
  },
  {
    "chinese": "費用",
    "level": "B1",
    "pinyin": "fèiyòng",
    "part_of_speech": "N",
    "meaning": "Chi phí"
  },
  {
    "chinese": "分開",
    "level": "B1",
    "pinyin": "fēnkāi",
    "part_of_speech": "Vp",
    "meaning": "Xa nhau, tách biệt"
  },
  {
    "chinese": "份",
    "level": "B1",
    "pinyin": "fèn",
    "part_of_speech": "M",
    "meaning": "Tách ra"
  },
  {
    "chinese": "封",
    "level": "B1",
    "pinyin": "fēng",
    "part_of_speech": "M",
    "meaning": "Phong tước"
  },
  {
    "chinese": "豐富",
    "level": "B1",
    "pinyin": "fēngfù",
    "part_of_speech": "Vs",
    "meaning": "Phong phú"
  },
  {
    "chinese": "風格",
    "level": "B1",
    "pinyin": "fēnggé",
    "part_of_speech": "N",
    "meaning": "Phong cách"
  },
  {
    "chinese": "風俗",
    "level": "B1",
    "pinyin": "fēngsú",
    "part_of_speech": "N",
    "meaning": "Phong tục"
  },
  {
    "chinese": "佛教",
    "level": "B1",
    "pinyin": "Fójiào",
    "part_of_speech": "N",
    "meaning": "Phật giáo"
  },
  {
    "chinese": "否則",
    "level": "B1",
    "pinyin": "fŏuzé",
    "part_of_speech": "Conj",
    "meaning": "Nếu không, bằng không thì"
  },
  {
    "chinese": "夫婦",
    "level": "B1",
    "pinyin": "fūfù",
    "part_of_speech": "N",
    "meaning": "Vợ chồng"
  },
  {
    "chinese": "符合",
    "level": "B1",
    "pinyin": "fúhé",
    "part_of_speech": "Vst",
    "meaning": "Phù hợp"
  },
  {
    "chinese": "福利",
    "level": "B1",
    "pinyin": "fúlì",
    "part_of_speech": "N",
    "meaning": "Lợi ích"
  },
  {
    "chinese": "服裝",
    "level": "B1",
    "pinyin": "fúzhuāng",
    "part_of_speech": "N",
    "meaning": "Trang phục"
  },
  {
    "chinese": "腐敗",
    "level": "B1",
    "pinyin": "fŭbài",
    "part_of_speech": "Vs",
    "meaning": "Hủ bại, mục nát"
  },
  {
    "chinese": "付出",
    "level": "B1",
    "pinyin": "fùchū",
    "part_of_speech": "Vpt",
    "meaning": "Trả giá"
  },
  {
    "chinese": "負擔",
    "level": "B1",
    "pinyin": "fùdān",
    "part_of_speech": "N",
    "meaning": "Gánh nặng"
  },
  {
    "chinese": "負擔",
    "level": "B1",
    "pinyin": "fùdān",
    "part_of_speech": "V",
    "meaning": "Gánh vác, đảm nhiệm"
  },
  {
    "chinese": "負責",
    "level": "B1",
    "pinyin": "fùzé",
    "part_of_speech": "Vs",
    "meaning": "Chịu trách nhiệm"
  },
  {
    "chinese": "複習",
    "level": "B1",
    "pinyin": "fùxí",
    "part_of_speech": "V",
    "meaning": "Ôn tập"
  },
  {
    "chinese": "該",
    "level": "B1",
    "pinyin": "gāi",
    "part_of_speech": "Vaux",
    "meaning": "Nên"
  },
  {
    "chinese": "改",
    "level": "B1",
    "pinyin": "gǎi",
    "part_of_speech": "V",
    "meaning": "Thay đổi"
  },
  {
    "chinese": "改變",
    "level": "B1",
    "pinyin": "gǎibiàn",
    "part_of_speech": "N",
    "meaning": "Biến động, biến đổi"
  },
  {
    "chinese": "改變",
    "level": "B1",
    "pinyin": "gǎibiàn",
    "part_of_speech": "V",
    "meaning": "Cải biên, sửa đổi"
  },
  {
    "chinese": "改進",
    "level": "B1",
    "pinyin": "găijìn",
    "part_of_speech": "V",
    "meaning": "Cải tiến"
  },
  {
    "chinese": "改善",
    "level": "B1",
    "pinyin": "găishàn",
    "part_of_speech": "V",
    "meaning": "Cải thiện"
  },
  {
    "chinese": "改天",
    "level": "B1",
    "pinyin": "găitiān",
    "part_of_speech": "Adv",
    "meaning": "Ngày khác, hôm khác"
  },
  {
    "chinese": "蓋",
    "level": "B1",
    "pinyin": "gài",
    "part_of_speech": "V",
    "meaning": "Nắp, vung"
  },
  {
    "chinese": "概念",
    "level": "B1",
    "pinyin": "gàiniàn",
    "part_of_speech": "N",
    "meaning": "Khái niệm"
  },
  {
    "chinese": "敢",
    "level": "B1",
    "pinyin": "gǎn",
    "part_of_speech": "Vaux",
    "meaning": "Dám"
  },
  {
    "chinese": "趕",
    "level": "B1",
    "pinyin": "găn",
    "part_of_speech": "V",
    "meaning": "Đuổi theo, gấp, vội vàng"
  },
  {
    "chinese": "趕快",
    "level": "B1",
    "pinyin": "gǎnkuài",
    "part_of_speech": "Adv",
    "meaning": "Khẩn trương, vội vã"
  },
  {
    "chinese": "趕上",
    "level": "B1",
    "pinyin": "gănshàng",
    "part_of_speech": "Vpt",
    "meaning": "Đuổi kịp"
  },
  {
    "chinese": "感動",
    "level": "B1",
    "pinyin": "găndòng",
    "part_of_speech": "Vs",
    "meaning": "Cảm động, xúc động"
  },
  {
    "chinese": "感想",
    "level": "B1",
    "pinyin": "gănxiăng",
    "part_of_speech": "N",
    "meaning": "Cảm tưởng, cảm nghĩ"
  },
  {
    "chinese": "感興趣",
    "level": "B1",
    "pinyin": "gănxìngqù",
    "part_of_speech": "Vs",
    "meaning": "Có hứng thú với"
  },
  {
    "chinese": "剛",
    "level": "B1",
    "pinyin": "gāng",
    "part_of_speech": "Adv",
    "meaning": "Chỉ vừa, vừa mới"
  },
  {
    "chinese": "高速",
    "level": "B1",
    "pinyin": "gāosù",
    "part_of_speech": "Vs-attr",
    "meaning": "Cao tốc, cực nhanh"
  },
  {
    "chinese": "高中",
    "level": "B1",
    "pinyin": "gāozhōng",
    "part_of_speech": "N",
    "meaning": "Cấp 3, trung học phổ thông"
  },
  {
    "chinese": "搞",
    "level": "B1",
    "pinyin": "găo",
    "part_of_speech": "V",
    "meaning": "Làm, tạo ra"
  },
  {
    "chinese": "歌曲",
    "level": "B1",
    "pinyin": "gēqŭ",
    "part_of_speech": "N",
    "meaning": "Ca khúc, bài hát"
  },
  {
    "chinese": "歌星",
    "level": "B1",
    "pinyin": "gēxīng",
    "part_of_speech": "N",
    "meaning": "Ngôi sao ca nhạc"
  },
  {
    "chinese": "隔壁",
    "level": "B1",
    "pinyin": "gébì",
    "part_of_speech": "N",
    "meaning": "Sát vách, bên cạnh"
  },
  {
    "chinese": "革命",
    "level": "B1",
    "pinyin": "gémìng",
    "part_of_speech": "Vi",
    "meaning": "Cách mạng"
  },
  {
    "chinese": "個人",
    "level": "B1",
    "pinyin": "gèrén",
    "part_of_speech": "N",
    "meaning": "Cá nhân"
  },
  {
    "chinese": "個子/個兒",
    "level": "B1",
    "pinyin": "gèzi/gèr",
    "part_of_speech": "N",
    "meaning": "Vóc dáng, vóc người"
  },
  {
    "chinese": "各式各樣",
    "level": "B1",
    "pinyin": "gèshìgèyàng",
    "part_of_speech": "Vs-attr",
    "meaning": "Đủ kiểu đủ loại"
  },
  {
    "chinese": "各位",
    "level": "B1",
    "pinyin": "gèwèi",
    "part_of_speech": "N",
    "meaning": "Các vị, mọi người"
  },
  {
    "chinese": "個",
    "level": "B1",
    "pinyin": "ge",
    "part_of_speech": "Ptc",
    "meaning": "Cái"
  },
  {
    "chinese": "給",
    "level": "B1",
    "pinyin": "gěi",
    "part_of_speech": "Prep",
    "meaning": "Cho, cung cấp"
  },
  {
    "chinese": "跟",
    "level": "B1",
    "pinyin": "gēn",
    "part_of_speech": "Prep",
    "meaning": "Với, cùng với"
  },
  {
    "chinese": "跟",
    "level": "B1",
    "pinyin": "gēn",
    "part_of_speech": "V",
    "meaning": "Đi theo"
  },
  {
    "chinese": "根",
    "level": "B1",
    "pinyin": "gēn",
    "part_of_speech": "M",
    "meaning": "Cuống, gốc"
  },
  {
    "chinese": "根",
    "level": "B1",
    "pinyin": "gēn",
    "part_of_speech": "N",
    "meaning": "Rễ, rễ cây"
  },
  {
    "chinese": "根據",
    "level": "B1",
    "pinyin": "gēnjù",
    "part_of_speech": "Prep",
    "meaning": "Căn cứ vào, dựa vào"
  },
  {
    "chinese": "更加",
    "level": "B1",
    "pinyin": "gèngjiā",
    "part_of_speech": "Adv",
    "meaning": "Hơn nữa, thêm"
  },
  {
    "chinese": "公尺",
    "level": "B1",
    "pinyin": "gōngchĭ",
    "part_of_speech": "M",
    "meaning": "Mét (đơn vị chiều dài)"
  },
  {
    "chinese": "公分",
    "level": "B1",
    "pinyin": "gōngfēn",
    "part_of_speech": "M",
    "meaning": "Cen-ti-mét"
  },
  {
    "chinese": "公共",
    "level": "B1",
    "pinyin": "gōnggòng",
    "part_of_speech": "Vs-attr",
    "meaning": "Công cộng"
  },
  {
    "chinese": "公克",
    "level": "B1",
    "pinyin": "gōngkè",
    "part_of_speech": "M",
    "meaning": "Gram"
  },
  {
    "chinese": "公路",
    "level": "B1",
    "pinyin": "gōnglù",
    "part_of_speech": "N",
    "meaning": "Đường cái, quốc lộ"
  },
  {
    "chinese": "功夫",
    "level": "B1",
    "pinyin": "gōngfu",
    "part_of_speech": "N",
    "meaning": "Bản lĩnh, công sức"
  },
  {
    "chinese": "功能",
    "level": "B1",
    "pinyin": "gōngnéng",
    "part_of_speech": "N",
    "meaning": "Công năng, tác dụng"
  },
  {
    "chinese": "工具",
    "level": "B1",
    "pinyin": "gōngjù",
    "part_of_speech": "N",
    "meaning": "Công cụ"
  },
  {
    "chinese": "工業",
    "level": "B1",
    "pinyin": "gōngyè",
    "part_of_speech": "N",
    "meaning": "Công nghiệp"
  },
  {
    "chinese": "工作",
    "level": "B1",
    "pinyin": "gōngzuò",
    "part_of_speech": "Vi",
    "meaning": "Công việc"
  },
  {
    "chinese": "恭喜",
    "level": "B1",
    "pinyin": "gōngxǐ",
    "part_of_speech": "V",
    "meaning": "Chúc mừng"
  },
  {
    "chinese": "共",
    "level": "B1",
    "pinyin": "gòng",
    "part_of_speech": "Adv",
    "meaning": "Chung, cùng nhau"
  },
  {
    "chinese": "共同",
    "level": "B1",
    "pinyin": "gòngtóng",
    "part_of_speech": "Vs-attr",
    "meaning": "Cộng đồng, chung"
  },
  {
    "chinese": "貢獻",
    "level": "B1",
    "pinyin": "gòngxiàn",
    "part_of_speech": "N",
    "meaning": "Cống hiến, sự đóng góp"
  },
  {
    "chinese": "貢獻",
    "level": "B1",
    "pinyin": "gòngxiàn",
    "part_of_speech": "V",
    "meaning": "Cống hiến"
  },
  {
    "chinese": "溝通",
    "level": "B1",
    "pinyin": "gōutōng",
    "part_of_speech": "V",
    "meaning": "Trao đổi, giao tiếp"
  },
  {
    "chinese": "夠",
    "level": "B1",
    "pinyin": "gòu",
    "part_of_speech": "Adv",
    "meaning": "Đủ, đầy đủ"
  },
  {
    "chinese": "購買",
    "level": "B1",
    "pinyin": "gòumăi",
    "part_of_speech": "V",
    "meaning": "Mua, mua sắm"
  },
  {
    "chinese": "姑娘",
    "level": "B1",
    "pinyin": "gūniáng",
    "part_of_speech": "N",
    "meaning": "Cô gái"
  },
  {
    "chinese": "古",
    "level": "B1",
    "pinyin": "gŭ",
    "part_of_speech": "Vs-attr",
    "meaning": "Cổ, cổ xưa"
  },
  {
    "chinese": "古代",
    "level": "B1",
    "pinyin": "gŭdài",
    "part_of_speech": "N",
    "meaning": "Cổ đại"
  },
  {
    "chinese": "古蹟",
    "level": "B1",
    "pinyin": "gŭjī",
    "part_of_speech": "N",
    "meaning": "Cổ tích"
  },
  {
    "chinese": "古老",
    "level": "B1",
    "pinyin": "gŭlăo",
    "part_of_speech": "Vs",
    "meaning": "Cổ kính, cũ xưa"
  },
  {
    "chinese": "顧",
    "level": "B1",
    "pinyin": "gù",
    "part_of_speech": "V",
    "meaning": "Ngoảnh lại nhìn"
  },
  {
    "chinese": "故意",
    "level": "B1",
    "pinyin": "gùyì",
    "part_of_speech": "Vs",
    "meaning": "Cố ý, cố tình"
  },
  {
    "chinese": "刮",
    "level": "B1",
    "pinyin": "guā",
    "part_of_speech": "V",
    "meaning": "Cạo"
  },
  {
    "chinese": "乖",
    "level": "B1",
    "pinyin": "guāi",
    "part_of_speech": "Vs",
    "meaning": "Ngoan ngoãn"
  },
  {
    "chinese": "怪",
    "level": "B1",
    "pinyin": "guài",
    "part_of_speech": "V",
    "meaning": "Kỳ quái"
  },
  {
    "chinese": "怪",
    "level": "B1",
    "pinyin": "guài",
    "part_of_speech": "Vs",
    "meaning": "Cực kỳ, vô cùng"
  },
  {
    "chinese": "關",
    "level": "B1",
    "pinyin": "guān",
    "part_of_speech": "Vp",
    "meaning": "Đóng lại, khép lại"
  },
  {
    "chinese": "觀察",
    "level": "B1",
    "pinyin": "guānchá",
    "part_of_speech": "V",
    "meaning": "Quan sát, xem xét"
  },
  {
    "chinese": "觀點",
    "level": "B1",
    "pinyin": "guāndiăn",
    "part_of_speech": "N",
    "meaning": "Quan điểm"
  },
  {
    "chinese": "觀念",
    "level": "B1",
    "pinyin": "guānniàn",
    "part_of_speech": "N",
    "meaning": "Quan niệm"
  },
  {
    "chinese": "觀眾",
    "level": "B1",
    "pinyin": "guānzhòng",
    "part_of_speech": "N",
    "meaning": "Quần chúng"
  },
  {
    "chinese": "管",
    "level": "B1",
    "pinyin": "guăn",
    "part_of_speech": "V",
    "meaning": "Quản lý, cai quản"
  },
  {
    "chinese": "罐",
    "level": "B1",
    "pinyin": "guàn",
    "part_of_speech": "M",
    "meaning": "Hộp, vại, lọ"
  },
  {
    "chinese": "廣播",
    "level": "B1",
    "pinyin": "guǎngbò",
    "part_of_speech": "N",
    "meaning": "Chương trình phát thanh"
  },
  {
    "chinese": "廣播",
    "level": "B1",
    "pinyin": "guǎngbò",
    "part_of_speech": "Vi",
    "meaning": "Phát thanh"
  },
  {
    "chinese": "廣場",
    "level": "B1",
    "pinyin": "guăngchăng",
    "part_of_speech": "N",
    "meaning": "Quảng trường"
  },
  {
    "chinese": "廣告",
    "level": "B1",
    "pinyin": "guănggào",
    "part_of_speech": "N",
    "meaning": "Quảng cáo"
  },
  {
    "chinese": "逛",
    "level": "B1",
    "pinyin": "guàng",
    "part_of_speech": "V",
    "meaning": "Đi dạo, đi bách bộ"
  },
  {
    "chinese": "逛街",
    "level": "B1",
    "pinyin": "guàngjiē",
    "part_of_speech": "V-sep",
    "meaning": "Tản bộ, dạo phố"
  },
  {
    "chinese": "規矩",
    "level": "B1",
    "pinyin": "guījŭ",
    "part_of_speech": "N",
    "meaning": "Quy tắc"
  },
  {
    "chinese": "規模",
    "level": "B1",
    "pinyin": "guīmó",
    "part_of_speech": "N",
    "meaning": "Quy mô"
  },
  {
    "chinese": "鬼",
    "level": "B1",
    "pinyin": "guǐ",
    "part_of_speech": "N",
    "meaning": "Ma quỷ"
  },
  {
    "chinese": "貴姓",
    "level": "B1",
    "pinyin": "guìxìng",
    "part_of_speech": "Quý",
    "meaning": "danh, tên họ"
  },
  {
    "chinese": "櫃子",
    "level": "B1",
    "pinyin": "guìzi",
    "part_of_speech": "N",
    "meaning": "Cái tủ"
  },
  {
    "chinese": "國內",
    "level": "B1",
    "pinyin": "guónèi",
    "part_of_speech": "N",
    "meaning": "Quốc nội, trong nước"
  },
  {
    "chinese": "國外",
    "level": "B1",
    "pinyin": "guówài",
    "part_of_speech": "N",
    "meaning": "Nước ngoài"
  },
  {
    "chinese": "國王",
    "level": "B1",
    "pinyin": "guówáng",
    "part_of_speech": "N",
    "meaning": "Quốc vương, vua"
  },
  {
    "chinese": "國語",
    "level": "B1",
    "pinyin": "guóyŭ",
    "part_of_speech": "N",
    "meaning": "Quốc ngữ"
  },
  {
    "chinese": "過去",
    "level": "B1",
    "pinyin": "guòqù",
    "part_of_speech": "N",
    "meaning": "Đã qua, quá khứ"
  },
  {
    "chinese": "過日子",
    "level": "B1",
    "pinyin": "guòrìzi",
    "part_of_speech": "Vi",
    "meaning": "Sống, sinh hoạt"
  },
  {
    "chinese": "嗨",
    "level": "B1",
    "pinyin": "hāi",
    "part_of_speech": "Ptc",
    "meaning": "Haizz (thở dài)"
  },
  {
    "chinese": "還好",
    "level": "B1",
    "pinyin": "háihăo",
    "part_of_speech": "Adv",
    "meaning": "Khá tốt, tàm tạm"
  },
  {
    "chinese": "還是",
    "level": "B1",
    "pinyin": "háishì",
    "part_of_speech": "Adv",
    "meaning": "Vẫn còn"
  },
  {
    "chinese": "還要",
    "level": "B1",
    "pinyin": "háiyào",
    "part_of_speech": "Adv",
    "meaning": "Cần phải"
  },
  {
    "chinese": "海報",
    "level": "B1",
    "pinyin": "hăibào",
    "part_of_speech": "N",
    "meaning": "Áp phích"
  },
  {
    "chinese": "海灘",
    "level": "B1",
    "pinyin": "hăitān",
    "part_of_speech": "N",
    "meaning": "Bãi biển"
  },
  {
    "chinese": "海洋",
    "level": "B1",
    "pinyin": "hǎiyáng",
    "part_of_speech": "N",
    "meaning": "Hải dương, biển cả"
  },
  {
    "chinese": "害",
    "level": "B1",
    "pinyin": "hài",
    "part_of_speech": "V",
    "meaning": "Hại, có hại"
  },
  {
    "chinese": "害怕",
    "level": "B1",
    "pinyin": "hàipà",
    "part_of_speech": "Vs",
    "meaning": "Sợ hãi"
  },
  {
    "chinese": "行",
    "level": "B1",
    "pinyin": "háng",
    "part_of_speech": "M",
    "meaning": "Hàng lối, ngành nghề"
  },
  {
    "chinese": "航空",
    "level": "B1",
    "pinyin": "hángkōng",
    "part_of_speech": "N",
    "meaning": "Hàng không"
  },
  {
    "chinese": "好",
    "level": "B1",
    "pinyin": "hào",
    "part_of_speech": "Vst",
    "meaning": "Thích, ham"
  },
  {
    "chinese": "好處",
    "level": "B1",
    "pinyin": "hǎochù",
    "part_of_speech": "N",
    "meaning": "Có lợi, có ích"
  },
  {
    "chinese": "好好/好好兒",
    "level": "B1",
    "pinyin": "hǎohǎo/hǎohǎor",
    "part_of_speech": "Adv",
    "meaning": "Tốt lành, cẩn thận"
  },
  {
    "chinese": "好幾",
    "level": "B1",
    "pinyin": "hǎojǐ",
    "part_of_speech": "Det",
    "meaning": "Nhiều, mấy"
  },
  {
    "chinese": "好了",
    "level": "B1",
    "pinyin": "hǎole",
    "part_of_speech": "Ptc",
    "meaning": "Được rồi, OK"
  },
  {
    "chinese": "好些",
    "level": "B1",
    "pinyin": "hǎoxiē",
    "part_of_speech": "Det",
    "meaning": "Nhiều, rất nhiều"
  },
  {
    "chinese": "和",
    "level": "B1",
    "pinyin": "hé",
    "part_of_speech": "Prep",
    "meaning": "Và"
  },
  {
    "chinese": "盒",
    "level": "B1",
    "pinyin": "hé",
    "part_of_speech": "M",
    "meaning": "Hộp"
  },
  {
    "chinese": "合",
    "level": "B1",
    "pinyin": "hé",
    "part_of_speech": "V",
    "meaning": "Hợp, phù hợp"
  },
  {
    "chinese": "合唱",
    "level": "B1",
    "pinyin": "héchàng",
    "part_of_speech": "V",
    "meaning": "Hợp xướng, đồng ca"
  },
  {
    "chinese": "合作",
    "level": "B1",
    "pinyin": "hézuò",
    "part_of_speech": "Vs",
    "meaning": "Hợp tác"
  },
  {
    "chinese": "黑",
    "level": "B1",
    "pinyin": "hēi",
    "part_of_speech": "Vs",
    "meaning": "Đen, đen tối"
  },
  {
    "chinese": "恨",
    "level": "B1",
    "pinyin": "hèn",
    "part_of_speech": "Vst",
    "meaning": "Hận, thù hận"
  },
  {
    "chinese": "恨不得",
    "level": "B1",
    "pinyin": "hènbude",
    "part_of_speech": "Vst",
    "meaning": "Mong muốn, khao khát"
  },
  {
    "chinese": "紅",
    "level": "B1",
    "pinyin": "hóng",
    "part_of_speech": "Vs",
    "meaning": "Đỏ"
  },
  {
    "chinese": "紅包",
    "level": "B1",
    "pinyin": "hóngbāo",
    "part_of_speech": "N",
    "meaning": "Tiền lì xì"
  },
  {
    "chinese": "紅豆",
    "level": "B1",
    "pinyin": "hóngdòu",
    "part_of_speech": "N",
    "meaning": "Đậu đỏ"
  },
  {
    "chinese": "厚",
    "level": "B1",
    "pinyin": "hòu",
    "part_of_speech": "Vs",
    "meaning": "Dày"
  },
  {
    "chinese": "後",
    "level": "B1",
    "pinyin": "hòu",
    "part_of_speech": "Det",
    "meaning": "Sau"
  },
  {
    "chinese": "後",
    "level": "B1",
    "pinyin": "hòu",
    "part_of_speech": "N",
    "meaning": "Phía sau"
  },
  {
    "chinese": "忽然",
    "level": "B1",
    "pinyin": "hūrán",
    "part_of_speech": "Adv",
    "meaning": "Bỗng nhiên, đột nhiên"
  },
  {
    "chinese": "糊塗",
    "level": "B1",
    "pinyin": "hútú",
    "part_of_speech": "Vs",
    "meaning": "Hồ đồ"
  },
  {
    "chinese": "互相",
    "level": "B1",
    "pinyin": "hùxiāng",
    "part_of_speech": "Adv",
    "meaning": "Lẫn nhau, với nhau"
  },
  {
    "chinese": "花",
    "level": "B1",
    "pinyin": "huā",
    "part_of_speech": "V",
    "meaning": "Tiêu (tiền/thời gian)"
  },
  {
    "chinese": "花心",
    "level": "B1",
    "pinyin": "huāxīn",
    "part_of_speech": "Vs",
    "meaning": "Lăng nhăng"
  },
  {
    "chinese": "滑雪",
    "level": "B1",
    "pinyin": "huáxuě",
    "part_of_speech": "V-sep",
    "meaning": "Trượt tuyết"
  },
  {
    "chinese": "畫家",
    "level": "B1",
    "pinyin": "huàjiā",
    "part_of_speech": "N",
    "meaning": "Họa sĩ"
  },
  {
    "chinese": "話說回來",
    "level": "B1",
    "pinyin": "huàshuōhuílái",
    "part_of_speech": "Quay",
    "meaning": "lại chủ đề chính…"
  },
  {
    "chinese": "話題",
    "level": "B1",
    "pinyin": "huàtí",
    "part_of_speech": "N",
    "meaning": "Đề tài, chủ đề"
  },
  {
    "chinese": "化妝品",
    "level": "B1",
    "pinyin": "huàzhuāngpĭn",
    "part_of_speech": "N",
    "meaning": "Đồ trang điểm"
  },
  {
    "chinese": "壞處",
    "level": "B1",
    "pinyin": "huàichù",
    "part_of_speech": "N",
    "meaning": "Chỗ hỏng, điều có hại"
  },
  {
    "chinese": "還",
    "level": "B1",
    "pinyin": "huán",
    "part_of_speech": "V",
    "meaning": "Hoán đổi"
  },
  {
    "chinese": "環保",
    "level": "B1",
    "pinyin": "huánbăo",
    "part_of_speech": "N",
    "meaning": "Bảo vệ môi trường"
  },
  {
    "chinese": "黃",
    "level": "B1",
    "pinyin": "huáng",
    "part_of_speech": "Vs",
    "meaning": "Vàng"
  },
  {
    "chinese": "回",
    "level": "B1",
    "pinyin": "huí",
    "part_of_speech": "M",
    "meaning": "Lần"
  },
  {
    "chinese": "回答",
    "level": "B1",
    "pinyin": "huídá",
    "part_of_speech": "N",
    "meaning": "Trả lời, đáp lại"
  },
  {
    "chinese": "回想",
    "level": "B1",
    "pinyin": "huíxiăng",
    "part_of_speech": "V",
    "meaning": "Hồi tưởng, nhớ lại"
  },
  {
    "chinese": "會",
    "level": "B1",
    "pinyin": "huì",
    "part_of_speech": "Vaux",
    "meaning": "Sẽ, biết, hội"
  },
  {
    "chinese": "會場",
    "level": "B1",
    "pinyin": "huìchăng",
    "part_of_speech": "N",
    "meaning": "Hội trường"
  },
  {
    "chinese": "會話",
    "level": "B1",
    "pinyin": "huìhuà",
    "part_of_speech": "N",
    "meaning": "Hội họa"
  },
  {
    "chinese": "會議",
    "level": "B1",
    "pinyin": "huìyì",
    "part_of_speech": "N",
    "meaning": "Hội nghị"
  },
  {
    "chinese": "婚禮",
    "level": "B1",
    "pinyin": "hūnlǐ",
    "part_of_speech": "N",
    "meaning": "Hôn lễ, đám cưới"
  },
  {
    "chinese": "婚姻",
    "level": "B1",
    "pinyin": "hūnyīn",
    "part_of_speech": "N",
    "meaning": "Hôn nhân"
  },
  {
    "chinese": "混亂",
    "level": "B1",
    "pinyin": "hùnluàn",
    "part_of_speech": "Vs",
    "meaning": "Hỗn loạn, lẫn lộn"
  },
  {
    "chinese": "活",
    "level": "B1",
    "pinyin": "huó",
    "part_of_speech": "Vs-attr",
    "meaning": "Sống, sinh sống"
  },
  {
    "chinese": "活動",
    "level": "B1",
    "pinyin": "huódòng",
    "part_of_speech": "Vi",
    "meaning": "Hoạt động"
  },
  {
    "chinese": "或許",
    "level": "B1",
    "pinyin": "huòxŭ",
    "part_of_speech": "Adv",
    "meaning": "Có thể, có lẽ là"
  },
  {
    "chinese": "基本",
    "level": "B1",
    "pinyin": "jīběn",
    "part_of_speech": "N",
    "meaning": "Căn bản, cơ bản"
  },
  {
    "chinese": "基本",
    "level": "B1",
    "pinyin": "jīběn",
    "part_of_speech": "Vs",
    "meaning": "Chủ yếu"
  },
  {
    "chinese": "基礎",
    "level": "B1",
    "pinyin": "jīchŭ",
    "part_of_speech": "N",
    "meaning": "Nền móng, cơ sở"
  },
  {
    "chinese": "基督教",
    "level": "B1",
    "pinyin": "Jīdūjiào",
    "part_of_speech": "N",
    "meaning": "Cơ đốc giáo"
  },
  {
    "chinese": "激動",
    "level": "B1",
    "pinyin": "jīdòng",
    "part_of_speech": "Vs",
    "meaning": "Xúc động"
  },
  {
    "chinese": "激烈",
    "level": "B1",
    "pinyin": "jīliè",
    "part_of_speech": "Vs",
    "meaning": "Quyết liệt, dữ dội"
  },
  {
    "chinese": "積極",
    "level": "B1",
    "pinyin": "jījí",
    "part_of_speech": "Vs",
    "meaning": "Tích cực, hăng hái"
  },
  {
    "chinese": "機器",
    "level": "B1",
    "pinyin": "jīqì",
    "part_of_speech": "N",
    "meaning": "Cơ khí, máy móc"
  },
  {
    "chinese": "及",
    "level": "B1",
    "pinyin": "jí",
    "part_of_speech": "Conj",
    "meaning": "Đạt đến"
  },
  {
    "chinese": "急",
    "level": "B1",
    "pinyin": "jí",
    "part_of_speech": "Vs",
    "meaning": "Gấp, vội"
  },
  {
    "chinese": "極",
    "level": "B1",
    "pinyin": "jí",
    "part_of_speech": "Adv",
    "meaning": "Đỉnh điểm"
  },
  {
    "chinese": "極了",
    "level": "B1",
    "pinyin": "jíle",
    "part_of_speech": "Vô",
    "meaning": "cùng, cực kỳ"
  },
  {
    "chinese": "擠",
    "level": "B1",
    "pinyin": "jǐ",
    "part_of_speech": "V",
    "meaning": "Chen chúc"
  },
  {
    "chinese": "擠",
    "level": "B1",
    "pinyin": "jǐ",
    "part_of_speech": "Vs",
    "meaning": "Dồn lại"
  },
  {
    "chinese": "既",
    "level": "B1",
    "pinyin": "jì",
    "part_of_speech": "Conj",
    "meaning": "Đã, phàm đã…"
  },
  {
    "chinese": "記",
    "level": "B1",
    "pinyin": "jì",
    "part_of_speech": "Vst",
    "meaning": "Nhớ, ghi chép lại"
  },
  {
    "chinese": "記錄",
    "level": "B1",
    "pinyin": "jìlù",
    "part_of_speech": "N",
    "meaning": "Biên bản"
  },
  {
    "chinese": "記錄",
    "level": "B1",
    "pinyin": "jìlù",
    "part_of_speech": "V",
    "meaning": "Ghi chép lại"
  },
  {
    "chinese": "記憶",
    "level": "B1",
    "pinyin": "jìyì",
    "part_of_speech": "N",
    "meaning": "Hồi tưởng, ký ức"
  },
  {
    "chinese": "季節",
    "level": "B1",
    "pinyin": "jìjié",
    "part_of_speech": "N",
    "meaning": "Mùa, mùa vụ"
  },
  {
    "chinese": "紀念",
    "level": "B1",
    "pinyin": "jìniàn",
    "part_of_speech": "N",
    "meaning": "Đồ kỷ niệm"
  },
  {
    "chinese": "紀念",
    "level": "B1",
    "pinyin": "jìniàn",
    "part_of_speech": "Vst",
    "meaning": "Tưởng niệm"
  },
  {
    "chinese": "技巧",
    "level": "B1",
    "pinyin": "jìqiăo",
    "part_of_speech": "N",
    "meaning": "Kỹ xảo"
  },
  {
    "chinese": "繼續",
    "level": "B1",
    "pinyin": "jìxù",
    "part_of_speech": "V",
    "meaning": "Tiếp tục"
  },
  {
    "chinese": "加",
    "level": "B1",
    "pinyin": "jiā",
    "part_of_speech": "V",
    "meaning": "Cộng, tăng thêm"
  },
  {
    "chinese": "加強",
    "level": "B1",
    "pinyin": "jiāqiáng",
    "part_of_speech": "V",
    "meaning": "Tăng cường"
  },
  {
    "chinese": "加入",
    "level": "B1",
    "pinyin": "jiārù",
    "part_of_speech": "Vpt",
    "meaning": "Thêm vào, tham gia vào"
  },
  {
    "chinese": "加上",
    "level": "B1",
    "pinyin": "jiāshàng",
    "part_of_speech": "V",
    "meaning": "Cộng vào, thêm vào đó"
  },
  {
    "chinese": "加油",
    "level": "B1",
    "pinyin": "jiāyóu",
    "part_of_speech": "Vi",
    "meaning": "Cố lên!"
  },
  {
    "chinese": "家",
    "level": "B1",
    "pinyin": "jiā",
    "part_of_speech": "M",
    "meaning": "Nhà, gia đình"
  },
  {
    "chinese": "家鄉",
    "level": "B1",
    "pinyin": "jiāxiāng",
    "part_of_speech": "N",
    "meaning": "Quê nhà, quê hương"
  },
  {
    "chinese": "家長",
    "level": "B1",
    "pinyin": "jiāzhăng",
    "part_of_speech": "N",
    "meaning": "Phụ huynh"
  },
  {
    "chinese": "假",
    "level": "B1",
    "pinyin": "jiă",
    "part_of_speech": "Vs",
    "meaning": "Giả, không thật"
  },
  {
    "chinese": "假如",
    "level": "B1",
    "pinyin": "jiărú",
    "part_of_speech": "Conj",
    "meaning": "Giá như, nếu như"
  },
  {
    "chinese": "假裝",
    "level": "B1",
    "pinyin": "jiăzhuāng",
    "part_of_speech": "V",
    "meaning": "Giả vờ"
  },
  {
    "chinese": "架",
    "level": "B1",
    "pinyin": "jià",
    "part_of_speech": "M",
    "meaning": "Cái giá, khung"
  },
  {
    "chinese": "假日",
    "level": "B1",
    "pinyin": "jiàrì",
    "part_of_speech": "N",
    "meaning": "Ngày nghỉ"
  },
  {
    "chinese": "價值",
    "level": "B1",
    "pinyin": "jiàzhí",
    "part_of_speech": "N",
    "meaning": "Giá trị (hàng hóa)"
  },
  {
    "chinese": "肩膀",
    "level": "B1",
    "pinyin": "jiānbăng",
    "part_of_speech": "N",
    "meaning": "Bờ vài"
  },
  {
    "chinese": "堅持",
    "level": "B1",
    "pinyin": "jiānchí",
    "part_of_speech": "Vs",
    "meaning": "Kiên trì"
  },
  {
    "chinese": "堅強",
    "level": "B1",
    "pinyin": "jiānqiáng",
    "part_of_speech": "Vs",
    "meaning": "Kiên cường"
  },
  {
    "chinese": "減",
    "level": "B1",
    "pinyin": "jiăn",
    "part_of_speech": "Vst",
    "meaning": "Giảm, trừ bớt"
  },
  {
    "chinese": "減輕",
    "level": "B1",
    "pinyin": "jiănqīng",
    "part_of_speech": "Vpt",
    "meaning": "Giảm nhẹ"
  },
  {
    "chinese": "減少",
    "level": "B1",
    "pinyin": "jiănshăo",
    "part_of_speech": "Vpt",
    "meaning": "Giảm thiểu"
  },
  {
    "chinese": "簡直",
    "level": "B1",
    "pinyin": "jiănzhí",
    "part_of_speech": "Adv",
    "meaning": "Quả thật là"
  },
  {
    "chinese": "見",
    "level": "B1",
    "pinyin": "jiàn",
    "part_of_speech": "Vpt",
    "meaning": "Trông thấy"
  },
  {
    "chinese": "建立",
    "level": "B1",
    "pinyin": "jiànlì",
    "part_of_speech": "V",
    "meaning": "Xây dựng"
  },
  {
    "chinese": "建設",
    "level": "B1",
    "pinyin": "jiànshè",
    "part_of_speech": "N",
    "meaning": "Kiến thiết"
  },
  {
    "chinese": "建設",
    "level": "B1",
    "pinyin": "jiànshè",
    "part_of_speech": "V",
    "meaning": "Xây dựng, lập nên"
  },
  {
    "chinese": "建議",
    "level": "B1",
    "pinyin": "jiànyì",
    "part_of_speech": "N",
    "meaning": "Đề nghị, đề xuất"
  },
  {
    "chinese": "建議",
    "level": "B1",
    "pinyin": "jiànyì",
    "part_of_speech": "V",
    "meaning": "Đưa ra lời khuyên"
  },
  {
    "chinese": "將來",
    "level": "B1",
    "pinyin": "jiānglái",
    "part_of_speech": "N",
    "meaning": "Tương lai, sau này"
  },
  {
    "chinese": "講價",
    "level": "B1",
    "pinyin": "jiăngjià",
    "part_of_speech": "Vi",
    "meaning": "Mặc cả, trả giá"
  },
  {
    "chinese": "講究",
    "level": "B1",
    "pinyin": "jiăngjiu",
    "part_of_speech": "Vs",
    "meaning": "Chú trọng, chú ý"
  },
  {
    "chinese": "獎學金",
    "level": "B1",
    "pinyin": "jiăngxuéjīn",
    "part_of_speech": "N",
    "meaning": "Học bổng"
  },
  {
    "chinese": "降低",
    "level": "B1",
    "pinyin": "jiàngdī",
    "part_of_speech": "Vpt",
    "meaning": "Hạ thấp"
  },
  {
    "chinese": "醬油",
    "level": "B1",
    "pinyin": "jiàngyóu",
    "part_of_speech": "N",
    "meaning": "Nước tương, xì dầu"
  },
  {
    "chinese": "交",
    "level": "B1",
    "pinyin": "jiāo",
    "part_of_speech": "V",
    "meaning": "Giao nộp"
  },
  {
    "chinese": "交流",
    "level": "B1",
    "pinyin": "jiāoliú",
    "part_of_speech": "Vi",
    "meaning": "Giao lưu, trao đổi"
  },
  {
    "chinese": "交友",
    "level": "B1",
    "pinyin": "jiāoyǒu",
    "part_of_speech": "Vi",
    "meaning": "Kết bạn"
  },
  {
    "chinese": "驕傲",
    "level": "B1",
    "pinyin": "jiāoào",
    "part_of_speech": "Vs",
    "meaning": "Kiêu ngạo, kiêu căng"
  },
  {
    "chinese": "郊區",
    "level": "B1",
    "pinyin": "jiāoqū",
    "part_of_speech": "N",
    "meaning": "Vùng ngoại ô"
  },
  {
    "chinese": "角度",
    "level": "B1",
    "pinyin": "jiăodù",
    "part_of_speech": "N",
    "meaning": "Góc độ, quan điểm"
  },
  {
    "chinese": "角色",
    "level": "B1",
    "pinyin": "jiăo/juésè",
    "part_of_speech": "N",
    "meaning": "Nhân vật, kiểu người"
  },
  {
    "chinese": "叫",
    "level": "B1",
    "pinyin": "jiào",
    "part_of_speech": "V",
    "meaning": "Kêu, gọi"
  },
  {
    "chinese": "叫",
    "level": "B1",
    "pinyin": "jiào",
    "part_of_speech": "Vst",
    "meaning": "Hô hoán"
  },
  {
    "chinese": "較",
    "level": "B1",
    "pinyin": "jiào",
    "part_of_speech": "Adv",
    "meaning": "So sánh"
  },
  {
    "chinese": "教",
    "level": "B1",
    "pinyin": "jiào",
    "part_of_speech": "Vst",
    "meaning": "Dạy dỗ"
  },
  {
    "chinese": "教材",
    "level": "B1",
    "pinyin": "jiàocái",
    "part_of_speech": "N",
    "meaning": "Tài liệu giảng dạy"
  },
  {
    "chinese": "教導",
    "level": "B1",
    "pinyin": "jiàodăo",
    "part_of_speech": "V",
    "meaning": "Chỉ bảo, dạy bảo"
  },
  {
    "chinese": "教法",
    "level": "B1",
    "pinyin": "jiàofă",
    "part_of_speech": "N",
    "meaning": "Phương pháp giảng dạy"
  },
  {
    "chinese": "教練",
    "level": "B1",
    "pinyin": "jiàoliàn",
    "part_of_speech": "N",
    "meaning": "Huấn luyện viên"
  },
  {
    "chinese": "教授",
    "level": "B1",
    "pinyin": "jiàoshòu",
    "part_of_speech": "N",
    "meaning": "Truyền thụ"
  },
  {
    "chinese": "教訓",
    "level": "B1",
    "pinyin": "jiàoxun",
    "part_of_speech": "N",
    "meaning": "Giáo huấn, dạy dỗ"
  },
  {
    "chinese": "教育",
    "level": "B1",
    "pinyin": "jiàoyù",
    "part_of_speech": "N",
    "meaning": "Giáo dục, đào tạo"
  },
  {
    "chinese": "教育",
    "level": "B1",
    "pinyin": "jiàoyù",
    "part_of_speech": "V",
    "meaning": "Chỉ dẫn, dạy"
  },
  {
    "chinese": "接觸",
    "level": "B1",
    "pinyin": "jiēchù",
    "part_of_speech": "V",
    "meaning": "Tiếp xúc"
  },
  {
    "chinese": "接受",
    "level": "B1",
    "pinyin": "jiēshòu",
    "part_of_speech": "V",
    "meaning": "Tiếp thu"
  },
  {
    "chinese": "接著",
    "level": "B1",
    "pinyin": "jiēzhe",
    "part_of_speech": "Adv",
    "meaning": "Tiếp theo"
  },
  {
    "chinese": "結",
    "level": "B1",
    "pinyin": "jié",
    "part_of_speech": "V",
    "meaning": "Kết, đan thành"
  },
  {
    "chinese": "結果",
    "level": "B1",
    "pinyin": "jiéguǒ",
    "part_of_speech": "Conj",
    "meaning": "Kết quả"
  },
  {
    "chinese": "結局",
    "level": "B1",
    "pinyin": "jiéjú",
    "part_of_speech": "N",
    "meaning": "Kết cục"
  },
  {
    "chinese": "節",
    "level": "B1",
    "pinyin": "jié",
    "part_of_speech": "M",
    "meaning": "Mấu, khớp"
  },
  {
    "chinese": "節日",
    "level": "B1",
    "pinyin": "jiérì",
    "part_of_speech": "N",
    "meaning": "Ngày lễ, ngày hội"
  },
  {
    "chinese": "解決",
    "level": "B1",
    "pinyin": "jiějué",
    "part_of_speech": "V",
    "meaning": "Giải quyết"
  },
  {
    "chinese": "解釋",
    "level": "B1",
    "pinyin": "jiěshì",
    "part_of_speech": "V",
    "meaning": "Giải thích"
  },
  {
    "chinese": "姊妹",
    "level": "B1",
    "pinyin": "jiěmèi",
    "part_of_speech": "N",
    "meaning": "Chị em"
  },
  {
    "chinese": "斤",
    "level": "B1",
    "pinyin": "jīn",
    "part_of_speech": "M",
    "meaning": "Cân (=1/2kg)"
  },
  {
    "chinese": "金(子)",
    "level": "B1",
    "pinyin": "jīn(zi)",
    "part_of_speech": "N",
    "meaning": "Vàng"
  },
  {
    "chinese": "緊",
    "level": "B1",
    "pinyin": "jǐn",
    "part_of_speech": "Vs",
    "meaning": "Căng, kéo căng"
  },
  {
    "chinese": "僅",
    "level": "B1",
    "pinyin": "jĭn",
    "part_of_speech": "Adv",
    "meaning": "Vẻn vẹn, chỉ"
  },
  {
    "chinese": "儘管",
    "level": "B1",
    "pinyin": "jĭnguăn",
    "part_of_speech": "Conj",
    "meaning": "Mặc dù, cho dù"
  },
  {
    "chinese": "盡",
    "level": "B1",
    "pinyin": "jìn",
    "part_of_speech": "Vst",
    "meaning": "Hết sức, cố"
  },
  {
    "chinese": "進",
    "level": "B1",
    "pinyin": "jìn",
    "part_of_speech": "V",
    "meaning": "Tiến vào"
  },
  {
    "chinese": "進行",
    "level": "B1",
    "pinyin": "jìnxíng",
    "part_of_speech": "V",
    "meaning": "Tiến hành"
  },
  {
    "chinese": "進一步",
    "level": "B1",
    "pinyin": "jìnyíbù",
    "part_of_speech": "Adv",
    "meaning": "Tiến lên 1 bước"
  },
  {
    "chinese": "經",
    "level": "B1",
    "pinyin": "jīng",
    "part_of_speech": "V",
    "meaning": "Trải qua"
  },
  {
    "chinese": "經費",
    "level": "B1",
    "pinyin": "jīngfèi",
    "part_of_speech": "N",
    "meaning": "Kinh phí"
  },
  {
    "chinese": "經過",
    "level": "B1",
    "pinyin": "jīngguò",
    "part_of_speech": "N",
    "meaning": "Quá trình"
  },
  {
    "chinese": "經過",
    "level": "B1",
    "pinyin": "jīngguò",
    "part_of_speech": "Vst",
    "meaning": "Trải qua, đi qua"
  },
  {
    "chinese": "經驗",
    "level": "B1",
    "pinyin": "jīngyàn",
    "part_of_speech": "Vpt",
    "meaning": "Kinh nghiệm"
  },
  {
    "chinese": "精神",
    "level": "B1",
    "pinyin": "jīngshén",
    "part_of_speech": "N",
    "meaning": "Tinh thần"
  },
  {
    "chinese": "驚訝",
    "level": "B1",
    "pinyin": "jīngyà",
    "part_of_speech": "Vs",
    "meaning": "Kinh ngạc"
  },
  {
    "chinese": "酒吧",
    "level": "B1",
    "pinyin": "jiŭbā",
    "part_of_speech": "N",
    "meaning": "Quán bar"
  },
  {
    "chinese": "救",
    "level": "B1",
    "pinyin": "jiù",
    "part_of_speech": "V",
    "meaning": "Cứu giúp"
  },
  {
    "chinese": "舅舅",
    "level": "B1",
    "pinyin": "jiùjiu",
    "part_of_speech": "N",
    "meaning": "Cậu (em của mẹ)"
  },
  {
    "chinese": "舅媽",
    "level": "B1",
    "pinyin": "jiùmā",
    "part_of_speech": "N",
    "meaning": "Mợ (vợ của cậu)"
  },
  {
    "chinese": "就",
    "level": "B1",
    "pinyin": "jiù",
    "part_of_speech": "Prep",
    "meaning": "Thì"
  },
  {
    "chinese": "就是",
    "level": "B1",
    "pinyin": "jiùshì",
    "part_of_speech": "Conj",
    "meaning": "Nhất định"
  },
  {
    "chinese": "就算",
    "level": "B1",
    "pinyin": "jiùsuàn",
    "part_of_speech": "Conj",
    "meaning": "Cho dù"
  },
  {
    "chinese": "就要",
    "level": "B1",
    "pinyin": "jiùyào",
    "part_of_speech": "Adv",
    "meaning": "Sẽ, sẽ đến"
  },
  {
    "chinese": "居住",
    "level": "B1",
    "pinyin": "jūzhù",
    "part_of_speech": "Vi",
    "meaning": "Cư trú, sống, ở"
  },
  {
    "chinese": "橘子",
    "level": "B1",
    "pinyin": "júzi",
    "part_of_speech": "N",
    "meaning": "Cây quýt, quả quýt"
  },
  {
    "chinese": "舉",
    "level": "B1",
    "pinyin": "jǔ",
    "part_of_speech": "V",
    "meaning": "Giương, nâng lên"
  },
  {
    "chinese": "舉辦",
    "level": "B1",
    "pinyin": "jŭbàn",
    "part_of_speech": "V",
    "meaning": "Tổ chức, cử hành"
  },
  {
    "chinese": "舉手",
    "level": "B1",
    "pinyin": "jŭshŏu",
    "part_of_speech": "V-sep",
    "meaning": "Giơ tay"
  },
  {
    "chinese": "舉行",
    "level": "B1",
    "pinyin": "jǔxíng",
    "part_of_speech": "V",
    "meaning": "Tiến hành, tổ chức"
  },
  {
    "chinese": "句",
    "level": "B1",
    "pinyin": "jù",
    "part_of_speech": "M",
    "meaning": "Câu"
  },
  {
    "chinese": "聚",
    "level": "B1",
    "pinyin": "jù",
    "part_of_speech": "Vi",
    "meaning": "Tụ tập"
  },
  {
    "chinese": "劇本",
    "level": "B1",
    "pinyin": "jùběn",
    "part_of_speech": "N",
    "meaning": "kịch bản"
  },
  {
    "chinese": "劇情",
    "level": "B1",
    "pinyin": "jùqíng",
    "part_of_speech": "N",
    "meaning": "Tình tiết vở kịch"
  },
  {
    "chinese": "拒絕",
    "level": "B1",
    "pinyin": "jùjué",
    "part_of_speech": "V",
    "meaning": "Từ chối, cự tuyệt"
  },
  {
    "chinese": "距離",
    "level": "B1",
    "pinyin": "jùlí",
    "part_of_speech": "N",
    "meaning": "Khoảng cách, cự ly"
  },
  {
    "chinese": "具有",
    "level": "B1",
    "pinyin": "jùyŏu",
    "part_of_speech": "Vst",
    "meaning": "Có, vốn có"
  },
  {
    "chinese": "絕對",
    "level": "B1",
    "pinyin": "juéduì",
    "part_of_speech": "Adv",
    "meaning": "Tuyệt đối"
  },
  {
    "chinese": "軍隊",
    "level": "B1",
    "pinyin": "jūnduì",
    "part_of_speech": "N",
    "meaning": "Quân đội"
  },
  {
    "chinese": "軍人",
    "level": "B1",
    "pinyin": "jūnrén",
    "part_of_speech": "N",
    "meaning": "Quân nhân"
  },
  {
    "chinese": "卡車",
    "level": "B1",
    "pinyin": "kǎchē",
    "part_of_speech": "N",
    "meaning": "Xe tải"
  },
  {
    "chinese": "開放",
    "level": "B1",
    "pinyin": "kāifàng",
    "part_of_speech": "V",
    "meaning": "Mở bỏ phong tỏa"
  },
  {
    "chinese": "開花",
    "level": "B1",
    "pinyin": "kāihuā",
    "part_of_speech": "Vp-sep",
    "meaning": "Nở hoa"
  },
  {
    "chinese": "開朗",
    "level": "B1",
    "pinyin": "kāilăng",
    "part_of_speech": "Vs",
    "meaning": "Thoáng mát"
  },
  {
    "chinese": "開始",
    "level": "B1",
    "pinyin": "kāishǐ",
    "part_of_speech": "N",
    "meaning": "Bắt đầu"
  },
  {
    "chinese": "開玩笑",
    "level": "B1",
    "pinyin": "kāiwánxiào",
    "part_of_speech": "V-sep",
    "meaning": "Đùa, giỡn"
  },
  {
    "chinese": "看不起",
    "level": "B1",
    "pinyin": "kànbuqĭ",
    "part_of_speech": "Vst",
    "meaning": "Khinh thường, xem thường"
  },
  {
    "chinese": "看法",
    "level": "B1",
    "pinyin": "kànfǎ",
    "part_of_speech": "N",
    "meaning": "Cách nhìn, quan điểm"
  },
  {
    "chinese": "看起來",
    "level": "B1",
    "pinyin": "kànqĭlái",
    "part_of_speech": "Adv",
    "meaning": "Xem ra, coi như"
  },
  {
    "chinese": "考",
    "level": "B1",
    "pinyin": "kǎo",
    "part_of_speech": "V",
    "meaning": "Thi, hỏi, đố"
  },
  {
    "chinese": "棵",
    "level": "B1",
    "pinyin": "kē",
    "part_of_speech": "M",
    "meaning": "Cây, ngọn"
  },
  {
    "chinese": "刻",
    "level": "B1",
    "pinyin": "kè",
    "part_of_speech": "M",
    "meaning": "Khắc, mười lăm phút"
  },
  {
    "chinese": "科",
    "level": "B1",
    "pinyin": "kē",
    "part_of_speech": "M",
    "meaning": "Môn học, môn, khoa"
  },
  {
    "chinese": "科技",
    "level": "B1",
    "pinyin": "kējì",
    "part_of_speech": "N",
    "meaning": "Khoa học kĩ thuật"
  },
  {
    "chinese": "科學",
    "level": "B1",
    "pinyin": "kēxué",
    "part_of_speech": "Vs",
    "meaning": "Khoa học, ngành học"
  },
  {
    "chinese": "可",
    "level": "B1",
    "pinyin": "kě",
    "part_of_speech": "Adv",
    "meaning": "Thật, quả là"
  },
  {
    "chinese": "可",
    "level": "B1",
    "pinyin": "kě",
    "part_of_speech": "Vaux",
    "meaning": "Có thể, có khả năng"
  },
  {
    "chinese": "可靠",
    "level": "B1",
    "pinyin": "kěkào",
    "part_of_speech": "Vs",
    "meaning": "Đáng tin"
  },
  {
    "chinese": "可樂",
    "level": "B1",
    "pinyin": "kělè",
    "part_of_speech": "N",
    "meaning": "Cô-ca"
  },
  {
    "chinese": "可惡",
    "level": "B1",
    "pinyin": "kěwù",
    "part_of_speech": "Vs",
    "meaning": "Đáng ghét, đáng giận"
  },
  {
    "chinese": "可惜",
    "level": "B1",
    "pinyin": "kěxí",
    "part_of_speech": "Vs",
    "meaning": "Đáng tiếc"
  },
  {
    "chinese": "可以",
    "level": "B1",
    "pinyin": "kěyǐ",
    "part_of_speech": "Vaux",
    "meaning": "Có thể"
  },
  {
    "chinese": "渴望",
    "level": "B1",
    "pinyin": "kěwàng",
    "part_of_speech": "Vst",
    "meaning": "Khát vọng, khát khao"
  },
  {
    "chinese": "克",
    "level": "B1",
    "pinyin": "kè",
    "part_of_speech": "M",
    "meaning": "Khắc, khắc chế"
  },
  {
    "chinese": "克服",
    "level": "B1",
    "pinyin": "kèfú",
    "part_of_speech": "Vpt",
    "meaning": "Khắc phục"
  },
  {
    "chinese": "課程",
    "level": "B1",
    "pinyin": "kèchéng",
    "part_of_speech": "N",
    "meaning": "Chương trình học"
  },
  {
    "chinese": "課堂",
    "level": "B1",
    "pinyin": "kètáng",
    "part_of_speech": "N",
    "meaning": "Tại lớp, trong lớp"
  },
  {
    "chinese": "課文",
    "level": "B1",
    "pinyin": "kèwén",
    "part_of_speech": "N",
    "meaning": "Bài khóa, bài văn"
  },
  {
    "chinese": "客滿",
    "level": "B1",
    "pinyin": "kèmăn",
    "part_of_speech": "Vp",
    "meaning": "Không còn chỗ trống"
  },
  {
    "chinese": "刻",
    "level": "B1",
    "pinyin": "kè",
    "part_of_speech": "V",
    "meaning": "Khắc"
  },
  {
    "chinese": "肯",
    "level": "B1",
    "pinyin": "kěn",
    "part_of_speech": "Vaux",
    "meaning": "Đồng ý, tán thành"
  },
  {
    "chinese": "肯定",
    "level": "B1",
    "pinyin": "kěndìng",
    "part_of_speech": "Vs",
    "meaning": "Khẳng định"
  },
  {
    "chinese": "空",
    "level": "B1",
    "pinyin": "kōng",
    "part_of_speech": "Vs",
    "meaning": "Trống không"
  },
  {
    "chinese": "空間",
    "level": "B1",
    "pinyin": "kōngjiān",
    "part_of_speech": "N",
    "meaning": "Không gian"
  },
  {
    "chinese": "空軍",
    "level": "B1",
    "pinyin": "kōngjūn",
    "part_of_speech": "N",
    "meaning": "Không quân"
  },
  {
    "chinese": "恐怕",
    "level": "B1",
    "pinyin": "kǒngpà",
    "part_of_speech": "Adv",
    "meaning": "E rằng, sợ rằng"
  },
  {
    "chinese": "空",
    "level": "B1",
    "pinyin": "kòng",
    "part_of_speech": "Vs",
    "meaning": "Trống rỗng"
  },
  {
    "chinese": "口",
    "level": "B1",
    "pinyin": "kǒu",
    "part_of_speech": "N",
    "meaning": "Miệng"
  },
  {
    "chinese": "口袋",
    "level": "B1",
    "pinyin": "kǒudài",
    "part_of_speech": "N",
    "meaning": "Túi áo, túi, bao"
  },
  {
    "chinese": "口味",
    "level": "B1",
    "pinyin": "kŏuwèi",
    "part_of_speech": "N",
    "meaning": "Khẩu vị, hương vị"
  },
  {
    "chinese": "誇張",
    "level": "B1",
    "pinyin": "kuāzhāng",
    "part_of_speech": "Vs",
    "meaning": "Khoa trương"
  },
  {
    "chinese": "快",
    "level": "B1",
    "pinyin": "kuài",
    "part_of_speech": "Adv",
    "meaning": "Nhanh"
  },
  {
    "chinese": "快要",
    "level": "B1",
    "pinyin": "kuàiyào",
    "part_of_speech": "Adv",
    "meaning": "Sắp, suýt"
  },
  {
    "chinese": "寬",
    "level": "B1",
    "pinyin": "kuān",
    "part_of_speech": "Vs",
    "meaning": "Rộng, bao quát"
  },
  {
    "chinese": "況且",
    "level": "B1",
    "pinyin": "kuàngqiě",
    "part_of_speech": "Conj",
    "meaning": "Vả lại"
  },
  {
    "chinese": "困難",
    "level": "B1",
    "pinyin": "kùnnán",
    "part_of_speech": "N",
    "meaning": "Khó khăn, trở ngại"
  },
  {
    "chinese": "困難",
    "level": "B1",
    "pinyin": "kùnnán",
    "part_of_speech": "Vs",
    "meaning": "Gặp trắc trở, khó khăn"
  },
  {
    "chinese": "擴大",
    "level": "B1",
    "pinyin": "kuòdà",
    "part_of_speech": "V",
    "meaning": "Mở rộng, tăng thêm"
  },
  {
    "chinese": "拉肚子",
    "level": "B1",
    "pinyin": "lādùzi",
    "part_of_speech": "V-sep",
    "meaning": "Bị đau bụng, tiêu chảy"
  },
  {
    "chinese": "啦",
    "level": "B1",
    "pinyin": "la",
    "part_of_speech": "Ptc",
    "meaning": "Đấy, nhé"
  },
  {
    "chinese": "來",
    "level": "B1",
    "pinyin": "lái",
    "part_of_speech": "Adv",
    "meaning": "Đến"
  },
  {
    "chinese": "來",
    "level": "B1",
    "pinyin": "lái",
    "part_of_speech": "Ptc",
    "meaning": "Xảy đến, xảy ra"
  },
  {
    "chinese": "來不及",
    "level": "B1",
    "pinyin": "láibùjí",
    "part_of_speech": "Vs",
    "meaning": "Không kịp"
  },
  {
    "chinese": "來得及",
    "level": "B1",
    "pinyin": "láidejí",
    "part_of_speech": "Vs",
    "meaning": "Kịp, còn kịp"
  },
  {
    "chinese": "藍",
    "level": "B1",
    "pinyin": "lán",
    "part_of_speech": "Vs",
    "meaning": "Lam, xanh lam"
  },
  {
    "chinese": "浪漫",
    "level": "B1",
    "pinyin": "làngmàn",
    "part_of_speech": "Vs",
    "meaning": "Lãng mạn"
  },
  {
    "chinese": "老公",
    "level": "B1",
    "pinyin": "lăogōng",
    "part_of_speech": "N",
    "meaning": "Chồng"
  },
  {
    "chinese": "老虎",
    "level": "B1",
    "pinyin": "lăohŭ",
    "part_of_speech": "N",
    "meaning": "Con hổ"
  },
  {
    "chinese": "老婆",
    "level": "B1",
    "pinyin": "lăopo",
    "part_of_speech": "N",
    "meaning": "Vợ"
  },
  {
    "chinese": "老實",
    "level": "B1",
    "pinyin": "lăoshi",
    "part_of_speech": "Vs",
    "meaning": "Trung thành, trung thực"
  },
  {
    "chinese": "老是",
    "level": "B1",
    "pinyin": "lăoshì",
    "part_of_speech": "Adv",
    "meaning": "Luôn luôn"
  },
  {
    "chinese": "樂",
    "level": "B1",
    "pinyin": "lè",
    "part_of_speech": "Vs",
    "meaning": "Âm nhạc"
  },
  {
    "chinese": "樂觀",
    "level": "B1",
    "pinyin": "lèguān",
    "part_of_speech": "Vs",
    "meaning": "Lạc quan, vui vẻ"
  },
  {
    "chinese": "樂趣",
    "level": "B1",
    "pinyin": "lèqù",
    "part_of_speech": "N",
    "meaning": "Niềm vui, hứng thú"
  },
  {
    "chinese": "垃圾",
    "level": "B1",
    "pinyin": "lèsè",
    "part_of_speech": "N",
    "meaning": "Rác, rác thải"
  },
  {
    "chinese": "淚",
    "level": "B1",
    "pinyin": "lèi",
    "part_of_speech": "N",
    "meaning": "Nước mắt, lệ"
  },
  {
    "chinese": "類",
    "level": "B1",
    "pinyin": "lèi",
    "part_of_speech": "M",
    "meaning": "Chủng loại"
  },
  {
    "chinese": "冷淡",
    "level": "B1",
    "pinyin": "lěngdàn",
    "part_of_speech": "Vs",
    "meaning": "Vắng lặng, lạnh nhạt"
  },
  {
    "chinese": "離",
    "level": "B1",
    "pinyin": "lí",
    "part_of_speech": "Prep",
    "meaning": "Xa rời, xa cách"
  },
  {
    "chinese": "離婚",
    "level": "B1",
    "pinyin": "líhūn",
    "part_of_speech": "Vp-sep",
    "meaning": "Li dị, li hôn"
  },
  {
    "chinese": "里",
    "level": "B1",
    "pinyin": "lǐ",
    "part_of_speech": "M",
    "meaning": "đơn vị đo khoảng cách (≈ 500m)"
  },
  {
    "chinese": "裡邊",
    "level": "B1",
    "pinyin": "lĭbiān",
    "part_of_speech": "N",
    "meaning": "Bên trong"
  },
  {
    "chinese": "理解",
    "level": "B1",
    "pinyin": "lĭjiě",
    "part_of_speech": "Vst",
    "meaning": "Hiểu, tìm hiểu"
  },
  {
    "chinese": "理論",
    "level": "B1",
    "pinyin": "lĭlùn",
    "part_of_speech": "N",
    "meaning": "Lý luận, lý thuyết"
  },
  {
    "chinese": "理想",
    "level": "B1",
    "pinyin": "lĭxiăng",
    "part_of_speech": "N",
    "meaning": "Lý tưởng"
  },
  {
    "chinese": "理想",
    "level": "B1",
    "pinyin": "lĭxiăng",
    "part_of_speech": "Vs",
    "meaning": "Ước vọng, hy vọng"
  },
  {
    "chinese": "裏面",
    "level": "B1",
    "pinyin": "lǐmiàn",
    "part_of_speech": "N",
    "meaning": "Bên trong"
  },
  {
    "chinese": "禮堂",
    "level": "B1",
    "pinyin": "lĭtáng",
    "part_of_speech": "N",
    "meaning": "Lễ đường"
  },
  {
    "chinese": "力",
    "level": "B1",
    "pinyin": "lì",
    "part_of_speech": "N",
    "meaning": "Lực, sức lực"
  },
  {
    "chinese": "力量",
    "level": "B1",
    "pinyin": "lìlìang",
    "part_of_speech": "N",
    "meaning": "Lực lượng, sức mạnh"
  },
  {
    "chinese": "厲害",
    "level": "B1",
    "pinyin": "lìhai",
    "part_of_speech": "Vs",
    "meaning": "Lợi hại, gay gắt, dữ dội"
  },
  {
    "chinese": "立刻",
    "level": "B1",
    "pinyin": "lìkè",
    "part_of_speech": "Adv",
    "meaning": "Ngay lập tức"
  },
  {
    "chinese": "例如",
    "level": "B1",
    "pinyin": "lìrú",
    "part_of_speech": "Prep",
    "meaning": "Ví dụ"
  },
  {
    "chinese": "例子",
    "level": "B1",
    "pinyin": "lìzi",
    "part_of_speech": "N",
    "meaning": "Thí dụ"
  },
  {
    "chinese": "利益",
    "level": "B1",
    "pinyin": "lìyì",
    "part_of_speech": "N",
    "meaning": "Lợi ích, quyền lợi"
  },
  {
    "chinese": "利用",
    "level": "B1",
    "pinyin": "lìyòng",
    "part_of_speech": "V",
    "meaning": "Sử dụng, dùng, lợi dụng"
  },
  {
    "chinese": "連",
    "level": "B1",
    "pinyin": "lián",
    "part_of_speech": "Conj",
    "meaning": "Ngay cả…"
  },
  {
    "chinese": "連",
    "level": "B1",
    "pinyin": "lián",
    "part_of_speech": "Vst",
    "meaning": "Gắn bó, nối liền"
  },
  {
    "chinese": "連/聯絡",
    "level": "B1",
    "pinyin": "liánluò",
    "part_of_speech": "V",
    "meaning": "Liên lạc, liên hệ"
  },
  {
    "chinese": "連續劇",
    "level": "B1",
    "pinyin": "liánxùjù",
    "part_of_speech": "N",
    "meaning": "Phim bộ, phim nhiều tập"
  },
  {
    "chinese": "練",
    "level": "B1",
    "pinyin": "liàn",
    "part_of_speech": "V",
    "meaning": "Luyện tập"
  },
  {
    "chinese": "戀愛",
    "level": "B1",
    "pinyin": "liànài",
    "part_of_speech": "Vp",
    "meaning": "Yêu đương"
  },
  {
    "chinese": "涼",
    "level": "B1",
    "pinyin": "liáng",
    "part_of_speech": "Vs",
    "meaning": "Để nguội"
  },
  {
    "chinese": "良好",
    "level": "B1",
    "pinyin": "liánghăo",
    "part_of_speech": "Vs",
    "meaning": "Tốt đẹp"
  },
  {
    "chinese": "亮",
    "level": "B1",
    "pinyin": "liàng",
    "part_of_speech": "Vs",
    "meaning": "Phát sáng"
  },
  {
    "chinese": "聊",
    "level": "B1",
    "pinyin": "liáo",
    "part_of_speech": "V",
    "meaning": "Nói chuyện phiếm"
  },
  {
    "chinese": "了不起",
    "level": "B1",
    "pinyin": "liăobuqĭ",
    "part_of_speech": "Vs",
    "meaning": "Giỏi lắm, khá lắm"
  },
  {
    "chinese": "靈魂",
    "level": "B1",
    "pinyin": "línghún",
    "part_of_speech": "N",
    "meaning": "Linh hồn"
  },
  {
    "chinese": "零錢",
    "level": "B1",
    "pinyin": "língqián",
    "part_of_speech": "N",
    "meaning": "Tiền lẻ"
  },
  {
    "chinese": "零用錢",
    "level": "B1",
    "pinyin": "língyòngqián",
    "part_of_speech": "N",
    "meaning": "Tiền tiêu vặt"
  },
  {
    "chinese": "領",
    "level": "B1",
    "pinyin": "lǐng",
    "part_of_speech": "V",
    "meaning": "Dẫn dắt"
  },
  {
    "chinese": "領導",
    "level": "B1",
    "pinyin": "lĭngdăo",
    "part_of_speech": "V",
    "meaning": "Lãnh đạo"
  },
  {
    "chinese": "領域",
    "level": "B1",
    "pinyin": "lĭngyù",
    "part_of_speech": "N",
    "meaning": "Lĩnh vực"
  },
  {
    "chinese": "令",
    "level": "B1",
    "pinyin": "lìng",
    "part_of_speech": "Vst",
    "meaning": "Ra lệnh"
  },
  {
    "chinese": "流",
    "level": "B1",
    "pinyin": "liú",
    "part_of_speech": "V",
    "meaning": "Chảy, đổ, di chuyển"
  },
  {
    "chinese": "流汗",
    "level": "B1",
    "pinyin": "liúhàn",
    "part_of_speech": "V-sep",
    "meaning": "Đổ mồ hôi"
  },
  {
    "chinese": "流血",
    "level": "B1",
    "pinyin": "liúxiě",
    "part_of_speech": "V-sep",
    "meaning": "Đổ máu"
  },
  {
    "chinese": "留學",
    "level": "B1",
    "pinyin": "liúxué",
    "part_of_speech": "Vi",
    "meaning": "Du học"
  },
  {
    "chinese": "留學生",
    "level": "B1",
    "pinyin": "liúxuéshēng",
    "part_of_speech": "N",
    "meaning": "Du học sinh"
  },
  {
    "chinese": "龍",
    "level": "B1",
    "pinyin": "lóng",
    "part_of_speech": "N",
    "meaning": "Con rồng"
  },
  {
    "chinese": "錄",
    "level": "B1",
    "pinyin": "lù",
    "part_of_speech": "V",
    "meaning": "Ghi chép, thu (băng)"
  },
  {
    "chinese": "錄取",
    "level": "B1",
    "pinyin": "lùqŭ",
    "part_of_speech": "V",
    "meaning": "Tuyển chọn, nhận vào"
  },
  {
    "chinese": "錄音",
    "level": "B1",
    "pinyin": "lùyīn",
    "part_of_speech": "V-sep",
    "meaning": "Thu âm, ghi âm"
  },
  {
    "chinese": "露營",
    "level": "B1",
    "pinyin": "lùyíng",
    "part_of_speech": "V-sep",
    "meaning": "Đóng quân dã ngoại"
  },
  {
    "chinese": "亂",
    "level": "B1",
    "pinyin": "luàn",
    "part_of_speech": "Vs",
    "meaning": "Loạn, rối, lộn xộn"
  },
  {
    "chinese": "輪胎",
    "level": "B1",
    "pinyin": "lúntāi",
    "part_of_speech": "N",
    "meaning": "Lốp xe"
  },
  {
    "chinese": "旅客",
    "level": "B1",
    "pinyin": "lǚkè",
    "part_of_speech": "N",
    "meaning": "Lữ khách, hành khách"
  },
  {
    "chinese": "綠",
    "level": "B1",
    "pinyin": "lǜ",
    "part_of_speech": "Vs",
    "meaning": "Trở nên xanh"
  },
  {
    "chinese": "律師",
    "level": "B1",
    "pinyin": "lǜshī",
    "part_of_speech": "N",
    "meaning": "Luật sư"
  },
  {
    "chinese": "麻煩",
    "level": "B1",
    "pinyin": "máfan",
    "part_of_speech": "Vs",
    "meaning": "Phiền phức, phiền toái"
  },
  {
    "chinese": "馬桶",
    "level": "B1",
    "pinyin": "mătŏng",
    "part_of_speech": "N",
    "meaning": "Cái bô (có nắp)"
  },
  {
    "chinese": "碼頭",
    "level": "B1",
    "pinyin": "mătou",
    "part_of_speech": "N",
    "meaning": "Bến đò, bến sông"
  },
  {
    "chinese": "螞蟻",
    "level": "B1",
    "pinyin": "măyĭ",
    "part_of_speech": "N",
    "meaning": "Con kiến"
  },
  {
    "chinese": "罵",
    "level": "B1",
    "pinyin": "mà",
    "part_of_speech": "V",
    "meaning": "Chửi, mắng"
  },
  {
    "chinese": "嘛",
    "level": "B1",
    "pinyin": "ma",
    "part_of_speech": "Ptc",
    "meaning": "Đi, mà"
  },
  {
    "chinese": "滿",
    "level": "B1",
    "pinyin": "măn",
    "part_of_speech": "Det",
    "meaning": "Đầy, chật"
  },
  {
    "chinese": "滿",
    "level": "B1",
    "pinyin": "măn",
    "part_of_speech": "Vs",
    "meaning": "Thỏa mãn"
  },
  {
    "chinese": "滿足",
    "level": "B1",
    "pinyin": "mănzú",
    "part_of_speech": "Vs",
    "meaning": "Làm thỏa mãn, hài lòng"
  },
  {
    "chinese": "慢慢",
    "level": "B1",
    "pinyin": "mànmàn",
    "part_of_speech": "Chậm",
    "meaning": "rãi"
  },
  {
    "chinese": "慢跑",
    "level": "B1",
    "pinyin": "mànpăo",
    "part_of_speech": "Vi",
    "meaning": "Chạy bộ"
  },
  {
    "chinese": "慢用",
    "level": "B1",
    "pinyin": "mànyòng",
    "part_of_speech": "Vi",
    "meaning": "Ăn từ từ, thưởng thức món ăn"
  },
  {
    "chinese": "毛",
    "level": "B1",
    "pinyin": "máo",
    "part_of_speech": "N",
    "meaning": "Lông"
  },
  {
    "chinese": "毛病",
    "level": "B1",
    "pinyin": "máobìng",
    "part_of_speech": "N",
    "meaning": "Khuyết điểm, thói xấu"
  },
  {
    "chinese": "貿易",
    "level": "B1",
    "pinyin": "màoyì",
    "part_of_speech": "N",
    "meaning": "Thương mại, buôn bán"
  },
  {
    "chinese": "沒",
    "level": "B1",
    "pinyin": "méi",
    "part_of_speech": "Ptc",
    "meaning": "Chưa"
  },
  {
    "chinese": "沒",
    "level": "B1",
    "pinyin": "méi",
    "part_of_speech": "Vp",
    "meaning": "Chìm, lặn"
  },
  {
    "chinese": "沒什麼",
    "level": "B1",
    "pinyin": "méishénme",
    "part_of_speech": "Vs",
    "meaning": "Không sao, không việc gì"
  },
  {
    "chinese": "沒想到",
    "level": "B1",
    "pinyin": "méixiăngdào",
    "part_of_speech": "Không",
    "meaning": "ngờ rằng"
  },
  {
    "chinese": "玫瑰",
    "level": "B1",
    "pinyin": "méigui",
    "part_of_speech": "N",
    "meaning": "Hoa hồng"
  },
  {
    "chinese": "每",
    "level": "B1",
    "pinyin": "měi",
    "part_of_speech": "Adv",
    "meaning": "Mỗi"
  },
  {
    "chinese": "美好",
    "level": "B1",
    "pinyin": "měihăo",
    "part_of_speech": "Vs",
    "meaning": "Tốt đẹp"
  },
  {
    "chinese": "門",
    "level": "B1",
    "pinyin": "mén",
    "part_of_speech": "M",
    "meaning": "Cửa, cánh cửa"
  },
  {
    "chinese": "夢",
    "level": "B1",
    "pinyin": "mèng",
    "part_of_speech": "N",
    "meaning": "Mơ, giấc mơ"
  },
  {
    "chinese": "迷路",
    "level": "B1",
    "pinyin": "mílù",
    "part_of_speech": "Vp-sep",
    "meaning": "Lạc đường"
  },
  {
    "chinese": "迷人",
    "level": "B1",
    "pinyin": "mírén",
    "part_of_speech": "Vs",
    "meaning": "Mê hoặc lòng người"
  },
  {
    "chinese": "米飯",
    "level": "B1",
    "pinyin": "mǐfàn",
    "part_of_speech": "N",
    "meaning": "Cơm"
  },
  {
    "chinese": "米粉",
    "level": "B1",
    "pinyin": "mĭfěn",
    "part_of_speech": "N",
    "meaning": "Bột gạo, bún"
  },
  {
    "chinese": "秘/祕密",
    "level": "B1",
    "pinyin": "mìmì",
    "part_of_speech": "N",
    "meaning": "Bí mật"
  },
  {
    "chinese": "密切",
    "level": "B1",
    "pinyin": "mìqiè",
    "part_of_speech": "Vs",
    "meaning": "Mật thiết"
  },
  {
    "chinese": "免費",
    "level": "B1",
    "pinyin": "miănfèi",
    "part_of_speech": "Vs",
    "meaning": "Miễn phí"
  },
  {
    "chinese": "面",
    "level": "B1",
    "pinyin": "miàn",
    "part_of_speech": "M",
    "meaning": "Mặt"
  },
  {
    "chinese": "面",
    "level": "B1",
    "pinyin": "miàn",
    "part_of_speech": "N",
    "meaning": "Trước mặt, đối diện"
  },
  {
    "chinese": "面積",
    "level": "B1",
    "pinyin": "miànjī",
    "part_of_speech": "N",
    "meaning": "Diện tích"
  },
  {
    "chinese": "面前",
    "level": "B1",
    "pinyin": "miànqián",
    "part_of_speech": "N",
    "meaning": "Phía trước, trước mặt"
  },
  {
    "chinese": "麵條",
    "level": "B1",
    "pinyin": "miàntiáo",
    "part_of_speech": "N",
    "meaning": "Mì sợi"
  },
  {
    "chinese": "描寫",
    "level": "B1",
    "pinyin": "miáoxiě",
    "part_of_speech": "V",
    "meaning": "Miêu tả"
  },
  {
    "chinese": "秒",
    "level": "B1",
    "pinyin": "miǎo",
    "part_of_speech": "M",
    "meaning": "Giây"
  },
  {
    "chinese": "廟",
    "level": "B1",
    "pinyin": "miào",
    "part_of_speech": "N",
    "meaning": "Miếu, đền thờ"
  },
  {
    "chinese": "民國",
    "level": "B1",
    "pinyin": "mínguó",
    "part_of_speech": "N",
    "meaning": "Dân quốc"
  },
  {
    "chinese": "民族",
    "level": "B1",
    "pinyin": "mínzú",
    "part_of_speech": "N",
    "meaning": "Dân tộc"
  },
  {
    "chinese": "名",
    "level": "B1",
    "pinyin": "míng",
    "part_of_speech": "M",
    "meaning": "Tên gọi"
  },
  {
    "chinese": "名詞",
    "level": "B1",
    "pinyin": "míngcí",
    "part_of_speech": "N",
    "meaning": "Danh từ"
  },
  {
    "chinese": "明白",
    "level": "B1",
    "pinyin": "míngbái",
    "part_of_speech": "Vpt",
    "meaning": "Hiểu"
  },
  {
    "chinese": "明顯",
    "level": "B1",
    "pinyin": "míngxiăn",
    "part_of_speech": "Vs",
    "meaning": "Rõ ràng, nổi bật"
  },
  {
    "chinese": "明星",
    "level": "B1",
    "pinyin": "míngxīng",
    "part_of_speech": "N",
    "meaning": "Ngôi sao"
  },
  {
    "chinese": "命",
    "level": "B1",
    "pinyin": "mìng",
    "part_of_speech": "N",
    "meaning": "Sinh mệnh, mạng"
  },
  {
    "chinese": "摸",
    "level": "B1",
    "pinyin": "mō",
    "part_of_speech": "V",
    "meaning": "Mơ hồ"
  },
  {
    "chinese": "摩托車/機車",
    "level": "B1",
    "pinyin": "mótuōchē/jīchē",
    "part_of_speech": "N",
    "meaning": "Xe gắn máy, xe mô-tô"
  },
  {
    "chinese": "陌生",
    "level": "B1",
    "pinyin": "mòshēng",
    "part_of_speech": "Vs",
    "meaning": "Xa lạ, không quen"
  },
  {
    "chinese": "某",
    "level": "B1",
    "pinyin": "mŏu",
    "part_of_speech": "Det",
    "meaning": "Nào đó"
  },
  {
    "chinese": "木",
    "level": "B1",
    "pinyin": "mù",
    "part_of_speech": "N",
    "meaning": "Mộc, cây gỗ"
  },
  {
    "chinese": "木頭(˙ㄊㄡ)",
    "level": "B1",
    "pinyin": "mùtou",
    "part_of_speech": "N",
    "meaning": "Gỗ, mảnh gỗ"
  },
  {
    "chinese": "目的",
    "level": "B1",
    "pinyin": "mùdì",
    "part_of_speech": "N",
    "meaning": "Mục đích"
  },
  {
    "chinese": "目前",
    "level": "B1",
    "pinyin": "mùqián",
    "part_of_speech": "N",
    "meaning": "Hiện nay, trước mắt"
  },
  {
    "chinese": "拿手",
    "level": "B1",
    "pinyin": "náshŏu",
    "part_of_speech": "Vs",
    "meaning": "Sở trường"
  },
  {
    "chinese": "哪些",
    "level": "B1",
    "pinyin": "nǎxiē",
    "part_of_speech": "Det",
    "meaning": "Cái nào, người nào"
  },
  {
    "chinese": "那",
    "level": "B1",
    "pinyin": "nà",
    "part_of_speech": "Conj",
    "meaning": "Kia, đó"
  },
  {
    "chinese": "那麼",
    "level": "B1",
    "pinyin": "nàme",
    "part_of_speech": "Conj",
    "meaning": "Như vậy, như thế"
  },
  {
    "chinese": "那樣",
    "level": "B1",
    "pinyin": "nàyàng",
    "part_of_speech": "Adv",
    "meaning": "Như thế"
  },
  {
    "chinese": "那樣",
    "level": "B1",
    "pinyin": "nàyàng",
    "part_of_speech": "Vs",
    "meaning": "như vậy"
  },
  {
    "chinese": "哪",
    "level": "B1",
    "pinyin": "na",
    "part_of_speech": "Ptc",
    "meaning": "nhé, đấy (trợ từ)"
  },
  {
    "chinese": "奶",
    "level": "B1",
    "pinyin": "nǎi",
    "part_of_speech": "N",
    "meaning": "Sữa"
  },
  {
    "chinese": "奶茶",
    "level": "B1",
    "pinyin": "nǎichá",
    "part_of_speech": "N",
    "meaning": "Trà sữa"
  },
  {
    "chinese": "耐心",
    "level": "B1",
    "pinyin": "nàixīn",
    "part_of_speech": "N",
    "meaning": "Sự kiên nhẫn"
  },
  {
    "chinese": "南方",
    "level": "B1",
    "pinyin": "nánfāng",
    "part_of_speech": "N",
    "meaning": "Phương Nam"
  },
  {
    "chinese": "難怪",
    "level": "B1",
    "pinyin": "nánguài",
    "part_of_speech": "Adv",
    "meaning": "Thảo nào, hèn chi"
  },
  {
    "chinese": "難看",
    "level": "B1",
    "pinyin": "nánkàn",
    "part_of_speech": "Vs",
    "meaning": "Xấu xí, khó coi"
  },
  {
    "chinese": "腦",
    "level": "B1",
    "pinyin": "năo",
    "part_of_speech": "N",
    "meaning": "Não"
  },
  {
    "chinese": "腦子",
    "level": "B1",
    "pinyin": "năozi",
    "part_of_speech": "N",
    "meaning": "Não bộ"
  },
  {
    "chinese": "鬧鐘",
    "level": "B1",
    "pinyin": "nàozhōng",
    "part_of_speech": "N",
    "meaning": "Đồng hồ báo thức"
  },
  {
    "chinese": "內",
    "level": "B1",
    "pinyin": "nèi",
    "part_of_speech": "N",
    "meaning": "Trong, phía trong"
  },
  {
    "chinese": "內容",
    "level": "B1",
    "pinyin": "nèiróng",
    "part_of_speech": "N",
    "meaning": "Nội dung"
  },
  {
    "chinese": "能",
    "level": "B1",
    "pinyin": "néng",
    "part_of_speech": "Vaux",
    "meaning": "Năng lực, có thể"
  },
  {
    "chinese": "能夠",
    "level": "B1",
    "pinyin": "nénggòu",
    "part_of_speech": "Vaux",
    "meaning": "Có khả năng"
  },
  {
    "chinese": "能力",
    "level": "B1",
    "pinyin": "nénglì",
    "part_of_speech": "N",
    "meaning": "Năng lực, khả năng"
  },
  {
    "chinese": "年",
    "level": "B1",
    "pinyin": "nián",
    "part_of_speech": "N",
    "meaning": "Năm"
  },
  {
    "chinese": "年代",
    "level": "B1",
    "pinyin": "niándài",
    "part_of_speech": "N",
    "meaning": "Thời đại, thời kỳ"
  },
  {
    "chinese": "年齡",
    "level": "B1",
    "pinyin": "niánlíng",
    "part_of_speech": "N",
    "meaning": "Tuổi tác"
  },
  {
    "chinese": "年年",
    "level": "B1",
    "pinyin": "niánnián",
    "part_of_speech": "Adv",
    "meaning": "Hằng năm, mỗi năm"
  },
  {
    "chinese": "念書",
    "level": "B1",
    "pinyin": "niànshū",
    "part_of_speech": "V-sep",
    "meaning": "Học bài, đọc sách"
  },
  {
    "chinese": "農業",
    "level": "B1",
    "pinyin": "nóngyè",
    "part_of_speech": "N",
    "meaning": "Nông nghiệp"
  },
  {
    "chinese": "女士",
    "level": "B1",
    "pinyin": "nǚshì",
    "part_of_speech": "N",
    "meaning": "Bà, phu nhân, quý cô"
  },
  {
    "chinese": "喔",
    "level": "B1",
    "pinyin": "ō",
    "part_of_speech": "Ptc",
    "meaning": "ờ"
  },
  {
    "chinese": "哦",
    "level": "B1",
    "pinyin": "ó",
    "part_of_speech": "Ptc",
    "meaning": "Ngâm thơ"
  },
  {
    "chinese": "噢",
    "level": "B1",
    "pinyin": "yǔ",
    "part_of_speech": "Ptc",
    "meaning": "ờ"
  },
  {
    "chinese": "拍",
    "level": "B1",
    "pinyin": "pāi",
    "part_of_speech": "V",
    "meaning": "Đập, vỗ, phủi"
  },
  {
    "chinese": "排",
    "level": "B1",
    "pinyin": "pái",
    "part_of_speech": "V",
    "meaning": "Xếp, sắp xếp"
  },
  {
    "chinese": "牌子",
    "level": "B1",
    "pinyin": "páizi",
    "part_of_speech": "N",
    "meaning": "Thẻ, bảng, biển hiệu"
  },
  {
    "chinese": "盼望",
    "level": "B1",
    "pinyin": "pànwàng",
    "part_of_speech": "Vst",
    "meaning": "Trông mong, mong mỏi"
  },
  {
    "chinese": "旁",
    "level": "B1",
    "pinyin": "páng",
    "part_of_speech": "N",
    "meaning": "Bên cạnh"
  },
  {
    "chinese": "陪",
    "level": "B1",
    "pinyin": "péi",
    "part_of_speech": "V",
    "meaning": "ở cùng với"
  },
  {
    "chinese": "培養",
    "level": "B1",
    "pinyin": "péiyăng",
    "part_of_speech": "V",
    "meaning": "Nuôi dưỡng, bồi dưỡng"
  },
  {
    "chinese": "配",
    "level": "B1",
    "pinyin": "pèi",
    "part_of_speech": "V",
    "meaning": "Kết đôi"
  },
  {
    "chinese": "配合",
    "level": "B1",
    "pinyin": "pèihé",
    "part_of_speech": "V",
    "meaning": "Kết hợp, phối hợp"
  },
  {
    "chinese": "碰",
    "level": "B1",
    "pinyin": "pèng",
    "part_of_speech": "V",
    "meaning": "Đụng, chạm, vấp phải"
  },
  {
    "chinese": "碰到",
    "level": "B1",
    "pinyin": "pèngdào",
    "part_of_speech": "Vpt",
    "meaning": "Đi qua, đụng phải"
  },
  {
    "chinese": "碰上",
    "level": "B1",
    "pinyin": "pèngshàng",
    "part_of_speech": "Vpt",
    "meaning": "Gặp gỡ, đụng trúng"
  },
  {
    "chinese": "批評",
    "level": "B1",
    "pinyin": "pīpíng",
    "part_of_speech": "V",
    "meaning": "Phê bình"
  },
  {
    "chinese": "皮",
    "level": "B1",
    "pinyin": "pí",
    "part_of_speech": "N",
    "meaning": "Vỏ, da"
  },
  {
    "chinese": "皮帶",
    "level": "B1",
    "pinyin": "pídài",
    "part_of_speech": "N",
    "meaning": "Dây thắt lưng"
  },
  {
    "chinese": "皮膚",
    "level": "B1",
    "pinyin": "pífū",
    "part_of_speech": "N",
    "meaning": "Da dẻ"
  },
  {
    "chinese": "皮鞋",
    "level": "B1",
    "pinyin": "píxié",
    "part_of_speech": "N",
    "meaning": "Giày da"
  },
  {
    "chinese": "篇",
    "level": "B1",
    "pinyin": "piān",
    "part_of_speech": "M",
    "meaning": "Bài, trang vở"
  },
  {
    "chinese": "騙子",
    "level": "B1",
    "pinyin": "piànzi",
    "part_of_speech": "N",
    "meaning": "Tên lừa đảo"
  },
  {
    "chinese": "品質",
    "level": "B1",
    "pinyin": "pĭnzhí",
    "part_of_speech": "N",
    "meaning": "Phẩm chất"
  },
  {
    "chinese": "坪",
    "level": "B1",
    "pinyin": "píng",
    "part_of_speech": "M",
    "meaning": "Bình địa, bãi"
  },
  {
    "chinese": "平",
    "level": "B1",
    "pinyin": "píng",
    "part_of_speech": "Vs",
    "meaning": "Bằng phẳng, san bằng"
  },
  {
    "chinese": "平安",
    "level": "B1",
    "pinyin": "píngān",
    "part_of_speech": "Vs",
    "meaning": "Bình an"
  },
  {
    "chinese": "平等",
    "level": "B1",
    "pinyin": "píngděng",
    "part_of_speech": "Vs",
    "meaning": "Bình đẳng"
  },
  {
    "chinese": "平時",
    "level": "B1",
    "pinyin": "píngshí",
    "part_of_speech": "N",
    "meaning": "Bình thường"
  },
  {
    "chinese": "平原",
    "level": "B1",
    "pinyin": "píngyuán",
    "part_of_speech": "N",
    "meaning": "Đồng bằng, bình nguyên"
  },
  {
    "chinese": "瓶子",
    "level": "B1",
    "pinyin": "píngzi",
    "part_of_speech": "N",
    "meaning": "Bình, chai"
  },
  {
    "chinese": "破",
    "level": "B1",
    "pinyin": "pò",
    "part_of_speech": "Vp",
    "meaning": "Vỡ, thủng"
  },
  {
    "chinese": "破壞",
    "level": "B1",
    "pinyin": "pòhuài",
    "part_of_speech": "V",
    "meaning": "Phá hoại, làm hỏng"
  },
  {
    "chinese": "葡萄",
    "level": "B1",
    "pinyin": "pútao",
    "part_of_speech": "N",
    "meaning": "Trái nho"
  },
  {
    "chinese": "普遍",
    "level": "B1",
    "pinyin": "pŭbiàn",
    "part_of_speech": "Vs",
    "meaning": "Phổ biến"
  },
  {
    "chinese": "欺負",
    "level": "B1",
    "pinyin": "qīfù",
    "part_of_speech": "V",
    "meaning": "Bắt nạt, ăn hiếp"
  },
  {
    "chinese": "其次",
    "level": "B1",
    "pinyin": "qícì",
    "part_of_speech": "Conj",
    "meaning": "Lần sau, lần tiếp theo"
  },
  {
    "chinese": "其實",
    "level": "B1",
    "pinyin": "qíshí",
    "part_of_speech": "Adv",
    "meaning": "Thực ra"
  },
  {
    "chinese": "其中",
    "level": "B1",
    "pinyin": "qízhōng",
    "part_of_speech": "Det",
    "meaning": "Trong đó"
  },
  {
    "chinese": "期",
    "level": "B1",
    "pinyin": "qí",
    "part_of_speech": "M",
    "meaning": "Kì, thời kỳ"
  },
  {
    "chinese": "期間",
    "level": "B1",
    "pinyin": "qíjiān",
    "part_of_speech": "N",
    "meaning": "Dịp, thời kì, thời gian"
  },
  {
    "chinese": "起",
    "level": "B1",
    "pinyin": "qĭ",
    "part_of_speech": "N",
    "meaning": "Rời khỏi, nảy lên"
  },
  {
    "chinese": "起",
    "level": "B1",
    "pinyin": "qĭ",
    "part_of_speech": "V",
    "meaning": "Nhổ, nhấc, lôi lên"
  },
  {
    "chinese": "起來",
    "level": "B1",
    "pinyin": "qĭlái",
    "part_of_speech": "Ptc",
    "meaning": "Ngồi dậy, đứng dậy"
  },
  {
    "chinese": "氣",
    "level": "B1",
    "pinyin": "qì",
    "part_of_speech": "N",
    "meaning": "Không khí, hơi thở"
  },
  {
    "chinese": "氣",
    "level": "B1",
    "pinyin": "qì",
    "part_of_speech": "Vst",
    "meaning": "Bực bội, nổi cáu"
  },
  {
    "chinese": "氣溫",
    "level": "B1",
    "pinyin": "qìwēn",
    "part_of_speech": "N",
    "meaning": "Nhiệt độ không khí"
  },
  {
    "chinese": "汽水",
    "level": "B1",
    "pinyin": "qìshuǐ",
    "part_of_speech": "N",
    "meaning": "Nước có ga"
  },
  {
    "chinese": "企業",
    "level": "B1",
    "pinyin": "qìyè",
    "part_of_speech": "N",
    "meaning": "Xí nghiệp"
  },
  {
    "chinese": "簽名",
    "level": "B1",
    "pinyin": "qiānmíng",
    "part_of_speech": "V-sep",
    "meaning": "Ký tên"
  },
  {
    "chinese": "簽證",
    "level": "B1",
    "pinyin": "qiānzhèng",
    "part_of_speech": "N",
    "meaning": "Thị thực, visa"
  },
  {
    "chinese": "謙虛",
    "level": "B1",
    "pinyin": "qiānxū",
    "part_of_speech": "Vs",
    "meaning": "Khiêm tốn, khiêm nhường"
  },
  {
    "chinese": "前",
    "level": "B1",
    "pinyin": "qián",
    "part_of_speech": "Det",
    "meaning": "Trước"
  },
  {
    "chinese": "前",
    "level": "B1",
    "pinyin": "qián",
    "part_of_speech": "N",
    "meaning": "Phía trước"
  },
  {
    "chinese": "前年",
    "level": "B1",
    "pinyin": "qiánnián",
    "part_of_speech": "N",
    "meaning": "Năm trước, năm kia"
  },
  {
    "chinese": "淺",
    "level": "B1",
    "pinyin": "qiǎn",
    "part_of_speech": "Vs",
    "meaning": "Róc rách (tiếng nước chảy)"
  },
  {
    "chinese": "強盜",
    "level": "B1",
    "pinyin": "qiángdào",
    "part_of_speech": "N",
    "meaning": "Bọn giặc, bọn cướp"
  },
  {
    "chinese": "強調",
    "level": "B1",
    "pinyin": "qiángdiào",
    "part_of_speech": "V",
    "meaning": "Cường điệu, nhấn mạnh"
  },
  {
    "chinese": "搶",
    "level": "B1",
    "pinyin": "qiǎng",
    "part_of_speech": "V",
    "meaning": "Va, đập"
  },
  {
    "chinese": "親",
    "level": "B1",
    "pinyin": "qīn",
    "part_of_speech": "V",
    "meaning": "Thông gia, sui gia"
  },
  {
    "chinese": "親切",
    "level": "B1",
    "pinyin": "qīnqiè",
    "part_of_speech": "Vs",
    "meaning": "Thân mật, thân thiết"
  },
  {
    "chinese": "親手",
    "level": "B1",
    "pinyin": "qīnshŏu",
    "part_of_speech": "Adv",
    "meaning": "Tự tay, chính tay"
  },
  {
    "chinese": "親眼",
    "level": "B1",
    "pinyin": "qīnyăn",
    "part_of_speech": "Adv",
    "meaning": "Tận mắt, chính mắt"
  },
  {
    "chinese": "親自",
    "level": "B1",
    "pinyin": "qīnzì",
    "part_of_speech": "Adv",
    "meaning": "Tự mình, đích thân"
  },
  {
    "chinese": "清",
    "level": "B1",
    "pinyin": "qīng",
    "part_of_speech": "Vs-pred",
    "meaning": "Trong suốt, trong veo"
  },
  {
    "chinese": "青年",
    "level": "B1",
    "pinyin": "qīngnián",
    "part_of_speech": "N",
    "meaning": "Tuổi trẻ, thanh niên"
  },
  {
    "chinese": "青少年",
    "level": "B1",
    "pinyin": "qīngshàonián",
    "part_of_speech": "N",
    "meaning": "Vị thành niên, thiếu niên"
  },
  {
    "chinese": "輕鬆",
    "level": "B1",
    "pinyin": "qīngsōng",
    "part_of_speech": "Vs",
    "meaning": "Nhẹ nhàng, nhẹ nhõm"
  },
  {
    "chinese": "晴",
    "level": "B1",
    "pinyin": "qíng",
    "part_of_speech": "Vs-pred",
    "meaning": "Trời quang"
  },
  {
    "chinese": "情",
    "level": "B1",
    "pinyin": "qíng",
    "part_of_speech": "N",
    "meaning": "Tình cảm"
  },
  {
    "chinese": "情人",
    "level": "B1",
    "pinyin": "qíngrén",
    "part_of_speech": "N",
    "meaning": "Tình nhân, người yêu"
  },
  {
    "chinese": "情況",
    "level": "B1",
    "pinyin": "qíngkuàng",
    "part_of_speech": "N",
    "meaning": "Tình huống"
  },
  {
    "chinese": "情形",
    "level": "B1",
    "pinyin": "qíngxíng",
    "part_of_speech": "N",
    "meaning": "Tình hình"
  },
  {
    "chinese": "請教",
    "level": "B1",
    "pinyin": "qĭngjiào",
    "part_of_speech": "V",
    "meaning": "Thỉnh giáo, xin chỉ bảo"
  },
  {
    "chinese": "請求",
    "level": "B1",
    "pinyin": "qĭngqiú",
    "part_of_speech": "V",
    "meaning": "Thỉnh cầu, đề nghị"
  },
  {
    "chinese": "窮",
    "level": "B1",
    "pinyin": "qióng",
    "part_of_speech": "Vs",
    "meaning": "Nghèo nàn"
  },
  {
    "chinese": "求",
    "level": "B1",
    "pinyin": "qiú",
    "part_of_speech": "V",
    "meaning": "Thỉnh cầu, yêu cầu"
  },
  {
    "chinese": "球",
    "level": "B1",
    "pinyin": "qiú",
    "part_of_speech": "N",
    "meaning": "Hình cầu"
  },
  {
    "chinese": "球場",
    "level": "B1",
    "pinyin": "qiúchăng",
    "part_of_speech": "N",
    "meaning": "Sân bóng"
  },
  {
    "chinese": "球賽",
    "level": "B1",
    "pinyin": "qiúsài",
    "part_of_speech": "N",
    "meaning": "Cuộc thi đấu bóng"
  },
  {
    "chinese": "球員",
    "level": "B1",
    "pinyin": "qiúyuán",
    "part_of_speech": "N",
    "meaning": "Cầu thủ"
  },
  {
    "chinese": "取代",
    "level": "B1",
    "pinyin": "qŭdài",
    "part_of_speech": "V",
    "meaning": "Lật đổ, thay thế địa vị"
  },
  {
    "chinese": "去",
    "level": "B1",
    "pinyin": "qù",
    "part_of_speech": "Adv",
    "meaning": "Rời bỏ, mất đi"
  },
  {
    "chinese": "去",
    "level": "B1",
    "pinyin": "qù",
    "part_of_speech": "Ptc",
    "meaning": "Năm ngoái, mùa trước"
  },
  {
    "chinese": "去世",
    "level": "B1",
    "pinyin": "qùshì",
    "part_of_speech": "Vp",
    "meaning": "Qua đời, mất"
  },
  {
    "chinese": "全",
    "level": "B1",
    "pinyin": "quán",
    "part_of_speech": "Det",
    "meaning": "Đầy đủ, toàn bộ"
  },
  {
    "chinese": "全球",
    "level": "B1",
    "pinyin": "quánqiú",
    "part_of_speech": "N",
    "meaning": "Toàn cầu, toàn thế giới"
  },
  {
    "chinese": "全身",
    "level": "B1",
    "pinyin": "quánshēn",
    "part_of_speech": "N",
    "meaning": "Toàn thân"
  },
  {
    "chinese": "缺點",
    "level": "B1",
    "pinyin": "quēdiăn",
    "part_of_speech": "N",
    "meaning": "Khuyết điểm"
  },
  {
    "chinese": "卻",
    "level": "B1",
    "pinyin": "què",
    "part_of_speech": "Adv",
    "meaning": "Mà lại"
  },
  {
    "chinese": "確定",
    "level": "B1",
    "pinyin": "quèdìng",
    "part_of_speech": "Vs",
    "meaning": "Xác định"
  },
  {
    "chinese": "確認",
    "level": "B1",
    "pinyin": "quèrèn",
    "part_of_speech": "V",
    "meaning": "Xác nhận"
  },
  {
    "chinese": "讓",
    "level": "B1",
    "pinyin": "ràng",
    "part_of_speech": "V",
    "meaning": "Nhường"
  },
  {
    "chinese": "熱狗",
    "level": "B1",
    "pinyin": "règŏu",
    "part_of_speech": "N",
    "meaning": "Bánh hotdog"
  },
  {
    "chinese": "熱水",
    "level": "B1",
    "pinyin": "rèshuǐ",
    "part_of_speech": "N",
    "meaning": "Nước nóng"
  },
  {
    "chinese": "人家",
    "level": "B1",
    "pinyin": "rénjiā",
    "part_of_speech": "N",
    "meaning": "Nhà, hộ, gia đình"
  },
  {
    "chinese": "人間",
    "level": "B1",
    "pinyin": "rénjiān",
    "part_of_speech": "N",
    "meaning": "Nhân gian, trần gian"
  },
  {
    "chinese": "人口",
    "level": "B1",
    "pinyin": "rénkǒu",
    "part_of_speech": "N",
    "meaning": "Nhân khẩu, dân số"
  },
  {
    "chinese": "人類",
    "level": "B1",
    "pinyin": "rénlèi",
    "part_of_speech": "N",
    "meaning": "Loài người, nhân loại"
  },
  {
    "chinese": "人們",
    "level": "B1",
    "pinyin": "rénmen",
    "part_of_speech": "N",
    "meaning": "Mọi người"
  },
  {
    "chinese": "人民",
    "level": "B1",
    "pinyin": "rénmín",
    "part_of_speech": "N",
    "meaning": "Nhân dân"
  },
  {
    "chinese": "人人",
    "level": "B1",
    "pinyin": "rénrén",
    "part_of_speech": "N",
    "meaning": "Người người, mọi người"
  },
  {
    "chinese": "人數",
    "level": "B1",
    "pinyin": "rénshù",
    "part_of_speech": "N",
    "meaning": "Số người"
  },
  {
    "chinese": "人物",
    "level": "B1",
    "pinyin": "rénwù",
    "part_of_speech": "N",
    "meaning": "Nhân vật"
  },
  {
    "chinese": "忍",
    "level": "B1",
    "pinyin": "rěn",
    "part_of_speech": "Vs",
    "meaning": "Nhẫn nhịn, chịu đựng"
  },
  {
    "chinese": "忍耐",
    "level": "B1",
    "pinyin": "rěnnài",
    "part_of_speech": "Vst",
    "meaning": "Nhẫn nại"
  },
  {
    "chinese": "認",
    "level": "B1",
    "pinyin": "rèn",
    "part_of_speech": "V",
    "meaning": "Nhận thức, thừa nhận"
  },
  {
    "chinese": "認得",
    "level": "B1",
    "pinyin": "rènde",
    "part_of_speech": "Vst",
    "meaning": "Nhận ra, biết được"
  },
  {
    "chinese": "任務",
    "level": "B1",
    "pinyin": "rènwù",
    "part_of_speech": "N",
    "meaning": "Nhiệm vụ"
  },
  {
    "chinese": "扔",
    "level": "B1",
    "pinyin": "rēng",
    "part_of_speech": "Vpt",
    "meaning": "Ném, vứt bỏ"
  },
  {
    "chinese": "仍",
    "level": "B1",
    "pinyin": "réng",
    "part_of_speech": "Adv",
    "meaning": "Dựa vào, chiếu theo, dựa theo"
  },
  {
    "chinese": "仍然",
    "level": "B1",
    "pinyin": "réngrán",
    "part_of_speech": "Adv",
    "meaning": "Vẫn cứ, tiếp tục"
  },
  {
    "chinese": "日出",
    "level": "B1",
    "pinyin": "rìchū",
    "part_of_speech": "Vi",
    "meaning": "Bình minh"
  },
  {
    "chinese": "日記",
    "level": "B1",
    "pinyin": "rìjì",
    "part_of_speech": "N",
    "meaning": "Nhật ký"
  },
  {
    "chinese": "日子",
    "level": "B1",
    "pinyin": "rìzi",
    "part_of_speech": "N",
    "meaning": "Ngày, thời kỳ"
  },
  {
    "chinese": "如",
    "level": "B1",
    "pinyin": "rú",
    "part_of_speech": "Conj",
    "meaning": "Theo như, giống như"
  },
  {
    "chinese": "如此",
    "level": "B1",
    "pinyin": "rúcǐ",
    "part_of_speech": "Vs",
    "meaning": "Như vậy, như thế"
  },
  {
    "chinese": "如下",
    "level": "B1",
    "pinyin": "rúxià",
    "part_of_speech": "Vs",
    "meaning": "Như sau, như dưới đây"
  },
  {
    "chinese": "如意",
    "level": "B1",
    "pinyin": "rúyì",
    "part_of_speech": "Vs",
    "meaning": "Như ý, vừa ý"
  },
  {
    "chinese": "弱",
    "level": "B1",
    "pinyin": "ruò",
    "part_of_speech": "Vs",
    "meaning": "Yếu đuối, yếu sức"
  },
  {
    "chinese": "傘",
    "level": "B1",
    "pinyin": "sǎn",
    "part_of_speech": "N",
    "meaning": "Cái ô, dù"
  },
  {
    "chinese": "殺",
    "level": "B1",
    "pinyin": "shā",
    "part_of_speech": "V",
    "meaning": "Giết"
  },
  {
    "chinese": "晒",
    "level": "B1",
    "pinyin": "shài",
    "part_of_speech": "V",
    "meaning": "Phơi nắng, sưởi nắng"
  },
  {
    "chinese": "山區",
    "level": "B1",
    "pinyin": "shānqū",
    "part_of_speech": "N",
    "meaning": "Vùng núi, miền núi"
  },
  {
    "chinese": "傷害",
    "level": "B1",
    "pinyin": "shānghài",
    "part_of_speech": "V",
    "meaning": "Làm tổn thương"
  },
  {
    "chinese": "商品",
    "level": "B1",
    "pinyin": "shāngpĭn",
    "part_of_speech": "N",
    "meaning": "Hàng hóa"
  },
  {
    "chinese": "商人",
    "level": "B1",
    "pinyin": "shāngrén",
    "part_of_speech": "N",
    "meaning": "Thương nhân"
  },
  {
    "chinese": "商業",
    "level": "B1",
    "pinyin": "shāngyè",
    "part_of_speech": "N",
    "meaning": "Thương mại"
  },
  {
    "chinese": "上",
    "level": "B1",
    "pinyin": "shàng",
    "part_of_speech": "Det",
    "meaning": "ở trên, bên trên"
  },
  {
    "chinese": "上",
    "level": "B1",
    "pinyin": "shàng",
    "part_of_speech": "N",
    "meaning": "Trên, trước"
  },
  {
    "chinese": "上當",
    "level": "B1",
    "pinyin": "shàngdàng",
    "part_of_speech": "Vp",
    "meaning": "Bị lừa, mắc lừa"
  },
  {
    "chinese": "上帝",
    "level": "B1",
    "pinyin": "shàngdì",
    "part_of_speech": "N",
    "meaning": "Thượng đế"
  },
  {
    "chinese": "上街",
    "level": "B1",
    "pinyin": "shàngjiē",
    "part_of_speech": "Vi",
    "meaning": "Đi ra ngoài đường"
  },
  {
    "chinese": "上衣",
    "level": "B1",
    "pinyin": "shàngyī",
    "part_of_speech": "N",
    "meaning": "Mặc quần áo"
  },
  {
    "chinese": "燒",
    "level": "B1",
    "pinyin": "shāo",
    "part_of_speech": "V",
    "meaning": "Đốt, thiêu"
  },
  {
    "chinese": "少",
    "level": "B1",
    "pinyin": "shǎo",
    "part_of_speech": "Adv",
    "meaning": "Ít, thiếu, mất"
  },
  {
    "chinese": "蛇",
    "level": "B1",
    "pinyin": "shé",
    "part_of_speech": "N",
    "meaning": "Uốn khúc"
  },
  {
    "chinese": "設備",
    "level": "B1",
    "pinyin": "shèbèi",
    "part_of_speech": "N",
    "meaning": "Thiết bị"
  },
  {
    "chinese": "設計",
    "level": "B1",
    "pinyin": "shèjì",
    "part_of_speech": "N",
    "meaning": "Bản thiết kế"
  },
  {
    "chinese": "設計",
    "level": "B1",
    "pinyin": "shèjì",
    "part_of_speech": "V",
    "meaning": "Thiết kế"
  },
  {
    "chinese": "深",
    "level": "B1",
    "pinyin": "shēn",
    "part_of_speech": "Vs",
    "meaning": "Sâu, độ sâu"
  },
  {
    "chinese": "深入",
    "level": "B1",
    "pinyin": "shēnrù",
    "part_of_speech": "Vs",
    "meaning": "Thâm nhập, đi sâu vào"
  },
  {
    "chinese": "身邊",
    "level": "B1",
    "pinyin": "shēnbiān",
    "part_of_speech": "N",
    "meaning": "Bên cạnh"
  },
  {
    "chinese": "身高",
    "level": "B1",
    "pinyin": "shēngāo",
    "part_of_speech": "N",
    "meaning": "Chiều cao"
  },
  {
    "chinese": "身上",
    "level": "B1",
    "pinyin": "shēnshàng",
    "part_of_speech": "N",
    "meaning": "Trên người"
  },
  {
    "chinese": "甚至",
    "level": "B1",
    "pinyin": "shènzhì",
    "part_of_speech": "Adv",
    "meaning": "Thậm chí, đến nỗi"
  },
  {
    "chinese": "升",
    "level": "B1",
    "pinyin": "shēng",
    "part_of_speech": "V",
    "meaning": "Thăng lên, lên chức"
  },
  {
    "chinese": "聲",
    "level": "B1",
    "pinyin": "shēng",
    "part_of_speech": "M",
    "meaning": "Thanh, âm thanh"
  },
  {
    "chinese": "聲調",
    "level": "B1",
    "pinyin": "shēngdiào",
    "part_of_speech": "N",
    "meaning": "Thanh điệu, âm điệu"
  },
  {
    "chinese": "生",
    "level": "B1",
    "pinyin": "shēng",
    "part_of_speech": "V",
    "meaning": "Sinh đẻ, sinh trưởng"
  },
  {
    "chinese": "生產",
    "level": "B1",
    "pinyin": "shēngchăn",
    "part_of_speech": "V",
    "meaning": "Sản xuất"
  },
  {
    "chinese": "生動",
    "level": "B1",
    "pinyin": "shēngdòng",
    "part_of_speech": "Vs",
    "meaning": "Sinh động, sống động"
  },
  {
    "chinese": "生活",
    "level": "B1",
    "pinyin": "shēnghuó",
    "part_of_speech": "Vi",
    "meaning": "Cuộc sống"
  },
  {
    "chinese": "生命",
    "level": "B1",
    "pinyin": "shēngmìng",
    "part_of_speech": "N",
    "meaning": "Sinh mệnh, tính mạng"
  },
  {
    "chinese": "生意",
    "level": "B1",
    "pinyin": "shēngyì",
    "part_of_speech": "N",
    "meaning": "Buôn bán, làm ăn"
  },
  {
    "chinese": "生字",
    "level": "B1",
    "pinyin": "shēngzì",
    "part_of_speech": "N",
    "meaning": "Từ mới"
  },
  {
    "chinese": "省",
    "level": "B1",
    "pinyin": "shěng",
    "part_of_speech": "Vst",
    "meaning": "Tự kiểm điểm bản thân"
  },
  {
    "chinese": "省錢",
    "level": "B1",
    "pinyin": "shěngqián",
    "part_of_speech": "Vs-sep",
    "meaning": "Tiết kiệm tiền"
  },
  {
    "chinese": "剩",
    "level": "B1",
    "pinyin": "shèng",
    "part_of_speech": "Vst",
    "meaning": "Thừa lại, còn lại"
  },
  {
    "chinese": "剩下",
    "level": "B1",
    "pinyin": "shèngxia",
    "part_of_speech": "Vpt",
    "meaning": "Thừa, còn lại"
  },
  {
    "chinese": "濕",
    "level": "B1",
    "pinyin": "shī",
    "part_of_speech": "Vs",
    "meaning": "ẩm"
  },
  {
    "chinese": "失戀",
    "level": "B1",
    "pinyin": "shīliàn",
    "part_of_speech": "Vp",
    "meaning": "Thất tình"
  },
  {
    "chinese": "失去",
    "level": "B1",
    "pinyin": "shīqù",
    "part_of_speech": "Vpt",
    "meaning": "Mất"
  },
  {
    "chinese": "獅子",
    "level": "B1",
    "pinyin": "shīzi",
    "part_of_speech": "N",
    "meaning": "Sư tử"
  },
  {
    "chinese": "十分",
    "level": "B1",
    "pinyin": "shífēn",
    "part_of_speech": "Adv",
    "meaning": "Rất, hết sức, vô cùng"
  },
  {
    "chinese": "石頭",
    "level": "B1",
    "pinyin": "shítou",
    "part_of_speech": "N",
    "meaning": "Đá"
  },
  {
    "chinese": "石油",
    "level": "B1",
    "pinyin": "shíyóu",
    "part_of_speech": "N",
    "meaning": "Dầu mỏ, dầu thô"
  },
  {
    "chinese": "時",
    "level": "B1",
    "pinyin": "shí",
    "part_of_speech": "N",
    "meaning": "Thời gian"
  },
  {
    "chinese": "時代",
    "level": "B1",
    "pinyin": "shídài",
    "part_of_speech": "N",
    "meaning": "Thời đại"
  },
  {
    "chinese": "時刻",
    "level": "B1",
    "pinyin": "shíkè",
    "part_of_speech": "N",
    "meaning": "Thời khắc"
  },
  {
    "chinese": "實話",
    "level": "B1",
    "pinyin": "shíhuà",
    "part_of_speech": "N",
    "meaning": "Lời nói thật"
  },
  {
    "chinese": "實際",
    "level": "B1",
    "pinyin": "shíjì",
    "part_of_speech": "Vs",
    "meaning": "Thực tế"
  },
  {
    "chinese": "實力",
    "level": "B1",
    "pinyin": "shílì",
    "part_of_speech": "N",
    "meaning": "Thực lực, sức mạnh"
  },
  {
    "chinese": "實行",
    "level": "B1",
    "pinyin": "shíxíng",
    "part_of_speech": "V",
    "meaning": "Thực hiện, thi hành"
  },
  {
    "chinese": "實在",
    "level": "B1",
    "pinyin": "shízài",
    "part_of_speech": "Vs",
    "meaning": "Chắc chắn, cẩn thận"
  },
  {
    "chinese": "使得",
    "level": "B1",
    "pinyin": "shĭde",
    "part_of_speech": "Vst",
    "meaning": "Làm cho, khiến cho"
  },
  {
    "chinese": "使用",
    "level": "B1",
    "pinyin": "shĭyòng",
    "part_of_speech": "V",
    "meaning": "Sử dụng, dùng"
  },
  {
    "chinese": "事實",
    "level": "B1",
    "pinyin": "shìshí",
    "part_of_speech": "N",
    "meaning": "Sự thật"
  },
  {
    "chinese": "事業",
    "level": "B1",
    "pinyin": "shìyè",
    "part_of_speech": "N",
    "meaning": "Sự nghiệp"
  },
  {
    "chinese": "適應",
    "level": "B1",
    "pinyin": "shìyìng",
    "part_of_speech": "Vst",
    "meaning": "Thích ứng"
  },
  {
    "chinese": "市長",
    "level": "B1",
    "pinyin": "shìzhăng",
    "part_of_speech": "N",
    "meaning": "Thị trưởng"
  },
  {
    "chinese": "收穫",
    "level": "B1",
    "pinyin": "shōuhuò",
    "part_of_speech": "N",
    "meaning": "Gặt hái, thu hoạch"
  },
  {
    "chinese": "收音機",
    "level": "B1",
    "pinyin": "shōuyīnjī",
    "part_of_speech": "N",
    "meaning": "Máy thu thanh"
  },
  {
    "chinese": "熟",
    "level": "B1",
    "pinyin": "shóu",
    "part_of_speech": "Vs",
    "meaning": "Quen thuộc, thành thạo"
  },
  {
    "chinese": "首",
    "level": "B1",
    "pinyin": "shǒu",
    "part_of_speech": "M",
    "meaning": "Đầu, đứng đầu"
  },
  {
    "chinese": "手套",
    "level": "B1",
    "pinyin": "shŏutào",
    "part_of_speech": "N",
    "meaning": "Găng tay, bao tay"
  },
  {
    "chinese": "手續",
    "level": "B1",
    "pinyin": "shŏuxù",
    "part_of_speech": "N",
    "meaning": "Thủ tục"
  },
  {
    "chinese": "受得了",
    "level": "B1",
    "pinyin": "shòudeliao",
    "part_of_speech": "Vst",
    "meaning": "Có thể chịu được"
  },
  {
    "chinese": "書包",
    "level": "B1",
    "pinyin": "shūbāo",
    "part_of_speech": "N",
    "meaning": "Túi sách, cặp sách"
  },
  {
    "chinese": "書架",
    "level": "B1",
    "pinyin": "shūjià",
    "part_of_speech": "N",
    "meaning": "Giá sách"
  },
  {
    "chinese": "蔬菜",
    "level": "B1",
    "pinyin": "shūcài",
    "part_of_speech": "N",
    "meaning": "Rau, rau cải"
  },
  {
    "chinese": "舒適",
    "level": "B1",
    "pinyin": "shūshì",
    "part_of_speech": "Vs",
    "meaning": "Dễ chịu, thoải mái"
  },
  {
    "chinese": "叔叔",
    "level": "B1",
    "pinyin": "shúshu",
    "part_of_speech": "N",
    "meaning": "Chú"
  },
  {
    "chinese": "熟悉",
    "level": "B1",
    "pinyin": "shoúxī",
    "part_of_speech": "Vst",
    "meaning": "Hiểu rõ, quen thuộc"
  },
  {
    "chinese": "數",
    "level": "B1",
    "pinyin": "shŭ",
    "part_of_speech": "V",
    "meaning": "Đếm"
  },
  {
    "chinese": "數字",
    "level": "B1",
    "pinyin": "shùzì",
    "part_of_speech": "N",
    "meaning": "Chữ số, con số"
  },
  {
    "chinese": "樹木",
    "level": "B1",
    "pinyin": "shùmù",
    "part_of_speech": "N",
    "meaning": "Cây cối"
  },
  {
    "chinese": "刷牙",
    "level": "B1",
    "pinyin": "shuāyá",
    "part_of_speech": "V-sep",
    "meaning": "Đánh răng"
  },
  {
    "chinese": "帥",
    "level": "B1",
    "pinyin": "shuài",
    "part_of_speech": "Vs",
    "meaning": "Đẹp trai"
  },
  {
    "chinese": "雙",
    "level": "B1",
    "pinyin": "shuāng",
    "part_of_speech": "Vs-attr",
    "meaning": "Đôi, gấp đôi"
  },
  {
    "chinese": "水餃",
    "level": "B1",
    "pinyin": "shuĭjiăo",
    "part_of_speech": "N",
    "meaning": "Bánh sủi cảo"
  },
  {
    "chinese": "水平",
    "level": "B1",
    "pinyin": "shuĭpíng",
    "part_of_speech": "N",
    "meaning": "Trình độ"
  },
  {
    "chinese": "水準",
    "level": "B1",
    "pinyin": "shuĭzhŭn",
    "part_of_speech": "N",
    "meaning": "Mực nước"
  },
  {
    "chinese": "睡著",
    "level": "B1",
    "pinyin": "shuìzháo",
    "part_of_speech": "Vp",
    "meaning": "Ngủ"
  },
  {
    "chinese": "順便",
    "level": "B1",
    "pinyin": "shùnbiàn",
    "part_of_speech": "Adv",
    "meaning": "Thuận tiện, tiện thể"
  },
  {
    "chinese": "順利",
    "level": "B1",
    "pinyin": "shùnlì",
    "part_of_speech": "Vs",
    "meaning": "Thuận lợi, suôn sẻ"
  },
  {
    "chinese": "說法",
    "level": "B1",
    "pinyin": "shuōfă",
    "part_of_speech": "N",
    "meaning": "Cách nói"
  },
  {
    "chinese": "說明",
    "level": "B1",
    "pinyin": "shuōmíng",
    "part_of_speech": "N",
    "meaning": "Lời thuyết minh"
  },
  {
    "chinese": "說明",
    "level": "B1",
    "pinyin": "shuōmíng",
    "part_of_speech": "V",
    "meaning": "Giải thích rõ, nói rõ"
  },
  {
    "chinese": "說起來",
    "level": "B1",
    "pinyin": "shuōqilai",
    "part_of_speech": "Adv",
    "meaning": "Nói về, nói đến…"
  },
  {
    "chinese": "思考",
    "level": "B1",
    "pinyin": "sīkăo",
    "part_of_speech": "V",
    "meaning": "Suy xét, suy nghĩ"
  },
  {
    "chinese": "思想",
    "level": "B1",
    "pinyin": "sīxiăng",
    "part_of_speech": "N",
    "meaning": "Tư tưởng, ý nghĩ"
  },
  {
    "chinese": "似乎",
    "level": "B1",
    "pinyin": "sìhū",
    "part_of_speech": "Adv",
    "meaning": "Hình như, dường như"
  },
  {
    "chinese": "寺廟",
    "level": "B1",
    "pinyin": "sìmiào",
    "part_of_speech": "N",
    "meaning": "Chùa miếu"
  },
  {
    "chinese": "速度",
    "level": "B1",
    "pinyin": "sùdù",
    "part_of_speech": "N",
    "meaning": "Tốc độ"
  },
  {
    "chinese": "算了",
    "level": "B1",
    "pinyin": "suànle",
    "part_of_speech": "Vs",
    "meaning": "Để nó trôi qua đi, quên nó đi"
  },
  {
    "chinese": "隨便",
    "level": "B1",
    "pinyin": "suíbiàn",
    "part_of_speech": "Vs",
    "meaning": "Tùy thích, tùy ý"
  },
  {
    "chinese": "隨時",
    "level": "B1",
    "pinyin": "suíshí",
    "part_of_speech": "Adv",
    "meaning": "Bất cứ lúc nào"
  },
  {
    "chinese": "所",
    "level": "B1",
    "pinyin": "suǒ",
    "part_of_speech": "Ptc",
    "meaning": "Chỗ, nơi, chốn"
  },
  {
    "chinese": "所",
    "level": "B1",
    "pinyin": "suŏ",
    "part_of_speech": "M",
    "meaning": "Ngôi, nhà, gian"
  },
  {
    "chinese": "所謂",
    "level": "B1",
    "pinyin": "suŏwèi",
    "part_of_speech": "Vs-attr",
    "meaning": "Cái gọi là, điều mà họ gọi là"
  },
  {
    "chinese": "它",
    "level": "B1",
    "pinyin": "tā",
    "part_of_speech": "N",
    "meaning": "Nó, cái đó, điều đó"
  },
  {
    "chinese": "它們",
    "level": "B1",
    "pinyin": "tāmen",
    "part_of_speech": "N",
    "meaning": "Chúng nó"
  },
  {
    "chinese": "台",
    "level": "B1",
    "pinyin": "tái",
    "part_of_speech": "M",
    "meaning": "Cái đài, bục, sân khấu"
  },
  {
    "chinese": "抬",
    "level": "B1",
    "pinyin": "tái",
    "part_of_speech": "V",
    "meaning": "Đưa lên, ngẩng, ngước"
  },
  {
    "chinese": "颱風",
    "level": "B1",
    "pinyin": "táifēng",
    "part_of_speech": "N",
    "meaning": "Bão"
  },
  {
    "chinese": "態度",
    "level": "B1",
    "pinyin": "tàidù",
    "part_of_speech": "N",
    "meaning": "Thái độ"
  },
  {
    "chinese": "談話",
    "level": "B1",
    "pinyin": "tánhuà",
    "part_of_speech": "V-sep",
    "meaning": "Nói chuyện, trò chuyện"
  },
  {
    "chinese": "堂",
    "level": "B1",
    "pinyin": "táng",
    "part_of_speech": "M",
    "meaning": "Phòng khách, nhà chính"
  },
  {
    "chinese": "堂",
    "level": "B1",
    "pinyin": "táng",
    "part_of_speech": "N",
    "meaning": "Phòng"
  },
  {
    "chinese": "討厭",
    "level": "B1",
    "pinyin": "tǎoyàn",
    "part_of_speech": "Vst",
    "meaning": "Ghét"
  },
  {
    "chinese": "套",
    "level": "B1",
    "pinyin": "tào",
    "part_of_speech": "M",
    "meaning": "Bộ, căn"
  },
  {
    "chinese": "特地",
    "level": "B1",
    "pinyin": "tèdì",
    "part_of_speech": "Adv",
    "meaning": "Chuyên biệt, đặc biệt"
  },
  {
    "chinese": "特色",
    "level": "B1",
    "pinyin": "tèsè",
    "part_of_speech": "N",
    "meaning": "Đặc sắc"
  },
  {
    "chinese": "特殊",
    "level": "B1",
    "pinyin": "tèshū",
    "part_of_speech": "Vs",
    "meaning": "Đặc thù, đặc biệt"
  },
  {
    "chinese": "提",
    "level": "B1",
    "pinyin": "tí",
    "part_of_speech": "V",
    "meaning": "Xách, nhấc, nâng lên, nếu ra"
  },
  {
    "chinese": "提到",
    "level": "B1",
    "pinyin": "tídào",
    "part_of_speech": "Vpt",
    "meaning": "Đề cập đến"
  },
  {
    "chinese": "提高",
    "level": "B1",
    "pinyin": "tígāo",
    "part_of_speech": "V",
    "meaning": "Đề cao, nâng cao"
  },
  {
    "chinese": "提供",
    "level": "B1",
    "pinyin": "tígōng",
    "part_of_speech": "V",
    "meaning": "Cung cấp"
  },
  {
    "chinese": "題材",
    "level": "B1",
    "pinyin": "tícái",
    "part_of_speech": "N",
    "meaning": "Đề tài"
  },
  {
    "chinese": "題目",
    "level": "B1",
    "pinyin": "tímù",
    "part_of_speech": "N",
    "meaning": "Đề mục, đầu đề"
  },
  {
    "chinese": "體會",
    "level": "B1",
    "pinyin": "tĭhuì",
    "part_of_speech": "Vst",
    "meaning": "Hiểu, lĩnh hội"
  },
  {
    "chinese": "體力",
    "level": "B1",
    "pinyin": "tĭlì",
    "part_of_speech": "N",
    "meaning": "Thể lực, sức khỏe"
  },
  {
    "chinese": "體貼",
    "level": "B1",
    "pinyin": "tĭtiē",
    "part_of_speech": "Vst",
    "meaning": "Săn sóc, quan tâm"
  },
  {
    "chinese": "體重",
    "level": "B1",
    "pinyin": "tĭzhòng",
    "part_of_speech": "N",
    "meaning": "Thể trọng, trọng lượng"
  },
  {
    "chinese": "替",
    "level": "B1",
    "pinyin": "tì",
    "part_of_speech": "Prep",
    "meaning": "Thay thế"
  },
  {
    "chinese": "天堂",
    "level": "B1",
    "pinyin": "tiāntáng",
    "part_of_speech": "N",
    "meaning": "Thiên đường"
  },
  {
    "chinese": "天天",
    "level": "B1",
    "pinyin": "tiāntiān",
    "part_of_speech": "Adv",
    "meaning": "Mỗi ngày, hàng ngày"
  },
  {
    "chinese": "天下",
    "level": "B1",
    "pinyin": "tiānxià",
    "part_of_speech": "N",
    "meaning": "Thiên hạ"
  },
  {
    "chinese": "田",
    "level": "B1",
    "pinyin": "tián",
    "part_of_speech": "N",
    "meaning": "Ruộng, đồng"
  },
  {
    "chinese": "填",
    "level": "B1",
    "pinyin": "tián",
    "part_of_speech": "V",
    "meaning": "Điền vào, ghi vào"
  },
  {
    "chinese": "甜點",
    "level": "B1",
    "pinyin": "tiándiăn",
    "part_of_speech": "N",
    "meaning": "Món điểm tâm ngọt"
  },
  {
    "chinese": "條件",
    "level": "B1",
    "pinyin": "tiáojiàn",
    "part_of_speech": "N",
    "meaning": "Điều kiện"
  },
  {
    "chinese": "挑戰",
    "level": "B1",
    "pinyin": "tiăozhàn",
    "part_of_speech": "V",
    "meaning": "Thử thách, thách đấu"
  },
  {
    "chinese": "貼",
    "level": "B1",
    "pinyin": "tiē",
    "part_of_speech": "V",
    "meaning": "Dán, kề, sát"
  },
  {
    "chinese": "鐵",
    "level": "B1",
    "pinyin": "tiě",
    "part_of_speech": "N",
    "meaning": "Sắt"
  },
  {
    "chinese": "鐵路",
    "level": "B1",
    "pinyin": "tiělù",
    "part_of_speech": "N",
    "meaning": "Đường sắt, đường ray"
  },
  {
    "chinese": "聽見",
    "level": "B1",
    "pinyin": "tīngjiàn",
    "part_of_speech": "Vpt",
    "meaning": "Nghe thấy"
  },
  {
    "chinese": "聽力",
    "level": "B1",
    "pinyin": "tīnglì",
    "part_of_speech": "N",
    "meaning": "Khả năng nghe"
  },
  {
    "chinese": "聽起來",
    "level": "B1",
    "pinyin": "tīngqĭlái",
    "part_of_speech": "Adv",
    "meaning": "Nghe như là…"
  },
  {
    "chinese": "聽眾",
    "level": "B1",
    "pinyin": "tīngzhòng",
    "part_of_speech": "N",
    "meaning": "Người nghe, thính giả"
  },
  {
    "chinese": "挺",
    "level": "B1",
    "pinyin": "tĭng",
    "part_of_speech": "Adv",
    "meaning": "Khá là"
  },
  {
    "chinese": "通",
    "level": "B1",
    "pinyin": "tōng",
    "part_of_speech": "Vs-pred",
    "meaning": "Thông"
  },
  {
    "chinese": "通過",
    "level": "B1",
    "pinyin": "tōngguò",
    "part_of_speech": "Vpt",
    "meaning": "Thông qua"
  },
  {
    "chinese": "同",
    "level": "B1",
    "pinyin": "tóng",
    "part_of_speech": "Det",
    "meaning": "Giống nhau"
  },
  {
    "chinese": "同",
    "level": "B1",
    "pinyin": "tóng",
    "part_of_speech": "Prep",
    "meaning": "Cùng nhau"
  },
  {
    "chinese": "同情",
    "level": "B1",
    "pinyin": "tóngqíng",
    "part_of_speech": "Vst",
    "meaning": "Đồng tình"
  },
  {
    "chinese": "同時",
    "level": "B1",
    "pinyin": "tóngshí",
    "part_of_speech": "N",
    "meaning": "Đồng thời, cùng lúc"
  },
  {
    "chinese": "同樣",
    "level": "B1",
    "pinyin": "tóngyàng",
    "part_of_speech": "Adv",
    "meaning": "Giống nhau, như nhau"
  },
  {
    "chinese": "同樣",
    "level": "B1",
    "pinyin": "tóngyàng",
    "part_of_speech": "Vs-attr",
    "meaning": "Đồng dạng"
  },
  {
    "chinese": "痛苦",
    "level": "B1",
    "pinyin": "tòngkǔ",
    "part_of_speech": "Vs",
    "meaning": "Đau khổ"
  },
  {
    "chinese": "投",
    "level": "B1",
    "pinyin": "tóu",
    "part_of_speech": "V",
    "meaning": "Ném, quăng, bỏ vào"
  },
  {
    "chinese": "投資",
    "level": "B1",
    "pinyin": "tóuzī",
    "part_of_speech": "V",
    "meaning": "Đầu tư"
  },
  {
    "chinese": "頭",
    "level": "B1",
    "pinyin": "tóu",
    "part_of_speech": "Det",
    "meaning": "Đầu"
  },
  {
    "chinese": "頭痛",
    "level": "B1",
    "pinyin": "tóutòng",
    "part_of_speech": "Vs",
    "meaning": "Đau đầu, nhức đầu"
  },
  {
    "chinese": "圖",
    "level": "B1",
    "pinyin": "tú",
    "part_of_speech": "N",
    "meaning": "Bức vẽ, bức tranh"
  },
  {
    "chinese": "突然",
    "level": "B1",
    "pinyin": "túrán",
    "part_of_speech": "Adv",
    "meaning": "Đột nhiên, bỗng nhiên"
  },
  {
    "chinese": "土",
    "level": "B1",
    "pinyin": "tǔ",
    "part_of_speech": "N",
    "meaning": "Đất đai"
  },
  {
    "chinese": "土地",
    "level": "B1",
    "pinyin": "tǔdì",
    "part_of_speech": "N",
    "meaning": "Ruộng đất, đất đai"
  },
  {
    "chinese": "兔子",
    "level": "B1",
    "pinyin": "tùzi",
    "part_of_speech": "N",
    "meaning": "Con thỏ"
  },
  {
    "chinese": "團體",
    "level": "B1",
    "pinyin": "tuántĭ",
    "part_of_speech": "N",
    "meaning": "Tập thể"
  },
  {
    "chinese": "團圓",
    "level": "B1",
    "pinyin": "tuányuán",
    "part_of_speech": "Vs",
    "meaning": "Đoàn viên, sum họp"
  },
  {
    "chinese": "推",
    "level": "B1",
    "pinyin": "tuī",
    "part_of_speech": "V",
    "meaning": "Đẩy"
  },
  {
    "chinese": "推薦",
    "level": "B1",
    "pinyin": "tuījiàn",
    "part_of_speech": "V",
    "meaning": "Tiến cử, đề xuất, giới thiệu"
  },
  {
    "chinese": "推銷",
    "level": "B1",
    "pinyin": "tuīxiāo",
    "part_of_speech": "V",
    "meaning": "Đẩy mạnh tiêu thụ"
  },
  {
    "chinese": "退步",
    "level": "B1",
    "pinyin": "tuìbù",
    "part_of_speech": "Vp",
    "meaning": "Nhượng bộ, lùi bước"
  },
  {
    "chinese": "退休",
    "level": "B1",
    "pinyin": "tuìxiū",
    "part_of_speech": "Vp",
    "meaning": "Về hưu, nghỉ hưu"
  },
  {
    "chinese": "脫",
    "level": "B1",
    "pinyin": "tuō",
    "part_of_speech": "V",
    "meaning": "Rụng, tróc, cởi ra"
  },
  {
    "chinese": "娃娃",
    "level": "B1",
    "pinyin": "wáwa",
    "part_of_speech": "N",
    "meaning": "Em bé, búp bê"
  },
  {
    "chinese": "外邊",
    "level": "B1",
    "pinyin": "wàibiān",
    "part_of_speech": "N",
    "meaning": "Bên ngoài"
  },
  {
    "chinese": "外公",
    "level": "B1",
    "pinyin": "wàigōng",
    "part_of_speech": "N",
    "meaning": "Ông ngoại"
  },
  {
    "chinese": "外婆",
    "level": "B1",
    "pinyin": "wàipó",
    "part_of_speech": "N",
    "meaning": "Bà ngoại"
  },
  {
    "chinese": "外文",
    "level": "B1",
    "pinyin": "wàiwén",
    "part_of_speech": "N",
    "meaning": "Ngoại văn, chữ nước ngoài"
  },
  {
    "chinese": "外語",
    "level": "B1",
    "pinyin": "wàiyǔ",
    "part_of_speech": "N",
    "meaning": "Ngoại ngữ"
  },
  {
    "chinese": "完成",
    "level": "B1",
    "pinyin": "wánchéng",
    "part_of_speech": "Vpt",
    "meaning": "Hoàn thành"
  },
  {
    "chinese": "完全",
    "level": "B1",
    "pinyin": "wánquán",
    "part_of_speech": "Adv",
    "meaning": "Đầy đủ, trọn vẹn"
  },
  {
    "chinese": "玩具",
    "level": "B1",
    "pinyin": "wánjù",
    "part_of_speech": "N",
    "meaning": "Đồ chơi"
  },
  {
    "chinese": "晚",
    "level": "B1",
    "pinyin": "wǎn",
    "part_of_speech": "Vs",
    "meaning": "Tối, muộn, trễ"
  },
  {
    "chinese": "萬一",
    "level": "B1",
    "pinyin": "wànyī",
    "part_of_speech": "Adv",
    "meaning": "Nhỡ đâu, ngộ nhỡ"
  },
  {
    "chinese": "網",
    "level": "B1",
    "pinyin": "wăng",
    "part_of_speech": "N",
    "meaning": "Lưới"
  },
  {
    "chinese": "網路",
    "level": "B1",
    "pinyin": "wănglù",
    "part_of_speech": "N",
    "meaning": "Mạng lưới"
  },
  {
    "chinese": "往往",
    "level": "B1",
    "pinyin": "wăngwăng",
    "part_of_speech": "Adv",
    "meaning": "Thường thường"
  },
  {
    "chinese": "忘記",
    "level": "B1",
    "pinyin": "wàngjì",
    "part_of_speech": "Vpt",
    "meaning": "Quên, không nhớ"
  },
  {
    "chinese": "維持",
    "level": "B1",
    "pinyin": "wéichí",
    "part_of_speech": "V",
    "meaning": "Duy trì"
  },
  {
    "chinese": "微笑",
    "level": "B1",
    "pinyin": "wéixiào",
    "part_of_speech": "Vi",
    "meaning": "Mỉm cười"
  },
  {
    "chinese": "為主",
    "level": "B1",
    "pinyin": "wéizhŭ",
    "part_of_speech": "Vs",
    "meaning": "Chủ yếu dựa vào"
  },
  {
    "chinese": "偉大",
    "level": "B1",
    "pinyin": "wěidà",
    "part_of_speech": "Vs",
    "meaning": "Vĩ đại, lớn lao"
  },
  {
    "chinese": "為",
    "level": "B1",
    "pinyin": "wèi",
    "part_of_speech": "Prep",
    "meaning": "Thành, biến thành"
  },
  {
    "chinese": "未來",
    "level": "B1",
    "pinyin": "wèilái",
    "part_of_speech": "N",
    "meaning": "Tương lai"
  },
  {
    "chinese": "位置",
    "level": "B1",
    "pinyin": "wèizhì",
    "part_of_speech": "N",
    "meaning": "Vị trí"
  },
  {
    "chinese": "位子",
    "level": "B1",
    "pinyin": "wèizi",
    "part_of_speech": "N",
    "meaning": "Chỗ ngồi"
  },
  {
    "chinese": "溫柔",
    "level": "B1",
    "pinyin": "wēnróu",
    "part_of_speech": "Vs",
    "meaning": "Dịu dàng"
  },
  {
    "chinese": "文件",
    "level": "B1",
    "pinyin": "wénjiàn",
    "part_of_speech": "N",
    "meaning": "Văn kiện, tài liệu"
  },
  {
    "chinese": "文學",
    "level": "B1",
    "pinyin": "wénxué",
    "part_of_speech": "N",
    "meaning": "Văn học"
  },
  {
    "chinese": "文字",
    "level": "B1",
    "pinyin": "wénzì",
    "part_of_speech": "N",
    "meaning": "Chữ viết"
  },
  {
    "chinese": "聞",
    "level": "B1",
    "pinyin": "wén",
    "part_of_speech": "V",
    "meaning": "Nghe thấy"
  },
  {
    "chinese": "穩定",
    "level": "B1",
    "pinyin": "wěndìng",
    "part_of_speech": "Vs",
    "meaning": "ổn định"
  },
  {
    "chinese": "問好",
    "level": "B1",
    "pinyin": "wènhăo",
    "part_of_speech": "Vi",
    "meaning": "Chào hỏi, gửi lời hỏi thăm"
  },
  {
    "chinese": "問候",
    "level": "B1",
    "pinyin": "wènhòu",
    "part_of_speech": "V",
    "meaning": "Chào hỏi, gửi lời hỏi thăm"
  },
  {
    "chinese": "握手",
    "level": "B1",
    "pinyin": "wòshǒu",
    "part_of_speech": "V-sep",
    "meaning": "Bắt tay, cầm tay"
  },
  {
    "chinese": "屋子",
    "level": "B1",
    "pinyin": "wūzi",
    "part_of_speech": "N",
    "meaning": "Gian nhà, gian phòng"
  },
  {
    "chinese": "無",
    "level": "B1",
    "pinyin": "wú",
    "part_of_speech": "Vs-attr",
    "meaning": "Không có"
  },
  {
    "chinese": "無法",
    "level": "B1",
    "pinyin": "wúfă",
    "part_of_speech": "Adv",
    "meaning": "Vô phương, không còn cách nào"
  },
  {
    "chinese": "無論如何",
    "level": "B1",
    "pinyin": "wúlùnrúhé",
    "part_of_speech": "Conj",
    "meaning": "Bất kể như thế nào"
  },
  {
    "chinese": "無窮",
    "level": "B1",
    "pinyin": "wúqióng",
    "part_of_speech": "Vs",
    "meaning": "Vô cùng, vô hạn"
  },
  {
    "chinese": "無所謂",
    "level": "B1",
    "pinyin": "wúsuŏwèi",
    "part_of_speech": "Vs",
    "meaning": "Không sao cả, không quan trọng"
  },
  {
    "chinese": "誤會",
    "level": "B1",
    "pinyin": "wùhuì",
    "part_of_speech": "N",
    "meaning": "Sự hiểu lầm"
  },
  {
    "chinese": "物價",
    "level": "B1",
    "pinyin": "wùjià",
    "part_of_speech": "N",
    "meaning": "Vật giá, giá cả"
  },
  {
    "chinese": "西北",
    "level": "B1",
    "pinyin": "xīběi",
    "part_of_speech": "N",
    "meaning": "Tây bắc"
  },
  {
    "chinese": "西餐",
    "level": "B1",
    "pinyin": "xīcān",
    "part_of_speech": "N",
    "meaning": "Món Tây"
  },
  {
    "chinese": "西方",
    "level": "B1",
    "pinyin": "xīfāng",
    "part_of_speech": "N",
    "meaning": "Phương Tây"
  },
  {
    "chinese": "西南",
    "level": "B1",
    "pinyin": "xīnán",
    "part_of_speech": "N",
    "meaning": "Tây Nam"
  },
  {
    "chinese": "吸毒",
    "level": "B1",
    "pinyin": "xīdú",
    "part_of_speech": "V-sep",
    "meaning": "Hút (chích) ma túy"
  },
  {
    "chinese": "吸收",
    "level": "B1",
    "pinyin": "xīshōu",
    "part_of_speech": "V",
    "meaning": "Hấp thu"
  },
  {
    "chinese": "吸引",
    "level": "B1",
    "pinyin": "xīyĭn",
    "part_of_speech": "Vst",
    "meaning": "Hấp dẫn, thu hút"
  },
  {
    "chinese": "犧牲",
    "level": "B1",
    "pinyin": "xīshēng",
    "part_of_speech": "Vpt",
    "meaning": "Hi sinh"
  },
  {
    "chinese": "希望",
    "level": "B1",
    "pinyin": "xīwàng",
    "part_of_speech": "N",
    "meaning": "Hi vọng, mong muốn"
  },
  {
    "chinese": "喜愛",
    "level": "B1",
    "pinyin": "xĭài",
    "part_of_speech": "Vst",
    "meaning": "Yêu thích, quý mến"
  },
  {
    "chinese": "細",
    "level": "B1",
    "pinyin": "xì",
    "part_of_speech": "Vs",
    "meaning": "Nhỏ, mảnh"
  },
  {
    "chinese": "細心",
    "level": "B1",
    "pinyin": "xìxīn",
    "part_of_speech": "Vs",
    "meaning": "Cẩn thận, tỉ mỉ"
  },
  {
    "chinese": "戲",
    "level": "B1",
    "pinyin": "xì",
    "part_of_speech": "N",
    "meaning": "Trò chơi"
  },
  {
    "chinese": "戲劇",
    "level": "B1",
    "pinyin": "xìjù",
    "part_of_speech": "N",
    "meaning": "Kịch, hí kịch"
  },
  {
    "chinese": "系統",
    "level": "B1",
    "pinyin": "xìtŏng",
    "part_of_speech": "N",
    "meaning": "Hệ thống"
  },
  {
    "chinese": "下",
    "level": "B1",
    "pinyin": "xià",
    "part_of_speech": "Det",
    "meaning": "Dưới"
  },
  {
    "chinese": "下",
    "level": "B1",
    "pinyin": "xià",
    "part_of_speech": "M",
    "meaning": "Lần, cái"
  },
  {
    "chinese": "下",
    "level": "B1",
    "pinyin": "xià",
    "part_of_speech": "N",
    "meaning": "Dưới, hạ, bên dưới"
  },
  {
    "chinese": "下",
    "level": "B1",
    "pinyin": "xià",
    "part_of_speech": "V",
    "meaning": "Hạ xuống"
  },
  {
    "chinese": "下來",
    "level": "B1",
    "pinyin": "xiàlai",
    "part_of_speech": "Ptc",
    "meaning": "Xuống"
  },
  {
    "chinese": "嚇",
    "level": "B1",
    "pinyin": "xià",
    "part_of_speech": "Vs-pred",
    "meaning": "Dọa dẫm"
  },
  {
    "chinese": "嚇一跳",
    "level": "B1",
    "pinyin": "xiàyítiào",
    "part_of_speech": "Vp",
    "meaning": "Giật mình, sợ hãi"
  },
  {
    "chinese": "線",
    "level": "B1",
    "pinyin": "xiàn",
    "part_of_speech": "N",
    "meaning": "Sợi, đường"
  },
  {
    "chinese": "現代",
    "level": "B1",
    "pinyin": "xiàndài",
    "part_of_speech": "N",
    "meaning": "Hiện đại"
  },
  {
    "chinese": "現代",
    "level": "B1",
    "pinyin": "xiàndài",
    "part_of_speech": "Vs",
    "meaning": "Hiện đại"
  },
  {
    "chinese": "現實",
    "level": "B1",
    "pinyin": "xiànshí",
    "part_of_speech": "N",
    "meaning": "Hiện thực, thực tại"
  },
  {
    "chinese": "現實",
    "level": "B1",
    "pinyin": "xiànshí",
    "part_of_speech": "Vs",
    "meaning": "Hiện thực"
  },
  {
    "chinese": "現象",
    "level": "B1",
    "pinyin": "xiànxiàng",
    "part_of_speech": "N",
    "meaning": "Hiện tạng"
  },
  {
    "chinese": "限制",
    "level": "B1",
    "pinyin": "xiànzhì",
    "part_of_speech": "N",
    "meaning": "Hạn chế, giới hạn"
  },
  {
    "chinese": "相當",
    "level": "B1",
    "pinyin": "xiāngdāng",
    "part_of_speech": "Adv",
    "meaning": "Tương đương, ngang nhau"
  },
  {
    "chinese": "相對",
    "level": "B1",
    "pinyin": "xiāngduì",
    "part_of_speech": "Vs-attr",
    "meaning": "Trái ngược, đối lập nhau"
  },
  {
    "chinese": "相反",
    "level": "B1",
    "pinyin": "xiāngfăn",
    "part_of_speech": "Vs",
    "meaning": "Tương phản, trái ngược"
  },
  {
    "chinese": "相關",
    "level": "B1",
    "pinyin": "xiāngguān",
    "part_of_speech": "Vs",
    "meaning": "Liên quan"
  },
  {
    "chinese": "相同",
    "level": "B1",
    "pinyin": "xiāngtóng",
    "part_of_speech": "Vs",
    "meaning": "Tương đồng, giống nhau"
  },
  {
    "chinese": "箱子",
    "level": "B1",
    "pinyin": "xiāngzi",
    "part_of_speech": "N",
    "meaning": "Hòm, rương"
  },
  {
    "chinese": "香水",
    "level": "B1",
    "pinyin": "xiāngshuĭ",
    "part_of_speech": "N",
    "meaning": "Nước hoa, dầu thơm"
  },
  {
    "chinese": "詳細",
    "level": "B1",
    "pinyin": "xiángxì",
    "part_of_speech": "Vs",
    "meaning": "Kỹ càng tỉ mỉ"
  },
  {
    "chinese": "響",
    "level": "B1",
    "pinyin": "xiǎng",
    "part_of_speech": "Vp",
    "meaning": "Vang lên, kêu"
  },
  {
    "chinese": "想到",
    "level": "B1",
    "pinyin": "xiăngdào",
    "part_of_speech": "Vpt",
    "meaning": "Nghĩ đến, nghĩ về"
  },
  {
    "chinese": "想法",
    "level": "B1",
    "pinyin": "xiǎngfǎ",
    "part_of_speech": "N",
    "meaning": "Ý nghĩ, nhận xét"
  },
  {
    "chinese": "想像",
    "level": "B1",
    "pinyin": "xiăngxiàng",
    "part_of_speech": "N",
    "meaning": "Trí tưởng tượng"
  },
  {
    "chinese": "想像",
    "level": "B1",
    "pinyin": "xiăngxiàng",
    "part_of_speech": "Vst",
    "meaning": "Tưởng tượng, nghĩ ra"
  },
  {
    "chinese": "項",
    "level": "B1",
    "pinyin": "xiàng",
    "part_of_speech": "M",
    "meaning": "Hạng mục"
  },
  {
    "chinese": "相機",
    "level": "B1",
    "pinyin": "xiàngjī",
    "part_of_speech": "N",
    "meaning": "Máy chụp hình"
  },
  {
    "chinese": "相聲",
    "level": "B1",
    "pinyin": "xiàngshēng",
    "part_of_speech": "N",
    "meaning": "Tấu hài, xiếc lời"
  },
  {
    "chinese": "小吃",
    "level": "B1",
    "pinyin": "xiăochī",
    "part_of_speech": "N",
    "meaning": "Món ăn vặt"
  },
  {
    "chinese": "小朋友",
    "level": "B1",
    "pinyin": "xiǎopéngyǒu",
    "part_of_speech": "N",
    "meaning": "Trẻ em, bạn nhỏ"
  },
  {
    "chinese": "小組",
    "level": "B1",
    "pinyin": "xiăozŭ",
    "part_of_speech": "N",
    "meaning": "Tổ, nhóm nhỏ"
  },
  {
    "chinese": "效果",
    "level": "B1",
    "pinyin": "xiàoguŏ",
    "part_of_speech": "N",
    "meaning": "Hiệu quả"
  },
  {
    "chinese": "笑話",
    "level": "B1",
    "pinyin": "xiàohuà",
    "part_of_speech": "N",
    "meaning": "Truyện cười"
  },
  {
    "chinese": "孝順",
    "level": "B1",
    "pinyin": "xiàoshùn",
    "part_of_speech": "Vs",
    "meaning": "Hiếu thảo"
  },
  {
    "chinese": "孝順",
    "level": "B1",
    "pinyin": "xiàoshùn",
    "part_of_speech": "Vst",
    "meaning": "Một ít, một vài"
  },
  {
    "chinese": "協助",
    "level": "B1",
    "pinyin": "xiézhù",
    "part_of_speech": "V",
    "meaning": "Giúp đỡ, trợ giúp"
  },
  {
    "chinese": "血",
    "level": "B1",
    "pinyin": "xiě",
    "part_of_speech": "N",
    "meaning": "Máu, ruột thịt"
  },
  {
    "chinese": "謝",
    "level": "B1",
    "pinyin": "xiè",
    "part_of_speech": "V",
    "meaning": "Cảm ơn"
  },
  {
    "chinese": "心得",
    "level": "B1",
    "pinyin": "xīndé",
    "part_of_speech": "N",
    "meaning": "Tâm đắc"
  },
  {
    "chinese": "心理",
    "level": "B1",
    "pinyin": "xīnlĭ",
    "part_of_speech": "N",
    "meaning": "Tâm lý"
  },
  {
    "chinese": "心意",
    "level": "B1",
    "pinyin": "xīnyì",
    "part_of_speech": "N",
    "meaning": "Tâm ý, tấm lòng"
  },
  {
    "chinese": "欣賞",
    "level": "B1",
    "pinyin": "xīnshăng",
    "part_of_speech": "Vst",
    "meaning": "Thưởng thức"
  },
  {
    "chinese": "新生",
    "level": "B1",
    "pinyin": "xīnshēng",
    "part_of_speech": "N",
    "meaning": "Mới ra đời"
  },
  {
    "chinese": "信",
    "level": "B1",
    "pinyin": "xìn",
    "part_of_speech": "Vst",
    "meaning": "Tin tưởng"
  },
  {
    "chinese": "信箱",
    "level": "B1",
    "pinyin": "xìnxiāng",
    "part_of_speech": "N",
    "meaning": "Thùng thư, hòm thư"
  },
  {
    "chinese": "信心",
    "level": "B1",
    "pinyin": "xìnxīn",
    "part_of_speech": "N",
    "meaning": "Lòng tin, tự tin"
  },
  {
    "chinese": "興奮",
    "level": "B1",
    "pinyin": "xīngfèn",
    "part_of_speech": "Vs",
    "meaning": "Phấn khởi, hăng hái"
  },
  {
    "chinese": "行",
    "level": "B1",
    "pinyin": "xíng",
    "part_of_speech": "Vs",
    "meaning": "Đi"
  },
  {
    "chinese": "行動",
    "level": "B1",
    "pinyin": "xíngdòng",
    "part_of_speech": "N",
    "meaning": "Hành vi, cử động"
  },
  {
    "chinese": "行為",
    "level": "B1",
    "pinyin": "xíngwéi",
    "part_of_speech": "N",
    "meaning": "Hành vi"
  },
  {
    "chinese": "形容",
    "level": "B1",
    "pinyin": "xíngróng",
    "part_of_speech": "V",
    "meaning": "Hình dung, miêu tả"
  },
  {
    "chinese": "醒",
    "level": "B1",
    "pinyin": "xĭng",
    "part_of_speech": "Vp",
    "meaning": "Tỉnh, tỉnh ngộ"
  },
  {
    "chinese": "醒來",
    "level": "B1",
    "pinyin": "xĭnglái",
    "part_of_speech": "Vp",
    "meaning": "Đánh thức"
  },
  {
    "chinese": "姓",
    "level": "B1",
    "pinyin": "xìng",
    "part_of_speech": "N",
    "meaning": "Họ"
  },
  {
    "chinese": "性別",
    "level": "B1",
    "pinyin": "xìngbié",
    "part_of_speech": "N",
    "meaning": "Giới tính"
  },
  {
    "chinese": "性格",
    "level": "B1",
    "pinyin": "xìnggé",
    "part_of_speech": "N",
    "meaning": "Tính cách"
  },
  {
    "chinese": "幸好",
    "level": "B1",
    "pinyin": "xìnghăo",
    "part_of_speech": "Adv",
    "meaning": "May mắn, may mà"
  },
  {
    "chinese": "幸虧",
    "level": "B1",
    "pinyin": "xìngkuī",
    "part_of_speech": "Adv",
    "meaning": "May mà"
  },
  {
    "chinese": "幸運",
    "level": "B1",
    "pinyin": "xìngyùn",
    "part_of_speech": "Vs",
    "meaning": "Vận may"
  },
  {
    "chinese": "兇",
    "level": "B1",
    "pinyin": "xiōng",
    "part_of_speech": "Vs",
    "meaning": "Hung ác"
  },
  {
    "chinese": "兄弟",
    "level": "B1",
    "pinyin": "xiōngdì",
    "part_of_speech": "N",
    "meaning": "Người anh em"
  },
  {
    "chinese": "熊貓",
    "level": "B1",
    "pinyin": "xióngmāo",
    "part_of_speech": "N",
    "meaning": "Gấu trúc"
  },
  {
    "chinese": "修",
    "level": "B1",
    "pinyin": "xiū",
    "part_of_speech": "V",
    "meaning": "Sửa"
  },
  {
    "chinese": "修改",
    "level": "B1",
    "pinyin": "xiūgăi",
    "part_of_speech": "V",
    "meaning": "Sửa chữa"
  },
  {
    "chinese": "修理",
    "level": "B1",
    "pinyin": "xiūlĭ",
    "part_of_speech": "V",
    "meaning": "Cắt sửa"
  },
  {
    "chinese": "需求",
    "level": "B1",
    "pinyin": "xūqiú",
    "part_of_speech": "N",
    "meaning": "Nhu cầu"
  },
  {
    "chinese": "需要",
    "level": "B1",
    "pinyin": "xūyào",
    "part_of_speech": "N",
    "meaning": "Yêu cầu"
  },
  {
    "chinese": "選",
    "level": "B1",
    "pinyin": "xuǎn",
    "part_of_speech": "V",
    "meaning": "Chọn, lựa chọn"
  },
  {
    "chinese": "選舉",
    "level": "B1",
    "pinyin": "xuănjŭ",
    "part_of_speech": "N",
    "meaning": "Tuyển cử"
  },
  {
    "chinese": "選擇",
    "level": "B1",
    "pinyin": "xuǎnzé",
    "part_of_speech": "N",
    "meaning": "Sự lựa chọn"
  },
  {
    "chinese": "選擇",
    "level": "B1",
    "pinyin": "xuǎnzé",
    "part_of_speech": "V",
    "meaning": "Tuyển chọn"
  },
  {
    "chinese": "學會",
    "level": "B1",
    "pinyin": "xuéhuì",
    "part_of_speech": "Vpt",
    "meaning": "Học cách"
  },
  {
    "chinese": "學問",
    "level": "B1",
    "pinyin": "xuéwèn",
    "part_of_speech": "N",
    "meaning": "Học vấn"
  },
  {
    "chinese": "尋找",
    "level": "B1",
    "pinyin": "xúnzhăo",
    "part_of_speech": "V",
    "meaning": "Tìm kiếm"
  },
  {
    "chinese": "訓練",
    "level": "B1",
    "pinyin": "xùnliàn",
    "part_of_speech": "V",
    "meaning": "Huấn luyện, tập luyện"
  },
  {
    "chinese": "呀",
    "level": "B1",
    "pinyin": "yā",
    "part_of_speech": "Ptc",
    "meaning": "A, à, nhé"
  },
  {
    "chinese": "鴨(子)",
    "level": "B1",
    "pinyin": "yā(zi)",
    "part_of_speech": "N",
    "meaning": "Con vịt"
  },
  {
    "chinese": "押金",
    "level": "B1",
    "pinyin": "yājīn",
    "part_of_speech": "N",
    "meaning": "Tiền thế chấp, tiền cọc"
  },
  {
    "chinese": "牙",
    "level": "B1",
    "pinyin": "yá",
    "part_of_speech": "N",
    "meaning": "Răng, ngà voi"
  },
  {
    "chinese": "牙齒",
    "level": "B1",
    "pinyin": "yáchĭ",
    "part_of_speech": "N",
    "meaning": "Răng"
  },
  {
    "chinese": "煙火",
    "level": "B1",
    "pinyin": "yānhuŏ",
    "part_of_speech": "N",
    "meaning": "Pháo hoa"
  },
  {
    "chinese": "研究",
    "level": "B1",
    "pinyin": "yánjiù",
    "part_of_speech": "N",
    "meaning": "Nghiên cứu"
  },
  {
    "chinese": "研究",
    "level": "B1",
    "pinyin": "yánjiù",
    "part_of_speech": "V",
    "meaning": "Tìm tòi học hỏi"
  },
  {
    "chinese": "嚴重",
    "level": "B1",
    "pinyin": "yánzhòng",
    "part_of_speech": "Vs",
    "meaning": "Nghiêm trọng"
  },
  {
    "chinese": "演",
    "level": "B1",
    "pinyin": "yăn",
    "part_of_speech": "V",
    "meaning": "Diễn"
  },
  {
    "chinese": "演出",
    "level": "B1",
    "pinyin": "yănchū",
    "part_of_speech": "V",
    "meaning": "Diễn xuất"
  },
  {
    "chinese": "演講",
    "level": "B1",
    "pinyin": "yănjiăng",
    "part_of_speech": "Vi",
    "meaning": "Diễn thuyết"
  },
  {
    "chinese": "演員",
    "level": "B1",
    "pinyin": "yănyuán",
    "part_of_speech": "N",
    "meaning": "Diễn viên"
  },
  {
    "chinese": "眼光",
    "level": "B1",
    "pinyin": "yănguāng",
    "part_of_speech": "N",
    "meaning": "Ánh mắt"
  },
  {
    "chinese": "眼淚",
    "level": "B1",
    "pinyin": "yănlèi",
    "part_of_speech": "N",
    "meaning": "Nước mắt"
  },
  {
    "chinese": "陽光",
    "level": "B1",
    "pinyin": "yángguāng",
    "part_of_speech": "N",
    "meaning": "Ánh nắng"
  },
  {
    "chinese": "養",
    "level": "B1",
    "pinyin": "yăng",
    "part_of_speech": "V",
    "meaning": "Nuôi dưỡng"
  },
  {
    "chinese": "樣",
    "level": "B1",
    "pinyin": "yàng",
    "part_of_speech": "M",
    "meaning": "Hình dáng, kiểu"
  },
  {
    "chinese": "樣樣",
    "level": "B1",
    "pinyin": "yàngyàng",
    "part_of_speech": "Det",
    "meaning": "Tất cả các loại"
  },
  {
    "chinese": "邀請",
    "level": "B1",
    "pinyin": "yāoqĭng",
    "part_of_speech": "V",
    "meaning": "Mời"
  },
  {
    "chinese": "要求",
    "level": "B1",
    "pinyin": "yāoqiú",
    "part_of_speech": "N",
    "meaning": "Nguyện vọng"
  },
  {
    "chinese": "要求",
    "level": "B1",
    "pinyin": "yāoqiú",
    "part_of_speech": "V",
    "meaning": "Yêu cầu"
  },
  {
    "chinese": "咬",
    "level": "B1",
    "pinyin": "yăo",
    "part_of_speech": "V",
    "meaning": "Cắn, kẹp chặt"
  },
  {
    "chinese": "要",
    "level": "B1",
    "pinyin": "yào",
    "part_of_speech": "Vst",
    "meaning": "Cần,"
  },
  {
    "chinese": "要不然",
    "level": "B1",
    "pinyin": "yàobùrán",
    "part_of_speech": "Conj",
    "meaning": "Nếu không"
  },
  {
    "chinese": "要不是",
    "level": "B1",
    "pinyin": "yàobúshì",
    "part_of_speech": "Conj",
    "meaning": "Nếu nó không phải"
  },
  {
    "chinese": "要緊",
    "level": "B1",
    "pinyin": "yàojĭn",
    "part_of_speech": "Vs",
    "meaning": "Quan trọng, gấp rút"
  },
  {
    "chinese": "野餐",
    "level": "B1",
    "pinyin": "yěcān",
    "part_of_speech": "Vi",
    "meaning": "Bữa cơm dã ngoại"
  },
  {
    "chinese": "也好",
    "level": "B1",
    "pinyin": "yěhăo",
    "part_of_speech": "Cũng",
    "meaning": "tốt"
  },
  {
    "chinese": "頁",
    "level": "B1",
    "pinyin": "yè",
    "part_of_speech": "M",
    "meaning": "Tờ, trang (giấy)"
  },
  {
    "chinese": "夜裡/裏",
    "level": "B1",
    "pinyin": "yèli/li",
    "part_of_speech": "N",
    "meaning": "Ban đêm"
  },
  {
    "chinese": "夜市",
    "level": "B1",
    "pinyin": "yèshì",
    "part_of_speech": "N",
    "meaning": "Chợ đêm"
  },
  {
    "chinese": "衣櫃",
    "level": "B1",
    "pinyin": "yīguì",
    "part_of_speech": "N",
    "meaning": "Tủ quần áo"
  },
  {
    "chinese": "依靠",
    "level": "B1",
    "pinyin": "yīkào",
    "part_of_speech": "V",
    "meaning": "Nhờ vào, dựa vào"
  },
  {
    "chinese": "一塊/一塊兒",
    "level": "B1",
    "pinyin": "yīkuài/yíkuàir",
    "part_of_speech": "Adv",
    "meaning": "Một khối"
  },
  {
    "chinese": "一切",
    "level": "B1",
    "pinyin": "yīqiè",
    "part_of_speech": "Det",
    "meaning": "Tất cả, mọi thứ"
  },
  {
    "chinese": "一向",
    "level": "B1",
    "pinyin": "yīxiàng",
    "part_of_speech": "Adv",
    "meaning": "Gần đây, thời gian qua"
  },
  {
    "chinese": "一樣",
    "level": "B1",
    "pinyin": "yīyàng",
    "part_of_speech": "N",
    "meaning": "Như nhau, giống nhau"
  },
  {
    "chinese": "已",
    "level": "B1",
    "pinyin": "yĭ",
    "part_of_speech": "Adv",
    "meaning": "Đã"
  },
  {
    "chinese": "以",
    "level": "B1",
    "pinyin": "yĭ",
    "part_of_speech": "Prep",
    "meaning": "Để, nhằm"
  },
  {
    "chinese": "以後",
    "level": "B1",
    "pinyin": "yĭhòu",
    "part_of_speech": "N",
    "meaning": "Về sau, sau đó"
  },
  {
    "chinese": "以來",
    "level": "B1",
    "pinyin": "yĭlái",
    "part_of_speech": "N",
    "meaning": "Trước nay"
  },
  {
    "chinese": "以免",
    "level": "B1",
    "pinyin": "yĭmiăn",
    "part_of_speech": "Conj",
    "meaning": "Để tránh khỏi"
  },
  {
    "chinese": "以內",
    "level": "B1",
    "pinyin": "yĭnèi",
    "part_of_speech": "N",
    "meaning": "Trong vòng"
  },
  {
    "chinese": "以前",
    "level": "B1",
    "pinyin": "yĭqián",
    "part_of_speech": "N",
    "meaning": "Trước đây"
  },
  {
    "chinese": "以上",
    "level": "B1",
    "pinyin": "yĭshàng",
    "part_of_speech": "N",
    "meaning": "Trở lên"
  },
  {
    "chinese": "以外",
    "level": "B1",
    "pinyin": "yĭwài",
    "part_of_speech": "N",
    "meaning": "Ngoài ra"
  },
  {
    "chinese": "以為",
    "level": "B1",
    "pinyin": "yĭwéi",
    "part_of_speech": "V",
    "meaning": "Cho rằng, cho là"
  },
  {
    "chinese": "以下",
    "level": "B1",
    "pinyin": "yĭxià",
    "part_of_speech": "N",
    "meaning": "Trở xuống"
  },
  {
    "chinese": "一般來說",
    "level": "B1",
    "pinyin": "yìbānláishuō",
    "part_of_speech": "Adv",
    "meaning": "Nói chung"
  },
  {
    "chinese": "一點/一點兒",
    "level": "B1",
    "pinyin": "yìdiǍn/yìdiǍnr",
    "part_of_speech": "Adv",
    "meaning": "Một chút"
  },
  {
    "chinese": "一方面",
    "level": "B1",
    "pinyin": "yìfāngmiàn",
    "part_of_speech": "Conj",
    "meaning": "Một mặt thì…"
  },
  {
    "chinese": "一連",
    "level": "B1",
    "pinyin": "yìlián",
    "part_of_speech": "Adv",
    "meaning": "Liên tiếp, không ngừng"
  },
  {
    "chinese": "一生",
    "level": "B1",
    "pinyin": "yìshēng",
    "part_of_speech": "N",
    "meaning": "Suốt đời, cả đời"
  },
  {
    "chinese": "一時",
    "level": "B1",
    "pinyin": "yìshí",
    "part_of_speech": "N",
    "meaning": "Một lúc, nhất thời"
  },
  {
    "chinese": "一同",
    "level": "B1",
    "pinyin": "yìtóng",
    "part_of_speech": "Adv",
    "meaning": "Cùng, chung"
  },
  {
    "chinese": "意見",
    "level": "B1",
    "pinyin": "yìjiàn",
    "part_of_speech": "N",
    "meaning": "Ý kiến"
  },
  {
    "chinese": "意外",
    "level": "B1",
    "pinyin": "yìwài",
    "part_of_speech": "N",
    "meaning": "Bất ngờ, không ngờ"
  },
  {
    "chinese": "意義",
    "level": "B1",
    "pinyin": "yìyì",
    "part_of_speech": "N",
    "meaning": "Ý nghĩa"
  },
  {
    "chinese": "陰",
    "level": "B1",
    "pinyin": "yīn",
    "part_of_speech": "Vs",
    "meaning": "Âm"
  },
  {
    "chinese": "因此",
    "level": "B1",
    "pinyin": "yīncĭ",
    "part_of_speech": "Conj",
    "meaning": "Vì vậy, do đó"
  },
  {
    "chinese": "音響",
    "level": "B1",
    "pinyin": "yīnxiăng",
    "part_of_speech": "N",
    "meaning": "Âm thanh, giọng"
  },
  {
    "chinese": "引起",
    "level": "B1",
    "pinyin": "yĭnqĭ",
    "part_of_speech": "V",
    "meaning": "Gây nên, dẫn tới"
  },
  {
    "chinese": "應",
    "level": "B1",
    "pinyin": "yīng",
    "part_of_speech": "Vaux",
    "meaning": "Trả lời, đáp lời"
  },
  {
    "chinese": "應該",
    "level": "B1",
    "pinyin": "yīnggāi",
    "part_of_speech": "Vaux",
    "meaning": "Nên"
  },
  {
    "chinese": "英俊",
    "level": "B1",
    "pinyin": "yīngjùn",
    "part_of_speech": "Vs",
    "meaning": "Tài năng xuất chúng"
  },
  {
    "chinese": "營養",
    "level": "B1",
    "pinyin": "yíngyăng",
    "part_of_speech": "N",
    "meaning": "Chất dinh dưỡng"
  },
  {
    "chinese": "影片",
    "level": "B1",
    "pinyin": "yĭngpiàn",
    "part_of_speech": "N",
    "meaning": "Phim nhựa"
  },
  {
    "chinese": "擁有",
    "level": "B1",
    "pinyin": "yŏngyŏu",
    "part_of_speech": "Vst",
    "meaning": "Có, hàm chứa"
  },
  {
    "chinese": "用",
    "level": "B1",
    "pinyin": "yòng",
    "part_of_speech": "Prep",
    "meaning": "Dùng, sử dụng"
  },
  {
    "chinese": "用法",
    "level": "B1",
    "pinyin": "yòngfă",
    "part_of_speech": "N",
    "meaning": "Cách dùng"
  },
  {
    "chinese": "用功",
    "level": "B1",
    "pinyin": "yònggōng",
    "part_of_speech": "Vs",
    "meaning": "Cố gắng, chăm chỉ"
  },
  {
    "chinese": "用品",
    "level": "B1",
    "pinyin": "yòngpĭn",
    "part_of_speech": "N",
    "meaning": "Đồ dùng, vật dụng"
  },
  {
    "chinese": "優點",
    "level": "B1",
    "pinyin": "yōudiăn",
    "part_of_speech": "N",
    "meaning": "Ưu điểm"
  },
  {
    "chinese": "優秀",
    "level": "B1",
    "pinyin": "yōuxiù",
    "part_of_speech": "Vs",
    "meaning": "Ưu tú"
  },
  {
    "chinese": "幽默",
    "level": "B1",
    "pinyin": "yōumò",
    "part_of_speech": "Vs",
    "meaning": "Hài hước"
  },
  {
    "chinese": "郵票",
    "level": "B1",
    "pinyin": "yóupiào",
    "part_of_speech": "N",
    "meaning": "Tem"
  },
  {
    "chinese": "尤其",
    "level": "B1",
    "pinyin": "yóuqí",
    "part_of_speech": "Adv",
    "meaning": "Nhất là, đặc biệt là…"
  },
  {
    "chinese": "遊客",
    "level": "B1",
    "pinyin": "yóukè",
    "part_of_speech": "N",
    "meaning": "Du khách"
  },
  {
    "chinese": "游泳池",
    "level": "B1",
    "pinyin": "yóuyŏngchí",
    "part_of_speech": "N",
    "meaning": "Hồ bơi, bể bơi"
  },
  {
    "chinese": "由於",
    "level": "B1",
    "pinyin": "yóuyú",
    "part_of_speech": "Conj",
    "meaning": "Bởi vì"
  },
  {
    "chinese": "有的",
    "level": "B1",
    "pinyin": "yǒude",
    "part_of_speech": "Det",
    "meaning": "Có"
  },
  {
    "chinese": "有名",
    "level": "B1",
    "pinyin": "yǒumíng",
    "part_of_speech": "Vs",
    "meaning": "Nổi tiếng"
  },
  {
    "chinese": "有錢",
    "level": "B1",
    "pinyin": "yǒuqián",
    "part_of_speech": "Vs",
    "meaning": "Có tiền"
  },
  {
    "chinese": "有效",
    "level": "B1",
    "pinyin": "yŏuxiào",
    "part_of_speech": "Vs",
    "meaning": "Có hiệu quả"
  },
  {
    "chinese": "有意思",
    "level": "B1",
    "pinyin": "yǒuyìsi",
    "part_of_speech": "Vs",
    "meaning": "Thú vị"
  },
  {
    "chinese": "友誼",
    "level": "B1",
    "pinyin": "yŏuyì",
    "part_of_speech": "N",
    "meaning": "Hữu nghị"
  },
  {
    "chinese": "於是",
    "level": "B1",
    "pinyin": "yúshì",
    "part_of_speech": "Conj",
    "meaning": "Thế là"
  },
  {
    "chinese": "與",
    "level": "B1",
    "pinyin": "yǔ",
    "part_of_speech": "Conj",
    "meaning": "Với"
  },
  {
    "chinese": "與",
    "level": "B1",
    "pinyin": "yǔ",
    "part_of_speech": "Prep",
    "meaning": "Cùng, với"
  },
  {
    "chinese": "玉",
    "level": "B1",
    "pinyin": "yù",
    "part_of_speech": "N",
    "meaning": "Ngọc, ngọc thạch"
  },
  {
    "chinese": "玉米",
    "level": "B1",
    "pinyin": "yùmi",
    "part_of_speech": "N",
    "meaning": "Cây ngô, bắp"
  },
  {
    "chinese": "預備",
    "level": "B1",
    "pinyin": "yùbèi",
    "part_of_speech": "V",
    "meaning": "Dự bị"
  },
  {
    "chinese": "預習",
    "level": "B1",
    "pinyin": "yùxí",
    "part_of_speech": "V",
    "meaning": "Ôn trước, chuẩn bị bài"
  },
  {
    "chinese": "遇到",
    "level": "B1",
    "pinyin": "yùdào",
    "part_of_speech": "Vpt",
    "meaning": "Gặp phải"
  },
  {
    "chinese": "圓",
    "level": "B1",
    "pinyin": "yuán",
    "part_of_speech": "N",
    "meaning": "Hình tròn"
  },
  {
    "chinese": "員工",
    "level": "B1",
    "pinyin": "yuángōng",
    "part_of_speech": "N",
    "meaning": "Công nhân, viên chức"
  },
  {
    "chinese": "原諒",
    "level": "B1",
    "pinyin": "yuánliàng",
    "part_of_speech": "Vst",
    "meaning": "Tha thứ, thứ lỗi"
  },
  {
    "chinese": "原因",
    "level": "B1",
    "pinyin": "yuányīn",
    "part_of_speech": "N",
    "meaning": "Nguyên nhân"
  },
  {
    "chinese": "願望",
    "level": "B1",
    "pinyin": "yuànwàng",
    "part_of_speech": "N",
    "meaning": "Nguyện vọng"
  },
  {
    "chinese": "院子",
    "level": "B1",
    "pinyin": "yuànzi",
    "part_of_speech": "N",
    "meaning": "Sân trong"
  },
  {
    "chinese": "約",
    "level": "B1",
    "pinyin": "yuē",
    "part_of_speech": "Adv",
    "meaning": "Cân"
  },
  {
    "chinese": "約會",
    "level": "B1",
    "pinyin": "yuēhuì",
    "part_of_speech": "N",
    "meaning": "Hẹn hò"
  },
  {
    "chinese": "約會",
    "level": "B1",
    "pinyin": "yuēhuì",
    "part_of_speech": "Vi",
    "meaning": "Hẹn gặp"
  },
  {
    "chinese": "越",
    "level": "B1",
    "pinyin": "yuè",
    "part_of_speech": "Adv",
    "meaning": "Vượt qua"
  },
  {
    "chinese": "月餅",
    "level": "B1",
    "pinyin": "yuèbĭng",
    "part_of_speech": "N",
    "meaning": "Bánh trung thu"
  },
  {
    "chinese": "閱讀",
    "level": "B1",
    "pinyin": "yuèdú",
    "part_of_speech": "V",
    "meaning": "Xem, đọc"
  },
  {
    "chinese": "樂團",
    "level": "B1",
    "pinyin": "yuètuán",
    "part_of_speech": "N",
    "meaning": "Dàn nhạc, ban nhạc"
  },
  {
    "chinese": "運氣",
    "level": "B1",
    "pinyin": "yùnqì",
    "part_of_speech": "N",
    "meaning": "Vận may"
  },
  {
    "chinese": "在",
    "level": "B1",
    "pinyin": "zài",
    "part_of_speech": "Vst",
    "meaning": "Tồn tại, sống, ở"
  },
  {
    "chinese": "在意",
    "level": "B1",
    "pinyin": "zàiyì",
    "part_of_speech": "Vst",
    "meaning": "Để ý"
  },
  {
    "chinese": "在於",
    "level": "B1",
    "pinyin": "zàiyú",
    "part_of_speech": "Vst",
    "meaning": "ở chỗ"
  },
  {
    "chinese": "早",
    "level": "B1",
    "pinyin": "zăo",
    "part_of_speech": "Adv",
    "meaning": "Sớm"
  },
  {
    "chinese": "早日",
    "level": "B1",
    "pinyin": "zăorì",
    "part_of_speech": "Adv",
    "meaning": "Trước kia"
  },
  {
    "chinese": "早晚",
    "level": "B1",
    "pinyin": "zăowăn",
    "part_of_speech": "N",
    "meaning": "Sớm tối"
  },
  {
    "chinese": "造成",
    "level": "B1",
    "pinyin": "zàochéng",
    "part_of_speech": "Vpt",
    "meaning": "Tạo thành"
  },
  {
    "chinese": "噪音",
    "level": "B1",
    "pinyin": "zàoyīn",
    "part_of_speech": "N",
    "meaning": "Tạp âm"
  },
  {
    "chinese": "責任",
    "level": "B1",
    "pinyin": "zérèn",
    "part_of_speech": "N",
    "meaning": "Trách nhiệm"
  },
  {
    "chinese": "增加",
    "level": "B1",
    "pinyin": "zēngjiā",
    "part_of_speech": "Vpt",
    "meaning": "Tăng thêm"
  },
  {
    "chinese": "炸",
    "level": "B1",
    "pinyin": "zhà/zhá",
    "part_of_speech": "V",
    "meaning": "Chiên, rán"
  },
  {
    "chinese": "摘",
    "level": "B1",
    "pinyin": "zhāi",
    "part_of_speech": "V",
    "meaning": "Hái, bẻ, ngắt"
  },
  {
    "chinese": "站",
    "level": "B1",
    "pinyin": "zhàn",
    "part_of_speech": "N",
    "meaning": "Trạm"
  },
  {
    "chinese": "暫時",
    "level": "B1",
    "pinyin": "zhànshí",
    "part_of_speech": "Adv",
    "meaning": "Tạm thời"
  },
  {
    "chinese": "戰爭",
    "level": "B1",
    "pinyin": "zhànzhēng",
    "part_of_speech": "N",
    "meaning": "Chiến tranh"
  },
  {
    "chinese": "長",
    "level": "B1",
    "pinyin": "zhǎng",
    "part_of_speech": "Vs",
    "meaning": "Lớn"
  },
  {
    "chinese": "長大",
    "level": "B1",
    "pinyin": "zhǎngdà",
    "part_of_speech": "Vp",
    "meaning": "Cao lớn"
  },
  {
    "chinese": "掌握",
    "level": "B1",
    "pinyin": "zhăngwò",
    "part_of_speech": "V",
    "meaning": "Nắm bắt"
  },
  {
    "chinese": "障礙",
    "level": "B1",
    "pinyin": "zhàngài",
    "part_of_speech": "N",
    "meaning": "Trở ngại, chướng ngại vật"
  },
  {
    "chinese": "招待",
    "level": "B1",
    "pinyin": "zhāodài",
    "part_of_speech": "V",
    "meaning": "Tiếp đãi"
  },
  {
    "chinese": "招牌",
    "level": "B1",
    "pinyin": "zhāopái",
    "part_of_speech": "N",
    "meaning": "Bảng hiệu"
  },
  {
    "chinese": "找錢",
    "level": "B1",
    "pinyin": "zhǎoqián",
    "part_of_speech": "V-sep",
    "meaning": "Trả lại tiền thừa"
  },
  {
    "chinese": "照",
    "level": "B1",
    "pinyin": "zhào",
    "part_of_speech": "Prep",
    "meaning": "Theo như"
  },
  {
    "chinese": "照",
    "level": "B1",
    "pinyin": "zhào",
    "part_of_speech": "V",
    "meaning": "Chiếu rọi"
  },
  {
    "chinese": "哲學",
    "level": "B1",
    "pinyin": "zhéxué",
    "part_of_speech": "N",
    "meaning": "Triết học"
  },
  {
    "chinese": "這裏",
    "level": "B1",
    "pinyin": "zhèlĭ",
    "part_of_speech": "N",
    "meaning": "ở đây, nơi đây"
  },
  {
    "chinese": "這下子",
    "level": "B1",
    "pinyin": "zhèxiàzi",
    "part_of_speech": "N",
    "meaning": "Lúc này"
  },
  {
    "chinese": "這樣",
    "level": "B1",
    "pinyin": "zhèyàng",
    "part_of_speech": "Vs",
    "meaning": "Như thế này"
  },
  {
    "chinese": "這樣子",
    "level": "B1",
    "pinyin": "zhèyàngzi",
    "part_of_speech": "Adv",
    "meaning": "Như thế"
  },
  {
    "chinese": "這樣子",
    "level": "B1",
    "pinyin": "zhèyàngzi",
    "part_of_speech": "Vs",
    "meaning": "Như thế này"
  },
  {
    "chinese": "真的",
    "level": "B1",
    "pinyin": "zhēnde",
    "part_of_speech": "Adv",
    "meaning": "Có thật không?"
  },
  {
    "chinese": "真理",
    "level": "B1",
    "pinyin": "zhēnlĭ",
    "part_of_speech": "N",
    "meaning": "Chân lý"
  },
  {
    "chinese": "真實",
    "level": "B1",
    "pinyin": "zhēnshí",
    "part_of_speech": "Vs",
    "meaning": "Chân thực"
  },
  {
    "chinese": "真是",
    "level": "B1",
    "pinyin": "zhēnshì",
    "part_of_speech": "Adv",
    "meaning": "Thật là!"
  },
  {
    "chinese": "真心",
    "level": "B1",
    "pinyin": "zhēnxīn",
    "part_of_speech": "Vs",
    "meaning": "Thật lòng"
  },
  {
    "chinese": "真正",
    "level": "B1",
    "pinyin": "zhēnzhèng",
    "part_of_speech": "Adv",
    "meaning": "Chân chính"
  },
  {
    "chinese": "真正",
    "level": "B1",
    "pinyin": "zhēnzhèng",
    "part_of_speech": "Vs-attr",
    "meaning": "Xác thực"
  },
  {
    "chinese": "珍貴",
    "level": "B1",
    "pinyin": "zhēnguì",
    "part_of_speech": "Vs",
    "meaning": "Quý giá"
  },
  {
    "chinese": "整",
    "level": "B1",
    "pinyin": "zhěng",
    "part_of_speech": "Det",
    "meaning": "Trọn, cả"
  },
  {
    "chinese": "整理",
    "level": "B1",
    "pinyin": "zhěnglĭ",
    "part_of_speech": "V",
    "meaning": "Thu xếp, thu dọn"
  },
  {
    "chinese": "整齊",
    "level": "B1",
    "pinyin": "zhěngqí",
    "part_of_speech": "Vs",
    "meaning": "Ngăn nắp, ngay ngắn"
  },
  {
    "chinese": "正",
    "level": "B1",
    "pinyin": "zhèng",
    "part_of_speech": "Adv",
    "meaning": "Chính"
  },
  {
    "chinese": "正常",
    "level": "B1",
    "pinyin": "zhèngcháng",
    "part_of_speech": "Vs",
    "meaning": "Bình thường"
  },
  {
    "chinese": "正確",
    "level": "B1",
    "pinyin": "zhèngquè",
    "part_of_speech": "Vs",
    "meaning": "Chính xác"
  },
  {
    "chinese": "正式",
    "level": "B1",
    "pinyin": "zhèngshì",
    "part_of_speech": "Vs",
    "meaning": "Chính thức"
  },
  {
    "chinese": "證明",
    "level": "B1",
    "pinyin": "zhèngmíng",
    "part_of_speech": "V",
    "meaning": "Chứng minh"
  },
  {
    "chinese": "證書",
    "level": "B1",
    "pinyin": "zhèngshū",
    "part_of_speech": "N",
    "meaning": "Giấy chứng nhận, chứng chỉ"
  },
  {
    "chinese": "支",
    "level": "B1",
    "pinyin": "zhī",
    "part_of_speech": "M",
    "meaning": "Chống, đỡ"
  },
  {
    "chinese": "知",
    "level": "B1",
    "pinyin": "zhī",
    "part_of_speech": "Vst",
    "meaning": "Biết"
  },
  {
    "chinese": "知識",
    "level": "B1",
    "pinyin": "zhīshì",
    "part_of_speech": "N",
    "meaning": "Tri thức"
  },
  {
    "chinese": "之後",
    "level": "B1",
    "pinyin": "zhīhòu",
    "part_of_speech": "N",
    "meaning": "Sau khi"
  },
  {
    "chinese": "之間",
    "level": "B1",
    "pinyin": "zhījiān",
    "part_of_speech": "N",
    "meaning": "Giữa"
  },
  {
    "chinese": "之前",
    "level": "B1",
    "pinyin": "zhīqián",
    "part_of_speech": "N",
    "meaning": "Trước khi"
  },
  {
    "chinese": "直",
    "level": "B1",
    "pinyin": "zhí",
    "part_of_speech": "Vs",
    "meaning": "Thẳng đứng, dọc"
  },
  {
    "chinese": "直到",
    "level": "B1",
    "pinyin": "zhídào",
    "part_of_speech": "Prep",
    "meaning": "Đến tận khi"
  },
  {
    "chinese": "值得",
    "level": "B1",
    "pinyin": "zhíde",
    "part_of_speech": "Vst",
    "meaning": "Xứng đáng"
  },
  {
    "chinese": "殖民地",
    "level": "B1",
    "pinyin": "zhímíndì",
    "part_of_speech": "N",
    "meaning": "Thuộc địa"
  },
  {
    "chinese": "植物",
    "level": "B1",
    "pinyin": "zhíwù",
    "part_of_speech": "N",
    "meaning": "Thực vật"
  },
  {
    "chinese": "職員",
    "level": "B1",
    "pinyin": "zhíyuán",
    "part_of_speech": "N",
    "meaning": "Nhân viên chức"
  },
  {
    "chinese": "指",
    "level": "B1",
    "pinyin": "zhĭ",
    "part_of_speech": "V",
    "meaning": "Chỉ trỏ"
  },
  {
    "chinese": "只是",
    "level": "B1",
    "pinyin": "zhĭshì",
    "part_of_speech": "Conj",
    "meaning": "Chỉ là"
  },
  {
    "chinese": "只要",
    "level": "B1",
    "pinyin": "zhǐyào",
    "part_of_speech": "Conj",
    "meaning": "Chỉ cần, miễn là"
  },
  {
    "chinese": "只有",
    "level": "B1",
    "pinyin": "zhĭyǒu",
    "part_of_speech": "Adv",
    "meaning": "Chỉ có"
  },
  {
    "chinese": "只有",
    "level": "B1",
    "pinyin": "zhĭyŏu",
    "part_of_speech": "Conj",
    "meaning": "Chỉ có"
  },
  {
    "chinese": "制度",
    "level": "B1",
    "pinyin": "zhìdù",
    "part_of_speech": "N",
    "meaning": "Chế độ"
  },
  {
    "chinese": "智慧",
    "level": "B1",
    "pinyin": "zhìhuì",
    "part_of_speech": "N",
    "meaning": "Trí tuệ"
  },
  {
    "chinese": "至少",
    "level": "B1",
    "pinyin": "zhìshăo",
    "part_of_speech": "Adv",
    "meaning": "Chí ít, ít nhất"
  },
  {
    "chinese": "至於",
    "level": "B1",
    "pinyin": "zhìyú",
    "part_of_speech": "Prep",
    "meaning": "Đến nỗi"
  },
  {
    "chinese": "中",
    "level": "B1",
    "pinyin": "zhōng",
    "part_of_speech": "N",
    "meaning": "Trung tâm"
  },
  {
    "chinese": "中部",
    "level": "B1",
    "pinyin": "zhōngbù",
    "part_of_speech": "N",
    "meaning": "Phần giữa"
  },
  {
    "chinese": "中餐",
    "level": "B1",
    "pinyin": "zhōngcān",
    "part_of_speech": "N",
    "meaning": "Món ăn Trung Quốc"
  },
  {
    "chinese": "終於",
    "level": "B1",
    "pinyin": "zhōngyú",
    "part_of_speech": "Adv",
    "meaning": "Cuối cùng"
  },
  {
    "chinese": "鐘",
    "level": "B1",
    "pinyin": "zhōng",
    "part_of_speech": "N",
    "meaning": "Đồng hồ, cái chuông"
  },
  {
    "chinese": "種",
    "level": "B1",
    "pinyin": "zhòng",
    "part_of_speech": "V",
    "meaning": "Tập trung"
  },
  {
    "chinese": "重點",
    "level": "B1",
    "pinyin": "zhòngdiăn",
    "part_of_speech": "N",
    "meaning": "Trọng điểm"
  },
  {
    "chinese": "重視",
    "level": "B1",
    "pinyin": "zhòngshì",
    "part_of_speech": "Vst",
    "meaning": "Coi trọng"
  },
  {
    "chinese": "周圍",
    "level": "B1",
    "pinyin": "zhōuwéi",
    "part_of_speech": "N",
    "meaning": "Xung quanh, chu vi"
  },
  {
    "chinese": "主動",
    "level": "B1",
    "pinyin": "zhŭdòng",
    "part_of_speech": "Vs",
    "meaning": "Chủ động"
  },
  {
    "chinese": "主婦",
    "level": "B1",
    "pinyin": "zhŭfù",
    "part_of_speech": "N",
    "meaning": "Bà chủ"
  },
  {
    "chinese": "主管",
    "level": "B1",
    "pinyin": "zhŭguăn",
    "part_of_speech": "N",
    "meaning": "Chủ quản"
  },
  {
    "chinese": "主人",
    "level": "B1",
    "pinyin": "zhǔrén",
    "part_of_speech": "N",
    "meaning": "Chủ nhân, chủ sở hữu"
  },
  {
    "chinese": "主任",
    "level": "B1",
    "pinyin": "zhǔrèn",
    "part_of_speech": "N",
    "meaning": "Chủ nhiệm"
  },
  {
    "chinese": "主題",
    "level": "B1",
    "pinyin": "zhŭtí",
    "part_of_speech": "N",
    "meaning": "Chủ đề"
  },
  {
    "chinese": "主要",
    "level": "B1",
    "pinyin": "zhǔyào",
    "part_of_speech": "Adv",
    "meaning": "Chủ yếu, chính"
  },
  {
    "chinese": "主要",
    "level": "B1",
    "pinyin": "zhŭyào",
    "part_of_speech": "Vs-attr",
    "meaning": "Chủ yếu"
  },
  {
    "chinese": "主意",
    "level": "B1",
    "pinyin": "zhǔyì",
    "part_of_speech": "N",
    "meaning": "Chủ ý, biện pháp"
  },
  {
    "chinese": "祝",
    "level": "B1",
    "pinyin": "zhù",
    "part_of_speech": "V",
    "meaning": "Chúc"
  },
  {
    "chinese": "祝福",
    "level": "B1",
    "pinyin": "zhùfú",
    "part_of_speech": "N",
    "meaning": "Lời chúc"
  },
  {
    "chinese": "祝福",
    "level": "B1",
    "pinyin": "zhùfú",
    "part_of_speech": "V",
    "meaning": "Chúc phúc"
  },
  {
    "chinese": "助",
    "level": "B1",
    "pinyin": "zhù",
    "part_of_speech": "V",
    "meaning": "Giúp đỡ, giúp"
  },
  {
    "chinese": "助理",
    "level": "B1",
    "pinyin": "zhùlĭ",
    "part_of_speech": "N",
    "meaning": "Trợ lí, giúp việc"
  },
  {
    "chinese": "著名",
    "level": "B1",
    "pinyin": "zhùmíng",
    "part_of_speech": "Vs",
    "meaning": "Nổi danh"
  },
  {
    "chinese": "抓",
    "level": "B1",
    "pinyin": "zhuā",
    "part_of_speech": "V",
    "meaning": "Cầm nắm, bắt"
  },
  {
    "chinese": "專心",
    "level": "B1",
    "pinyin": "zhuānxīn",
    "part_of_speech": "Vs",
    "meaning": "Chuyên tâm, chăm chú"
  },
  {
    "chinese": "專業",
    "level": "B1",
    "pinyin": "zhuānyè",
    "part_of_speech": "Vs-attr",
    "meaning": "Chuyên nghiệp"
  },
  {
    "chinese": "狀態",
    "level": "B1",
    "pinyin": "zhuàngtài",
    "part_of_speech": "N",
    "meaning": "Trạng thái"
  },
  {
    "chinese": "追求",
    "level": "B1",
    "pinyin": "zhuīqiú",
    "part_of_speech": "V",
    "meaning": "Theo đuổi"
  },
  {
    "chinese": "準時",
    "level": "B1",
    "pinyin": "zhŭnshí",
    "part_of_speech": "Vs",
    "meaning": "Đúng giờ"
  },
  {
    "chinese": "著",
    "level": "B1",
    "pinyin": "zhuó",
    "part_of_speech": "V",
    "meaning": "Đang"
  },
  {
    "chinese": "資料",
    "level": "B1",
    "pinyin": "zīliào",
    "part_of_speech": "N",
    "meaning": "Tư liệu, tài liệu"
  },
  {
    "chinese": "資源",
    "level": "B1",
    "pinyin": "zīyuán",
    "part_of_speech": "N",
    "meaning": "Nguồn tài nguyên"
  },
  {
    "chinese": "仔細",
    "level": "B1",
    "pinyin": "zĭxì",
    "part_of_speech": "Vs",
    "meaning": "Tỉ mỉ"
  },
  {
    "chinese": "自從",
    "level": "B1",
    "pinyin": "zìcóng",
    "part_of_speech": "Prep",
    "meaning": "Từ khi, từ lúc"
  },
  {
    "chinese": "自動",
    "level": "B1",
    "pinyin": "zìdòng",
    "part_of_speech": "Vs",
    "meaning": "Tự động"
  },
  {
    "chinese": "自然",
    "level": "B1",
    "pinyin": "zìrán",
    "part_of_speech": "Vs",
    "meaning": "Tự nhiên"
  },
  {
    "chinese": "自殺",
    "level": "B1",
    "pinyin": "zìshā",
    "part_of_speech": "Vi",
    "meaning": "Tự tử"
  },
  {
    "chinese": "自信",
    "level": "B1",
    "pinyin": "zìxìn",
    "part_of_speech": "N",
    "meaning": "Tự tin"
  },
  {
    "chinese": "自由",
    "level": "B1",
    "pinyin": "zìyóu",
    "part_of_speech": "N",
    "meaning": "Sự tự do"
  },
  {
    "chinese": "自由",
    "level": "B1",
    "pinyin": "zìyóu",
    "part_of_speech": "Vs",
    "meaning": "Tự do"
  },
  {
    "chinese": "自在",
    "level": "B1",
    "pinyin": "zìzài",
    "part_of_speech": "Vs",
    "meaning": "An nhàn, thanh thản"
  },
  {
    "chinese": "宗教",
    "level": "B1",
    "pinyin": "zōngjiào",
    "part_of_speech": "N",
    "meaning": "Tôn giáo, đạo"
  },
  {
    "chinese": "總而言之",
    "level": "B1",
    "pinyin": "zǒngéryánzhī",
    "part_of_speech": "Conj",
    "meaning": "Tóm lại"
  },
  {
    "chinese": "總算",
    "level": "B1",
    "pinyin": "zǒngsuàn",
    "part_of_speech": "Adv",
    "meaning": "Cuối cùng cũng…"
  },
  {
    "chinese": "總統",
    "level": "B1",
    "pinyin": "zǒngtǒng",
    "part_of_speech": "N",
    "meaning": "Tổng thống"
  },
  {
    "chinese": "總之",
    "level": "B1",
    "pinyin": "zǒngzhī",
    "part_of_speech": "Conj",
    "meaning": "Nói chung, tóm lại"
  },
  {
    "chinese": "走走",
    "level": "B1",
    "pinyin": "zǒuzou",
    "part_of_speech": "Vi",
    "meaning": "Đi dạo, tản bộ"
  },
  {
    "chinese": "組",
    "level": "B1",
    "pinyin": "zŭ",
    "part_of_speech": "M",
    "meaning": "Tổ, nhóm"
  },
  {
    "chinese": "祖父",
    "level": "B1",
    "pinyin": "zŭfù",
    "part_of_speech": "N",
    "meaning": "Ông nội"
  },
  {
    "chinese": "祖母",
    "level": "B1",
    "pinyin": "zŭmŭ",
    "part_of_speech": "N",
    "meaning": "Bà nội"
  },
  {
    "chinese": "祖先",
    "level": "B1",
    "pinyin": "zŭxiān",
    "part_of_speech": "N",
    "meaning": "Tổ tiên"
  },
  {
    "chinese": "嘴",
    "level": "B1",
    "pinyin": "zuĭ",
    "part_of_speech": "N",
    "meaning": "Miệng"
  },
  {
    "chinese": "醉",
    "level": "B1",
    "pinyin": "zuì",
    "part_of_speech": "Vp",
    "meaning": "Say, say rượu"
  },
  {
    "chinese": "最初",
    "level": "B1",
    "pinyin": "zuìchū",
    "part_of_speech": "N",
    "meaning": "Ban đầu"
  },
  {
    "chinese": "最多",
    "level": "B1",
    "pinyin": "zuìduō",
    "part_of_speech": "Adv",
    "meaning": "Nhiều nhất"
  },
  {
    "chinese": "最好",
    "level": "B1",
    "pinyin": "zuìhǎo",
    "part_of_speech": "Adv",
    "meaning": "Tốt nhất"
  },
  {
    "chinese": "最後",
    "level": "B1",
    "pinyin": "zuìhòu",
    "part_of_speech": "N",
    "meaning": "Cuối cùng"
  },
  {
    "chinese": "最佳",
    "level": "B1",
    "pinyin": "zuìjiā",
    "part_of_speech": "Vs-attr",
    "meaning": "Tốt nhất"
  },
  {
    "chinese": "尊敬",
    "level": "B1",
    "pinyin": "zūnjìng",
    "part_of_speech": "Vst",
    "meaning": "Tôn kính"
  },
  {
    "chinese": "作",
    "level": "B1",
    "pinyin": "zuò",
    "part_of_speech": "V",
    "meaning": "Làm"
  },
  {
    "chinese": "作品",
    "level": "B1",
    "pinyin": "zuòpĭn",
    "part_of_speech": "N",
    "meaning": "Tác phẩm"
  },
  {
    "chinese": "作者",
    "level": "B1",
    "pinyin": "zuòzhě",
    "part_of_speech": "N",
    "meaning": "Tác giả"
  },
  {
    "chinese": "座",
    "level": "B1",
    "pinyin": "zuò",
    "part_of_speech": "M",
    "meaning": "Chỗ ngồi"
  },
  {
    "chinese": "做/作法",
    "level": "B1",
    "pinyin": "zuòfă",
    "part_of_speech": "N",
    "meaning": "Cách làm, phương pháp"
  },
  {
    "chinese": "做夢",
    "level": "B1",
    "pinyin": "zuòmèng",
    "part_of_speech": "V-sep",
    "meaning": "Nằm mơ"
  },
  {
    "chinese": "做人",
    "level": "B1",
    "pinyin": "zuòrén",
    "part_of_speech": "Vi",
    "meaning": "Làm người"
  },
  {
    "chinese": "做事",
    "level": "B1",
    "pinyin": "zuòshì",
    "part_of_speech": "Vi",
    "meaning": "Làm việc"
  },
  {
    "chinese": "哎呀",
    "level": "B2",
    "pinyin": "āiyā",
    "part_of_speech": "Ptc",
    "meaning": "ơ kìa, ái chà, trời ơi"
  },
  {
    "chinese": "哎喲",
    "level": "B2",
    "pinyin": "āiyāo",
    "part_of_speech": "Ptc",
    "meaning": "chao ôi"
  },
  {
    "chinese": "愛好",
    "level": "B2",
    "pinyin": "àihào",
    "part_of_speech": "N",
    "meaning": "sở thích"
  },
  {
    "chinese": "愛好",
    "level": "B2",
    "pinyin": "àihào",
    "part_of_speech": "Vst",
    "meaning": "thích, yêu thích"
  },
  {
    "chinese": "愛護",
    "level": "B2",
    "pinyin": "àihù",
    "part_of_speech": "Vst",
    "meaning": "bảo vệ, giữ gìn"
  },
  {
    "chinese": "愛人",
    "level": "B2",
    "pinyin": "àirén",
    "part_of_speech": "N",
    "meaning": "vợ, chồng, người yêu"
  },
  {
    "chinese": "安慰",
    "level": "B2",
    "pinyin": "ānwèi",
    "part_of_speech": "V",
    "meaning": "an ủi"
  },
  {
    "chinese": "安裝",
    "level": "B2",
    "pinyin": "ānzhuāng",
    "part_of_speech": "V",
    "meaning": "lắp đặt, lắp ráp"
  },
  {
    "chinese": "按",
    "level": "B2",
    "pinyin": "àn",
    "part_of_speech": "V",
    "meaning": "nhấn, bấm, đè"
  },
  {
    "chinese": "按時",
    "level": "B2",
    "pinyin": "ànshí",
    "part_of_speech": "Adv",
    "meaning": "đúng hạn"
  },
  {
    "chinese": "暗",
    "level": "B2",
    "pinyin": "àn",
    "part_of_speech": "Vs",
    "meaning": "tối, tối tăm"
  },
  {
    "chinese": "暗中",
    "level": "B2",
    "pinyin": "ànzhōng",
    "part_of_speech": "Adv",
    "meaning": "trong bóng tối"
  },
  {
    "chinese": "骯髒",
    "level": "B2",
    "pinyin": "āngzhāng",
    "part_of_speech": "Vs",
    "meaning": "dơ bẩn"
  },
  {
    "chinese": "熬",
    "level": "B2",
    "pinyin": "áo",
    "part_of_speech": "V",
    "meaning": "luộc, nấu, sắc (thuốc)"
  },
  {
    "chinese": "拔",
    "level": "B2",
    "pinyin": "bá",
    "part_of_speech": "V",
    "meaning": "nhổ, rút"
  },
  {
    "chinese": "把",
    "level": "B2",
    "pinyin": "bă",
    "part_of_speech": "M",
    "meaning": "cán, quai, tay cầm"
  },
  {
    "chinese": "把握",
    "level": "B2",
    "pinyin": "băwò",
    "part_of_speech": "N",
    "meaning": "cầm, nắm, nắm bắt"
  },
  {
    "chinese": "罷工",
    "level": "B2",
    "pinyin": "bàgōng",
    "part_of_speech": "Vi",
    "meaning": "bãi công, đình công"
  },
  {
    "chinese": "罷了",
    "level": "B2",
    "pinyin": "bàle",
    "part_of_speech": "Ptc",
    "meaning": "mà thôi, thôi"
  },
  {
    "chinese": "擺脫",
    "level": "B2",
    "pinyin": "băituō",
    "part_of_speech": "V",
    "meaning": "thoát khỏi"
  },
  {
    "chinese": "敗",
    "level": "B2",
    "pinyin": "bài",
    "part_of_speech": "Vp",
    "meaning": "thua, bại trận"
  },
  {
    "chinese": "拜",
    "level": "B2",
    "pinyin": "bài",
    "part_of_speech": "V",
    "meaning": "lạy, vái"
  },
  {
    "chinese": "拜拜",
    "level": "B2",
    "pinyin": "bàibai",
    "part_of_speech": "Vi",
    "meaning": "cúi chào"
  },
  {
    "chinese": "拜訪",
    "level": "B2",
    "pinyin": "bàifăng",
    "part_of_speech": "V",
    "meaning": "thăm viếng, thăm hỏi"
  },
  {
    "chinese": "拜年",
    "level": "B2",
    "pinyin": "bàinián",
    "part_of_speech": "V-sep",
    "meaning": "đi chúc tết"
  },
  {
    "chinese": "拜託",
    "level": "B2",
    "pinyin": "bàituō",
    "part_of_speech": "V",
    "meaning": "nhờ vả"
  },
  {
    "chinese": "般",
    "level": "B2",
    "pinyin": "bān",
    "part_of_speech": "loại,",
    "meaning": "kiểu, cách, hạng"
  },
  {
    "chinese": "班",
    "level": "B2",
    "pinyin": "bān",
    "part_of_speech": "M",
    "meaning": "lớp, ca, buổi làm"
  },
  {
    "chinese": "班長",
    "level": "B2",
    "pinyin": "bānzhăng",
    "part_of_speech": "N",
    "meaning": "lớp trưởng"
  },
  {
    "chinese": "搬運",
    "level": "B2",
    "pinyin": "bānyùn",
    "part_of_speech": "V",
    "meaning": "vận chuyển, vận tải"
  },
  {
    "chinese": "拌",
    "level": "B2",
    "pinyin": "bàn",
    "part_of_speech": "V",
    "meaning": "trộn, trộn lẫn"
  },
  {
    "chinese": "半路",
    "level": "B2",
    "pinyin": "bànlù",
    "part_of_speech": "N",
    "meaning": "nửa đường, giữa đường"
  },
  {
    "chinese": "半數",
    "level": "B2",
    "pinyin": "bànshù",
    "part_of_speech": "Det",
    "meaning": "một nửa"
  },
  {
    "chinese": "辦公",
    "level": "B2",
    "pinyin": "bàngōng",
    "part_of_speech": "Vi",
    "meaning": "làm việc"
  },
  {
    "chinese": "辦事",
    "level": "B2",
    "pinyin": "bànshì",
    "part_of_speech": "Vi",
    "meaning": "làm việc"
  },
  {
    "chinese": "扮演",
    "level": "B2",
    "pinyin": "bànyăn",
    "part_of_speech": "V",
    "meaning": "đóng vai, sắm vai"
  },
  {
    "chinese": "傍晚",
    "level": "B2",
    "pinyin": "bāngwăn",
    "part_of_speech": "N",
    "meaning": "chạng vạng, chập tối"
  },
  {
    "chinese": "磅",
    "level": "B2",
    "pinyin": "bàng",
    "part_of_speech": "M",
    "meaning": "pao (đơn vị trọng lượng)"
  },
  {
    "chinese": "棒",
    "level": "B2",
    "pinyin": "bàng",
    "part_of_speech": "M",
    "meaning": "gậy, thỏi"
  },
  {
    "chinese": "棒子",
    "level": "B2",
    "pinyin": "bàngzi",
    "part_of_speech": "N",
    "meaning": "cây gậy"
  },
  {
    "chinese": "包裹",
    "level": "B2",
    "pinyin": "bāoguǒ",
    "part_of_speech": "N",
    "meaning": "gói, kiện hàng"
  },
  {
    "chinese": "包括",
    "level": "B2",
    "pinyin": "bāokuò",
    "part_of_speech": "Vst",
    "meaning": "bao gồm"
  },
  {
    "chinese": "包裝",
    "level": "B2",
    "pinyin": "bāozhuāng",
    "part_of_speech": "N",
    "meaning": "bao bì"
  },
  {
    "chinese": "包裝",
    "level": "B2",
    "pinyin": "bāozhuāng",
    "part_of_speech": "V",
    "meaning": "đóng gói"
  },
  {
    "chinese": "保",
    "level": "B2",
    "pinyin": "băo",
    "part_of_speech": "V",
    "meaning": "giữ, gìn giữ"
  },
  {
    "chinese": "保持",
    "level": "B2",
    "pinyin": "băochí",
    "part_of_speech": "V",
    "meaning": "duy trì, giữ nguyên"
  },
  {
    "chinese": "保存",
    "level": "B2",
    "pinyin": "băocún",
    "part_of_speech": "V",
    "meaning": "bảo tồn"
  },
  {
    "chinese": "保留",
    "level": "B2",
    "pinyin": "băoliú",
    "part_of_speech": "V",
    "meaning": "bảo lưu, giữ nguyên"
  },
  {
    "chinese": "保衛",
    "level": "B2",
    "pinyin": "băowèi",
    "part_of_speech": "V",
    "meaning": "bảo vệ, che chở"
  },
  {
    "chinese": "保障",
    "level": "B2",
    "pinyin": "băozhàng",
    "part_of_speech": "N",
    "meaning": "vật bảo đảm, đồ bảo hộ"
  },
  {
    "chinese": "保障",
    "level": "B2",
    "pinyin": "băozhàng",
    "part_of_speech": "V",
    "meaning": "bảo đảm, bảo hộ"
  },
  {
    "chinese": "寶寶",
    "level": "B2",
    "pinyin": "băobao",
    "part_of_speech": "N",
    "meaning": "cục cưng, bé cưng"
  },
  {
    "chinese": "抱",
    "level": "B2",
    "pinyin": "bào",
    "part_of_speech": "Vst",
    "meaning": "bế, bồng, ôm"
  },
  {
    "chinese": "報",
    "level": "B2",
    "pinyin": "bào",
    "part_of_speech": "V",
    "meaning": "báo cho biết"
  },
  {
    "chinese": "報仇",
    "level": "B2",
    "pinyin": "bàochóu",
    "part_of_speech": "V-sep",
    "meaning": "báo thù, trả thù"
  },
  {
    "chinese": "報答",
    "level": "B2",
    "pinyin": "bàodá",
    "part_of_speech": "Vpt",
    "meaning": "báo đáp, đền đáp"
  },
  {
    "chinese": "報導",
    "level": "B2",
    "pinyin": "bàodăo",
    "part_of_speech": "V",
    "meaning": "báo cáo tin tức"
  },
  {
    "chinese": "報到",
    "level": "B2",
    "pinyin": "bàodào",
    "part_of_speech": "Vi",
    "meaning": "báo cáo có mặt"
  },
  {
    "chinese": "報警",
    "level": "B2",
    "pinyin": "bàojĭng",
    "part_of_speech": "V-sep",
    "meaning": "báo nguy, báo cảnh sát"
  },
  {
    "chinese": "報社",
    "level": "B2",
    "pinyin": "bàoshè",
    "part_of_speech": "N",
    "meaning": "toà soạn, tòa báo"
  },
  {
    "chinese": "暴力",
    "level": "B2",
    "pinyin": "bàolì",
    "part_of_speech": "N",
    "meaning": "bạo lực, vũ lực"
  },
  {
    "chinese": "暴躁",
    "level": "B2",
    "pinyin": "bàozào",
    "part_of_speech": "Vs",
    "meaning": "nóng nảy, hấp tấp"
  },
  {
    "chinese": "爆炸",
    "level": "B2",
    "pinyin": "bàozhà",
    "part_of_speech": "Vp",
    "meaning": "nổ, làm nổ tung"
  },
  {
    "chinese": "悲劇",
    "level": "B2",
    "pinyin": "bēijù",
    "part_of_speech": "N",
    "meaning": "bi kịch"
  },
  {
    "chinese": "悲痛",
    "level": "B2",
    "pinyin": "bēitòng",
    "part_of_speech": "Vs",
    "meaning": "bi thương, đau buồn"
  },
  {
    "chinese": "倍",
    "level": "B2",
    "pinyin": "bèi",
    "part_of_speech": "N",
    "meaning": "lần, gấp bội"
  },
  {
    "chinese": "備",
    "level": "B2",
    "pinyin": "bèi",
    "part_of_speech": "V",
    "meaning": "chuẩn bị, phòng bị"
  },
  {
    "chinese": "背面",
    "level": "B2",
    "pinyin": "bèimiàn",
    "part_of_speech": "N",
    "meaning": "mặt trái, mặt sau lưng"
  },
  {
    "chinese": "奔",
    "level": "B2",
    "pinyin": "bēn",
    "part_of_speech": "Vi",
    "meaning": "chạy"
  },
  {
    "chinese": "奔跑",
    "level": "B2",
    "pinyin": "bēnpăo",
    "part_of_speech": "Vi",
    "meaning": "chạy nhanh"
  },
  {
    "chinese": "本來",
    "level": "B2",
    "pinyin": "běnlái",
    "part_of_speech": "Vs-attr",
    "meaning": "vốn có, lúc đầu"
  },
  {
    "chinese": "本領",
    "level": "B2",
    "pinyin": "běnlĭng",
    "part_of_speech": "N",
    "meaning": "bản lĩnh, năng lực"
  },
  {
    "chinese": "本身",
    "level": "B2",
    "pinyin": "běnshēn",
    "part_of_speech": "N",
    "meaning": "bản thân"
  },
  {
    "chinese": "本土",
    "level": "B2",
    "pinyin": "běntŭ",
    "part_of_speech": "N",
    "meaning": "quê hương, mảnh đất này"
  },
  {
    "chinese": "笨重",
    "level": "B2",
    "pinyin": "bènzhòng",
    "part_of_speech": "Vs",
    "meaning": "cồng kềnh, to lớn"
  },
  {
    "chinese": "比",
    "level": "B2",
    "pinyin": "bĭ",
    "part_of_speech": "V",
    "meaning": "so sánh, so đo"
  },
  {
    "chinese": "比方",
    "level": "B2",
    "pinyin": "bĭfāng",
    "part_of_speech": "N",
    "meaning": "ví, so bì"
  },
  {
    "chinese": "比方(說)",
    "level": "B2",
    "pinyin": "bĭfāng(shūo)",
    "part_of_speech": "Vst",
    "meaning": "so sánh với"
  },
  {
    "chinese": "比較",
    "level": "B2",
    "pinyin": "bĭjiào",
    "part_of_speech": "N",
    "meaning": "so sánh"
  },
  {
    "chinese": "比較",
    "level": "B2",
    "pinyin": "bĭjiào",
    "part_of_speech": "V",
    "meaning": "tương đối, khá"
  },
  {
    "chinese": "比例",
    "level": "B2",
    "pinyin": "bĭlì",
    "part_of_speech": "N",
    "meaning": "tỉ lệ"
  },
  {
    "chinese": "彼此",
    "level": "B2",
    "pinyin": "bĭcĭ",
    "part_of_speech": "N",
    "meaning": "lẫn nhau"
  },
  {
    "chinese": "筆記",
    "level": "B2",
    "pinyin": "bĭjì",
    "part_of_speech": "N",
    "meaning": "ghi chép"
  },
  {
    "chinese": "筆試",
    "level": "B2",
    "pinyin": "bĭshì",
    "part_of_speech": "N",
    "meaning": "cuộc thi viết"
  },
  {
    "chinese": "筆試",
    "level": "B2",
    "pinyin": "bĭshì",
    "part_of_speech": "Vi",
    "meaning": "thi viết"
  },
  {
    "chinese": "閉",
    "level": "B2",
    "pinyin": "bì",
    "part_of_speech": "Vi",
    "meaning": "đóng, khép, bịt"
  },
  {
    "chinese": "必須",
    "level": "B2",
    "pinyin": "bìxū",
    "part_of_speech": "Vs-attr",
    "meaning": "phải, nhất định"
  },
  {
    "chinese": "必要",
    "level": "B2",
    "pinyin": "bìyào",
    "part_of_speech": "N",
    "meaning": "cần thiết, thiết yếu"
  },
  {
    "chinese": "編",
    "level": "B2",
    "pinyin": "biān",
    "part_of_speech": "V",
    "meaning": "bện, đan, thắt"
  },
  {
    "chinese": "扁",
    "level": "B2",
    "pinyin": "biǎn",
    "part_of_speech": "Vs",
    "meaning": "dẹt / bẹt / phẳng"
  },
  {
    "chinese": "便",
    "level": "B2",
    "pinyin": "biàn",
    "part_of_speech": "Adv",
    "meaning": "tiện lợi, thuận tiện"
  },
  {
    "chinese": "便利",
    "level": "B2",
    "pinyin": "biànlì",
    "part_of_speech": "Vs",
    "meaning": "tiện lợi"
  },
  {
    "chinese": "變動",
    "level": "B2",
    "pinyin": "biàndòng",
    "part_of_speech": "N",
    "meaning": "biến động, thay đổi"
  },
  {
    "chinese": "變動",
    "level": "B2",
    "pinyin": "biàndòng",
    "part_of_speech": "Vp",
    "meaning": "thay đổi, biến đổi"
  },
  {
    "chinese": "標題",
    "level": "B2",
    "pinyin": "biāotí",
    "part_of_speech": "N",
    "meaning": "đầu đề, tiêu đề"
  },
  {
    "chinese": "標誌",
    "level": "B2",
    "pinyin": "biāozhì",
    "part_of_speech": "N",
    "meaning": "ký hiệu"
  },
  {
    "chinese": "表格",
    "level": "B2",
    "pinyin": "biăogé",
    "part_of_speech": "N",
    "meaning": "bảng, bảng hiệu"
  },
  {
    "chinese": "表情",
    "level": "B2",
    "pinyin": "biăoqíng",
    "part_of_speech": "N",
    "meaning": "biểu cảm"
  },
  {
    "chinese": "表揚",
    "level": "B2",
    "pinyin": "biăoyáng",
    "part_of_speech": "V",
    "meaning": "khen, biểu dương"
  },
  {
    "chinese": "冰",
    "level": "B2",
    "pinyin": "bīng",
    "part_of_speech": "Vs",
    "meaning": "băng, nước đá"
  },
  {
    "chinese": "丙",
    "level": "B2",
    "pinyin": "bǐng",
    "part_of_speech": "N",
    "meaning": "thiên can thứ 3; ký hiệu loại C / thứ tự thứ 3"
  },
  {
    "chinese": "並",
    "level": "B2",
    "pinyin": "bìng",
    "part_of_speech": "Adv",
    "meaning": "hợp lại, nhập lại"
  },
  {
    "chinese": "並",
    "level": "B2",
    "pinyin": "bìng",
    "part_of_speech": "Conj",
    "meaning": "song song, cùng lúc đó"
  },
  {
    "chinese": "並且",
    "level": "B2",
    "pinyin": "bìngqiě",
    "part_of_speech": "Conj",
    "meaning": "đồng thời, và"
  },
  {
    "chinese": "病毒",
    "level": "B2",
    "pinyin": "bìngdú",
    "part_of_speech": "N",
    "meaning": "siêu vi trùng, virus"
  },
  {
    "chinese": "病房",
    "level": "B2",
    "pinyin": "bìngfáng",
    "part_of_speech": "N",
    "meaning": "phòng bệnh"
  },
  {
    "chinese": "撥",
    "level": "B2",
    "pinyin": "bō",
    "part_of_speech": "V",
    "meaning": "đẩy, gẩy"
  },
  {
    "chinese": "菠菜",
    "level": "B2",
    "pinyin": "bōcài",
    "part_of_speech": "N",
    "meaning": "rau chân vịt"
  },
  {
    "chinese": "波動",
    "level": "B2",
    "pinyin": "bōdòng",
    "part_of_speech": "Vi",
    "meaning": "chập chờn, không ổn định"
  },
  {
    "chinese": "玻璃",
    "level": "B2",
    "pinyin": "bōli",
    "part_of_speech": "N",
    "meaning": "thủy tinh"
  },
  {
    "chinese": "薄",
    "level": "B2",
    "pinyin": "bó",
    "part_of_speech": "Vs",
    "meaning": "mỏng manh"
  },
  {
    "chinese": "薄弱",
    "level": "B2",
    "pinyin": "bóruò",
    "part_of_speech": "Vs",
    "meaning": "bạc nhược, yếu kém"
  },
  {
    "chinese": "伯父",
    "level": "B2",
    "pinyin": "bófù",
    "part_of_speech": "N",
    "meaning": "bác trai"
  },
  {
    "chinese": "伯母",
    "level": "B2",
    "pinyin": "bómŭ",
    "part_of_speech": "N",
    "meaning": "bác gái"
  },
  {
    "chinese": "捕",
    "level": "B2",
    "pinyin": "bŭ",
    "part_of_speech": "V",
    "meaning": "bắt, vồ, tóm"
  },
  {
    "chinese": "補",
    "level": "B2",
    "pinyin": "bŭ",
    "part_of_speech": "V",
    "meaning": "tu bổ, sửa chữa"
  },
  {
    "chinese": "補償",
    "level": "B2",
    "pinyin": "bŭcháng",
    "part_of_speech": "V",
    "meaning": "bồi thường, đền bù"
  },
  {
    "chinese": "補充",
    "level": "B2",
    "pinyin": "bŭchōng",
    "part_of_speech": "V",
    "meaning": "bổ sung"
  },
  {
    "chinese": "補課",
    "level": "B2",
    "pinyin": "bŭkè",
    "part_of_speech": "V-sep",
    "meaning": "học bù, dạy bù"
  },
  {
    "chinese": "補習",
    "level": "B2",
    "pinyin": "bŭxí",
    "part_of_speech": "V-sep",
    "meaning": "bổ túc"
  },
  {
    "chinese": "補助",
    "level": "B2",
    "pinyin": "bŭzhù",
    "part_of_speech": "N",
    "meaning": "trợ cấp"
  },
  {
    "chinese": "補助",
    "level": "B2",
    "pinyin": "bŭzhù",
    "part_of_speech": "V",
    "meaning": "giúp đỡ"
  },
  {
    "chinese": "步",
    "level": "B2",
    "pinyin": "bù",
    "part_of_speech": "M",
    "meaning": "bước chân"
  },
  {
    "chinese": "不大",
    "level": "B2",
    "pinyin": "bùdà",
    "part_of_speech": "Adv",
    "meaning": "vừa phải"
  },
  {
    "chinese": "不安",
    "level": "B2",
    "pinyin": "bùān",
    "part_of_speech": "Vs",
    "meaning": "bất an, bất ổn"
  },
  {
    "chinese": "不成",
    "level": "B2",
    "pinyin": "bùchéng",
    "part_of_speech": "Vs-pred",
    "meaning": "không được phép"
  },
  {
    "chinese": "不當",
    "level": "B2",
    "pinyin": "bùdàng",
    "part_of_speech": "Vs",
    "meaning": "không thích đáng"
  },
  {
    "chinese": "不到",
    "level": "B2",
    "pinyin": "bùdào",
    "part_of_speech": "Vst",
    "meaning": "không đến, không xuất hiện"
  },
  {
    "chinese": "不得已",
    "level": "B2",
    "pinyin": "bùdéyĭ",
    "part_of_speech": "Vs",
    "meaning": "bất đắc dĩ"
  },
  {
    "chinese": "不敢當",
    "level": "B2",
    "pinyin": "bùgăndāng",
    "part_of_speech": "Vs",
    "meaning": "không dám"
  },
  {
    "chinese": "不顧",
    "level": "B2",
    "pinyin": "bùgù",
    "part_of_speech": "Vst",
    "meaning": "không quan tâm"
  },
  {
    "chinese": "不過",
    "level": "B2",
    "pinyin": "bùguò",
    "part_of_speech": "Adv",
    "meaning": "cực kỳ, hết mức"
  },
  {
    "chinese": "不見得",
    "level": "B2",
    "pinyin": "bùjiànde",
    "part_of_speech": "Adv",
    "meaning": "chưa chắc"
  },
  {
    "chinese": "不僅",
    "level": "B2",
    "pinyin": "bùjĭn",
    "part_of_speech": "Conj",
    "meaning": "không chỉ"
  },
  {
    "chinese": "不良",
    "level": "B2",
    "pinyin": "bùliáng",
    "part_of_speech": "Vs",
    "meaning": "không tốt"
  },
  {
    "chinese": "不平",
    "level": "B2",
    "pinyin": "bùpíng",
    "part_of_speech": "Vs",
    "meaning": "không công bằng"
  },
  {
    "chinese": "不然",
    "level": "B2",
    "pinyin": "bùrán",
    "part_of_speech": "Conj",
    "meaning": "chi bằng"
  },
  {
    "chinese": "不如",
    "level": "B2",
    "pinyin": "bùrú",
    "part_of_speech": "Vst",
    "meaning": "không bằng, kém hơn"
  },
  {
    "chinese": "不許",
    "level": "B2",
    "pinyin": "bùxŭ",
    "part_of_speech": "Adv",
    "meaning": "không được phép"
  },
  {
    "chinese": "不宜",
    "level": "B2",
    "pinyin": "bùyí",
    "part_of_speech": "Vs",
    "meaning": "không thích hợp"
  },
  {
    "chinese": "不由得",
    "level": "B2",
    "pinyin": "bùyóude",
    "part_of_speech": "Adv",
    "meaning": "đành phải"
  },
  {
    "chinese": "不止",
    "level": "B2",
    "pinyin": "bùzhĭ",
    "part_of_speech": "Vs-pred",
    "meaning": "không dứt, không ngớt"
  },
  {
    "chinese": "部隊",
    "level": "B2",
    "pinyin": "bùduì",
    "part_of_speech": "N",
    "meaning": "bộ đội"
  },
  {
    "chinese": "部長",
    "level": "B2",
    "pinyin": "bùzhăng",
    "part_of_speech": "N",
    "meaning": "bộ trưởng"
  },
  {
    "chinese": "布/佈告",
    "level": "B2",
    "pinyin": "bùgào",
    "part_of_speech": "N",
    "meaning": "bản thông báo"
  },
  {
    "chinese": "布/佈告欄",
    "level": "B2",
    "pinyin": "bùgàolán",
    "part_of_speech": "N",
    "meaning": "bảng thông báo"
  },
  {
    "chinese": "財產",
    "level": "B2",
    "pinyin": "cáichăn",
    "part_of_speech": "N",
    "meaning": "tài sản"
  },
  {
    "chinese": "財富",
    "level": "B2",
    "pinyin": "cáifù",
    "part_of_speech": "N",
    "meaning": "của cải"
  },
  {
    "chinese": "才能",
    "level": "B2",
    "pinyin": "cáinéng",
    "part_of_speech": "N",
    "meaning": "tài năng"
  },
  {
    "chinese": "裁判",
    "level": "B2",
    "pinyin": "cáipàn",
    "part_of_speech": "N",
    "meaning": "phán xử, xét xử"
  },
  {
    "chinese": "裁員",
    "level": "B2",
    "pinyin": "cáiyuán",
    "part_of_speech": "Vpt",
    "meaning": "giảm biên chế"
  },
  {
    "chinese": "踩",
    "level": "B2",
    "pinyin": "căi",
    "part_of_speech": "V",
    "meaning": "giẫm, đạp"
  },
  {
    "chinese": "採",
    "level": "B2",
    "pinyin": "căi",
    "part_of_speech": "V",
    "meaning": "hái, ngắt"
  },
  {
    "chinese": "採購",
    "level": "B2",
    "pinyin": "căigòu",
    "part_of_speech": "V",
    "meaning": "chọn mua, mua sắm"
  },
  {
    "chinese": "彩色",
    "level": "B2",
    "pinyin": "căisè",
    "part_of_speech": "Vs-attr",
    "meaning": "màu sắc"
  },
  {
    "chinese": "參與",
    "level": "B2",
    "pinyin": "cānyù",
    "part_of_speech": "V",
    "meaning": "tham dự"
  },
  {
    "chinese": "蠶",
    "level": "B2",
    "pinyin": "cán",
    "part_of_speech": "N",
    "meaning": "tằm"
  },
  {
    "chinese": "慚愧",
    "level": "B2",
    "pinyin": "cánkuì",
    "part_of_speech": "Vs",
    "meaning": "xấu hổ, hổ thẹn"
  },
  {
    "chinese": "慘",
    "level": "B2",
    "pinyin": "căn",
    "part_of_speech": "Vs",
    "meaning": "bi thảm"
  },
  {
    "chinese": "倉庫",
    "level": "B2",
    "pinyin": "cāngkù",
    "part_of_speech": "N",
    "meaning": "kho, nhà kho"
  },
  {
    "chinese": "藏",
    "level": "B2",
    "pinyin": "cáng",
    "part_of_speech": "V",
    "meaning": "giấu, trốn"
  },
  {
    "chinese": "操心",
    "level": "B2",
    "pinyin": "cāoxīn",
    "part_of_speech": "Vs",
    "meaning": "bận tâm, lo nghĩ"
  },
  {
    "chinese": "操作",
    "level": "B2",
    "pinyin": "cāozuò",
    "part_of_speech": "V",
    "meaning": "thao tác"
  },
  {
    "chinese": "冊",
    "level": "B2",
    "pinyin": "cè",
    "part_of_speech": "M",
    "meaning": "sổ, quyển"
  },
  {
    "chinese": "策略",
    "level": "B2",
    "pinyin": "cèlüè",
    "part_of_speech": "N",
    "meaning": "sách lược"
  },
  {
    "chinese": "測量",
    "level": "B2",
    "pinyin": "cèliáng",
    "part_of_speech": "V",
    "meaning": "đo lường"
  },
  {
    "chinese": "測試",
    "level": "B2",
    "pinyin": "cèshì",
    "part_of_speech": "V",
    "meaning": "kiểm tra"
  },
  {
    "chinese": "測驗",
    "level": "B2",
    "pinyin": "cèyàn",
    "part_of_speech": "N",
    "meaning": "kiểm tra, sát hạch"
  },
  {
    "chinese": "測驗",
    "level": "B2",
    "pinyin": "cèyàn",
    "part_of_speech": "V",
    "meaning": "kiểm nghiệm, đo lường"
  },
  {
    "chinese": "差",
    "level": "B2",
    "pinyin": "chā",
    "part_of_speech": "N",
    "meaning": "so le"
  },
  {
    "chinese": "差錯",
    "level": "B2",
    "pinyin": "chācuò",
    "part_of_speech": "N",
    "meaning": "sai lầm, nhầm lẫn"
  },
  {
    "chinese": "差距",
    "level": "B2",
    "pinyin": "chājù",
    "part_of_speech": "N",
    "meaning": "chênh lệch, khoảng cách"
  },
  {
    "chinese": "插",
    "level": "B2",
    "pinyin": "chā",
    "part_of_speech": "V",
    "meaning": "cắm vào, chọc vào"
  },
  {
    "chinese": "插花",
    "level": "B2",
    "pinyin": "chāhuā",
    "part_of_speech": "Vi",
    "meaning": "cắm hoa, bó hoa"
  },
  {
    "chinese": "插圖",
    "level": "B2",
    "pinyin": "chātú",
    "part_of_speech": "N",
    "meaning": "tranh minh họa"
  },
  {
    "chinese": "茶館/茶館兒",
    "level": "B2",
    "pinyin": "cháguăn/cháguănr",
    "part_of_speech": "N",
    "meaning": "quán trà"
  },
  {
    "chinese": "茶會",
    "level": "B2",
    "pinyin": "cháhuì",
    "part_of_speech": "N",
    "meaning": "tiệc trà"
  },
  {
    "chinese": "茶葉",
    "level": "B2",
    "pinyin": "cháyè",
    "part_of_speech": "N",
    "meaning": "lá trà"
  },
  {
    "chinese": "拆",
    "level": "B2",
    "pinyin": "chāi",
    "part_of_speech": "V",
    "meaning": "mở ra, dỡ ra"
  },
  {
    "chinese": "產",
    "level": "B2",
    "pinyin": "chăn",
    "part_of_speech": "V",
    "meaning": "đẻ, sinh sản"
  },
  {
    "chinese": "產量",
    "level": "B2",
    "pinyin": "chănliàng",
    "part_of_speech": "N",
    "meaning": "sản lượng"
  },
  {
    "chinese": "產業",
    "level": "B2",
    "pinyin": "chănyè",
    "part_of_speech": "N",
    "meaning": "sản nghiệp"
  },
  {
    "chinese": "嘗/嚐試",
    "level": "B2",
    "pinyin": "chángshì",
    "part_of_speech": "N",
    "meaning": "thử nghiệm"
  },
  {
    "chinese": "常識",
    "level": "B2",
    "pinyin": "chángshì",
    "part_of_speech": "N",
    "meaning": "thường thức"
  },
  {
    "chinese": "長處",
    "level": "B2",
    "pinyin": "chángchù",
    "part_of_speech": "N",
    "meaning": "sở trường"
  },
  {
    "chinese": "長度",
    "level": "B2",
    "pinyin": "chángdù",
    "part_of_speech": "N",
    "meaning": "độ dài"
  },
  {
    "chinese": "長方形",
    "level": "B2",
    "pinyin": "chángfāngxíng",
    "part_of_speech": "N",
    "meaning": "hình chữ nhật"
  },
  {
    "chinese": "長久",
    "level": "B2",
    "pinyin": "chángjiŭ",
    "part_of_speech": "Vs",
    "meaning": "lâu dài"
  },
  {
    "chinese": "長途",
    "level": "B2",
    "pinyin": "chángtú",
    "part_of_speech": "Vs-attr",
    "meaning": "đường dài"
  },
  {
    "chinese": "場",
    "level": "B2",
    "pinyin": "chăng",
    "part_of_speech": "M",
    "meaning": "sân phơi"
  },
  {
    "chinese": "場地",
    "level": "B2",
    "pinyin": "chăngdì",
    "part_of_speech": "N",
    "meaning": "sân bãi"
  },
  {
    "chinese": "場合",
    "level": "B2",
    "pinyin": "chănghé",
    "part_of_speech": "N",
    "meaning": "trường hợp, nơi"
  },
  {
    "chinese": "場所",
    "level": "B2",
    "pinyin": "chăngsuŏ",
    "part_of_speech": "N",
    "meaning": "nơi chốn"
  },
  {
    "chinese": "廠商",
    "level": "B2",
    "pinyin": "chăngshāng",
    "part_of_speech": "N",
    "meaning": "nhà máy"
  },
  {
    "chinese": "抄",
    "level": "B2",
    "pinyin": "chāo",
    "part_of_speech": "V",
    "meaning": "sao chép"
  },
  {
    "chinese": "鈔票",
    "level": "B2",
    "pinyin": "chāopiào",
    "part_of_speech": "N",
    "meaning": "tiền giấy, giấy bạc"
  },
  {
    "chinese": "超出",
    "level": "B2",
    "pinyin": "chāochū",
    "part_of_speech": "Vpt",
    "meaning": "vượt qua, vượt khỏi"
  },
  {
    "chinese": "超人",
    "level": "B2",
    "pinyin": "chāorén",
    "part_of_speech": "N",
    "meaning": "siêu nhân"
  },
  {
    "chinese": "超越",
    "level": "B2",
    "pinyin": "chāoyuè",
    "part_of_speech": "V",
    "meaning": "vượt quá, hơn hẳn"
  },
  {
    "chinese": "超重",
    "level": "B2",
    "pinyin": "chāozhòng",
    "part_of_speech": "Vp",
    "meaning": "siêu trọng, quá tải"
  },
  {
    "chinese": "朝",
    "level": "B2",
    "pinyin": "cháo",
    "part_of_speech": "Prep",
    "meaning": "triều, triều đại"
  },
  {
    "chinese": "潮流",
    "level": "B2",
    "pinyin": "cháoliú",
    "part_of_speech": "N",
    "meaning": "thủy triều, trào lưu"
  },
  {
    "chinese": "潮溼/濕",
    "level": "B2",
    "pinyin": "cháoshī",
    "part_of_speech": "Vs",
    "meaning": "ẩm ướt"
  },
  {
    "chinese": "吵鬧",
    "level": "B2",
    "pinyin": "chăonào",
    "part_of_speech": "Vi",
    "meaning": "tranh cãi ầm ĩ"
  },
  {
    "chinese": "車票",
    "level": "B2",
    "pinyin": "chēpiào",
    "part_of_speech": "N",
    "meaning": "vé xe"
  },
  {
    "chinese": "扯",
    "level": "B2",
    "pinyin": "chě",
    "part_of_speech": "V",
    "meaning": "kéo, lôi, căng"
  },
  {
    "chinese": "澈底",
    "level": "B2",
    "pinyin": "chèdĭ",
    "part_of_speech": "Vs",
    "meaning": "triệt để, đến cùng"
  },
  {
    "chinese": "沉",
    "level": "B2",
    "pinyin": "chén",
    "part_of_speech": "Vp",
    "meaning": "chìm, rơi xuống"
  },
  {
    "chinese": "陳列",
    "level": "B2",
    "pinyin": "chénliè",
    "part_of_speech": "V",
    "meaning": "trưng bày, triển lãm"
  },
  {
    "chinese": "稱",
    "level": "B2",
    "pinyin": "chēng",
    "part_of_speech": "V",
    "meaning": "gọi, gọi là"
  },
  {
    "chinese": "撐",
    "level": "B2",
    "pinyin": "chēng",
    "part_of_speech": "V",
    "meaning": "chống, chống đỡ"
  },
  {
    "chinese": "成",
    "level": "B2",
    "pinyin": "chéng",
    "part_of_speech": "M",
    "meaning": "Thành (đơn vị đo lường 1/10), phần"
  },
  {
    "chinese": "成",
    "level": "B2",
    "pinyin": "chéng",
    "part_of_speech": "Vpt",
    "meaning": "hoàn thành"
  },
  {
    "chinese": "成本",
    "level": "B2",
    "pinyin": "chéngběn",
    "part_of_speech": "N",
    "meaning": "giá thành"
  },
  {
    "chinese": "成分/份",
    "level": "B2",
    "pinyin": "chéngfèn",
    "part_of_speech": "N",
    "meaning": "thành phần"
  },
  {
    "chinese": "成交",
    "level": "B2",
    "pinyin": "chéngjiāo",
    "part_of_speech": "Vp",
    "meaning": "thống nhất mua bán"
  },
  {
    "chinese": "成立",
    "level": "B2",
    "pinyin": "chénglì",
    "part_of_speech": "Vpt",
    "meaning": "thành lập, lập"
  },
  {
    "chinese": "成天",
    "level": "B2",
    "pinyin": "chéngtiān",
    "part_of_speech": "Adv",
    "meaning": "suốt ngày, cả ngày"
  },
  {
    "chinese": "成為",
    "level": "B2",
    "pinyin": "chéngwéi",
    "part_of_speech": "Vpt",
    "meaning": "trở thành. biến thành"
  },
  {
    "chinese": "成語",
    "level": "B2",
    "pinyin": "chéngyŭ",
    "part_of_speech": "N",
    "meaning": "thành ngữ"
  },
  {
    "chinese": "乘",
    "level": "B2",
    "pinyin": "chéng",
    "part_of_speech": "V",
    "meaning": "đáp, đi"
  },
  {
    "chinese": "乘客",
    "level": "B2",
    "pinyin": "chéngkè",
    "part_of_speech": "N",
    "meaning": "hành khách"
  },
  {
    "chinese": "誠懇",
    "level": "B2",
    "pinyin": "chéngkěn",
    "part_of_speech": "Vs",
    "meaning": "thành khẩn, chân thành"
  },
  {
    "chinese": "誠意",
    "level": "B2",
    "pinyin": "chéngyì",
    "part_of_speech": "N",
    "meaning": "thành ý, lòng thành"
  },
  {
    "chinese": "呈現",
    "level": "B2",
    "pinyin": "chéngxiàn",
    "part_of_speech": "Vpt",
    "meaning": "lộ ra, phơi bày ra"
  },
  {
    "chinese": "程序",
    "level": "B2",
    "pinyin": "chéngxù",
    "part_of_speech": "N",
    "meaning": "trình tự"
  },
  {
    "chinese": "吃虧",
    "level": "B2",
    "pinyin": "chīkuī",
    "part_of_speech": "Vs",
    "meaning": "chịu thiệt"
  },
  {
    "chinese": "遲",
    "level": "B2",
    "pinyin": "chí",
    "part_of_speech": "Vp",
    "meaning": "chậm, trể"
  },
  {
    "chinese": "遲早",
    "level": "B2",
    "pinyin": "chízăo",
    "part_of_speech": "Adv",
    "meaning": "không sớm thì muộn"
  },
  {
    "chinese": "尺寸",
    "level": "B2",
    "pinyin": "chĭcùn",
    "part_of_speech": "N",
    "meaning": "kích cỡ, kích thước"
  },
  {
    "chinese": "翅膀",
    "level": "B2",
    "pinyin": "chìbăng",
    "part_of_speech": "N",
    "meaning": "cánh (chim, côn trùng)"
  },
  {
    "chinese": "沖",
    "level": "B2",
    "pinyin": "chōng",
    "part_of_speech": "V",
    "meaning": "xông lên"
  },
  {
    "chinese": "充分/份",
    "level": "B2",
    "pinyin": "chōngfèn",
    "part_of_speech": "Vs",
    "meaning": "đầy đủ, trọn vẹn"
  },
  {
    "chinese": "充滿",
    "level": "B2",
    "pinyin": "chōngmăn",
    "part_of_speech": "Vpt",
    "meaning": "lấp đầy"
  },
  {
    "chinese": "充足",
    "level": "B2",
    "pinyin": "chōngzú",
    "part_of_speech": "Vs",
    "meaning": "đầy đủ"
  },
  {
    "chinese": "重",
    "level": "B2",
    "pinyin": "chóng",
    "part_of_speech": "Adv",
    "meaning": "nặng"
  },
  {
    "chinese": "崇拜",
    "level": "B2",
    "pinyin": "chóngbài",
    "part_of_speech": "Vst",
    "meaning": "tôn thờ, sùng bái"
  },
  {
    "chinese": "崇高",
    "level": "B2",
    "pinyin": "chónggāo",
    "part_of_speech": "Vs",
    "meaning": "cao thượng, cao quý"
  },
  {
    "chinese": "抽屜",
    "level": "B2",
    "pinyin": "chōuti",
    "part_of_speech": "N",
    "meaning": "ngắn kéo, két"
  },
  {
    "chinese": "愁",
    "level": "B2",
    "pinyin": "chóu",
    "part_of_speech": "Vs",
    "meaning": "ưu sầu, lo âu"
  },
  {
    "chinese": "出",
    "level": "B2",
    "pinyin": "chū",
    "part_of_speech": "Vst",
    "meaning": "ra, xuất, đến"
  },
  {
    "chinese": "出產",
    "level": "B2",
    "pinyin": "chūchăn",
    "part_of_speech": "Vst",
    "meaning": "xuất bản"
  },
  {
    "chinese": "出境",
    "level": "B2",
    "pinyin": "chūjìng",
    "part_of_speech": "Vp",
    "meaning": "xuất cảnh"
  },
  {
    "chinese": "出口",
    "level": "B2",
    "pinyin": "chūkŏu",
    "part_of_speech": "V",
    "meaning": "mở miệng, nói"
  },
  {
    "chinese": "出色",
    "level": "B2",
    "pinyin": "chūsè",
    "part_of_speech": "Vs",
    "meaning": "xuất sắc"
  },
  {
    "chinese": "出身",
    "level": "B2",
    "pinyin": "chūshēn",
    "part_of_speech": "Vpt",
    "meaning": "xuất thân"
  },
  {
    "chinese": "出事",
    "level": "B2",
    "pinyin": "chūshì",
    "part_of_speech": "Vp-sep",
    "meaning": "xảy ra sự cố"
  },
  {
    "chinese": "出售",
    "level": "B2",
    "pinyin": "chūshòu",
    "part_of_speech": "V",
    "meaning": "bán ra"
  },
  {
    "chinese": "出席",
    "level": "B2",
    "pinyin": "chūxí",
    "part_of_speech": "V",
    "meaning": "dự họp, tham dự hội nghị"
  },
  {
    "chinese": "出院",
    "level": "B2",
    "pinyin": "chūyuàn",
    "part_of_speech": "Vi",
    "meaning": "ra viện, xuất viện"
  },
  {
    "chinese": "初",
    "level": "B2",
    "pinyin": "chū",
    "part_of_speech": "Adv",
    "meaning": "đầu, thứ nhất"
  },
  {
    "chinese": "初步",
    "level": "B2",
    "pinyin": "chūbù",
    "part_of_speech": "Adv",
    "meaning": "bước đầu"
  },
  {
    "chinese": "初步",
    "level": "B2",
    "pinyin": "chūbù",
    "part_of_speech": "Vs-attr",
    "meaning": "mở đầu, khởi đầu"
  },
  {
    "chinese": "初級",
    "level": "B2",
    "pinyin": "chūjí",
    "part_of_speech": "Vs",
    "meaning": "sơ cấp, sơ bộ"
  },
  {
    "chinese": "除",
    "level": "B2",
    "pinyin": "chú",
    "part_of_speech": "Prep",
    "meaning": "ngoại lệ, không kể"
  },
  {
    "chinese": "除",
    "level": "B2",
    "pinyin": "chú",
    "part_of_speech": "V",
    "meaning": "trừ, loại ra"
  },
  {
    "chinese": "除",
    "level": "B2",
    "pinyin": "chú",
    "part_of_speech": "Vst",
    "meaning": "chia, phép chia"
  },
  {
    "chinese": "除非",
    "level": "B2",
    "pinyin": "chúfēi",
    "part_of_speech": "Conj",
    "meaning": "trừ phi"
  },
  {
    "chinese": "儲存",
    "level": "B2",
    "pinyin": "chúcún",
    "part_of_speech": "V",
    "meaning": "dự trữ, để dành"
  },
  {
    "chinese": "儲蓄",
    "level": "B2",
    "pinyin": "chúxù",
    "part_of_speech": "Vi",
    "meaning": "để dành, dành dụm"
  },
  {
    "chinese": "處",
    "level": "B2",
    "pinyin": "chŭ",
    "part_of_speech": "M",
    "meaning": "nơi, chốn"
  },
  {
    "chinese": "處罰",
    "level": "B2",
    "pinyin": "chŭfá",
    "part_of_speech": "V",
    "meaning": "xử phạt"
  },
  {
    "chinese": "處",
    "level": "B2",
    "pinyin": "chù",
    "part_of_speech": "N",
    "meaning": "Nơi, chỗ"
  },
  {
    "chinese": "處處",
    "level": "B2",
    "pinyin": "chùchù",
    "part_of_speech": "Adv",
    "meaning": "khắp nơi"
  },
  {
    "chinese": "傳",
    "level": "B2",
    "pinyin": "chuán",
    "part_of_speech": "V",
    "meaning": "truyện ký"
  },
  {
    "chinese": "傳播",
    "level": "B2",
    "pinyin": "chuánbò",
    "part_of_speech": "V",
    "meaning": "truyền bá"
  },
  {
    "chinese": "傳達",
    "level": "B2",
    "pinyin": "chuándá",
    "part_of_speech": "V",
    "meaning": "truyền đạt"
  },
  {
    "chinese": "傳單",
    "level": "B2",
    "pinyin": "chuándān",
    "part_of_speech": "N",
    "meaning": "truyền đơn"
  },
  {
    "chinese": "傳染",
    "level": "B2",
    "pinyin": "chuánrăn",
    "part_of_speech": "V",
    "meaning": "truyền nhiễm"
  },
  {
    "chinese": "傳說",
    "level": "B2",
    "pinyin": "chuánshuō",
    "part_of_speech": "N",
    "meaning": "truyền thuyết"
  },
  {
    "chinese": "傳說",
    "level": "B2",
    "pinyin": "chuánshuō",
    "part_of_speech": "V",
    "meaning": "truyền lại, thuật lại"
  },
  {
    "chinese": "傳送",
    "level": "B2",
    "pinyin": "chuánsòng",
    "part_of_speech": "V",
    "meaning": "chuyên chở"
  },
  {
    "chinese": "傳統",
    "level": "B2",
    "pinyin": "chuántŏng",
    "part_of_speech": "N",
    "meaning": "truyền thống"
  },
  {
    "chinese": "傳真",
    "level": "B2",
    "pinyin": "chuánzhēn",
    "part_of_speech": "V",
    "meaning": "fax"
  },
  {
    "chinese": "窗口",
    "level": "B2",
    "pinyin": "chuāngkŏu",
    "part_of_speech": "N",
    "meaning": "cửa bán vé, cửa chắn"
  },
  {
    "chinese": "床",
    "level": "B2",
    "pinyin": "chuáng",
    "part_of_speech": "M",
    "meaning": "giường"
  },
  {
    "chinese": "床單",
    "level": "B2",
    "pinyin": "chuángdān",
    "part_of_speech": "N",
    "meaning": "khăn trải giường"
  },
  {
    "chinese": "幢",
    "level": "B2",
    "pinyin": "chuáng",
    "part_of_speech": "M",
    "meaning": "căn, tòa, ngôi (nhà)"
  },
  {
    "chinese": "闖",
    "level": "B2",
    "pinyin": "chuăng",
    "part_of_speech": "V",
    "meaning": "xông, xông xáo"
  },
  {
    "chinese": "創作",
    "level": "B2",
    "pinyin": "chuàngzuò",
    "part_of_speech": "N",
    "meaning": "sáng tác, soạn thảo"
  },
  {
    "chinese": "春季",
    "level": "B2",
    "pinyin": "chūnjì",
    "part_of_speech": "N",
    "meaning": "mùa xuân"
  },
  {
    "chinese": "春假",
    "level": "B2",
    "pinyin": "chūnjià",
    "part_of_speech": "N",
    "meaning": "nghỉ xuân, nghỉ tết"
  },
  {
    "chinese": "純",
    "level": "B2",
    "pinyin": "chún",
    "part_of_speech": "Vs",
    "meaning": "thuần chủng"
  },
  {
    "chinese": "磁帶",
    "level": "B2",
    "pinyin": "cídài",
    "part_of_speech": "N",
    "meaning": "băng từ, băng nhạc"
  },
  {
    "chinese": "詞典",
    "level": "B2",
    "pinyin": "cídiăn",
    "part_of_speech": "N",
    "meaning": "từ điển"
  },
  {
    "chinese": "詞彙",
    "level": "B2",
    "pinyin": "cíhuì",
    "part_of_speech": "N",
    "meaning": "từ ngữ, từ vựng"
  },
  {
    "chinese": "辭職",
    "level": "B2",
    "pinyin": "cízhí",
    "part_of_speech": "Vi",
    "meaning": "từ chức"
  },
  {
    "chinese": "此外",
    "level": "B2",
    "pinyin": "cĭwài",
    "part_of_speech": "Conj",
    "meaning": "ngoài ra"
  },
  {
    "chinese": "刺",
    "level": "B2",
    "pinyin": "cì",
    "part_of_speech": "V",
    "meaning": "xoẹt (từ tượng thanh)"
  },
  {
    "chinese": "刺激",
    "level": "B2",
    "pinyin": "cìjī",
    "part_of_speech": "V",
    "meaning": "kích thích, kích động"
  },
  {
    "chinese": "次數",
    "level": "B2",
    "pinyin": "cìshù",
    "part_of_speech": "N",
    "meaning": "số lần"
  },
  {
    "chinese": "從",
    "level": "B2",
    "pinyin": "cóng",
    "part_of_speech": "Adv",
    "meaning": "thong dong"
  },
  {
    "chinese": "從此",
    "level": "B2",
    "pinyin": "cóngcĭ",
    "part_of_speech": "Adv",
    "meaning": "từ đó"
  },
  {
    "chinese": "從沒",
    "level": "B2",
    "pinyin": "cóngméi",
    "part_of_speech": "Adv",
    "meaning": "chưa bao giờ"
  },
  {
    "chinese": "從事",
    "level": "B2",
    "pinyin": "cóngshì",
    "part_of_speech": "Vst",
    "meaning": "tham gia, dấn thân vào"
  },
  {
    "chinese": "湊",
    "level": "B2",
    "pinyin": "còu",
    "part_of_speech": "V",
    "meaning": "gom góp, thu thập"
  },
  {
    "chinese": "粗",
    "level": "B2",
    "pinyin": "cū",
    "part_of_speech": "Vs",
    "meaning": "thô, nhám"
  },
  {
    "chinese": "粗心",
    "level": "B2",
    "pinyin": "cūxīn",
    "part_of_speech": "Vs",
    "meaning": "sơ ý, bất cẩn"
  },
  {
    "chinese": "促進",
    "level": "B2",
    "pinyin": "cùjìn",
    "part_of_speech": "V",
    "meaning": "xúc tiến, đẩy mạnh"
  },
  {
    "chinese": "催",
    "level": "B2",
    "pinyin": "cuī",
    "part_of_speech": "V",
    "meaning": "hối thúc, thúc giục"
  },
  {
    "chinese": "存款",
    "level": "B2",
    "pinyin": "cúnkuăn",
    "part_of_speech": "N",
    "meaning": "tiền tiết kiệm"
  },
  {
    "chinese": "搓",
    "level": "B2",
    "pinyin": "cuō",
    "part_of_speech": "V",
    "meaning": "xoa, xoắn, vặn"
  },
  {
    "chinese": "錯過",
    "level": "B2",
    "pinyin": "cuòguò",
    "part_of_speech": "Vpt",
    "meaning": "lỡ mất"
  },
  {
    "chinese": "錯字",
    "level": "B2",
    "pinyin": "cuòzì",
    "part_of_speech": "N",
    "meaning": "chữ sai, lỗi in"
  },
  {
    "chinese": "措施",
    "level": "B2",
    "pinyin": "cuòshī",
    "part_of_speech": "N",
    "meaning": "biện pháp"
  },
  {
    "chinese": "答",
    "level": "B2",
    "pinyin": "dá",
    "part_of_speech": "V",
    "meaning": "trả lời, đáp"
  },
  {
    "chinese": "答案",
    "level": "B2",
    "pinyin": "dáàn",
    "part_of_speech": "N",
    "meaning": "đáp án, câu trả lời"
  },
  {
    "chinese": "達到",
    "level": "B2",
    "pinyin": "dádào",
    "part_of_speech": "Vpt",
    "meaning": "đạt được, đạt đến"
  },
  {
    "chinese": "打",
    "level": "B2",
    "pinyin": "dă",
    "part_of_speech": "M",
    "meaning": "tá, lố"
  },
  {
    "chinese": "打扮",
    "level": "B2",
    "pinyin": "dăbàn",
    "part_of_speech": "Vi",
    "meaning": "trang điểm"
  },
  {
    "chinese": "打包",
    "level": "B2",
    "pinyin": "dăbāo",
    "part_of_speech": "V",
    "meaning": "đóng gói, mở gói"
  },
  {
    "chinese": "打斷",
    "level": "B2",
    "pinyin": "dăduàn",
    "part_of_speech": "Vpt",
    "meaning": "cắt ngang, ngắt lời"
  },
  {
    "chinese": "打擾",
    "level": "B2",
    "pinyin": "dărăo",
    "part_of_speech": "V",
    "meaning": "quấy rối, làm phiền"
  },
  {
    "chinese": "打算",
    "level": "B2",
    "pinyin": "dăsuàn",
    "part_of_speech": "N",
    "meaning": "dự định"
  },
  {
    "chinese": "打招呼",
    "level": "B2",
    "pinyin": "dăzhāohū",
    "part_of_speech": "V-sep",
    "meaning": "chào hỏi"
  },
  {
    "chinese": "打針",
    "level": "B2",
    "pinyin": "dăzhēn",
    "part_of_speech": "V-sep",
    "meaning": "chích, tiêm"
  },
  {
    "chinese": "打字",
    "level": "B2",
    "pinyin": "dăzì",
    "part_of_speech": "V-sep",
    "meaning": "đánh chữ"
  },
  {
    "chinese": "大半",
    "level": "B2",
    "pinyin": "dàbàn",
    "part_of_speech": "Det",
    "meaning": "hơn nửa, quá nửa"
  },
  {
    "chinese": "大便",
    "level": "B2",
    "pinyin": "dàbiàn",
    "part_of_speech": "N",
    "meaning": "đi đại tiện"
  },
  {
    "chinese": "大膽",
    "level": "B2",
    "pinyin": "dàdăn",
    "part_of_speech": "Vs",
    "meaning": "dũng cảm"
  },
  {
    "chinese": "大地",
    "level": "B2",
    "pinyin": "dàdì",
    "part_of_speech": "N",
    "meaning": "mặt đất, đất đai"
  },
  {
    "chinese": "大都",
    "level": "B2",
    "pinyin": "dàdōu",
    "part_of_speech": "Adv",
    "meaning": "phần lớn, đa số"
  },
  {
    "chinese": "大哥",
    "level": "B2",
    "pinyin": "dàgē",
    "part_of_speech": "N",
    "meaning": "anh cả"
  },
  {
    "chinese": "大哥大",
    "level": "B2",
    "pinyin": "dàgēdà",
    "part_of_speech": "N",
    "meaning": "điện thoại di động"
  },
  {
    "chinese": "大街",
    "level": "B2",
    "pinyin": "dàjiē",
    "part_of_speech": "N",
    "meaning": "đường phố"
  },
  {
    "chinese": "大力",
    "level": "B2",
    "pinyin": "dàlì",
    "part_of_speech": "Adv",
    "meaning": "ra sức, dốc sức"
  },
  {
    "chinese": "大量",
    "level": "B2",
    "pinyin": "dàliàng",
    "part_of_speech": "Det",
    "meaning": "nhiều, lớn"
  },
  {
    "chinese": "大腦",
    "level": "B2",
    "pinyin": "dànăo",
    "part_of_speech": "N",
    "meaning": "đại não"
  },
  {
    "chinese": "大清早",
    "level": "B2",
    "pinyin": "dàqīngzăo",
    "part_of_speech": "N",
    "meaning": "sáng sớm"
  },
  {
    "chinese": "大嫂",
    "level": "B2",
    "pinyin": "dàsăo",
    "part_of_speech": "N",
    "meaning": "chị dâu cả"
  },
  {
    "chinese": "大腿",
    "level": "B2",
    "pinyin": "dàtuĭ",
    "part_of_speech": "N",
    "meaning": "bắp đùi"
  },
  {
    "chinese": "大型",
    "level": "B2",
    "pinyin": "dàxíng",
    "part_of_speech": "Vs-attr",
    "meaning": "cỡ lớn"
  },
  {
    "chinese": "大意",
    "level": "B2",
    "pinyin": "dàyì",
    "part_of_speech": "Vs",
    "meaning": "không chú ý, sơ ý"
  },
  {
    "chinese": "大有",
    "level": "B2",
    "pinyin": "dàyŏu",
    "part_of_speech": "Vst",
    "meaning": "được mùa, bội thu"
  },
  {
    "chinese": "大致",
    "level": "B2",
    "pinyin": "dàzhì",
    "part_of_speech": "Adv",
    "meaning": "khoảng chừng, đại khái"
  },
  {
    "chinese": "大眾",
    "level": "B2",
    "pinyin": "dàzhòng",
    "part_of_speech": "N",
    "meaning": "quần chúng, dân chúng"
  },
  {
    "chinese": "大自然",
    "level": "B2",
    "pinyin": "dàzìrán",
    "part_of_speech": "N",
    "meaning": "thiên nhiên"
  },
  {
    "chinese": "待會/待會兒",
    "level": "B2",
    "pinyin": "dāihuì",
    "part_of_speech": "Adv",
    "meaning": "trong chốc lát, sau này"
  },
  {
    "chinese": "待",
    "level": "B2",
    "pinyin": "dài",
    "part_of_speech": "V",
    "meaning": "dừng lại, nán lại"
  },
  {
    "chinese": "代",
    "level": "B2",
    "pinyin": "dài",
    "part_of_speech": "N",
    "meaning": "thời đại"
  },
  {
    "chinese": "代",
    "level": "B2",
    "pinyin": "dài",
    "part_of_speech": "V",
    "meaning": "thay thế, dùm"
  },
  {
    "chinese": "代表",
    "level": "B2",
    "pinyin": "dàibiăo",
    "part_of_speech": "Vs",
    "meaning": "đại diện"
  },
  {
    "chinese": "代溝",
    "level": "B2",
    "pinyin": "dàigōu",
    "part_of_speech": "N",
    "meaning": "sự khác biệt"
  },
  {
    "chinese": "代價",
    "level": "B2",
    "pinyin": "dàijià",
    "part_of_speech": "N",
    "meaning": "tiền mua, giá tiền"
  },
  {
    "chinese": "代理",
    "level": "B2",
    "pinyin": "dàilĭ",
    "part_of_speech": "V",
    "meaning": "thay mặt"
  },
  {
    "chinese": "帶動",
    "level": "B2",
    "pinyin": "dàidòng",
    "part_of_speech": "V",
    "meaning": "kéo theo, lôi kéo"
  },
  {
    "chinese": "帶路",
    "level": "B2",
    "pinyin": "dàilù",
    "part_of_speech": "Vi",
    "meaning": "dẫn đường"
  },
  {
    "chinese": "帶子",
    "level": "B2",
    "pinyin": "dàizi",
    "part_of_speech": "N",
    "meaning": "thắt lưng"
  },
  {
    "chinese": "大夫",
    "level": "B2",
    "pinyin": "dàifu",
    "part_of_speech": "N",
    "meaning": "bác sĩ"
  },
  {
    "chinese": "貸款",
    "level": "B2",
    "pinyin": "dàikuăn",
    "part_of_speech": "N",
    "meaning": "khoản vay"
  },
  {
    "chinese": "貸款",
    "level": "B2",
    "pinyin": "dàikuăn",
    "part_of_speech": "V-sep",
    "meaning": "cho vay"
  },
  {
    "chinese": "待遇",
    "level": "B2",
    "pinyin": "dàiyù",
    "part_of_speech": "N",
    "meaning": "đối xử"
  },
  {
    "chinese": "單",
    "level": "B2",
    "pinyin": "dān",
    "part_of_speech": "Adv",
    "meaning": "đơn"
  },
  {
    "chinese": "單調",
    "level": "B2",
    "pinyin": "dāndiào",
    "part_of_speech": "Vs",
    "meaning": "đơn điệu"
  },
  {
    "chinese": "單位",
    "level": "B2",
    "pinyin": "dānwèi",
    "part_of_speech": "N",
    "meaning": "đơn vị"
  },
  {
    "chinese": "單子",
    "level": "B2",
    "pinyin": "dānzi",
    "part_of_speech": "N",
    "meaning": "tờ khai, tờ đơn"
  },
  {
    "chinese": "擔保",
    "level": "B2",
    "pinyin": "dānbăo",
    "part_of_speech": "V",
    "meaning": "đảm bảo"
  },
  {
    "chinese": "耽誤",
    "level": "B2",
    "pinyin": "dānwù",
    "part_of_speech": "V",
    "meaning": "làm chậm trễ, để lỡ"
  },
  {
    "chinese": "膽量",
    "level": "B2",
    "pinyin": "dănliàng",
    "part_of_speech": "N",
    "meaning": "sự gan dạ"
  },
  {
    "chinese": "膽小",
    "level": "B2",
    "pinyin": "dănxiăo",
    "part_of_speech": "Vs",
    "meaning": "nhát gan"
  },
  {
    "chinese": "蛋白質",
    "level": "B2",
    "pinyin": "dànbáizhí",
    "part_of_speech": "N",
    "meaning": "Chất đạm, Protein"
  },
  {
    "chinese": "誕生",
    "level": "B2",
    "pinyin": "dànshēng",
    "part_of_speech": "Vp",
    "meaning": "sinh ra, ra đời"
  },
  {
    "chinese": "當初",
    "level": "B2",
    "pinyin": "dāngchū",
    "part_of_speech": "N",
    "meaning": "lúc đầu, hồi đó"
  },
  {
    "chinese": "當時",
    "level": "B2",
    "pinyin": "dāngshí",
    "part_of_speech": "N",
    "meaning": "lúc đó, khi đó"
  },
  {
    "chinese": "當選",
    "level": "B2",
    "pinyin": "dāngxuăn",
    "part_of_speech": "Vpt",
    "meaning": "trúng cử"
  },
  {
    "chinese": "當中",
    "level": "B2",
    "pinyin": "dāngzhōng",
    "part_of_speech": "N",
    "meaning": "ở giữa, chính giữa"
  },
  {
    "chinese": "擋",
    "level": "B2",
    "pinyin": "dăng",
    "part_of_speech": "V",
    "meaning": "sắp đặt, thu dọn"
  },
  {
    "chinese": "檔案",
    "level": "B2",
    "pinyin": "dăngàn",
    "part_of_speech": "N",
    "meaning": "hồ sơ, tài liệu"
  },
  {
    "chinese": "當",
    "level": "B2",
    "pinyin": "dàng",
    "part_of_speech": "Vst",
    "meaning": "coi như, cho rằng"
  },
  {
    "chinese": "倒楣",
    "level": "B2",
    "pinyin": "dăoméi",
    "part_of_speech": "Vs",
    "meaning": "gặp xui xẻo"
  },
  {
    "chinese": "導演",
    "level": "B2",
    "pinyin": "dăoyăn",
    "part_of_speech": "V",
    "meaning": "đạo diễn"
  },
  {
    "chinese": "導遊",
    "level": "B2",
    "pinyin": "dăoyóu",
    "part_of_speech": "N",
    "meaning": "hướng dẫn du lịch"
  },
  {
    "chinese": "倒",
    "level": "B2",
    "pinyin": "dào",
    "part_of_speech": "V",
    "meaning": "ngược, đảo ngược lại"
  },
  {
    "chinese": "道",
    "level": "B2",
    "pinyin": "dào",
    "part_of_speech": "M",
    "meaning": "đường"
  },
  {
    "chinese": "道路",
    "level": "B2",
    "pinyin": "dàolù",
    "part_of_speech": "N",
    "meaning": "con đường"
  },
  {
    "chinese": "到達",
    "level": "B2",
    "pinyin": "dàodá",
    "part_of_speech": "Vpt",
    "meaning": "đến, tới"
  },
  {
    "chinese": "得分",
    "level": "B2",
    "pinyin": "défēn",
    "part_of_speech": "Vs-sep",
    "meaning": "được điểm, đạt điểm"
  },
  {
    "chinese": "得獎",
    "level": "B2",
    "pinyin": "déjiăng",
    "part_of_speech": "V-sep",
    "meaning": "đạt giải"
  },
  {
    "chinese": "得了",
    "level": "B2",
    "pinyin": "déle",
    "part_of_speech": "được",
    "meaning": "rồi"
  },
  {
    "chinese": "得罪",
    "level": "B2",
    "pinyin": "dézuì",
    "part_of_speech": "Vpt",
    "meaning": "đắc tội"
  },
  {
    "chinese": "登",
    "level": "B2",
    "pinyin": "dēng",
    "part_of_speech": "V",
    "meaning": "trèo, leo lên"
  },
  {
    "chinese": "登記",
    "level": "B2",
    "pinyin": "dēngjì",
    "part_of_speech": "Vp",
    "meaning": "đăng ký"
  },
  {
    "chinese": "登山",
    "level": "B2",
    "pinyin": "dēngshān",
    "part_of_speech": "V-sep",
    "meaning": "leo núi"
  },
  {
    "chinese": "等不及",
    "level": "B2",
    "pinyin": "děngbují",
    "part_of_speech": "Vi",
    "meaning": "không đợi được"
  },
  {
    "chinese": "等到",
    "level": "B2",
    "pinyin": "děngdào",
    "part_of_speech": "Prep",
    "meaning": "đợi đến lúc"
  },
  {
    "chinese": "等級",
    "level": "B2",
    "pinyin": "děngjí",
    "part_of_speech": "N",
    "meaning": "đẳng cấp, bậc"
  },
  {
    "chinese": "等於",
    "level": "B2",
    "pinyin": "děngyú",
    "part_of_speech": "Vst",
    "meaning": "bằng với"
  },
  {
    "chinese": "凳子",
    "level": "B2",
    "pinyin": "dèngzi",
    "part_of_speech": "N",
    "meaning": "ghế, băng ghế"
  },
  {
    "chinese": "滴",
    "level": "B2",
    "pinyin": "dī",
    "part_of_speech": "M",
    "meaning": "giọt"
  },
  {
    "chinese": "低潮",
    "level": "B2",
    "pinyin": "dīcháo",
    "part_of_speech": "N",
    "meaning": "Lúc sa sút, thủy triều xuống"
  },
  {
    "chinese": "的確",
    "level": "B2",
    "pinyin": "díquè",
    "part_of_speech": "Adv",
    "meaning": "đích thực, quả thực là"
  },
  {
    "chinese": "抵",
    "level": "B2",
    "pinyin": "dĭ",
    "part_of_speech": "V",
    "meaning": "chống đỡ"
  },
  {
    "chinese": "抵抗",
    "level": "B2",
    "pinyin": "dĭkàng",
    "part_of_speech": "V",
    "meaning": "đề kháng, chống cự"
  },
  {
    "chinese": "遞",
    "level": "B2",
    "pinyin": "dì",
    "part_of_speech": "V",
    "meaning": "truyền đạt"
  },
  {
    "chinese": "地面",
    "level": "B2",
    "pinyin": "dìmiàn",
    "part_of_speech": "N",
    "meaning": "mặt đất"
  },
  {
    "chinese": "地毯",
    "level": "B2",
    "pinyin": "dìtăn",
    "part_of_speech": "N",
    "meaning": "thảm trải sàn"
  },
  {
    "chinese": "地下",
    "level": "B2",
    "pinyin": "dìxià",
    "part_of_speech": "Vs-attr",
    "meaning": "ngầm, trong long đất"
  },
  {
    "chinese": "地震",
    "level": "B2",
    "pinyin": "dìzhèn",
    "part_of_speech": "Vp",
    "meaning": "động đất"
  },
  {
    "chinese": "典禮",
    "level": "B2",
    "pinyin": "diănlĭ",
    "part_of_speech": "N",
    "meaning": "lễ lớn"
  },
  {
    "chinese": "典型",
    "level": "B2",
    "pinyin": "diănxíng",
    "part_of_speech": "Vs",
    "meaning": "điển hình"
  },
  {
    "chinese": "點燃",
    "level": "B2",
    "pinyin": "diănrán",
    "part_of_speech": "V",
    "meaning": "châm, đốt"
  },
  {
    "chinese": "點頭",
    "level": "B2",
    "pinyin": "diăntóu",
    "part_of_speech": "V-sep",
    "meaning": "gật đầu"
  },
  {
    "chinese": "墊",
    "level": "B2",
    "pinyin": "diàn",
    "part_of_speech": "V",
    "meaning": "kê, lót, chèn, đệm"
  },
  {
    "chinese": "電報",
    "level": "B2",
    "pinyin": "diànbào",
    "part_of_speech": "N",
    "meaning": "bức điện báo"
  },
  {
    "chinese": "電動",
    "level": "B2",
    "pinyin": "diàndòng",
    "part_of_speech": "Vs-attr",
    "meaning": "chạy bằng điện"
  },
  {
    "chinese": "電扇",
    "level": "B2",
    "pinyin": "diànshàn",
    "part_of_speech": "N",
    "meaning": "quạt điện"
  },
  {
    "chinese": "電視台",
    "level": "B2",
    "pinyin": "diànshìtái",
    "part_of_speech": "N",
    "meaning": "đài truyền hình"
  },
  {
    "chinese": "電台",
    "level": "B2",
    "pinyin": "diàntái",
    "part_of_speech": "N",
    "meaning": "đài phát thanh"
  },
  {
    "chinese": "電線",
    "level": "B2",
    "pinyin": "diànxiàn",
    "part_of_speech": "N",
    "meaning": "dây điện"
  },
  {
    "chinese": "電子",
    "level": "B2",
    "pinyin": "diànzĭ",
    "part_of_speech": "N",
    "meaning": "điện tử"
  },
  {
    "chinese": "雕刻",
    "level": "B2",
    "pinyin": "diāokè",
    "part_of_speech": "N",
    "meaning": "điêu khắc"
  },
  {
    "chinese": "雕刻",
    "level": "B2",
    "pinyin": "diāokè",
    "part_of_speech": "V",
    "meaning": "chạm trổ"
  },
  {
    "chinese": "吊",
    "level": "B2",
    "pinyin": "diào",
    "part_of_speech": "V",
    "meaning": "treo, buộc, kéo lên"
  },
  {
    "chinese": "釣",
    "level": "B2",
    "pinyin": "diào",
    "part_of_speech": "V",
    "meaning": "câu lên"
  },
  {
    "chinese": "跌",
    "level": "B2",
    "pinyin": "dié",
    "part_of_speech": "Vp",
    "meaning": "ngã, té, rơi xuống"
  },
  {
    "chinese": "跌倒",
    "level": "B2",
    "pinyin": "diédăo",
    "part_of_speech": "Vp",
    "meaning": "ngã, té nhào"
  },
  {
    "chinese": "丁",
    "level": "B2",
    "pinyin": "dīng",
    "part_of_speech": "N",
    "meaning": "tưng tưng ( từ tượng thanh)"
  },
  {
    "chinese": "盯",
    "level": "B2",
    "pinyin": "dīng",
    "part_of_speech": "V",
    "meaning": "nhìn chằm chằm"
  },
  {
    "chinese": "頂",
    "level": "B2",
    "pinyin": "dǐng",
    "part_of_speech": "M",
    "meaning": "đỉnh, chóp"
  },
  {
    "chinese": "訂婚",
    "level": "B2",
    "pinyin": "dìnghūn",
    "part_of_speech": "V-sep",
    "meaning": "đính hôn"
  },
  {
    "chinese": "訂位",
    "level": "B2",
    "pinyin": "dìngwèi",
    "part_of_speech": "V-sep",
    "meaning": "đặt chỗ"
  },
  {
    "chinese": "定期",
    "level": "B2",
    "pinyin": "dìngqí",
    "part_of_speech": "Adv",
    "meaning": "định kỳ"
  },
  {
    "chinese": "定期",
    "level": "B2",
    "pinyin": "dìngqí",
    "part_of_speech": "Vs-attr",
    "meaning": "định ngày"
  },
  {
    "chinese": "丟臉",
    "level": "B2",
    "pinyin": "diūliăn",
    "part_of_speech": "Vs-sep",
    "meaning": "mất mặt, xấu hổ"
  },
  {
    "chinese": "丟人",
    "level": "B2",
    "pinyin": "diūrén",
    "part_of_speech": "Vs",
    "meaning": "mất thể diện, bẽ mặt"
  },
  {
    "chinese": "冬季",
    "level": "B2",
    "pinyin": "dōngjì",
    "part_of_speech": "N",
    "meaning": "mùa đông"
  },
  {
    "chinese": "懂得",
    "level": "B2",
    "pinyin": "dǒngde",
    "part_of_speech": "Vst",
    "meaning": "hiểu, biết"
  },
  {
    "chinese": "洞",
    "level": "B2",
    "pinyin": "dòng",
    "part_of_speech": "N",
    "meaning": "động, hang động"
  },
  {
    "chinese": "凍",
    "level": "B2",
    "pinyin": "dòng",
    "part_of_speech": "Vs",
    "meaning": "đông lại, đóng băng"
  },
  {
    "chinese": "棟",
    "level": "B2",
    "pinyin": "dòng",
    "part_of_speech": "M",
    "meaning": "xà ngang"
  },
  {
    "chinese": "動不動",
    "level": "B2",
    "pinyin": "dòngbudòng",
    "part_of_speech": "Adv",
    "meaning": "động 1 chút, hở 1 chút là..."
  },
  {
    "chinese": "動詞",
    "level": "B2",
    "pinyin": "dòngcí",
    "part_of_speech": "N",
    "meaning": "động từ"
  },
  {
    "chinese": "動人",
    "level": "B2",
    "pinyin": "dòngrén",
    "part_of_speech": "Vs",
    "meaning": "làm cho cảm động"
  },
  {
    "chinese": "動身",
    "level": "B2",
    "pinyin": "dòngshēn",
    "part_of_speech": "Vi",
    "meaning": "khởi hành, xuất phát"
  },
  {
    "chinese": "動手",
    "level": "B2",
    "pinyin": "dòngshǒu",
    "part_of_speech": "Vi",
    "meaning": "bắt tay vào làm"
  },
  {
    "chinese": "動作",
    "level": "B2",
    "pinyin": "dòngzuò",
    "part_of_speech": "N",
    "meaning": "động tác"
  },
  {
    "chinese": "鬥爭",
    "level": "B2",
    "pinyin": "dòuzhēng",
    "part_of_speech": "Vi",
    "meaning": "đấu tranh"
  },
  {
    "chinese": "毒",
    "level": "B2",
    "pinyin": "dú",
    "part_of_speech": "N",
    "meaning": "độc, chất độc"
  },
  {
    "chinese": "毒",
    "level": "B2",
    "pinyin": "dú",
    "part_of_speech": "Vs",
    "meaning": "có hại"
  },
  {
    "chinese": "獨立",
    "level": "B2",
    "pinyin": "dúlì",
    "part_of_speech": "Vs",
    "meaning": "độc lập"
  },
  {
    "chinese": "獨自",
    "level": "B2",
    "pinyin": "dúzì",
    "part_of_speech": "Adv",
    "meaning": "một mình, tự mình"
  },
  {
    "chinese": "賭",
    "level": "B2",
    "pinyin": "dŭ",
    "part_of_speech": "V",
    "meaning": "đánh bạc"
  },
  {
    "chinese": "度",
    "level": "B2",
    "pinyin": "dù",
    "part_of_speech": "V",
    "meaning": "đo lường"
  },
  {
    "chinese": "度過",
    "level": "B2",
    "pinyin": "dùguò",
    "part_of_speech": "V",
    "meaning": "trải qua"
  },
  {
    "chinese": "端",
    "level": "B2",
    "pinyin": "duān",
    "part_of_speech": "V",
    "meaning": "bưng, mang, đem"
  },
  {
    "chinese": "斷",
    "level": "B2",
    "pinyin": "duàn",
    "part_of_speech": "Vp",
    "meaning": "cắt đứt, đoạn tuyệt"
  },
  {
    "chinese": "鍛鍊",
    "level": "B2",
    "pinyin": "duànliàn",
    "part_of_speech": "V",
    "meaning": "rèn luyện"
  },
  {
    "chinese": "堆",
    "level": "B2",
    "pinyin": "duī",
    "part_of_speech": "V",
    "meaning": "chồng chất, tích tụ"
  },
  {
    "chinese": "隊",
    "level": "B2",
    "pinyin": "duì",
    "part_of_speech": "M",
    "meaning": "hàng ngũ, đội ngũ"
  },
  {
    "chinese": "隊員",
    "level": "B2",
    "pinyin": "duìyuán",
    "part_of_speech": "N",
    "meaning": "đội viên"
  },
  {
    "chinese": "對岸",
    "level": "B2",
    "pinyin": "duìàn",
    "part_of_speech": "N",
    "meaning": "bờ đối diện"
  },
  {
    "chinese": "對策",
    "level": "B2",
    "pinyin": "duìcè",
    "part_of_speech": "N",
    "meaning": "đối sách"
  },
  {
    "chinese": "對待",
    "level": "B2",
    "pinyin": "duìdài",
    "part_of_speech": "V",
    "meaning": "đối đãi, đối xử"
  },
  {
    "chinese": "對付",
    "level": "B2",
    "pinyin": "duìfù",
    "part_of_speech": "V",
    "meaning": "đối phó"
  },
  {
    "chinese": "對抗",
    "level": "B2",
    "pinyin": "duìkàng",
    "part_of_speech": "V",
    "meaning": "đối kháng"
  },
  {
    "chinese": "對立",
    "level": "B2",
    "pinyin": "duìlì",
    "part_of_speech": "Vs",
    "meaning": "đối lập"
  },
  {
    "chinese": "對於",
    "level": "B2",
    "pinyin": "duìyú",
    "part_of_speech": "Prep",
    "meaning": "đối với, về..."
  },
  {
    "chinese": "蹲",
    "level": "B2",
    "pinyin": "dūn",
    "part_of_speech": "Vi",
    "meaning": "ngồi xổm"
  },
  {
    "chinese": "頓",
    "level": "B2",
    "pinyin": "dùn",
    "part_of_speech": "M",
    "meaning": "Bữa, suất (lượng từ theo bữa ăn, trận đánh...)"
  },
  {
    "chinese": "噸",
    "level": "B2",
    "pinyin": "dùn",
    "part_of_speech": "M",
    "meaning": "tấn"
  },
  {
    "chinese": "多半/多半兒",
    "level": "B2",
    "pinyin": "duōbàn/duōbànr",
    "part_of_speech": "Det",
    "meaning": "hơn phân nửa"
  },
  {
    "chinese": "多多",
    "level": "B2",
    "pinyin": "duōduō",
    "part_of_speech": "Adv",
    "meaning": "rất nhiều"
  },
  {
    "chinese": "多少",
    "level": "B2",
    "pinyin": "duōshăo",
    "part_of_speech": "Adv",
    "meaning": "nhiều ít, hơi hơi"
  },
  {
    "chinese": "多數",
    "level": "B2",
    "pinyin": "duōshù",
    "part_of_speech": "Det",
    "meaning": "đa số, số nhiều"
  },
  {
    "chinese": "多謝",
    "level": "B2",
    "pinyin": "duōxiè",
    "part_of_speech": "Vst",
    "meaning": "cảm ơn"
  },
  {
    "chinese": "奪",
    "level": "B2",
    "pinyin": "duó",
    "part_of_speech": "V",
    "meaning": "cướp đoạt"
  },
  {
    "chinese": "躲",
    "level": "B2",
    "pinyin": "duŏ",
    "part_of_speech": "Vi",
    "meaning": "trốn tránh"
  },
  {
    "chinese": "鵝",
    "level": "B2",
    "pinyin": "é",
    "part_of_speech": "N",
    "meaning": "ngỗng"
  },
  {
    "chinese": "惡劣",
    "level": "B2",
    "pinyin": "èliè",
    "part_of_speech": "Vs",
    "meaning": "ác liệt"
  },
  {
    "chinese": "而已",
    "level": "B2",
    "pinyin": "éryĭ",
    "part_of_speech": "Ptc",
    "meaning": "mà thôi, thế thôi"
  },
  {
    "chinese": "發",
    "level": "B2",
    "pinyin": "fā",
    "part_of_speech": "Vp",
    "meaning": "phát, gởi"
  },
  {
    "chinese": "發動",
    "level": "B2",
    "pinyin": "fādòng",
    "part_of_speech": "V",
    "meaning": "phát động, bắt đầu"
  },
  {
    "chinese": "發抖",
    "level": "B2",
    "pinyin": "fādŏu",
    "part_of_speech": "Vi",
    "meaning": "run rẩy"
  },
  {
    "chinese": "發起",
    "level": "B2",
    "pinyin": "fāqĭ",
    "part_of_speech": "Vp",
    "meaning": "đề nghị, đề xuất"
  },
  {
    "chinese": "發射",
    "level": "B2",
    "pinyin": "fāshè",
    "part_of_speech": "V",
    "meaning": "bắn, phát ra, phóng"
  },
  {
    "chinese": "發行",
    "level": "B2",
    "pinyin": "fāxíng",
    "part_of_speech": "V",
    "meaning": "phát hành"
  },
  {
    "chinese": "發言",
    "level": "B2",
    "pinyin": "fāyán",
    "part_of_speech": "V-sep",
    "meaning": "phát ngôn, phát biểu"
  },
  {
    "chinese": "發揚",
    "level": "B2",
    "pinyin": "fāyáng",
    "part_of_speech": "V",
    "meaning": "phát huy"
  },
  {
    "chinese": "發音",
    "level": "B2",
    "pinyin": "fāyīn",
    "part_of_speech": "Vi",
    "meaning": "phát âm"
  },
  {
    "chinese": "發展",
    "level": "B2",
    "pinyin": "fāzhăn",
    "part_of_speech": "V",
    "meaning": "phát triển"
  },
  {
    "chinese": "罰",
    "level": "B2",
    "pinyin": "fá",
    "part_of_speech": "V",
    "meaning": "phạt, xử phạt"
  },
  {
    "chinese": "法子",
    "level": "B2",
    "pinyin": "fázi",
    "part_of_speech": "N",
    "meaning": "phương pháp, cách thức"
  },
  {
    "chinese": "法院",
    "level": "B2",
    "pinyin": "făyuàn",
    "part_of_speech": "N",
    "meaning": "tòa án"
  },
  {
    "chinese": "髮型",
    "level": "B2",
    "pinyin": "făxíng",
    "part_of_speech": "N",
    "meaning": "kiểu tóc"
  },
  {
    "chinese": "番",
    "level": "B2",
    "pinyin": "fān",
    "part_of_speech": "M",
    "meaning": "gấp đôi"
  },
  {
    "chinese": "翻",
    "level": "B2",
    "pinyin": "fān",
    "part_of_speech": "V",
    "meaning": "lật, đổ"
  },
  {
    "chinese": "煩",
    "level": "B2",
    "pinyin": "fán",
    "part_of_speech": "Vs",
    "meaning": "phiền muộn"
  },
  {
    "chinese": "煩惱",
    "level": "B2",
    "pinyin": "fánnăo",
    "part_of_speech": "N",
    "meaning": "phiền não"
  },
  {
    "chinese": "繁忙",
    "level": "B2",
    "pinyin": "fánmáng",
    "part_of_speech": "Vs",
    "meaning": "bận rộn"
  },
  {
    "chinese": "繁榮",
    "level": "B2",
    "pinyin": "fánróng",
    "part_of_speech": "Vs",
    "meaning": "phồn vinh"
  },
  {
    "chinese": "繁殖",
    "level": "B2",
    "pinyin": "fánzhí",
    "part_of_speech": "V",
    "meaning": "sinh sôi nảy nở"
  },
  {
    "chinese": "反",
    "level": "B2",
    "pinyin": "făn",
    "part_of_speech": "V",
    "meaning": "ngược, trái"
  },
  {
    "chinese": "反",
    "level": "B2",
    "pinyin": "făn",
    "part_of_speech": "Vst",
    "meaning": "phản"
  },
  {
    "chinese": "反對",
    "level": "B2",
    "pinyin": "fănduì",
    "part_of_speech": "Vst",
    "meaning": "phản đối"
  },
  {
    "chinese": "反覆",
    "level": "B2",
    "pinyin": "fănfù",
    "part_of_speech": "Adv",
    "meaning": "lặp đi lặp lại"
  },
  {
    "chinese": "反抗",
    "level": "B2",
    "pinyin": "fănkàng",
    "part_of_speech": "V",
    "meaning": "phản kháng"
  },
  {
    "chinese": "反面",
    "level": "B2",
    "pinyin": "fănmiàn",
    "part_of_speech": "N",
    "meaning": "mặt trái, phản diện"
  },
  {
    "chinese": "反問",
    "level": "B2",
    "pinyin": "fănwèn",
    "part_of_speech": "V",
    "meaning": "hỏi lại"
  },
  {
    "chinese": "反映",
    "level": "B2",
    "pinyin": "fănyìng",
    "part_of_speech": "V",
    "meaning": "phản ứng"
  },
  {
    "chinese": "反應",
    "level": "B2",
    "pinyin": "fănyìng",
    "part_of_speech": "Vi",
    "meaning": "phản ứng"
  },
  {
    "chinese": "反正",
    "level": "B2",
    "pinyin": "fănzhèng",
    "part_of_speech": "Adv",
    "meaning": "cho dù, dù sao"
  },
  {
    "chinese": "返回",
    "level": "B2",
    "pinyin": "fănhuí",
    "part_of_speech": "V",
    "meaning": "phản hồi"
  },
  {
    "chinese": "犯錯",
    "level": "B2",
    "pinyin": "fàncuò",
    "part_of_speech": "V-sep",
    "meaning": "phạm sai lầm"
  },
  {
    "chinese": "犯法",
    "level": "B2",
    "pinyin": "fànfă",
    "part_of_speech": "V-sep",
    "meaning": "phạm pháp"
  },
  {
    "chinese": "犯人",
    "level": "B2",
    "pinyin": "fànrén",
    "part_of_speech": "N",
    "meaning": "phạm nhân, tội phạm"
  },
  {
    "chinese": "犯罪",
    "level": "B2",
    "pinyin": "fànzuì",
    "part_of_speech": "V-sep",
    "meaning": "phạm tội"
  },
  {
    "chinese": "方",
    "level": "B2",
    "pinyin": "fāng",
    "part_of_speech": "Vs-attr",
    "meaning": "vuông"
  },
  {
    "chinese": "方案",
    "level": "B2",
    "pinyin": "fāngàn",
    "part_of_speech": "N",
    "meaning": "kế hoạch"
  },
  {
    "chinese": "防",
    "level": "B2",
    "pinyin": "fáng",
    "part_of_speech": "V",
    "meaning": "phòng ngừa"
  },
  {
    "chinese": "防守",
    "level": "B2",
    "pinyin": "fángshǒu",
    "part_of_speech": "V",
    "meaning": "phòng thủ"
  },
  {
    "chinese": "防止",
    "level": "B2",
    "pinyin": "fángzhĭ",
    "part_of_speech": "V",
    "meaning": "phòng ngừa"
  },
  {
    "chinese": "放大",
    "level": "B2",
    "pinyin": "fàngdà",
    "part_of_speech": "V",
    "meaning": "phóng đại"
  },
  {
    "chinese": "放棄",
    "level": "B2",
    "pinyin": "fàngqì",
    "part_of_speech": "V",
    "meaning": "vứt bỏ, từ bỏ"
  },
  {
    "chinese": "放手",
    "level": "B2",
    "pinyin": "fàngshŏu",
    "part_of_speech": "Vi",
    "meaning": "buông tay"
  },
  {
    "chinese": "放學",
    "level": "B2",
    "pinyin": "fàngxué",
    "part_of_speech": "Vp-sep",
    "meaning": "tan học, nghỉ học"
  },
  {
    "chinese": "非法",
    "level": "B2",
    "pinyin": "fēifă",
    "part_of_speech": "Vs-attr",
    "meaning": "phi pháp, không hợp pháp"
  },
  {
    "chinese": "肥",
    "level": "B2",
    "pinyin": "féi",
    "part_of_speech": "Vs",
    "meaning": "béo, mập"
  },
  {
    "chinese": "肥胖",
    "level": "B2",
    "pinyin": "féipàng",
    "part_of_speech": "Vs",
    "meaning": "béo phì"
  },
  {
    "chinese": "肥皂",
    "level": "B2",
    "pinyin": "féizào",
    "part_of_speech": "N",
    "meaning": "xà phòng"
  },
  {
    "chinese": "肺",
    "level": "B2",
    "pinyin": "fèi",
    "part_of_speech": "N",
    "meaning": "phổi"
  },
  {
    "chinese": "費",
    "level": "B2",
    "pinyin": "fèi",
    "part_of_speech": "Vst",
    "meaning": "phí, chi phí"
  },
  {
    "chinese": "廢話",
    "level": "B2",
    "pinyin": "fèihuà",
    "part_of_speech": "N",
    "meaning": "lời vô ích"
  },
  {
    "chinese": "廢氣",
    "level": "B2",
    "pinyin": "fèiqì",
    "part_of_speech": "N",
    "meaning": "khí thải"
  },
  {
    "chinese": "廢水",
    "level": "B2",
    "pinyin": "fèishuĭ",
    "part_of_speech": "N",
    "meaning": "nước thải"
  },
  {
    "chinese": "廢物",
    "level": "B2",
    "pinyin": "fèiwù",
    "part_of_speech": "N",
    "meaning": "đồ bỏ đi, phế phẩm"
  },
  {
    "chinese": "分別",
    "level": "B2",
    "pinyin": "fēnbié",
    "part_of_speech": "Adv",
    "meaning": "phân biệt, lần lượt"
  },
  {
    "chinese": "分別",
    "level": "B2",
    "pinyin": "fēnbié",
    "part_of_speech": "N",
    "meaning": "ly biệt"
  },
  {
    "chinese": "分別",
    "level": "B2",
    "pinyin": "fēnbié",
    "part_of_speech": "V",
    "meaning": "chia nhau, phân công nhau"
  },
  {
    "chinese": "分布/佈",
    "level": "B2",
    "pinyin": "fēnbù",
    "part_of_speech": "Vs",
    "meaning": "phân bố"
  },
  {
    "chinese": "分工",
    "level": "B2",
    "pinyin": "fēngōng",
    "part_of_speech": "Vi",
    "meaning": "phân công"
  },
  {
    "chinese": "分明",
    "level": "B2",
    "pinyin": "fēnmíng",
    "part_of_speech": "Vs-pred",
    "meaning": "rõ ràng, phân minh"
  },
  {
    "chinese": "分配",
    "level": "B2",
    "pinyin": "fēnpèi",
    "part_of_speech": "V",
    "meaning": "phân phối"
  },
  {
    "chinese": "分散",
    "level": "B2",
    "pinyin": "fēnsàn",
    "part_of_speech": "Vs",
    "meaning": "phân tán, phân ly"
  },
  {
    "chinese": "分手",
    "level": "B2",
    "pinyin": "fēnshǒu",
    "part_of_speech": "Vp",
    "meaning": "chia tay"
  },
  {
    "chinese": "分數",
    "level": "B2",
    "pinyin": "fēnshù",
    "part_of_speech": "N",
    "meaning": "điểm số"
  },
  {
    "chinese": "分析",
    "level": "B2",
    "pinyin": "fēnxī",
    "part_of_speech": "N",
    "meaning": "phân tích"
  },
  {
    "chinese": "分析",
    "level": "B2",
    "pinyin": "fēnxī",
    "part_of_speech": "V",
    "meaning": "phân tích"
  },
  {
    "chinese": "紛紛",
    "level": "B2",
    "pinyin": "fēnfēn",
    "part_of_speech": "Adv",
    "meaning": "sôi nổi, ào ào"
  },
  {
    "chinese": "吩咐",
    "level": "B2",
    "pinyin": "fēnfù",
    "part_of_speech": "V",
    "meaning": "dặn dò"
  },
  {
    "chinese": "粉筆",
    "level": "B2",
    "pinyin": "fěnbĭ",
    "part_of_speech": "N",
    "meaning": "phấn viết bảng"
  },
  {
    "chinese": "份/份兒",
    "level": "B2",
    "pinyin": "fèn/fènr",
    "part_of_speech": "N",
    "meaning": "phần, địa vị"
  },
  {
    "chinese": "奮鬥",
    "level": "B2",
    "pinyin": "fèndòu",
    "part_of_speech": "Vi",
    "meaning": "phấn đấu, cố gắng"
  },
  {
    "chinese": "憤怒",
    "level": "B2",
    "pinyin": "fènnù",
    "part_of_speech": "Vs",
    "meaning": "phẫn nộ, căm phẫn"
  },
  {
    "chinese": "封",
    "level": "B2",
    "pinyin": "fēng",
    "part_of_speech": "V",
    "meaning": "phong tước"
  },
  {
    "chinese": "封建",
    "level": "B2",
    "pinyin": "fēngjiàn",
    "part_of_speech": "Vs-attr",
    "meaning": "phong kiến"
  },
  {
    "chinese": "蜂蜜",
    "level": "B2",
    "pinyin": "fēngmì",
    "part_of_speech": "N",
    "meaning": "mật ong"
  },
  {
    "chinese": "風氣",
    "level": "B2",
    "pinyin": "fēngqì",
    "part_of_speech": "N",
    "meaning": "bầu không khí"
  },
  {
    "chinese": "風趣",
    "level": "B2",
    "pinyin": "fēngqù",
    "part_of_speech": "Vs",
    "meaning": "dí dỏm, thú vị"
  },
  {
    "chinese": "風險",
    "level": "B2",
    "pinyin": "fēngxiăn",
    "part_of_speech": "N",
    "meaning": "nguy hiểm, mạo hiểm"
  },
  {
    "chinese": "瘋",
    "level": "B2",
    "pinyin": "fēng",
    "part_of_speech": "Vp",
    "meaning": "điên"
  },
  {
    "chinese": "瘋狂",
    "level": "B2",
    "pinyin": "fēngkuáng",
    "part_of_speech": "Vs",
    "meaning": "điên cuồng"
  },
  {
    "chinese": "瘋子",
    "level": "B2",
    "pinyin": "fēngzi",
    "part_of_speech": "N",
    "meaning": "người điên"
  },
  {
    "chinese": "逢",
    "level": "B2",
    "pinyin": "féng",
    "part_of_speech": "Vst",
    "meaning": "gặp mặt"
  },
  {
    "chinese": "縫",
    "level": "B2",
    "pinyin": "féng",
    "part_of_speech": "V",
    "meaning": "may, khâu"
  },
  {
    "chinese": "諷刺",
    "level": "B2",
    "pinyin": "fèngcì",
    "part_of_speech": "V",
    "meaning": "châm biếm, mỉa mai"
  },
  {
    "chinese": "否定",
    "level": "B2",
    "pinyin": "fŏudìng",
    "part_of_speech": "V",
    "meaning": "phủ định"
  },
  {
    "chinese": "否認",
    "level": "B2",
    "pinyin": "fŏurèn",
    "part_of_speech": "V",
    "meaning": "phủ nhận"
  },
  {
    "chinese": "夫妻",
    "level": "B2",
    "pinyin": "fūqī",
    "part_of_speech": "N",
    "meaning": "vợ chồng"
  },
  {
    "chinese": "夫人",
    "level": "B2",
    "pinyin": "fūrén",
    "part_of_speech": "N",
    "meaning": "phu nhân, vợ"
  },
  {
    "chinese": "幅",
    "level": "B2",
    "pinyin": "fú",
    "part_of_speech": "M",
    "meaning": "khổ (vải)"
  },
  {
    "chinese": "扶",
    "level": "B2",
    "pinyin": "fú",
    "part_of_speech": "V",
    "meaning": "đỡ, vịn, dìu"
  },
  {
    "chinese": "服",
    "level": "B2",
    "pinyin": "fú",
    "part_of_speech": "V",
    "meaning": "Mặc, uống thuốc"
  },
  {
    "chinese": "服",
    "level": "B2",
    "pinyin": "fú",
    "part_of_speech": "Vst",
    "meaning": "Phục, thuyết phục"
  },
  {
    "chinese": "浮",
    "level": "B2",
    "pinyin": "fú",
    "part_of_speech": "Vi",
    "meaning": "nổi, nở, phù"
  },
  {
    "chinese": "符號",
    "level": "B2",
    "pinyin": "fúhào",
    "part_of_speech": "N",
    "meaning": "ký hiệu, dấu hiệu"
  },
  {
    "chinese": "付",
    "level": "B2",
    "pinyin": "fù",
    "part_of_speech": "M",
    "meaning": "bộ, đôi, khuôn"
  },
  {
    "chinese": "赴",
    "level": "B2",
    "pinyin": "fù",
    "part_of_speech": "V",
    "meaning": "đi đến, di dự"
  },
  {
    "chinese": "副",
    "level": "B2",
    "pinyin": "fù",
    "part_of_speech": "M",
    "meaning": "phó, phụ"
  },
  {
    "chinese": "輔導",
    "level": "B2",
    "pinyin": "fŭdăo",
    "part_of_speech": "V",
    "meaning": "phụ đạo"
  },
  {
    "chinese": "富",
    "level": "B2",
    "pinyin": "fù",
    "part_of_speech": "Vs-attr",
    "meaning": "giàu có"
  },
  {
    "chinese": "富裕",
    "level": "B2",
    "pinyin": "fùyù",
    "part_of_speech": "Vs",
    "meaning": "dồi dào, sung túc"
  },
  {
    "chinese": "附加",
    "level": "B2",
    "pinyin": "fùjiā",
    "part_of_speech": "Vpt",
    "meaning": "phụ thêm, kèm theo"
  },
  {
    "chinese": "婦女",
    "level": "B2",
    "pinyin": "fùnǚ",
    "part_of_speech": "N",
    "meaning": "phụ nữ"
  },
  {
    "chinese": "複雜",
    "level": "B2",
    "pinyin": "fùzá",
    "part_of_speech": "Vs",
    "meaning": "phức tạp"
  },
  {
    "chinese": "複製",
    "level": "B2",
    "pinyin": "fùzhì",
    "part_of_speech": "V",
    "meaning": "phục chế, làm lại"
  },
  {
    "chinese": "該",
    "level": "B2",
    "pinyin": "gāi",
    "part_of_speech": "Det",
    "meaning": "sửa đổi"
  },
  {
    "chinese": "改革",
    "level": "B2",
    "pinyin": "găigé",
    "part_of_speech": "V",
    "meaning": "cải cách"
  },
  {
    "chinese": "改造",
    "level": "B2",
    "pinyin": "găizào",
    "part_of_speech": "V",
    "meaning": "cải tạo, sửa đổi"
  },
  {
    "chinese": "改正",
    "level": "B2",
    "pinyin": "găizhèng",
    "part_of_speech": "V",
    "meaning": "cải chính, đính chính"
  },
  {
    "chinese": "蓋(子)",
    "level": "B2",
    "pinyin": "gài(zi)",
    "part_of_speech": "N",
    "meaning": "nắp, vung"
  },
  {
    "chinese": "肝",
    "level": "B2",
    "pinyin": "gān",
    "part_of_speech": "N",
    "meaning": "lá gan"
  },
  {
    "chinese": "乾杯",
    "level": "B2",
    "pinyin": "gānbēi",
    "part_of_speech": "Vi",
    "meaning": "cạn ly"
  },
  {
    "chinese": "乾脆",
    "level": "B2",
    "pinyin": "gāncuì",
    "part_of_speech": "Vs",
    "meaning": "thẳng thắn, dứt khoát"
  },
  {
    "chinese": "趕",
    "level": "B2",
    "pinyin": "găn",
    "part_of_speech": "Vs",
    "meaning": "đuổi, đuổi theo, xua đuổi"
  },
  {
    "chinese": "趕緊",
    "level": "B2",
    "pinyin": "gănjĭn",
    "part_of_speech": "Adv",
    "meaning": "vội vàng, khẩn trương"
  },
  {
    "chinese": "感到",
    "level": "B2",
    "pinyin": "găndào",
    "part_of_speech": "Vpt",
    "meaning": "cảm thấy"
  },
  {
    "chinese": "感恩",
    "level": "B2",
    "pinyin": "gănēn",
    "part_of_speech": "Vs",
    "meaning": "cảm ơn"
  },
  {
    "chinese": "感激",
    "level": "B2",
    "pinyin": "gănjī",
    "part_of_speech": "Vst",
    "meaning": "cảm kích"
  },
  {
    "chinese": "感情",
    "level": "B2",
    "pinyin": "gănqíng",
    "part_of_speech": "N",
    "meaning": "tình cảm"
  },
  {
    "chinese": "感染",
    "level": "B2",
    "pinyin": "gănrăn",
    "part_of_speech": "Vpt",
    "meaning": "lây nhiễm"
  },
  {
    "chinese": "感受",
    "level": "B2",
    "pinyin": "gănshòu",
    "part_of_speech": "N",
    "meaning": "cảm nhận"
  },
  {
    "chinese": "感受",
    "level": "B2",
    "pinyin": "gănshòu",
    "part_of_speech": "Vst",
    "meaning": "tiếp thu"
  },
  {
    "chinese": "幹",
    "level": "B2",
    "pinyin": "gàn",
    "part_of_speech": "V",
    "meaning": "liên can, liên quan"
  },
  {
    "chinese": "幹部",
    "level": "B2",
    "pinyin": "gànbù",
    "part_of_speech": "N",
    "meaning": "cán bộ"
  },
  {
    "chinese": "幹嘛",
    "level": "B2",
    "pinyin": "gànma",
    "part_of_speech": "Adv",
    "meaning": "làm gì?"
  },
  {
    "chinese": "幹嘛",
    "level": "B2",
    "pinyin": "gànma",
    "part_of_speech": "Vi",
    "meaning": "làm gì?"
  },
  {
    "chinese": "幹什麼",
    "level": "B2",
    "pinyin": "gànshénme",
    "part_of_speech": "Vi",
    "meaning": "Làm gì?, làm sao"
  },
  {
    "chinese": "鋼",
    "level": "B2",
    "pinyin": "gāng",
    "part_of_speech": "N",
    "meaning": "thép"
  },
  {
    "chinese": "鋼筆",
    "level": "B2",
    "pinyin": "gāngbĭ",
    "part_of_speech": "N",
    "meaning": "bút máy"
  },
  {
    "chinese": "剛好",
    "level": "B2",
    "pinyin": "gānghăo",
    "part_of_speech": "Vs",
    "meaning": "vừa vặn, vừa khít"
  },
  {
    "chinese": "港幣",
    "level": "B2",
    "pinyin": "găngbì",
    "part_of_speech": "N",
    "meaning": "đô la Hồng Kông"
  },
  {
    "chinese": "港口",
    "level": "B2",
    "pinyin": "găngkŏu",
    "part_of_speech": "N",
    "meaning": "bến tàu, bến cảng"
  },
  {
    "chinese": "高潮",
    "level": "B2",
    "pinyin": "gāocháo",
    "part_of_speech": "N",
    "meaning": "triều cường, cao trào"
  },
  {
    "chinese": "高大",
    "level": "B2",
    "pinyin": "gāodà",
    "part_of_speech": "Vs",
    "meaning": "cao lớn"
  },
  {
    "chinese": "高度",
    "level": "B2",
    "pinyin": "gāodù",
    "part_of_speech": "N",
    "meaning": "cao độ, độ cao"
  },
  {
    "chinese": "高度",
    "level": "B2",
    "pinyin": "gāodù",
    "part_of_speech": "Vs-attr",
    "meaning": "rất cao"
  },
  {
    "chinese": "高峰",
    "level": "B2",
    "pinyin": "gāofēng",
    "part_of_speech": "N",
    "meaning": "đỉnh núi, đỉnh cao"
  },
  {
    "chinese": "高貴",
    "level": "B2",
    "pinyin": "gāoguì",
    "part_of_speech": "Vs",
    "meaning": "cao quý"
  },
  {
    "chinese": "高級",
    "level": "B2",
    "pinyin": "gāojí",
    "part_of_speech": "Vs",
    "meaning": "cao cấp"
  },
  {
    "chinese": "高明",
    "level": "B2",
    "pinyin": "gāomíng",
    "part_of_speech": "Vs",
    "meaning": "cao siêu, thông minh"
  },
  {
    "chinese": "高手",
    "level": "B2",
    "pinyin": "gāoshŏu",
    "part_of_speech": "N",
    "meaning": "cao thủ"
  },
  {
    "chinese": "高原",
    "level": "B2",
    "pinyin": "gāoyuán",
    "part_of_speech": "N",
    "meaning": "cao nguyên"
  },
  {
    "chinese": "告",
    "level": "B2",
    "pinyin": "gào",
    "part_of_speech": "V",
    "meaning": "nói với"
  },
  {
    "chinese": "告辭",
    "level": "B2",
    "pinyin": "gàocí",
    "part_of_speech": "Vi",
    "meaning": "cáo từ, tạm biệt"
  },
  {
    "chinese": "割",
    "level": "B2",
    "pinyin": "gē",
    "part_of_speech": "V",
    "meaning": "cắt, gặt"
  },
  {
    "chinese": "擱",
    "level": "B2",
    "pinyin": "gē",
    "part_of_speech": "V",
    "meaning": "chịu đựng"
  },
  {
    "chinese": "歌劇",
    "level": "B2",
    "pinyin": "gējù",
    "part_of_speech": "N",
    "meaning": "ca kịch"
  },
  {
    "chinese": "隔",
    "level": "B2",
    "pinyin": "gé",
    "part_of_speech": "Vst",
    "meaning": "ngăn cách"
  },
  {
    "chinese": "革命",
    "level": "B2",
    "pinyin": "gémìng",
    "part_of_speech": "N",
    "meaning": "cách mạng"
  },
  {
    "chinese": "各",
    "level": "B2",
    "pinyin": "gè",
    "part_of_speech": "Adv",
    "meaning": "các, tất cả"
  },
  {
    "chinese": "各行各業",
    "level": "B2",
    "pinyin": "gèhánggèyè",
    "part_of_speech": "N",
    "meaning": "các ngành nghề"
  },
  {
    "chinese": "個別",
    "level": "B2",
    "pinyin": "gèbié",
    "part_of_speech": "Vs-attr",
    "meaning": "riêng lẻ, riêng biệt"
  },
  {
    "chinese": "個性",
    "level": "B2",
    "pinyin": "gèxìng",
    "part_of_speech": "N",
    "meaning": "cá tính"
  },
  {
    "chinese": "根本",
    "level": "B2",
    "pinyin": "gēnběn",
    "part_of_speech": "Adv",
    "meaning": "từ trước đến giờ, vốn dĩ"
  },
  {
    "chinese": "根本",
    "level": "B2",
    "pinyin": "gēnběn",
    "part_of_speech": "N",
    "meaning": "căn bản, gốc rễ, cội nguồn"
  },
  {
    "chinese": "根據",
    "level": "B2",
    "pinyin": "gēnjù",
    "part_of_speech": "N",
    "meaning": "căn cứ vào"
  },
  {
    "chinese": "供",
    "level": "B2",
    "pinyin": "gōng",
    "part_of_speech": "V",
    "meaning": "cúng, dâng"
  },
  {
    "chinese": "工程",
    "level": "B2",
    "pinyin": "gōngchéng",
    "part_of_speech": "N",
    "meaning": "công trình"
  },
  {
    "chinese": "工夫",
    "level": "B2",
    "pinyin": "gōngfu",
    "part_of_speech": "N",
    "meaning": "người làm thuê"
  },
  {
    "chinese": "工會",
    "level": "B2",
    "pinyin": "gōnghuì",
    "part_of_speech": "N",
    "meaning": "công đoàn"
  },
  {
    "chinese": "工錢",
    "level": "B2",
    "pinyin": "gōngqián",
    "part_of_speech": "N",
    "meaning": "tiền công, tiền lương"
  },
  {
    "chinese": "工資",
    "level": "B2",
    "pinyin": "gōngzī",
    "part_of_speech": "N",
    "meaning": "tiền lương"
  },
  {
    "chinese": "公布/佈",
    "level": "B2",
    "pinyin": "gōngbù",
    "part_of_speech": "V",
    "meaning": "công bố"
  },
  {
    "chinese": "公公",
    "level": "B2",
    "pinyin": "gōnggōng",
    "part_of_speech": "N",
    "meaning": "bố chồng"
  },
  {
    "chinese": "公開",
    "level": "B2",
    "pinyin": "gōngkāi",
    "part_of_speech": "Vs",
    "meaning": "công khai"
  },
  {
    "chinese": "公立",
    "level": "B2",
    "pinyin": "gōnglì",
    "part_of_speech": "Vs-attr",
    "meaning": "công lập"
  },
  {
    "chinese": "公平",
    "level": "B2",
    "pinyin": "gōngpíng",
    "part_of_speech": "Vs",
    "meaning": "công bằng"
  },
  {
    "chinese": "公式",
    "level": "B2",
    "pinyin": "gōngshì",
    "part_of_speech": "N",
    "meaning": "công thức"
  },
  {
    "chinese": "公用",
    "level": "B2",
    "pinyin": "gōngyòng",
    "part_of_speech": "Vs-attr",
    "meaning": "công cộng, dùng chung"
  },
  {
    "chinese": "公元",
    "level": "B2",
    "pinyin": "gōngyuán",
    "part_of_speech": "N",
    "meaning": "công nguyên"
  },
  {
    "chinese": "供應",
    "level": "B2",
    "pinyin": "gōngyìng",
    "part_of_speech": "V",
    "meaning": "cung ứng, cung cấp"
  },
  {
    "chinese": "共",
    "level": "B2",
    "pinyin": "gòng",
    "part_of_speech": "Adv",
    "meaning": "tổng cộng"
  },
  {
    "chinese": "共同",
    "level": "B2",
    "pinyin": "gòngtóng",
    "part_of_speech": "Adv",
    "meaning": "chung, cùng"
  },
  {
    "chinese": "構成",
    "level": "B2",
    "pinyin": "gòuchéng",
    "part_of_speech": "V",
    "meaning": "cấu thành, tạo thành"
  },
  {
    "chinese": "構造",
    "level": "B2",
    "pinyin": "gòuzào",
    "part_of_speech": "N",
    "meaning": "cấu tạo, cấu trúc"
  },
  {
    "chinese": "孤單",
    "level": "B2",
    "pinyin": "gūdān",
    "part_of_speech": "Vs",
    "meaning": "cô đơn, lẻ loi"
  },
  {
    "chinese": "估計",
    "level": "B2",
    "pinyin": "gūjì",
    "part_of_speech": "V",
    "meaning": "đánh giá, dự tính"
  },
  {
    "chinese": "姑姑",
    "level": "B2",
    "pinyin": "gūgu",
    "part_of_speech": "N",
    "meaning": "bác, cô (chị em gái của bố)"
  },
  {
    "chinese": "姑丈",
    "level": "B2",
    "pinyin": "gūzhàng",
    "part_of_speech": "N",
    "meaning": "dượng (chồng của cô)"
  },
  {
    "chinese": "古典",
    "level": "B2",
    "pinyin": "gŭdiăn",
    "part_of_speech": "Vs",
    "meaning": "điển tích, cổ điển"
  },
  {
    "chinese": "鼓",
    "level": "B2",
    "pinyin": "gŭ",
    "part_of_speech": "N",
    "meaning": "cái trống"
  },
  {
    "chinese": "鼓勵",
    "level": "B2",
    "pinyin": "gŭlì",
    "part_of_speech": "N",
    "meaning": "sự khuyến khích"
  },
  {
    "chinese": "鼓勵",
    "level": "B2",
    "pinyin": "gŭlì",
    "part_of_speech": "V",
    "meaning": "khích lệ, cổ vũ"
  },
  {
    "chinese": "鼓舞",
    "level": "B2",
    "pinyin": "gŭwŭ",
    "part_of_speech": "V",
    "meaning": "cổ vũ"
  },
  {
    "chinese": "鼓掌",
    "level": "B2",
    "pinyin": "gŭzhăng",
    "part_of_speech": "Vi",
    "meaning": "vỗ tay"
  },
  {
    "chinese": "骨頭",
    "level": "B2",
    "pinyin": "gútou",
    "part_of_speech": "N",
    "meaning": "xương cốt"
  },
  {
    "chinese": "固定",
    "level": "B2",
    "pinyin": "gùdìng",
    "part_of_speech": "Vs",
    "meaning": "cố định"
  },
  {
    "chinese": "顧問",
    "level": "B2",
    "pinyin": "gùwèn",
    "part_of_speech": "N",
    "meaning": "cố vấn"
  },
  {
    "chinese": "故鄉",
    "level": "B2",
    "pinyin": "gùxiāng",
    "part_of_speech": "N",
    "meaning": "cố hương, quê nhà"
  },
  {
    "chinese": "瓜",
    "level": "B2",
    "pinyin": "guā",
    "part_of_speech": "N",
    "meaning": "dưa, dưa chuột"
  },
  {
    "chinese": "瓜子",
    "level": "B2",
    "pinyin": "guāzĭ",
    "part_of_speech": "N",
    "meaning": "hạt dưa"
  },
  {
    "chinese": "掛號信",
    "level": "B2",
    "pinyin": "guàhàoxìn",
    "part_of_speech": "N",
    "meaning": "thư đã đăng kí"
  },
  {
    "chinese": "怪",
    "level": "B2",
    "pinyin": "guài",
    "part_of_speech": "Adv",
    "meaning": "kỳ quái"
  },
  {
    "chinese": "官方",
    "level": "B2",
    "pinyin": "guānfāng",
    "part_of_speech": "N",
    "meaning": "nhà nước"
  },
  {
    "chinese": "官員",
    "level": "B2",
    "pinyin": "guānyuán",
    "part_of_speech": "N",
    "meaning": "quan chức"
  },
  {
    "chinese": "關",
    "level": "B2",
    "pinyin": "guān",
    "part_of_speech": "M",
    "meaning": "cửa ải"
  },
  {
    "chinese": "關鍵",
    "level": "B2",
    "pinyin": "guānjiàn",
    "part_of_speech": "N",
    "meaning": "then chốt, mấu chốt"
  },
  {
    "chinese": "關上",
    "level": "B2",
    "pinyin": "guānshàng",
    "part_of_speech": "V",
    "meaning": "đóng lại, khép, tắt"
  },
  {
    "chinese": "關於",
    "level": "B2",
    "pinyin": "guānyú",
    "part_of_speech": "Prep",
    "meaning": "về, liên quan đến"
  },
  {
    "chinese": "觀光",
    "level": "B2",
    "pinyin": "guānguāng",
    "part_of_speech": "Vi",
    "meaning": "tham quan"
  },
  {
    "chinese": "管道",
    "level": "B2",
    "pinyin": "guăndào",
    "part_of_speech": "N",
    "meaning": "đường ống, ống dẫn"
  },
  {
    "chinese": "管制",
    "level": "B2",
    "pinyin": "guănzhì",
    "part_of_speech": "V",
    "meaning": "quản chế, kiểm soát"
  },
  {
    "chinese": "慣",
    "level": "B2",
    "pinyin": "guàn",
    "part_of_speech": "Vp",
    "meaning": "quen, thói quen"
  },
  {
    "chinese": "慣例",
    "level": "B2",
    "pinyin": "guànlì",
    "part_of_speech": "N",
    "meaning": "lệ thường, thông lệ"
  },
  {
    "chinese": "冠軍",
    "level": "B2",
    "pinyin": "guànjūn",
    "part_of_speech": "N",
    "meaning": "quán quân"
  },
  {
    "chinese": "罐頭",
    "level": "B2",
    "pinyin": "guàntou",
    "part_of_speech": "N",
    "meaning": "vò, lọ, vại, hũ"
  },
  {
    "chinese": "罐子",
    "level": "B2",
    "pinyin": "guànzi",
    "part_of_speech": "N",
    "meaning": "vò, hũ (bằng sành sứ)"
  },
  {
    "chinese": "光",
    "level": "B2",
    "pinyin": "guāng",
    "part_of_speech": "Adv",
    "meaning": "ánh sáng, cảnh vật"
  },
  {
    "chinese": "光",
    "level": "B2",
    "pinyin": "guāng",
    "part_of_speech": "Vp",
    "meaning": "có lợi, có ích"
  },
  {
    "chinese": "光亮",
    "level": "B2",
    "pinyin": "guāngliàng",
    "part_of_speech": "Vs",
    "meaning": "sáng ngời"
  },
  {
    "chinese": "光臨",
    "level": "B2",
    "pinyin": "guānglín",
    "part_of_speech": "V",
    "meaning": "đến dự"
  },
  {
    "chinese": "光明",
    "level": "B2",
    "pinyin": "guāngmíng",
    "part_of_speech": "Vs",
    "meaning": "sáng rực, sáng chói"
  },
  {
    "chinese": "光榮",
    "level": "B2",
    "pinyin": "guāngróng",
    "part_of_speech": "Vs",
    "meaning": "quang vinh, vẻ vang"
  },
  {
    "chinese": "光是",
    "level": "B2",
    "pinyin": "guāngshì",
    "part_of_speech": "Adv",
    "meaning": "duy nhất, chỉ"
  },
  {
    "chinese": "光線",
    "level": "B2",
    "pinyin": "guāngxiàn",
    "part_of_speech": "N",
    "meaning": "tia sáng"
  },
  {
    "chinese": "廣",
    "level": "B2",
    "pinyin": "guăng",
    "part_of_speech": "Vs",
    "meaning": "rộng rãi"
  },
  {
    "chinese": "廣大",
    "level": "B2",
    "pinyin": "guăngdà",
    "part_of_speech": "Vs",
    "meaning": "rộng lớn"
  },
  {
    "chinese": "廣泛",
    "level": "B2",
    "pinyin": "guăngfàn",
    "part_of_speech": "Vs",
    "meaning": "phổ biến"
  },
  {
    "chinese": "廣告",
    "level": "B2",
    "pinyin": "guănggào",
    "part_of_speech": "Vi",
    "meaning": "bát ngát, mênh mông"
  },
  {
    "chinese": "廣闊",
    "level": "B2",
    "pinyin": "guăngkuò",
    "part_of_speech": "Vs",
    "meaning": "rộng lớn"
  },
  {
    "chinese": "規定",
    "level": "B2",
    "pinyin": "guīdìng",
    "part_of_speech": "N",
    "meaning": "nội quy"
  },
  {
    "chinese": "規定",
    "level": "B2",
    "pinyin": "guīdìng",
    "part_of_speech": "V",
    "meaning": "quy định"
  },
  {
    "chinese": "規畫/劃",
    "level": "B2",
    "pinyin": "guīhuà",
    "part_of_speech": "N",
    "meaning": "kế hoạch"
  },
  {
    "chinese": "規畫/劃",
    "level": "B2",
    "pinyin": "guīhuà",
    "part_of_speech": "V",
    "meaning": "lập kế hoạch"
  },
  {
    "chinese": "規律",
    "level": "B2",
    "pinyin": "guīlǜ",
    "part_of_speech": "N",
    "meaning": "quy luật"
  },
  {
    "chinese": "規則",
    "level": "B2",
    "pinyin": "guīzé",
    "part_of_speech": "N",
    "meaning": "quy tắc"
  },
  {
    "chinese": "跪",
    "level": "B2",
    "pinyin": "guì",
    "part_of_speech": "Vi",
    "meaning": "quỳ gối"
  },
  {
    "chinese": "櫃臺/台",
    "level": "B2",
    "pinyin": "guìtái",
    "part_of_speech": "N",
    "meaning": "quầy hàng"
  },
  {
    "chinese": "貴族",
    "level": "B2",
    "pinyin": "guìzú",
    "part_of_speech": "N",
    "meaning": "quý tộc"
  },
  {
    "chinese": "滾",
    "level": "B2",
    "pinyin": "gŭn",
    "part_of_speech": "Vi",
    "meaning": "cút đi"
  },
  {
    "chinese": "鍋(子)",
    "level": "B2",
    "pinyin": "guō(zi)",
    "part_of_speech": "N",
    "meaning": "cái nồi"
  },
  {
    "chinese": "國會",
    "level": "B2",
    "pinyin": "guóhuì",
    "part_of_speech": "N",
    "meaning": "quốc hội"
  },
  {
    "chinese": "國籍",
    "level": "B2",
    "pinyin": "guójí",
    "part_of_speech": "N",
    "meaning": "quốc tịch"
  },
  {
    "chinese": "國際",
    "level": "B2",
    "pinyin": "guójì",
    "part_of_speech": "N",
    "meaning": "quốc tế"
  },
  {
    "chinese": "國立",
    "level": "B2",
    "pinyin": "guólì",
    "part_of_speech": "Vs-attr",
    "meaning": "quốc lập, công lập"
  },
  {
    "chinese": "國旗",
    "level": "B2",
    "pinyin": "guóqí",
    "part_of_speech": "N",
    "meaning": "quốc kỳ"
  },
  {
    "chinese": "國小",
    "level": "B2",
    "pinyin": "guóxiăo",
    "part_of_speech": "N",
    "meaning": "tiểu học"
  },
  {
    "chinese": "國中",
    "level": "B2",
    "pinyin": "guózhōng",
    "part_of_speech": "N",
    "meaning": "trung học cơ sở"
  },
  {
    "chinese": "裹",
    "level": "B2",
    "pinyin": "guŏ",
    "part_of_speech": "V",
    "meaning": "quấn, bọc"
  },
  {
    "chinese": "果然",
    "level": "B2",
    "pinyin": "guŏrán",
    "part_of_speech": "Adv",
    "meaning": "quả nhiên, đúng là"
  },
  {
    "chinese": "過",
    "level": "B2",
    "pinyin": "guò",
    "part_of_speech": "Adv",
    "meaning": "qua, trải qua"
  },
  {
    "chinese": "過程",
    "level": "B2",
    "pinyin": "guòchéng",
    "part_of_speech": "N",
    "meaning": "quá trình"
  },
  {
    "chinese": "過度",
    "level": "B2",
    "pinyin": "guòdù",
    "part_of_speech": "Vs",
    "meaning": "quá mức"
  },
  {
    "chinese": "過渡",
    "level": "B2",
    "pinyin": "guòdù",
    "part_of_speech": "Vi",
    "meaning": "chuyển tiếp sang"
  },
  {
    "chinese": "過節",
    "level": "B2",
    "pinyin": "guòjié",
    "part_of_speech": "V-sep",
    "meaning": "ăn tết, chơi lễ"
  },
  {
    "chinese": "過濾",
    "level": "B2",
    "pinyin": "guòlǜ",
    "part_of_speech": "V",
    "meaning": "lọc (bột, nước)"
  },
  {
    "chinese": "過期",
    "level": "B2",
    "pinyin": "guòqí",
    "part_of_speech": "Vp",
    "meaning": "quá hạn"
  },
  {
    "chinese": "過世",
    "level": "B2",
    "pinyin": "guòshì",
    "part_of_speech": "Vp",
    "meaning": "mất, qua đời"
  },
  {
    "chinese": "還不如",
    "level": "B2",
    "pinyin": "háibùrú",
    "part_of_speech": "Conj",
    "meaning": "chi bằng..."
  },
  {
    "chinese": "還有",
    "level": "B2",
    "pinyin": "háiyŏu",
    "part_of_speech": "Conj",
    "meaning": "vẫn còn"
  },
  {
    "chinese": "海關",
    "level": "B2",
    "pinyin": "hăiguān",
    "part_of_speech": "N",
    "meaning": "hải quan"
  },
  {
    "chinese": "海軍",
    "level": "B2",
    "pinyin": "hăijūn",
    "part_of_speech": "N",
    "meaning": "hải quân"
  },
  {
    "chinese": "海外",
    "level": "B2",
    "pinyin": "hăiwài",
    "part_of_speech": "N",
    "meaning": "hải ngoại, nước ngoài"
  },
  {
    "chinese": "海峽",
    "level": "B2",
    "pinyin": "hăixiá",
    "part_of_speech": "N",
    "meaning": "eo biển"
  },
  {
    "chinese": "海鮮",
    "level": "B2",
    "pinyin": "hăixiān",
    "part_of_speech": "N",
    "meaning": "hải sản"
  },
  {
    "chinese": "害處",
    "level": "B2",
    "pinyin": "hàichù",
    "part_of_speech": "N",
    "meaning": "điều có hại"
  },
  {
    "chinese": "含",
    "level": "B2",
    "pinyin": "hán",
    "part_of_speech": "V",
    "meaning": "ngậm, chứa"
  },
  {
    "chinese": "含",
    "level": "B2",
    "pinyin": "hán",
    "part_of_speech": "Vst",
    "meaning": "kín đáo"
  },
  {
    "chinese": "含量",
    "level": "B2",
    "pinyin": "hánliàng",
    "part_of_speech": "N",
    "meaning": "hàm lượng"
  },
  {
    "chinese": "寒冷",
    "level": "B2",
    "pinyin": "hánlěng",
    "part_of_speech": "Vs",
    "meaning": "lạnh lẽo"
  },
  {
    "chinese": "喊",
    "level": "B2",
    "pinyin": "hăn",
    "part_of_speech": "V",
    "meaning": "la hét"
  },
  {
    "chinese": "汗",
    "level": "B2",
    "pinyin": "hàn",
    "part_of_speech": "N",
    "meaning": "mồ hôi"
  },
  {
    "chinese": "行業",
    "level": "B2",
    "pinyin": "hángyè",
    "part_of_speech": "N",
    "meaning": "ngành nghề"
  },
  {
    "chinese": "毫無",
    "level": "B2",
    "pinyin": "háowú",
    "part_of_speech": "Vst",
    "meaning": "không hề"
  },
  {
    "chinese": "好",
    "level": "B2",
    "pinyin": "hăo",
    "part_of_speech": "Adv",
    "meaning": "tốt lành"
  },
  {
    "chinese": "好",
    "level": "B2",
    "pinyin": "hăo",
    "part_of_speech": "Conj",
    "meaning": "hòa hợp"
  },
  {
    "chinese": "好在",
    "level": "B2",
    "pinyin": "hăozài",
    "part_of_speech": "Adv",
    "meaning": "may mà"
  },
  {
    "chinese": "耗",
    "level": "B2",
    "pinyin": "hào",
    "part_of_speech": "Vst",
    "meaning": "tiêu hao, hao tốn"
  },
  {
    "chinese": "好客",
    "level": "B2",
    "pinyin": "hàokè",
    "part_of_speech": "Vs",
    "meaning": "hiếu khách"
  },
  {
    "chinese": "好奇",
    "level": "B2",
    "pinyin": "hàoqí",
    "part_of_speech": "Vs",
    "meaning": "hiếu kỳ"
  },
  {
    "chinese": "號召",
    "level": "B2",
    "pinyin": "hàozhào",
    "part_of_speech": "V",
    "meaning": "kêu gọi"
  },
  {
    "chinese": "合",
    "level": "B2",
    "pinyin": "hé",
    "part_of_speech": "Vi",
    "meaning": "đấu"
  },
  {
    "chinese": "合",
    "level": "B2",
    "pinyin": "hé",
    "part_of_speech": "Vs",
    "meaning": "cái đấu (để đong lương thực)"
  },
  {
    "chinese": "合不來",
    "level": "B2",
    "pinyin": "hébulái",
    "part_of_speech": "Vs",
    "meaning": "không hợp nhau"
  },
  {
    "chinese": "合成",
    "level": "B2",
    "pinyin": "héchéng",
    "part_of_speech": "Vst",
    "meaning": "hợp thành"
  },
  {
    "chinese": "合得來",
    "level": "B2",
    "pinyin": "hédelái",
    "part_of_speech": "Vs",
    "meaning": "hợp nhau, hòa hợp"
  },
  {
    "chinese": "合法",
    "level": "B2",
    "pinyin": "héfă",
    "part_of_speech": "Vs",
    "meaning": "hợp pháp"
  },
  {
    "chinese": "合格",
    "level": "B2",
    "pinyin": "hégé",
    "part_of_speech": "Vp",
    "meaning": "hợp lệ"
  },
  {
    "chinese": "合乎",
    "level": "B2",
    "pinyin": "héhū",
    "part_of_speech": "Vst",
    "meaning": "phù hợp"
  },
  {
    "chinese": "合理",
    "level": "B2",
    "pinyin": "hélĭ",
    "part_of_speech": "Vs",
    "meaning": "hợp lý"
  },
  {
    "chinese": "合適",
    "level": "B2",
    "pinyin": "héshì",
    "part_of_speech": "Vs",
    "meaning": "thích hợp"
  },
  {
    "chinese": "合算",
    "level": "B2",
    "pinyin": "hésuàn",
    "part_of_speech": "Vs",
    "meaning": "có lợi"
  },
  {
    "chinese": "和好",
    "level": "B2",
    "pinyin": "héhăo",
    "part_of_speech": "Vp",
    "meaning": "hòa thuận"
  },
  {
    "chinese": "和平",
    "level": "B2",
    "pinyin": "hépíng",
    "part_of_speech": "Vs",
    "meaning": "hòa bình"
  },
  {
    "chinese": "和氣",
    "level": "B2",
    "pinyin": "héqì",
    "part_of_speech": "Vs",
    "meaning": "ôn hòa, nhã nhặn"
  },
  {
    "chinese": "何必",
    "level": "B2",
    "pinyin": "hébì",
    "part_of_speech": "Adv",
    "meaning": "hà tất, hà cớ"
  },
  {
    "chinese": "何況",
    "level": "B2",
    "pinyin": "hékuàng",
    "part_of_speech": "Conj",
    "meaning": "huống hồ, vả lại"
  },
  {
    "chinese": "河流",
    "level": "B2",
    "pinyin": "héliú",
    "part_of_speech": "N",
    "meaning": "sông ngòi"
  },
  {
    "chinese": "嘿",
    "level": "B2",
    "pinyin": "hēi",
    "part_of_speech": "Ptc",
    "meaning": "tối"
  },
  {
    "chinese": "黑暗",
    "level": "B2",
    "pinyin": "hēiàn",
    "part_of_speech": "Vs",
    "meaning": "tối tăm, đen tối"
  },
  {
    "chinese": "黑夜",
    "level": "B2",
    "pinyin": "hēiyè",
    "part_of_speech": "N",
    "meaning": "đêm khuya"
  },
  {
    "chinese": "痕跡",
    "level": "B2",
    "pinyin": "hénjī",
    "part_of_speech": "N",
    "meaning": "dấu vết"
  },
  {
    "chinese": "恨",
    "level": "B2",
    "pinyin": "hèn",
    "part_of_speech": "N",
    "meaning": "thù hận"
  },
  {
    "chinese": "橫",
    "level": "B2",
    "pinyin": "héng",
    "part_of_speech": "Vs-attr",
    "meaning": "ngang, hoành, vắt ngang"
  },
  {
    "chinese": "喉嚨",
    "level": "B2",
    "pinyin": "hóulong",
    "part_of_speech": "N",
    "meaning": "yết hầu, cổ họng"
  },
  {
    "chinese": "猴子",
    "level": "B2",
    "pinyin": "hóuzi",
    "part_of_speech": "N",
    "meaning": "con khỉ"
  },
  {
    "chinese": "後代",
    "level": "B2",
    "pinyin": "hòudài",
    "part_of_speech": "N",
    "meaning": "đời sau"
  },
  {
    "chinese": "後方",
    "level": "B2",
    "pinyin": "hòufāng",
    "part_of_speech": "N",
    "meaning": "hậu phương"
  },
  {
    "chinese": "後果",
    "level": "B2",
    "pinyin": "hòuguŏ",
    "part_of_speech": "N",
    "meaning": "hậu quả"
  },
  {
    "chinese": "後悔",
    "level": "B2",
    "pinyin": "hòuhuĭ",
    "part_of_speech": "Vs",
    "meaning": "hối hận"
  },
  {
    "chinese": "後年",
    "level": "B2",
    "pinyin": "hòunián",
    "part_of_speech": "N",
    "meaning": "năm sau nữa"
  },
  {
    "chinese": "後頭",
    "level": "B2",
    "pinyin": "hòutou",
    "part_of_speech": "N",
    "meaning": "phía sau, mặt sau"
  },
  {
    "chinese": "後退",
    "level": "B2",
    "pinyin": "hòutuì",
    "part_of_speech": "Vi",
    "meaning": "lùi về sau"
  },
  {
    "chinese": "後院",
    "level": "B2",
    "pinyin": "hòuyuàn",
    "part_of_speech": "N",
    "meaning": "sân sau"
  },
  {
    "chinese": "呼",
    "level": "B2",
    "pinyin": "hū",
    "part_of_speech": "V",
    "meaning": "huýt sáo"
  },
  {
    "chinese": "呼吸",
    "level": "B2",
    "pinyin": "hūxī",
    "part_of_speech": "Vi",
    "meaning": "hít thở"
  },
  {
    "chinese": "忽略",
    "level": "B2",
    "pinyin": "hūlüè",
    "part_of_speech": "Vst",
    "meaning": "không chú ý, sơ hở"
  },
  {
    "chinese": "忽視",
    "level": "B2",
    "pinyin": "hūshì",
    "part_of_speech": "Vst",
    "meaning": "xem nhẹ, lơ là"
  },
  {
    "chinese": "蝴蝶",
    "level": "B2",
    "pinyin": "húdié",
    "part_of_speech": "N",
    "meaning": "bươm bướm"
  },
  {
    "chinese": "鬍子",
    "level": "B2",
    "pinyin": "húzi",
    "part_of_speech": "N",
    "meaning": "râu, ria"
  },
  {
    "chinese": "戶",
    "level": "B2",
    "pinyin": "hù",
    "part_of_speech": "M",
    "meaning": "hộ, nhà"
  },
  {
    "chinese": "戶外",
    "level": "B2",
    "pinyin": "hùwài",
    "part_of_speech": "N",
    "meaning": "ngoài trời"
  },
  {
    "chinese": "互助",
    "level": "B2",
    "pinyin": "hùzhù",
    "part_of_speech": "Vi",
    "meaning": "hỗ trợ, giúp đỡ lẫn nhau"
  },
  {
    "chinese": "花草",
    "level": "B2",
    "pinyin": "huācăo",
    "part_of_speech": "N",
    "meaning": "hoa cỏ"
  },
  {
    "chinese": "花費",
    "level": "B2",
    "pinyin": "huāfèi",
    "part_of_speech": "N",
    "meaning": "chi phí"
  },
  {
    "chinese": "花費",
    "level": "B2",
    "pinyin": "huāfèi",
    "part_of_speech": "V",
    "meaning": "tiêu xài"
  },
  {
    "chinese": "花盆",
    "level": "B2",
    "pinyin": "huāpén",
    "part_of_speech": "N",
    "meaning": "chậu hoa"
  },
  {
    "chinese": "花瓶",
    "level": "B2",
    "pinyin": "huāpíng",
    "part_of_speech": "N",
    "meaning": "bình hoa"
  },
  {
    "chinese": "花色",
    "level": "B2",
    "pinyin": "huāsè",
    "part_of_speech": "N",
    "meaning": "màu sắc và hoa văn"
  },
  {
    "chinese": "花生",
    "level": "B2",
    "pinyin": "huāshēng",
    "part_of_speech": "N",
    "meaning": "đậu phộng"
  },
  {
    "chinese": "划",
    "level": "B2",
    "pinyin": "huá",
    "part_of_speech": "V",
    "meaning": "trơn, nhẵn"
  },
  {
    "chinese": "滑",
    "level": "B2",
    "pinyin": "huá",
    "part_of_speech": "Vp",
    "meaning": "trơn bóng"
  },
  {
    "chinese": "滑",
    "level": "B2",
    "pinyin": "huá",
    "part_of_speech": "Vs",
    "meaning": "gian xảo, lừa dối"
  },
  {
    "chinese": "華僑",
    "level": "B2",
    "pinyin": "huáqiáo",
    "part_of_speech": "N",
    "meaning": "Hoa Kiều"
  },
  {
    "chinese": "華人",
    "level": "B2",
    "pinyin": "huárén",
    "part_of_speech": "N",
    "meaning": "người Hoa"
  },
  {
    "chinese": "化",
    "level": "B2",
    "pinyin": "huà",
    "part_of_speech": "Vst",
    "meaning": "tiêu, xài"
  },
  {
    "chinese": "化",
    "level": "B2",
    "pinyin": "huà",
    "part_of_speech": "Vp",
    "meaning": "tiêu tốn"
  },
  {
    "chinese": "化學",
    "level": "B2",
    "pinyin": "huàxué",
    "part_of_speech": "N",
    "meaning": "hóa học"
  },
  {
    "chinese": "化妝",
    "level": "B2",
    "pinyin": "huàzhuāng",
    "part_of_speech": "Vi",
    "meaning": "trang điểm"
  },
  {
    "chinese": "化裝",
    "level": "B2",
    "pinyin": "huàzhuāng",
    "part_of_speech": "Vi",
    "meaning": "hóa trang"
  },
  {
    "chinese": "懷念",
    "level": "B2",
    "pinyin": "huáiniàn",
    "part_of_speech": "Vst",
    "meaning": "hoài niệm, nhớ nhung"
  },
  {
    "chinese": "懷孕",
    "level": "B2",
    "pinyin": "huáiyùn",
    "part_of_speech": "Vi",
    "meaning": "mang thai"
  },
  {
    "chinese": "壞蛋",
    "level": "B2",
    "pinyin": "huàidàn",
    "part_of_speech": "N",
    "meaning": "đồ tồi, khốn nạn"
  },
  {
    "chinese": "歡呼",
    "level": "B2",
    "pinyin": "huānhū",
    "part_of_speech": "Vi",
    "meaning": "hạnh phúc"
  },
  {
    "chinese": "歡樂",
    "level": "B2",
    "pinyin": "huānlè",
    "part_of_speech": "Vs",
    "meaning": "vui mừng, vui vẻ"
  },
  {
    "chinese": "歡喜",
    "level": "B2",
    "pinyin": "huānxĭ",
    "part_of_speech": "Vs",
    "meaning": "vui sướng, thích thú"
  },
  {
    "chinese": "緩和",
    "level": "B2",
    "pinyin": "huănhé",
    "part_of_speech": "V",
    "meaning": "xoa dịu"
  },
  {
    "chinese": "緩慢",
    "level": "B2",
    "pinyin": "huănmàn",
    "part_of_speech": "Vs",
    "meaning": "từ tốn, chậm chạp"
  },
  {
    "chinese": "幻想",
    "level": "B2",
    "pinyin": "huànxiăng",
    "part_of_speech": "N",
    "meaning": "ảo tưởng"
  },
  {
    "chinese": "幻想",
    "level": "B2",
    "pinyin": "huànxiăng",
    "part_of_speech": "Vi",
    "meaning": "tưởng tượng"
  },
  {
    "chinese": "慌",
    "level": "B2",
    "pinyin": "huāng",
    "part_of_speech": "Vs",
    "meaning": "hoảng sợ"
  },
  {
    "chinese": "皇帝",
    "level": "B2",
    "pinyin": "huángdì",
    "part_of_speech": "N",
    "meaning": "hoàng đế"
  },
  {
    "chinese": "黃豆",
    "level": "B2",
    "pinyin": "huángdòu",
    "part_of_speech": "N",
    "meaning": "đậu tương, đậu nành"
  },
  {
    "chinese": "黃昏",
    "level": "B2",
    "pinyin": "huánghūn",
    "part_of_speech": "N",
    "meaning": "hoàng hôn"
  },
  {
    "chinese": "灰",
    "level": "B2",
    "pinyin": "huī",
    "part_of_speech": "Vs-attr",
    "meaning": "tro, than"
  },
  {
    "chinese": "灰色",
    "level": "B2",
    "pinyin": "huīsè",
    "part_of_speech": "N",
    "meaning": "màu xám"
  },
  {
    "chinese": "灰心",
    "level": "B2",
    "pinyin": "huīxīn",
    "part_of_speech": "Vs",
    "meaning": "nản lòng"
  },
  {
    "chinese": "揮",
    "level": "B2",
    "pinyin": "huī",
    "part_of_speech": "V",
    "meaning": "khua, vung, múa"
  },
  {
    "chinese": "回",
    "level": "B2",
    "pinyin": "huí",
    "part_of_speech": "V",
    "meaning": "quanh co, trở về"
  },
  {
    "chinese": "回電",
    "level": "B2",
    "pinyin": "huídiàn",
    "part_of_speech": "V-sep",
    "meaning": "gửi điện trả lời"
  },
  {
    "chinese": "回收",
    "level": "B2",
    "pinyin": "huíshōu",
    "part_of_speech": "V",
    "meaning": "thu hồi"
  },
  {
    "chinese": "回頭",
    "level": "B2",
    "pinyin": "huítóu",
    "part_of_speech": "V-sep",
    "meaning": "quay đầu, ngoảnh lại"
  },
  {
    "chinese": "回信",
    "level": "B2",
    "pinyin": "huíxìn",
    "part_of_speech": "V-sep",
    "meaning": "hồi âm"
  },
  {
    "chinese": "回憶",
    "level": "B2",
    "pinyin": "huíyì",
    "part_of_speech": "Vst",
    "meaning": "hồi tưởng, nhớ lại"
  },
  {
    "chinese": "匯款",
    "level": "B2",
    "pinyin": "huìkuăn",
    "part_of_speech": "V-sep",
    "meaning": "gửi tiền, chuyển tiền"
  },
  {
    "chinese": "會員",
    "level": "B2",
    "pinyin": "huìyuán",
    "part_of_speech": "N",
    "meaning": "hội viên"
  },
  {
    "chinese": "昏倒",
    "level": "B2",
    "pinyin": "hūndăo",
    "part_of_speech": "Vp",
    "meaning": "ngất xỉu"
  },
  {
    "chinese": "昏迷",
    "level": "B2",
    "pinyin": "hūnmí",
    "part_of_speech": "Vp",
    "meaning": "hôn mê"
  },
  {
    "chinese": "混",
    "level": "B2",
    "pinyin": "hùn",
    "part_of_speech": "V",
    "meaning": "trộn lẫn"
  },
  {
    "chinese": "混合",
    "level": "B2",
    "pinyin": "hùnhé",
    "part_of_speech": "V",
    "meaning": "hỗn hợp"
  },
  {
    "chinese": "活該",
    "level": "B2",
    "pinyin": "huógāi",
    "part_of_speech": "Vs",
    "meaning": "đáng đời"
  },
  {
    "chinese": "活力",
    "level": "B2",
    "pinyin": "huólì",
    "part_of_speech": "N",
    "meaning": "sinh lực, sức sống"
  },
  {
    "chinese": "活潑",
    "level": "B2",
    "pinyin": "huópō",
    "part_of_speech": "Vs",
    "meaning": "hoạt bát"
  },
  {
    "chinese": "活躍",
    "level": "B2",
    "pinyin": "huóyuè",
    "part_of_speech": "Vs",
    "meaning": "sinh động"
  },
  {
    "chinese": "火柴",
    "level": "B2",
    "pinyin": "huŏchái",
    "part_of_speech": "N",
    "meaning": "diêm quẹt"
  },
  {
    "chinese": "火腿",
    "level": "B2",
    "pinyin": "huŏtuĭ",
    "part_of_speech": "N",
    "meaning": "chân giò hun khói"
  },
  {
    "chinese": "火災",
    "level": "B2",
    "pinyin": "huŏzāi",
    "part_of_speech": "N",
    "meaning": "hỏa hoạn"
  },
  {
    "chinese": "禍",
    "level": "B2",
    "pinyin": "huò",
    "part_of_speech": "N",
    "meaning": "họa, tai nạn"
  },
  {
    "chinese": "或多或少",
    "level": "B2",
    "pinyin": "huòduōhuòshăo",
    "part_of_speech": "Adv",
    "meaning": "dù ít dù nhiều"
  },
  {
    "chinese": "或者",
    "level": "B2",
    "pinyin": "huòzhě",
    "part_of_speech": "Conj",
    "meaning": "có lẽ, hoặc là"
  },
  {
    "chinese": "貨物",
    "level": "B2",
    "pinyin": "huòwù",
    "part_of_speech": "N",
    "meaning": "hàng hóa"
  },
  {
    "chinese": "獲得",
    "level": "B2",
    "pinyin": "huòdé",
    "part_of_speech": "Vpt",
    "meaning": "thu được, giành được"
  },
  {
    "chinese": "肌肉",
    "level": "B2",
    "pinyin": "jīròu",
    "part_of_speech": "N",
    "meaning": "cơ bắp"
  },
  {
    "chinese": "基本上",
    "level": "B2",
    "pinyin": "jīběnshàng",
    "part_of_speech": "Adv",
    "meaning": "chủ yếu, cốt yếu"
  },
  {
    "chinese": "基金",
    "level": "B2",
    "pinyin": "jījīn",
    "part_of_speech": "N",
    "meaning": "quỹ, ngân sách"
  },
  {
    "chinese": "幾乎",
    "level": "B2",
    "pinyin": "jīhū",
    "part_of_speech": "Adv",
    "meaning": "hầu như, gần như"
  },
  {
    "chinese": "機構",
    "level": "B2",
    "pinyin": "jīgòu",
    "part_of_speech": "N",
    "meaning": "cơ cấu, cơ quan"
  },
  {
    "chinese": "機關",
    "level": "B2",
    "pinyin": "jīguān",
    "part_of_speech": "N",
    "meaning": "bộ phận"
  },
  {
    "chinese": "機票",
    "level": "B2",
    "pinyin": "jīpiào",
    "part_of_speech": "N",
    "meaning": "vé máy bay"
  },
  {
    "chinese": "機械",
    "level": "B2",
    "pinyin": "jīxiè",
    "part_of_speech": "N",
    "meaning": "máy móc"
  },
  {
    "chinese": "及格",
    "level": "B2",
    "pinyin": "jígé",
    "part_of_speech": "Vp",
    "meaning": "đạt tiêu chuẩn"
  },
  {
    "chinese": "及時",
    "level": "B2",
    "pinyin": "jíshí",
    "part_of_speech": "Adv",
    "meaning": "đúng lúc, kịp thời"
  },
  {
    "chinese": "即將",
    "level": "B2",
    "pinyin": "jíjiāng",
    "part_of_speech": "Adv",
    "meaning": "sắp, sẽ"
  },
  {
    "chinese": "即使",
    "level": "B2",
    "pinyin": "jíshĭ",
    "part_of_speech": "Conj",
    "meaning": "cho dù"
  },
  {
    "chinese": "極其",
    "level": "B2",
    "pinyin": "jíqí",
    "part_of_speech": "Adv",
    "meaning": "cực kỳ"
  },
  {
    "chinese": "級",
    "level": "B2",
    "pinyin": "jí",
    "part_of_speech": "M",
    "meaning": "cấp bậc"
  },
  {
    "chinese": "集",
    "level": "B2",
    "pinyin": "jí",
    "part_of_speech": "M",
    "meaning": "tập"
  },
  {
    "chinese": "集",
    "level": "B2",
    "pinyin": "jí",
    "part_of_speech": "V",
    "meaning": "tập hợp, tụ tập"
  },
  {
    "chinese": "集合",
    "level": "B2",
    "pinyin": "jíhé",
    "part_of_speech": "Vi",
    "meaning": "thu thập, tập hợp"
  },
  {
    "chinese": "集郵",
    "level": "B2",
    "pinyin": "jíyóu",
    "part_of_speech": "Vi",
    "meaning": "sưu tập tem"
  },
  {
    "chinese": "集中",
    "level": "B2",
    "pinyin": "jízhōng",
    "part_of_speech": "V",
    "meaning": "tập trung"
  },
  {
    "chinese": "集中",
    "level": "B2",
    "pinyin": "jízhōng",
    "part_of_speech": "Vs",
    "meaning": "tập hợp"
  },
  {
    "chinese": "疾病",
    "level": "B2",
    "pinyin": "jíbìng",
    "part_of_speech": "N",
    "meaning": "bệnh tật"
  },
  {
    "chinese": "急忙",
    "level": "B2",
    "pinyin": "jímáng",
    "part_of_speech": "Adv",
    "meaning": "vội vã"
  },
  {
    "chinese": "寂寞",
    "level": "B2",
    "pinyin": "jímò",
    "part_of_speech": "Vs",
    "meaning": "cô quạnh, cô đơn"
  },
  {
    "chinese": "既然",
    "level": "B2",
    "pinyin": "jìrán",
    "part_of_speech": "Conj",
    "meaning": "nếu đã..."
  },
  {
    "chinese": "技術",
    "level": "B2",
    "pinyin": "jìshù",
    "part_of_speech": "N",
    "meaning": "kỹ thuật"
  },
  {
    "chinese": "計算",
    "level": "B2",
    "pinyin": "jìsuàn",
    "part_of_speech": "V",
    "meaning": "tính toán"
  },
  {
    "chinese": "計較",
    "level": "B2",
    "pinyin": "jìjiào",
    "part_of_speech": "Vs",
    "meaning": "so bì, tị nạnh"
  },
  {
    "chinese": "記性",
    "level": "B2",
    "pinyin": "jìxìng",
    "part_of_speech": "N",
    "meaning": "trí nhớ"
  },
  {
    "chinese": "記憶",
    "level": "B2",
    "pinyin": "jìyì",
    "part_of_speech": "Vi",
    "meaning": "nhớ lại, ký ức"
  },
  {
    "chinese": "記載",
    "level": "B2",
    "pinyin": "jìzài",
    "part_of_speech": "V",
    "meaning": "ghi chép"
  },
  {
    "chinese": "記住",
    "level": "B2",
    "pinyin": "jìzhù",
    "part_of_speech": "Vpt",
    "meaning": "ghi nhớ"
  },
  {
    "chinese": "加班",
    "level": "B2",
    "pinyin": "jiābān",
    "part_of_speech": "V-sep",
    "meaning": "tăng ca, làm thêm giờ"
  },
  {
    "chinese": "加工",
    "level": "B2",
    "pinyin": "jiāgōng",
    "part_of_speech": "V-sep",
    "meaning": "gia công"
  },
  {
    "chinese": "加上",
    "level": "B2",
    "pinyin": "jiāshàng",
    "part_of_speech": "Conj",
    "meaning": "công, thêm vào"
  },
  {
    "chinese": "加速",
    "level": "B2",
    "pinyin": "jiāsù",
    "part_of_speech": "V",
    "meaning": "tăng tốc"
  },
  {
    "chinese": "加以",
    "level": "B2",
    "pinyin": "jiāyĭ",
    "part_of_speech": "Adv",
    "meaning": "tiến hành"
  },
  {
    "chinese": "家事",
    "level": "B2",
    "pinyin": "jiāshì",
    "part_of_speech": "N",
    "meaning": "việc nhà, chuyện nhà"
  },
  {
    "chinese": "夾",
    "level": "B2",
    "pinyin": "jiá",
    "part_of_speech": "V",
    "meaning": "kép, đôi"
  },
  {
    "chinese": "甲",
    "level": "B2",
    "pinyin": "jiă",
    "part_of_speech": "N/M",
    "meaning": "giáp/ hạng, bậc"
  },
  {
    "chinese": "嫁",
    "level": "B2",
    "pinyin": "jià",
    "part_of_speech": "V",
    "meaning": "lấy chồng, xuất giá"
  },
  {
    "chinese": "駕駛",
    "level": "B2",
    "pinyin": "jiàshĭ",
    "part_of_speech": "N",
    "meaning": "điều khiển"
  },
  {
    "chinese": "駕駛",
    "level": "B2",
    "pinyin": "jiàshĭ",
    "part_of_speech": "V",
    "meaning": "lái, bẻ lái"
  },
  {
    "chinese": "價值",
    "level": "B2",
    "pinyin": "jiàzhí",
    "part_of_speech": "Vst",
    "meaning": "giá trị (hàng hóa)"
  },
  {
    "chinese": "尖",
    "level": "B2",
    "pinyin": "jiān",
    "part_of_speech": "Vs",
    "meaning": "nhọn, nhạy, thính"
  },
  {
    "chinese": "尖銳",
    "level": "B2",
    "pinyin": "jiānruì",
    "part_of_speech": "Vs",
    "meaning": "sắc bén"
  },
  {
    "chinese": "肩",
    "level": "B2",
    "pinyin": "jiān",
    "part_of_speech": "N",
    "meaning": "vai, bả vai"
  },
  {
    "chinese": "兼",
    "level": "B2",
    "pinyin": "jiān",
    "part_of_speech": "V",
    "meaning": "gấp đôi"
  },
  {
    "chinese": "間",
    "level": "B2",
    "pinyin": "jiān",
    "part_of_speech": "N",
    "meaning": "giữa, ở giữa"
  },
  {
    "chinese": "堅定",
    "level": "B2",
    "pinyin": "jiāndìng",
    "part_of_speech": "Vs",
    "meaning": "kiên định, không dao động"
  },
  {
    "chinese": "堅決",
    "level": "B2",
    "pinyin": "jiānjué",
    "part_of_speech": "Vs",
    "meaning": "kiên quyết"
  },
  {
    "chinese": "監視",
    "level": "B2",
    "pinyin": "jiānshì",
    "part_of_speech": "V",
    "meaning": "giám thị, theo dõi"
  },
  {
    "chinese": "監獄",
    "level": "B2",
    "pinyin": "jiānyù",
    "part_of_speech": "N",
    "meaning": "nhà tù, nhà giam"
  },
  {
    "chinese": "揀",
    "level": "B2",
    "pinyin": "jiăn",
    "part_of_speech": "V",
    "meaning": "lựa chọn, lựa"
  },
  {
    "chinese": "撿",
    "level": "B2",
    "pinyin": "jiăn",
    "part_of_speech": "V",
    "meaning": "nhặt lấy, lượm"
  },
  {
    "chinese": "剪刀",
    "level": "B2",
    "pinyin": "jiăndāo",
    "part_of_speech": "N",
    "meaning": "cây kéo"
  },
  {
    "chinese": "檢驗",
    "level": "B2",
    "pinyin": "jiănyàn",
    "part_of_speech": "V",
    "meaning": "kiểm tra, kiểm nghiệm"
  },
  {
    "chinese": "建",
    "level": "B2",
    "pinyin": "jiàn",
    "part_of_speech": "V",
    "meaning": "xây dựng. thiết lập"
  },
  {
    "chinese": "建國",
    "level": "B2",
    "pinyin": "jiànguó",
    "part_of_speech": "Vi",
    "meaning": "kiến quốc, lấp quốc"
  },
  {
    "chinese": "建築",
    "level": "B2",
    "pinyin": "jiànzhú",
    "part_of_speech": "N",
    "meaning": "kiến trúc"
  },
  {
    "chinese": "建築",
    "level": "B2",
    "pinyin": "jiànzhú",
    "part_of_speech": "V",
    "meaning": "xây dựng, gầy dựng"
  },
  {
    "chinese": "箭",
    "level": "B2",
    "pinyin": "jiàn",
    "part_of_speech": "N",
    "meaning": "mũi tên"
  },
  {
    "chinese": "漸漸",
    "level": "B2",
    "pinyin": "jiànjiàn",
    "part_of_speech": "Adv",
    "meaning": "dần dần"
  },
  {
    "chinese": "間接",
    "level": "B2",
    "pinyin": "jiànjiē",
    "part_of_speech": "Vs-attr",
    "meaning": "gián tiếp"
  },
  {
    "chinese": "鍵盤",
    "level": "B2",
    "pinyin": "jiànpán",
    "part_of_speech": "N",
    "meaning": "bàn phím"
  },
  {
    "chinese": "健全",
    "level": "B2",
    "pinyin": "jiànquán",
    "part_of_speech": "Vs",
    "meaning": "khỏe mạnh, vững vàng"
  },
  {
    "chinese": "江",
    "level": "B2",
    "pinyin": "jiāng",
    "part_of_speech": "N",
    "meaning": "sông"
  },
  {
    "chinese": "將",
    "level": "B2",
    "pinyin": "jiāng",
    "part_of_speech": "Adv",
    "meaning": "mang, xách, dìu"
  },
  {
    "chinese": "將要",
    "level": "B2",
    "pinyin": "jiāngyào",
    "part_of_speech": "Adv",
    "meaning": "sắp sửa, sẽ"
  },
  {
    "chinese": "獎金",
    "level": "B2",
    "pinyin": "jiăngjīn",
    "part_of_speech": "N",
    "meaning": "tiền thưởng"
  },
  {
    "chinese": "獎品",
    "level": "B2",
    "pinyin": "jiăngpĭn",
    "part_of_speech": "N",
    "meaning": "phần thưởng"
  },
  {
    "chinese": "降",
    "level": "B2",
    "pinyin": "jiàng",
    "part_of_speech": "Vp",
    "meaning": "đầu hàng"
  },
  {
    "chinese": "降價",
    "level": "B2",
    "pinyin": "jiàngjià",
    "part_of_speech": "Vp-sep",
    "meaning": "giảm giá"
  },
  {
    "chinese": "澆",
    "level": "B2",
    "pinyin": "jiāo",
    "part_of_speech": "V",
    "meaning": "tưới, đổ"
  },
  {
    "chinese": "交代",
    "level": "B2",
    "pinyin": "jiāodai",
    "part_of_speech": "V",
    "meaning": "bàn giao"
  },
  {
    "chinese": "交換",
    "level": "B2",
    "pinyin": "jiāohuàn",
    "part_of_speech": "V",
    "meaning": "trao đổi"
  },
  {
    "chinese": "交際",
    "level": "B2",
    "pinyin": "jiāojì",
    "part_of_speech": "Vi",
    "meaning": "giao tiếp"
  },
  {
    "chinese": "交往",
    "level": "B2",
    "pinyin": "jiāowăng",
    "part_of_speech": "Vi",
    "meaning": "quan hệ qua lại"
  },
  {
    "chinese": "交易",
    "level": "B2",
    "pinyin": "jiāoyì",
    "part_of_speech": "N",
    "meaning": "giao dịch"
  },
  {
    "chinese": "交易",
    "level": "B2",
    "pinyin": "jiāoyì",
    "part_of_speech": "Vi",
    "meaning": "mua bán"
  },
  {
    "chinese": "郊外",
    "level": "B2",
    "pinyin": "jiāowài",
    "part_of_speech": "N",
    "meaning": "ngoại ô"
  },
  {
    "chinese": "角",
    "level": "B2",
    "pinyin": "jiăo",
    "part_of_speech": "N",
    "meaning": "sừng/ góc, góc tư"
  },
  {
    "chinese": "角落",
    "level": "B2",
    "pinyin": "jiăoluò",
    "part_of_speech": "N",
    "meaning": "góc, xó"
  },
  {
    "chinese": "繳",
    "level": "B2",
    "pinyin": "jiăo",
    "part_of_speech": "V",
    "meaning": "giao nộp"
  },
  {
    "chinese": "腳步",
    "level": "B2",
    "pinyin": "jiăobù",
    "part_of_speech": "N",
    "meaning": "bước chân"
  },
  {
    "chinese": "較",
    "level": "B2",
    "pinyin": "jiào",
    "part_of_speech": "Prep",
    "meaning": "so sánh, so đo"
  },
  {
    "chinese": "叫喊",
    "level": "B2",
    "pinyin": "jiàohăn",
    "part_of_speech": "V",
    "meaning": "la hét, kêu la"
  },
  {
    "chinese": "教會",
    "level": "B2",
    "pinyin": "jiàohuì",
    "part_of_speech": "N",
    "meaning": "giáo hội"
  },
  {
    "chinese": "教授",
    "level": "B2",
    "pinyin": "jiàoshòu",
    "part_of_speech": "V",
    "meaning": "giảng dạy, truyền thụ"
  },
  {
    "chinese": "教學",
    "level": "B2",
    "pinyin": "jiàoxué",
    "part_of_speech": "Vi",
    "meaning": "dạy học"
  },
  {
    "chinese": "教訓",
    "level": "B2",
    "pinyin": "jiàoxun",
    "part_of_speech": "V",
    "meaning": "dạy bảo, giáo huấn"
  },
  {
    "chinese": "接",
    "level": "B2",
    "pinyin": "jiē",
    "part_of_speech": "Vst",
    "meaning": "tiếp cận, tiếp xúc"
  },
  {
    "chinese": "接待",
    "level": "B2",
    "pinyin": "jiēdài",
    "part_of_speech": "V",
    "meaning": "tiếp đãi, chiêu đãi"
  },
  {
    "chinese": "接到",
    "level": "B2",
    "pinyin": "jiēdào",
    "part_of_speech": "Vpt",
    "meaning": "để nhận"
  },
  {
    "chinese": "接見",
    "level": "B2",
    "pinyin": "jiējiàn",
    "part_of_speech": "V",
    "meaning": "tiếp kiến, gặp gỡ"
  },
  {
    "chinese": "接近",
    "level": "B2",
    "pinyin": "jiējìn",
    "part_of_speech": "V",
    "meaning": "tiếp cận"
  },
  {
    "chinese": "接近",
    "level": "B2",
    "pinyin": "jiējìn",
    "part_of_speech": "Vs",
    "meaning": "gần kề"
  },
  {
    "chinese": "街道",
    "level": "B2",
    "pinyin": "jiēdào",
    "part_of_speech": "N",
    "meaning": "đường phố"
  },
  {
    "chinese": "街頭",
    "level": "B2",
    "pinyin": "jiētóu",
    "part_of_speech": "N",
    "meaning": "đầu phố"
  },
  {
    "chinese": "階段",
    "level": "B2",
    "pinyin": "jiēduàn",
    "part_of_speech": "N",
    "meaning": "giai đoạn, bước"
  },
  {
    "chinese": "節",
    "level": "B2",
    "pinyin": "jié",
    "part_of_speech": "M",
    "meaning": "mấu chốt, khớp"
  },
  {
    "chinese": "節省",
    "level": "B2",
    "pinyin": "jiéshěng",
    "part_of_speech": "Vst",
    "meaning": "tiết kiệm, dành dụm"
  },
  {
    "chinese": "節約",
    "level": "B2",
    "pinyin": "jiéyuē",
    "part_of_speech": "Vst",
    "meaning": "tiết kiệm"
  },
  {
    "chinese": "結",
    "level": "B2",
    "pinyin": "jié",
    "part_of_speech": "N",
    "meaning": "kết, đan, bện"
  },
  {
    "chinese": "結構",
    "level": "B2",
    "pinyin": "jiégòu",
    "part_of_speech": "N",
    "meaning": "kết cấu, cấu hình"
  },
  {
    "chinese": "結果",
    "level": "B2",
    "pinyin": "jiéguŏ",
    "part_of_speech": "N",
    "meaning": "kết quả"
  },
  {
    "chinese": "結果",
    "level": "B2",
    "pinyin": "jiéguŏ",
    "part_of_speech": "Vp-sep",
    "meaning": "kết trải, ra quả"
  },
  {
    "chinese": "結合",
    "level": "B2",
    "pinyin": "jiéhé",
    "part_of_speech": "Vpt",
    "meaning": "kết hợp"
  },
  {
    "chinese": "結論",
    "level": "B2",
    "pinyin": "jiélùn",
    "part_of_speech": "N",
    "meaning": "kết luận"
  },
  {
    "chinese": "結算",
    "level": "B2",
    "pinyin": "jiésuàn",
    "part_of_speech": "Vi",
    "meaning": "kết toán, quyết đoán"
  },
  {
    "chinese": "結帳",
    "level": "B2",
    "pinyin": "jiézhàng",
    "part_of_speech": "Vi",
    "meaning": "thanh toán"
  },
  {
    "chinese": "截止",
    "level": "B2",
    "pinyin": "jiézhĭ",
    "part_of_speech": "Vp",
    "meaning": "hết hạn"
  },
  {
    "chinese": "解",
    "level": "B2",
    "pinyin": "jiě",
    "part_of_speech": "V",
    "meaning": "tách ra"
  },
  {
    "chinese": "解除",
    "level": "B2",
    "pinyin": "jiěchú",
    "part_of_speech": "V",
    "meaning": "xua tan, giải trừ"
  },
  {
    "chinese": "解答",
    "level": "B2",
    "pinyin": "jiědá",
    "part_of_speech": "V",
    "meaning": "giải đáp"
  },
  {
    "chinese": "屆",
    "level": "B2",
    "pinyin": "jiè",
    "part_of_speech": "M",
    "meaning": "lúc, lần"
  },
  {
    "chinese": "界線",
    "level": "B2",
    "pinyin": "jièxiàn",
    "part_of_speech": "N",
    "meaning": "giới tuyến, ranh giới"
  },
  {
    "chinese": "戒指",
    "level": "B2",
    "pinyin": "jièzhĭ",
    "part_of_speech": "N",
    "meaning": "chiếc nhẫn"
  },
  {
    "chinese": "今後",
    "level": "B2",
    "pinyin": "jīnhòu",
    "part_of_speech": "N",
    "meaning": "từ nay về sau"
  },
  {
    "chinese": "金額",
    "level": "B2",
    "pinyin": "jīné",
    "part_of_speech": "N",
    "meaning": "kim ngạch, số tiền"
  },
  {
    "chinese": "金融",
    "level": "B2",
    "pinyin": "jīnróng",
    "part_of_speech": "N",
    "meaning": "tài chính"
  },
  {
    "chinese": "金屬",
    "level": "B2",
    "pinyin": "jīnshŭ",
    "part_of_speech": "N",
    "meaning": "kim loại"
  },
  {
    "chinese": "儘管",
    "level": "B2",
    "pinyin": "jĭnguăn",
    "part_of_speech": "Adv",
    "meaning": "cứ việc, vẫn cứ"
  },
  {
    "chinese": "儘量",
    "level": "B2",
    "pinyin": "jĭnliàng",
    "part_of_speech": "Adv",
    "meaning": "có hết sức, ra sức"
  },
  {
    "chinese": "緊急",
    "level": "B2",
    "pinyin": "jĭnjí",
    "part_of_speech": "Vs",
    "meaning": "khẩn cấp"
  },
  {
    "chinese": "僅僅",
    "level": "B2",
    "pinyin": "jĭnjĭn",
    "part_of_speech": "Adv",
    "meaning": "vẻn vẻn, chỉ, mới"
  },
  {
    "chinese": "近",
    "level": "B2",
    "pinyin": "jìn",
    "part_of_speech": "Vst",
    "meaning": "gần, cận kề"
  },
  {
    "chinese": "近來",
    "level": "B2",
    "pinyin": "jìnlái",
    "part_of_speech": "Adv",
    "meaning": "gần đây, dạo này"
  },
  {
    "chinese": "近視",
    "level": "B2",
    "pinyin": "jìnshì",
    "part_of_speech": "Vs",
    "meaning": "cận thị"
  },
  {
    "chinese": "盡力",
    "level": "B2",
    "pinyin": "jìnlì",
    "part_of_speech": "Vs",
    "meaning": "tận lực, hết sức"
  },
  {
    "chinese": "進入",
    "level": "B2",
    "pinyin": "jìnrù",
    "part_of_speech": "V",
    "meaning": "vào, tiến vào"
  },
  {
    "chinese": "進口",
    "level": "B2",
    "pinyin": "jìnkŏu",
    "part_of_speech": "V",
    "meaning": "nhập khẩu"
  },
  {
    "chinese": "禁止",
    "level": "B2",
    "pinyin": "jìnzhĭ",
    "part_of_speech": "V",
    "meaning": "cấm đoán"
  },
  {
    "chinese": "浸",
    "level": "B2",
    "pinyin": "jìn",
    "part_of_speech": "V",
    "meaning": "ngâm, dầm"
  },
  {
    "chinese": "精彩",
    "level": "B2",
    "pinyin": "jīngcăi",
    "part_of_speech": "Vs",
    "meaning": "ưu việt, xuất sắc"
  },
  {
    "chinese": "精力",
    "level": "B2",
    "pinyin": "jīnglì",
    "part_of_speech": "N",
    "meaning": "tinh thần và thể lực"
  },
  {
    "chinese": "精細",
    "level": "B2",
    "pinyin": "jīngxì",
    "part_of_speech": "Vs",
    "meaning": "tinh tế"
  },
  {
    "chinese": "經濟",
    "level": "B2",
    "pinyin": "jīngjì",
    "part_of_speech": "N",
    "meaning": "kinh tế"
  },
  {
    "chinese": "經歷",
    "level": "B2",
    "pinyin": "jīnglì",
    "part_of_speech": "N",
    "meaning": "trải nghiệm"
  },
  {
    "chinese": "經歷",
    "level": "B2",
    "pinyin": "jīnglì",
    "part_of_speech": "Vst",
    "meaning": "từng trải, trải qua"
  },
  {
    "chinese": "經營",
    "level": "B2",
    "pinyin": "jīngyíng",
    "part_of_speech": "V",
    "meaning": "kinh doanh"
  },
  {
    "chinese": "京劇",
    "level": "B2",
    "pinyin": "jīngjù",
    "part_of_speech": "N",
    "meaning": "kinh kịch"
  },
  {
    "chinese": "驚人",
    "level": "B2",
    "pinyin": "jīngrén",
    "part_of_speech": "Vs",
    "meaning": "làm kinh ngạc"
  },
  {
    "chinese": "警告",
    "level": "B2",
    "pinyin": "jĭnggào",
    "part_of_speech": "N",
    "meaning": "cảnh cáo"
  },
  {
    "chinese": "警告",
    "level": "B2",
    "pinyin": "jĭnggào",
    "part_of_speech": "V",
    "meaning": "nhắc nhở, cảnh cáo"
  },
  {
    "chinese": "景色",
    "level": "B2",
    "pinyin": "jĭngsè",
    "part_of_speech": "N",
    "meaning": "cảnh sắc, phong cảnh"
  },
  {
    "chinese": "靜",
    "level": "B2",
    "pinyin": "jìng",
    "part_of_speech": "Vs",
    "meaning": "yên tĩnh, tĩnh"
  },
  {
    "chinese": "鏡(子)",
    "level": "B2",
    "pinyin": "jìng(zi)",
    "part_of_speech": "N",
    "meaning": "gương, kính"
  },
  {
    "chinese": "敬愛",
    "level": "B2",
    "pinyin": "jìngài",
    "part_of_speech": "Vst",
    "meaning": "kính yêu"
  },
  {
    "chinese": "敬酒",
    "level": "B2",
    "pinyin": "jìngjiŭ",
    "part_of_speech": "V-sep",
    "meaning": "mời rượu, kính rượu"
  },
  {
    "chinese": "敬禮",
    "level": "B2",
    "pinyin": "jìnglĭ",
    "part_of_speech": "V-sep",
    "meaning": "cúi chào"
  },
  {
    "chinese": "淨化",
    "level": "B2",
    "pinyin": "jìnghuà",
    "part_of_speech": "Vpt",
    "meaning": "làm sạch, tinh chế"
  },
  {
    "chinese": "竟然",
    "level": "B2",
    "pinyin": "jìngrán",
    "part_of_speech": "Adv",
    "meaning": "mà, vậy mà"
  },
  {
    "chinese": "競爭",
    "level": "B2",
    "pinyin": "jìngzhēng",
    "part_of_speech": "Vi",
    "meaning": "cạnh tranh"
  },
  {
    "chinese": "糾正",
    "level": "B2",
    "pinyin": "jiūzhèng",
    "part_of_speech": "V",
    "meaning": "uốn nắn, sửa chữa"
  },
  {
    "chinese": "酒會",
    "level": "B2",
    "pinyin": "jiŭhuì",
    "part_of_speech": "N",
    "meaning": "tiệc rượu"
  },
  {
    "chinese": "就",
    "level": "B2",
    "pinyin": "jiù",
    "part_of_speech": "Adv",
    "meaning": "thì, sẽ"
  },
  {
    "chinese": "就是",
    "level": "B2",
    "pinyin": "jiùshì",
    "part_of_speech": "Adv",
    "meaning": "nhất định, cứ"
  },
  {
    "chinese": "就是說",
    "level": "B2",
    "pinyin": "jiùshìshuō",
    "part_of_speech": "Conj",
    "meaning": "đó là, chính là"
  },
  {
    "chinese": "就業",
    "level": "B2",
    "pinyin": "jiùyè",
    "part_of_speech": "Vi",
    "meaning": "vào nghề, đi làm"
  },
  {
    "chinese": "救火",
    "level": "B2",
    "pinyin": "jiùhuŏ",
    "part_of_speech": "Vi",
    "meaning": "cứu hỏa, chữa cháy"
  },
  {
    "chinese": "究竟",
    "level": "B2",
    "pinyin": "jiùjìng",
    "part_of_speech": "Adv",
    "meaning": "kết quả, thành quả"
  },
  {
    "chinese": "居民",
    "level": "B2",
    "pinyin": "jūmín",
    "part_of_speech": "N",
    "meaning": "cư dân"
  },
  {
    "chinese": "居然",
    "level": "B2",
    "pinyin": "jūrán",
    "part_of_speech": "Adv",
    "meaning": "lại có thể"
  },
  {
    "chinese": "局",
    "level": "B2",
    "pinyin": "jú",
    "part_of_speech": "M",
    "meaning": "cảnh, cục, cuộc"
  },
  {
    "chinese": "鞠躬",
    "level": "B2",
    "pinyin": "júgōng",
    "part_of_speech": "Vi",
    "meaning": "cúi chào, khom"
  },
  {
    "chinese": "巨大",
    "level": "B2",
    "pinyin": "jùdà",
    "part_of_speech": "Vs",
    "meaning": "to lớn, vĩ đại"
  },
  {
    "chinese": "具",
    "level": "B2",
    "pinyin": "jù",
    "part_of_speech": "M",
    "meaning": "cái"
  },
  {
    "chinese": "具",
    "level": "B2",
    "pinyin": "jù",
    "part_of_speech": "Vst",
    "meaning": "vốn có"
  },
  {
    "chinese": "具備",
    "level": "B2",
    "pinyin": "jùbèi",
    "part_of_speech": "Vst",
    "meaning": "có đủ, có sẵn"
  },
  {
    "chinese": "具體",
    "level": "B2",
    "pinyin": "jùtĭ",
    "part_of_speech": "Vs",
    "meaning": "cụ thể"
  },
  {
    "chinese": "俱樂部",
    "level": "B2",
    "pinyin": "jùlèbù",
    "part_of_speech": "N",
    "meaning": "câu lạc bộ"
  },
  {
    "chinese": "聚集",
    "level": "B2",
    "pinyin": "jùjí",
    "part_of_speech": "Vi",
    "meaning": "tập hợp, tụ họp"
  },
  {
    "chinese": "距離",
    "level": "B2",
    "pinyin": "jùlí",
    "part_of_speech": "Prep",
    "meaning": "cách, khoảng cách"
  },
  {
    "chinese": "劇場",
    "level": "B2",
    "pinyin": "jùchăng",
    "part_of_speech": "N",
    "meaning": "rạp, nhà hát"
  },
  {
    "chinese": "劇烈",
    "level": "B2",
    "pinyin": "jùliè",
    "part_of_speech": "Vs",
    "meaning": "kịch liệt"
  },
  {
    "chinese": "劇院",
    "level": "B2",
    "pinyin": "jùyuàn",
    "part_of_speech": "N",
    "meaning": "rạp, nhà hát"
  },
  {
    "chinese": "據說",
    "level": "B2",
    "pinyin": "jùshuō",
    "part_of_speech": "Conj",
    "meaning": "nghe nói"
  },
  {
    "chinese": "捐",
    "level": "B2",
    "pinyin": "juān",
    "part_of_speech": "V",
    "meaning": "vứt bỏ, bỏ đi"
  },
  {
    "chinese": "捐款",
    "level": "B2",
    "pinyin": "juānkuăn",
    "part_of_speech": "N",
    "meaning": "quyên tiền"
  },
  {
    "chinese": "捐款",
    "level": "B2",
    "pinyin": "juānkuăn",
    "part_of_speech": "V-sep",
    "meaning": "tặng, cúng, hiến"
  },
  {
    "chinese": "卷",
    "level": "B2",
    "pinyin": "juăn",
    "part_of_speech": "M",
    "meaning": "quyển, cuốn"
  },
  {
    "chinese": "捲",
    "level": "B2",
    "pinyin": "juăn",
    "part_of_speech": "V",
    "meaning": "cuốn, cuộn"
  },
  {
    "chinese": "決/絕",
    "level": "B2",
    "pinyin": "jué",
    "part_of_speech": "Adv",
    "meaning": "quyết định"
  },
  {
    "chinese": "決心",
    "level": "B2",
    "pinyin": "juéxīn",
    "part_of_speech": "N",
    "meaning": "lòng quyết tâm"
  },
  {
    "chinese": "決心",
    "level": "B2",
    "pinyin": "juéxīn",
    "part_of_speech": "Vp",
    "meaning": "quyết tâm"
  },
  {
    "chinese": "絕不",
    "level": "B2",
    "pinyin": "juébù",
    "part_of_speech": "Adv",
    "meaning": "tuyệt đối không"
  },
  {
    "chinese": "絕大部分",
    "level": "B2",
    "pinyin": "juédàbùfèn",
    "part_of_speech": "Det",
    "meaning": "đa số áp đảo"
  },
  {
    "chinese": "絕對",
    "level": "B2",
    "pinyin": "juéduì",
    "part_of_speech": "Vs-attr",
    "meaning": "tuyệt đối"
  },
  {
    "chinese": "覺悟",
    "level": "B2",
    "pinyin": "juéwù",
    "part_of_speech": "Vp",
    "meaning": "giác ngộ, tỉnh ngộ"
  },
  {
    "chinese": "軍",
    "level": "B2",
    "pinyin": "jūn",
    "part_of_speech": "N",
    "meaning": "quân,quân đội"
  },
  {
    "chinese": "軍事",
    "level": "B2",
    "pinyin": "jūnshì",
    "part_of_speech": "N",
    "meaning": "quân sự"
  },
  {
    "chinese": "卡",
    "level": "B2",
    "pinyin": "kă",
    "part_of_speech": "M",
    "meaning": "tờ, phiếu"
  },
  {
    "chinese": "卡",
    "level": "B2",
    "pinyin": "kă",
    "part_of_speech": "Vi",
    "meaning": "kẹt lại"
  },
  {
    "chinese": "卡通",
    "level": "B2",
    "pinyin": "kătōng",
    "part_of_speech": "N",
    "meaning": "phim hoạt hình"
  },
  {
    "chinese": "開",
    "level": "B2",
    "pinyin": "kāi",
    "part_of_speech": "Vp",
    "meaning": "mở ra"
  },
  {
    "chinese": "開除",
    "level": "B2",
    "pinyin": "kāichú",
    "part_of_speech": "V",
    "meaning": "khai trừ, đuổi ra"
  },
  {
    "chinese": "開刀",
    "level": "B2",
    "pinyin": "kāidāo",
    "part_of_speech": "V-sep",
    "meaning": "khai đao, chặt"
  },
  {
    "chinese": "開發",
    "level": "B2",
    "pinyin": "kāifā",
    "part_of_speech": "V",
    "meaning": "chi trả, thanh toán"
  },
  {
    "chinese": "開戶",
    "level": "B2",
    "pinyin": "kāihù",
    "part_of_speech": "V-sep",
    "meaning": "mở tài khoản"
  },
  {
    "chinese": "開課",
    "level": "B2",
    "pinyin": "kāikè",
    "part_of_speech": "V-sep",
    "meaning": "nhập học, khai giảng"
  },
  {
    "chinese": "開明",
    "level": "B2",
    "pinyin": "kāimíng",
    "part_of_speech": "Vs",
    "meaning": "khai sáng, văn minh"
  },
  {
    "chinese": "開設",
    "level": "B2",
    "pinyin": "kāishè",
    "part_of_speech": "V",
    "meaning": "mở lớp, bố trí"
  },
  {
    "chinese": "開拓",
    "level": "B2",
    "pinyin": "kāituò",
    "part_of_speech": "V",
    "meaning": "khai phá"
  },
  {
    "chinese": "開演",
    "level": "B2",
    "pinyin": "kāiyăn",
    "part_of_speech": "Vp",
    "meaning": "bắt đầu diễn"
  },
  {
    "chinese": "看家",
    "level": "B2",
    "pinyin": "kānjiā",
    "part_of_speech": "Vi",
    "meaning": "giữ nhà, coi nhà"
  },
  {
    "chinese": "砍",
    "level": "B2",
    "pinyin": "kăn",
    "part_of_speech": "V",
    "meaning": "chặt, chẻ"
  },
  {
    "chinese": "看",
    "level": "B2",
    "pinyin": "kàn",
    "part_of_speech": "Vst",
    "meaning": "chăm sóc, trông giữ"
  },
  {
    "chinese": "看得起",
    "level": "B2",
    "pinyin": "kàndeqĭ",
    "part_of_speech": "Vst",
    "meaning": "tôn trọng, nể mặt"
  },
  {
    "chinese": "看看",
    "level": "B2",
    "pinyin": "kànkan",
    "part_of_speech": "xem",
    "meaning": "qua, kiểm tra"
  },
  {
    "chinese": "看來",
    "level": "B2",
    "pinyin": "kànlái",
    "part_of_speech": "Adv",
    "meaning": "hình như"
  },
  {
    "chinese": "看樣子",
    "level": "B2",
    "pinyin": "kànyàngzi",
    "part_of_speech": "Adv",
    "meaning": "xem ra"
  },
  {
    "chinese": "抗議",
    "level": "B2",
    "pinyin": "kàngyì",
    "part_of_speech": "V",
    "meaning": "kháng nghị"
  },
  {
    "chinese": "考察",
    "level": "B2",
    "pinyin": "kăochá",
    "part_of_speech": "V",
    "meaning": "khảo sát"
  },
  {
    "chinese": "考卷",
    "level": "B2",
    "pinyin": "kăojuàn",
    "part_of_speech": "N",
    "meaning": "bài thi"
  },
  {
    "chinese": "考慮",
    "level": "B2",
    "pinyin": "kăolǜ",
    "part_of_speech": "V",
    "meaning": "suy xét"
  },
  {
    "chinese": "考取",
    "level": "B2",
    "pinyin": "kăoqŭ",
    "part_of_speech": "Vpt",
    "meaning": "thi đậu"
  },
  {
    "chinese": "靠",
    "level": "B2",
    "pinyin": "kào",
    "part_of_speech": "Prep",
    "meaning": "dựa vào"
  },
  {
    "chinese": "靠近",
    "level": "B2",
    "pinyin": "kàojìn",
    "part_of_speech": "V",
    "meaning": "kề, kế, dựa sát"
  },
  {
    "chinese": "科目",
    "level": "B2",
    "pinyin": "kēmù",
    "part_of_speech": "N",
    "meaning": "môn học"
  },
  {
    "chinese": "顆",
    "level": "B2",
    "pinyin": "kē",
    "part_of_speech": "M",
    "meaning": "hạt, viên"
  },
  {
    "chinese": "可是",
    "level": "B2",
    "pinyin": "kěshì",
    "part_of_speech": "Adv",
    "meaning": "thế nhưng"
  },
  {
    "chinese": "可喜",
    "level": "B2",
    "pinyin": "kěxĭ",
    "part_of_speech": "Vs",
    "meaning": "đáng mừng"
  },
  {
    "chinese": "可笑",
    "level": "B2",
    "pinyin": "kěxiào",
    "part_of_speech": "Vs",
    "meaning": "buồn cười, nực cười"
  },
  {
    "chinese": "客房",
    "level": "B2",
    "pinyin": "kèfáng",
    "part_of_speech": "N",
    "meaning": "phòng trọ"
  },
  {
    "chinese": "客觀",
    "level": "B2",
    "pinyin": "kèguān",
    "part_of_speech": "Vs",
    "meaning": "khách quan"
  },
  {
    "chinese": "客戶",
    "level": "B2",
    "pinyin": "kèhù",
    "part_of_speech": "N",
    "meaning": "khách thuê nhà"
  },
  {
    "chinese": "課外",
    "level": "B2",
    "pinyin": "kèwài",
    "part_of_speech": "Vs-attr",
    "meaning": "ngoại khóa"
  },
  {
    "chinese": "空",
    "level": "B2",
    "pinyin": "kōng",
    "part_of_speech": "Adv",
    "meaning": "trống không"
  },
  {
    "chinese": "空前",
    "level": "B2",
    "pinyin": "kōngqián",
    "part_of_speech": "Vs-attr",
    "meaning": "không gian"
  },
  {
    "chinese": "空中",
    "level": "B2",
    "pinyin": "kōngzhōng",
    "part_of_speech": "N",
    "meaning": "trong không trung"
  },
  {
    "chinese": "恐怖",
    "level": "B2",
    "pinyin": "kŏngbù",
    "part_of_speech": "Vs",
    "meaning": "khủng bố"
  },
  {
    "chinese": "空/空兒",
    "level": "B2",
    "pinyin": "kòng/kòngr",
    "part_of_speech": "N",
    "meaning": "thời gian rảnh"
  },
  {
    "chinese": "控制",
    "level": "B2",
    "pinyin": "kòngzhì",
    "part_of_speech": "V",
    "meaning": "khống chế"
  },
  {
    "chinese": "口",
    "level": "B2",
    "pinyin": "kŏu",
    "part_of_speech": "M",
    "meaning": "miệng"
  },
  {
    "chinese": "口才",
    "level": "B2",
    "pinyin": "kŏucái",
    "part_of_speech": "N",
    "meaning": "tài ăn nói"
  },
  {
    "chinese": "口號",
    "level": "B2",
    "pinyin": "kŏuhào",
    "part_of_speech": "N",
    "meaning": "khẩu hiệu"
  },
  {
    "chinese": "口紅",
    "level": "B2",
    "pinyin": "kŏuhóng",
    "part_of_speech": "N",
    "meaning": "thỏi son"
  },
  {
    "chinese": "口氣",
    "level": "B2",
    "pinyin": "kŏuqì",
    "part_of_speech": "N",
    "meaning": "khẩu khí"
  },
  {
    "chinese": "口試",
    "level": "B2",
    "pinyin": "kŏushì",
    "part_of_speech": "N",
    "meaning": "cuộc thi vấn đáp"
  },
  {
    "chinese": "口試",
    "level": "B2",
    "pinyin": "kŏushì",
    "part_of_speech": "Vi",
    "meaning": "thi vấn đáp"
  },
  {
    "chinese": "口水",
    "level": "B2",
    "pinyin": "kŏushuĭ",
    "part_of_speech": "N",
    "meaning": "nước bọt"
  },
  {
    "chinese": "口音",
    "level": "B2",
    "pinyin": "kŏuyīn",
    "part_of_speech": "N",
    "meaning": "khẩu âm, giọng nói"
  },
  {
    "chinese": "口語",
    "level": "B2",
    "pinyin": "kŏuyŭ",
    "part_of_speech": "N",
    "meaning": "khẩu ngữ"
  },
  {
    "chinese": "扣",
    "level": "B2",
    "pinyin": "kòu",
    "part_of_speech": "V",
    "meaning": "cài, móc"
  },
  {
    "chinese": "誇獎",
    "level": "B2",
    "pinyin": "kuājiăng",
    "part_of_speech": "V",
    "meaning": "khen ngợi"
  },
  {
    "chinese": "跨",
    "level": "B2",
    "pinyin": "kuà",
    "part_of_speech": "V",
    "meaning": "sải bước"
  },
  {
    "chinese": "會計",
    "level": "B2",
    "pinyin": "kuàijì",
    "part_of_speech": "N",
    "meaning": "kế toán viên"
  },
  {
    "chinese": "寬度",
    "level": "B2",
    "pinyin": "kuāndù",
    "part_of_speech": "N",
    "meaning": "độ rộng"
  },
  {
    "chinese": "喇叭",
    "level": "B2",
    "pinyin": "lăba",
    "part_of_speech": "N",
    "meaning": "kèn đồng, còi"
  },
  {
    "chinese": "蠟燭",
    "level": "B2",
    "pinyin": "làzhú",
    "part_of_speech": "N",
    "meaning": "cây nến, đèn cầy"
  },
  {
    "chinese": "辣椒",
    "level": "B2",
    "pinyin": "làjiāo",
    "part_of_speech": "N",
    "meaning": "ớt, quả ớt"
  },
  {
    "chinese": "來",
    "level": "B2",
    "pinyin": "lái",
    "part_of_speech": "N",
    "meaning": "đến, tới"
  },
  {
    "chinese": "來回",
    "level": "B2",
    "pinyin": "láihuí",
    "part_of_speech": "V",
    "meaning": "đi về, khứ hồi"
  },
  {
    "chinese": "來臨",
    "level": "B2",
    "pinyin": "láilín",
    "part_of_speech": "Vp",
    "meaning": "đến, tới, đi tới"
  },
  {
    "chinese": "來往",
    "level": "B2",
    "pinyin": "láiwăng",
    "part_of_speech": "Vi",
    "meaning": "qua lại, vãng lai"
  },
  {
    "chinese": "來信",
    "level": "B2",
    "pinyin": "láixìn",
    "part_of_speech": "N",
    "meaning": "gởi thư"
  },
  {
    "chinese": "來源",
    "level": "B2",
    "pinyin": "láiyuán",
    "part_of_speech": "N",
    "meaning": "nguồn gốc"
  },
  {
    "chinese": "來自",
    "level": "B2",
    "pinyin": "láizì",
    "part_of_speech": "Vpt",
    "meaning": "đến từ"
  },
  {
    "chinese": "籃子",
    "level": "B2",
    "pinyin": "lánzi",
    "part_of_speech": "N",
    "meaning": "làn xách, giỏ"
  },
  {
    "chinese": "懶",
    "level": "B2",
    "pinyin": "lăn",
    "part_of_speech": "Vs",
    "meaning": "lười nhác"
  },
  {
    "chinese": "懶得",
    "level": "B2",
    "pinyin": "lănde",
    "part_of_speech": "Vaux",
    "meaning": "lười, chẳng muốn..."
  },
  {
    "chinese": "爛",
    "level": "B2",
    "pinyin": "làn",
    "part_of_speech": "Vs",
    "meaning": "nát, nhừ, nhão"
  },
  {
    "chinese": "濫用",
    "level": "B2",
    "pinyin": "lànyòng",
    "part_of_speech": "V",
    "meaning": "lạm dụng"
  },
  {
    "chinese": "狼",
    "level": "B2",
    "pinyin": "láng",
    "part_of_speech": "N",
    "meaning": "con sói"
  },
  {
    "chinese": "浪",
    "level": "B2",
    "pinyin": "làng",
    "part_of_speech": "N",
    "meaning": "sóng, làn sóng"
  },
  {
    "chinese": "浪費",
    "level": "B2",
    "pinyin": "làngfèi",
    "part_of_speech": "Vs",
    "meaning": "lãng phí"
  },
  {
    "chinese": "撈",
    "level": "B2",
    "pinyin": "lāo",
    "part_of_speech": "V",
    "meaning": "kiếm, moi, vét"
  },
  {
    "chinese": "牢",
    "level": "B2",
    "pinyin": "láo",
    "part_of_speech": "Vs",
    "meaning": "chuồng, nhà tù, ngục"
  },
  {
    "chinese": "牢騷",
    "level": "B2",
    "pinyin": "láosāo",
    "part_of_speech": "N",
    "meaning": "kêu ca, oán than"
  },
  {
    "chinese": "勞動",
    "level": "B2",
    "pinyin": "láodòng",
    "part_of_speech": "V",
    "meaning": "lao động"
  },
  {
    "chinese": "勞工",
    "level": "B2",
    "pinyin": "láogōng",
    "part_of_speech": "N",
    "meaning": "công nhân"
  },
  {
    "chinese": "勞力",
    "level": "B2",
    "pinyin": "láolì",
    "part_of_speech": "N",
    "meaning": "sức lao động"
  },
  {
    "chinese": "嘮叨",
    "level": "B2",
    "pinyin": "láodao",
    "part_of_speech": "Vi",
    "meaning": "lải nhải"
  },
  {
    "chinese": "老",
    "level": "B2",
    "pinyin": "lăo",
    "part_of_speech": "Adv",
    "meaning": "già, lão"
  },
  {
    "chinese": "老百姓",
    "level": "B2",
    "pinyin": "lăobăixìng",
    "part_of_speech": "N",
    "meaning": "nhân dân"
  },
  {
    "chinese": "老大",
    "level": "B2",
    "pinyin": "lăodà",
    "part_of_speech": "N",
    "meaning": "lão đại, đại ca"
  },
  {
    "chinese": "老家",
    "level": "B2",
    "pinyin": "lăojiā",
    "part_of_speech": "N",
    "meaning": "quê nhà, nguyên quán"
  },
  {
    "chinese": "老實說",
    "level": "B2",
    "pinyin": "lăoshíshuō",
    "part_of_speech": "nói",
    "meaning": "thật lòng thì..."
  },
  {
    "chinese": "老太太",
    "level": "B2",
    "pinyin": "lăotàitai",
    "part_of_speech": "N",
    "meaning": "bà, quý bà"
  },
  {
    "chinese": "樂意",
    "level": "B2",
    "pinyin": "lèyì",
    "part_of_speech": "Vs",
    "meaning": "cam tâm tình nguyện"
  },
  {
    "chinese": "類似",
    "level": "B2",
    "pinyin": "lèisì",
    "part_of_speech": "Vs",
    "meaning": "tương tự, giống"
  },
  {
    "chinese": "冷靜",
    "level": "B2",
    "pinyin": "lěngjìng",
    "part_of_speech": "Vs",
    "meaning": "vắng vẻ, yên tĩnh"
  },
  {
    "chinese": "冷飲",
    "level": "B2",
    "pinyin": "lěngyĭn",
    "part_of_speech": "N",
    "meaning": "đồ uống lạnh"
  },
  {
    "chinese": "梨(子)",
    "level": "B2",
    "pinyin": "lí(zi)",
    "part_of_speech": "N",
    "meaning": "cây lê"
  },
  {
    "chinese": "理",
    "level": "B2",
    "pinyin": "lĭ",
    "part_of_speech": "V",
    "meaning": "quản lý, sắp xếp"
  },
  {
    "chinese": "理",
    "level": "B2",
    "pinyin": "lĭ",
    "part_of_speech": "Vst",
    "meaning": "để ý"
  },
  {
    "chinese": "理由",
    "level": "B2",
    "pinyin": "lĭyóu",
    "part_of_speech": "N",
    "meaning": "lý do"
  },
  {
    "chinese": "裡/裏頭",
    "level": "B2",
    "pinyin": "lĭtou",
    "part_of_speech": "N",
    "meaning": "bên trong"
  },
  {
    "chinese": "禮",
    "level": "B2",
    "pinyin": "lĭ",
    "part_of_speech": "N",
    "meaning": "lễ nghi"
  },
  {
    "chinese": "禮品",
    "level": "B2",
    "pinyin": "lĭpĭn",
    "part_of_speech": "N",
    "meaning": "quà tặng, lễ vật"
  },
  {
    "chinese": "力氣",
    "level": "B2",
    "pinyin": "lìqi",
    "part_of_speech": "N",
    "meaning": "sức lực"
  },
  {
    "chinese": "立",
    "level": "B2",
    "pinyin": "lì",
    "part_of_speech": "V",
    "meaning": "đứng, dựng"
  },
  {
    "chinese": "立場",
    "level": "B2",
    "pinyin": "lìchăng",
    "part_of_speech": "N",
    "meaning": "lập trường"
  },
  {
    "chinese": "立即",
    "level": "B2",
    "pinyin": "lìjí",
    "part_of_speech": "Adv",
    "meaning": "lập tức, ngay"
  },
  {
    "chinese": "利",
    "level": "B2",
    "pinyin": "lì",
    "part_of_speech": "Vs",
    "meaning": "sắc bén"
  },
  {
    "chinese": "利潤",
    "level": "B2",
    "pinyin": "lìrùn",
    "part_of_speech": "N",
    "meaning": "lợi nhuận, lãi"
  },
  {
    "chinese": "利息",
    "level": "B2",
    "pinyin": "lìxí",
    "part_of_speech": "N",
    "meaning": "lợi tức, lãi"
  },
  {
    "chinese": "例外",
    "level": "B2",
    "pinyin": "lìwài",
    "part_of_speech": "Vs",
    "meaning": "ngoại lệ"
  },
  {
    "chinese": "粒",
    "level": "B2",
    "pinyin": "lì",
    "part_of_speech": "M",
    "meaning": "hạt, viên"
  },
  {
    "chinese": "聯合",
    "level": "B2",
    "pinyin": "liánhé",
    "part_of_speech": "V",
    "meaning": "đoàn kết, kết hợp"
  },
  {
    "chinese": "聯合國",
    "level": "B2",
    "pinyin": "liánhéguó",
    "part_of_speech": "N",
    "meaning": "liên hiệp quốc"
  },
  {
    "chinese": "連",
    "level": "B2",
    "pinyin": "lián",
    "part_of_speech": "Adv",
    "meaning": "gắn bó, nối liền"
  },
  {
    "chinese": "連接",
    "level": "B2",
    "pinyin": "liánjiē",
    "part_of_speech": "Vst",
    "meaning": "liên tiếp"
  },
  {
    "chinese": "連忙",
    "level": "B2",
    "pinyin": "liánmáng",
    "part_of_speech": "Adv",
    "meaning": "vội vã"
  },
  {
    "chinese": "連續",
    "level": "B2",
    "pinyin": "liánxù",
    "part_of_speech": "Vs-attr",
    "meaning": "liên tục"
  },
  {
    "chinese": "臉色",
    "level": "B2",
    "pinyin": "liănsè",
    "part_of_speech": "N",
    "meaning": "sắc mặt"
  },
  {
    "chinese": "量",
    "level": "B2",
    "pinyin": "liáng",
    "part_of_speech": "V",
    "meaning": "đong, đo"
  },
  {
    "chinese": "糧食",
    "level": "B2",
    "pinyin": "liángshí",
    "part_of_speech": "N",
    "meaning": "lương thực"
  },
  {
    "chinese": "倆",
    "level": "B2",
    "pinyin": "liăng",
    "part_of_speech": "N",
    "meaning": "ngón, trò (nói về thủ đoạn)"
  },
  {
    "chinese": "亮",
    "level": "B2",
    "pinyin": "liàng",
    "part_of_speech": "V",
    "meaning": "phát sáng"
  },
  {
    "chinese": "諒解",
    "level": "B2",
    "pinyin": "liàngjiě",
    "part_of_speech": "Vst",
    "meaning": "thông cảm"
  },
  {
    "chinese": "了",
    "level": "B2",
    "pinyin": "liăo",
    "part_of_speech": "Vst",
    "meaning": "hiểu"
  },
  {
    "chinese": "列",
    "level": "B2",
    "pinyin": "liè",
    "part_of_speech": "M",
    "meaning": "xếp vào, liệt vào"
  },
  {
    "chinese": "裂",
    "level": "B2",
    "pinyin": "liè",
    "part_of_speech": "Vp",
    "meaning": "hở, phanh ra"
  },
  {
    "chinese": "淋",
    "level": "B2",
    "pinyin": "lín",
    "part_of_speech": "V",
    "meaning": "xối, dội, dầm"
  },
  {
    "chinese": "臨",
    "level": "B2",
    "pinyin": "lín",
    "part_of_speech": "Vst",
    "meaning": "gần, đối diện"
  },
  {
    "chinese": "臨時",
    "level": "B2",
    "pinyin": "línshí",
    "part_of_speech": "N",
    "meaning": "đến lúc"
  },
  {
    "chinese": "凌晨",
    "level": "B2",
    "pinyin": "língchén",
    "part_of_speech": "N",
    "meaning": "rạng sáng"
  },
  {
    "chinese": "靈活",
    "level": "B2",
    "pinyin": "línghuó",
    "part_of_speech": "Vs",
    "meaning": "linh hoạt"
  },
  {
    "chinese": "零件",
    "level": "B2",
    "pinyin": "língjiàn",
    "part_of_speech": "N",
    "meaning": "linh kiện"
  },
  {
    "chinese": "零售",
    "level": "B2",
    "pinyin": "língshòu",
    "part_of_speech": "V",
    "meaning": "bán lẻ"
  },
  {
    "chinese": "零下",
    "level": "B2",
    "pinyin": "língxià",
    "part_of_speech": "Vs-attr",
    "meaning": "dưới 0, âm"
  },
  {
    "chinese": "領帶",
    "level": "B2",
    "pinyin": "lĭngdài",
    "part_of_speech": "N",
    "meaning": "cà-vạt"
  },
  {
    "chinese": "領導",
    "level": "B2",
    "pinyin": "lĭngdăo",
    "part_of_speech": "N",
    "meaning": "lãnh đạo"
  },
  {
    "chinese": "領土",
    "level": "B2",
    "pinyin": "lĭngtŭ",
    "part_of_speech": "N",
    "meaning": "lãnh thổ"
  },
  {
    "chinese": "領先",
    "level": "B2",
    "pinyin": "lĭngxiān",
    "part_of_speech": "Vpt",
    "meaning": "vượt lên đầu, dẫn đầu"
  },
  {
    "chinese": "領袖",
    "level": "B2",
    "pinyin": "lĭngxiù",
    "part_of_speech": "N",
    "meaning": "lãnh tụ"
  },
  {
    "chinese": "另",
    "level": "B2",
    "pinyin": "lìng",
    "part_of_speech": "Det",
    "meaning": "ngoài, khác"
  },
  {
    "chinese": "另外",
    "level": "B2",
    "pinyin": "lìngwài",
    "part_of_speech": "Conj",
    "meaning": "ngoài ra"
  },
  {
    "chinese": "另外",
    "level": "B2",
    "pinyin": "lìngwài",
    "part_of_speech": "Det",
    "meaning": "việc khác"
  },
  {
    "chinese": "溜",
    "level": "B2",
    "pinyin": "liū",
    "part_of_speech": "Vi",
    "meaning": "xào, lăn"
  },
  {
    "chinese": "流動",
    "level": "B2",
    "pinyin": "liúdòng",
    "part_of_speech": "Vi",
    "meaning": "chảy, lưu động"
  },
  {
    "chinese": "流利",
    "level": "B2",
    "pinyin": "liúlì",
    "part_of_speech": "Vs",
    "meaning": "lưu loát"
  },
  {
    "chinese": "留念",
    "level": "B2",
    "pinyin": "liúniàn",
    "part_of_speech": "Vs",
    "meaning": "lưu niệm"
  },
  {
    "chinese": "嘍",
    "level": "B2",
    "pinyin": "lóu",
    "part_of_speech": "Ptc",
    "meaning": "nhé, rồi"
  },
  {
    "chinese": "摟",
    "level": "B2",
    "pinyin": "lǒu",
    "part_of_speech": "V",
    "meaning": "ôm"
  },
  {
    "chinese": "露",
    "level": "B2",
    "pinyin": "lù",
    "part_of_speech": "V",
    "meaning": "để trần, để lộ ra"
  },
  {
    "chinese": "路燈",
    "level": "B2",
    "pinyin": "lùdēng",
    "part_of_speech": "N",
    "meaning": "đèn đường"
  },
  {
    "chinese": "路線",
    "level": "B2",
    "pinyin": "lùxiàn",
    "part_of_speech": "N",
    "meaning": "tuyến đường"
  },
  {
    "chinese": "陸軍",
    "level": "B2",
    "pinyin": "lùjūn",
    "part_of_speech": "N",
    "meaning": "lục quân, bộ binh"
  },
  {
    "chinese": "陸續",
    "level": "B2",
    "pinyin": "lùxù",
    "part_of_speech": "Adv",
    "meaning": "lần lượt"
  },
  {
    "chinese": "錄用",
    "level": "B2",
    "pinyin": "lùyòng",
    "part_of_speech": "V",
    "meaning": "tuyển dụng"
  },
  {
    "chinese": "輪船",
    "level": "B2",
    "pinyin": "lúnchuán",
    "part_of_speech": "N",
    "meaning": "tàu thủy"
  },
  {
    "chinese": "輪流",
    "level": "B2",
    "pinyin": "lúnliú",
    "part_of_speech": "Adv",
    "meaning": "luân phiên"
  },
  {
    "chinese": "輪子",
    "level": "B2",
    "pinyin": "lúnzi",
    "part_of_speech": "N",
    "meaning": "bánh xe"
  },
  {
    "chinese": "論",
    "level": "B2",
    "pinyin": "lùn",
    "part_of_speech": "V",
    "meaning": "luận"
  },
  {
    "chinese": "論文",
    "level": "B2",
    "pinyin": "lùnwén",
    "part_of_speech": "N",
    "meaning": "luận văn"
  },
  {
    "chinese": "落",
    "level": "B2",
    "pinyin": "luò",
    "part_of_speech": "Vi",
    "meaning": "rơi, rụng"
  },
  {
    "chinese": "落後",
    "level": "B2",
    "pinyin": "luòhòu",
    "part_of_speech": "Vpt",
    "meaning": "rớt lại phía sau"
  },
  {
    "chinese": "落實",
    "level": "B2",
    "pinyin": "luòshí",
    "part_of_speech": "V",
    "meaning": "làm cho chắc chắn"
  },
  {
    "chinese": "落伍",
    "level": "B2",
    "pinyin": "luòwŭ",
    "part_of_speech": "Vs",
    "meaning": "lạc đơn vị"
  },
  {
    "chinese": "旅行社",
    "level": "B2",
    "pinyin": "lǚxíngshè",
    "part_of_speech": "N",
    "meaning": "công ty du lịch"
  },
  {
    "chinese": "綠豆",
    "level": "B2",
    "pinyin": "lǜdòu",
    "part_of_speech": "N",
    "meaning": "đậu xanh"
  },
  {
    "chinese": "略",
    "level": "B2",
    "pinyin": "lüè",
    "part_of_speech": "Vs",
    "meaning": "bỏ bớt, lược bớt"
  },
  {
    "chinese": "麻",
    "level": "B2",
    "pinyin": "má",
    "part_of_speech": "Vs",
    "meaning": "chập choạng, mờ tối"
  },
  {
    "chinese": "麻雀",
    "level": "B2",
    "pinyin": "máquè",
    "part_of_speech": "N",
    "meaning": "chim sẻ, mạt chược"
  },
  {
    "chinese": "馬虎",
    "level": "B2",
    "pinyin": "măhu",
    "part_of_speech": "Vs",
    "meaning": "qua loa, đại khái"
  },
  {
    "chinese": "埋",
    "level": "B2",
    "pinyin": "mái",
    "part_of_speech": "V",
    "meaning": "oán trách"
  },
  {
    "chinese": "買單",
    "level": "B2",
    "pinyin": "măidān",
    "part_of_speech": "V-sep",
    "meaning": "thanh toán"
  },
  {
    "chinese": "買賣",
    "level": "B2",
    "pinyin": "măimài",
    "part_of_speech": "V",
    "meaning": "mua bán"
  },
  {
    "chinese": "饅頭",
    "level": "B2",
    "pinyin": "mántou",
    "part_of_speech": "N",
    "meaning": "bánh bao"
  },
  {
    "chinese": "滿/蠻",
    "level": "B2",
    "pinyin": "măn/mán",
    "part_of_speech": "Adv",
    "meaning": "đầy, chật"
  },
  {
    "chinese": "漫畫",
    "level": "B2",
    "pinyin": "mànhuà",
    "part_of_speech": "N",
    "meaning": "tranh hoạt hình"
  },
  {
    "chinese": "忙碌",
    "level": "B2",
    "pinyin": "mánglù",
    "part_of_speech": "Vs",
    "meaning": "bận rộn"
  },
  {
    "chinese": "盲目",
    "level": "B2",
    "pinyin": "mángmù",
    "part_of_speech": "Vs",
    "meaning": "mù quáng"
  },
  {
    "chinese": "矛盾",
    "level": "B2",
    "pinyin": "máodùn",
    "part_of_speech": "Vs",
    "meaning": "mâu thuẫn"
  },
  {
    "chinese": "毛巾",
    "level": "B2",
    "pinyin": "máojīn",
    "part_of_speech": "N",
    "meaning": "khăn mặt"
  },
  {
    "chinese": "冒",
    "level": "B2",
    "pinyin": "mào",
    "part_of_speech": "V",
    "meaning": "bốc lên, tỏa ra"
  },
  {
    "chinese": "煤",
    "level": "B2",
    "pinyin": "méi",
    "part_of_speech": "N",
    "meaning": "than đá"
  },
  {
    "chinese": "梅花",
    "level": "B2",
    "pinyin": "méihuā",
    "part_of_speech": "N",
    "meaning": "hoa mai"
  },
  {
    "chinese": "美觀",
    "level": "B2",
    "pinyin": "měiguān",
    "part_of_speech": "Vs",
    "meaning": "đẹp, mỹ quan"
  },
  {
    "chinese": "美妙",
    "level": "B2",
    "pinyin": "měimiào",
    "part_of_speech": "Vs",
    "meaning": "tuyệt vời, mỹ miều"
  },
  {
    "chinese": "魅力",
    "level": "B2",
    "pinyin": "mèilì",
    "part_of_speech": "N",
    "meaning": "sức quyến rũ"
  },
  {
    "chinese": "門",
    "level": "B2",
    "pinyin": "mén",
    "part_of_speech": "M",
    "meaning": "cửa, ngõ"
  },
  {
    "chinese": "門票",
    "level": "B2",
    "pinyin": "ménpiào",
    "part_of_speech": "N",
    "meaning": "vé vào cửa"
  },
  {
    "chinese": "門診",
    "level": "B2",
    "pinyin": "ménzhěn",
    "part_of_speech": "Vi",
    "meaning": "khám bệnh"
  },
  {
    "chinese": "猛",
    "level": "B2",
    "pinyin": "měng",
    "part_of_speech": "Vs",
    "meaning": "dũng mãnh"
  },
  {
    "chinese": "夢到",
    "level": "B2",
    "pinyin": "mèngdào",
    "part_of_speech": "Vpt",
    "meaning": "mơ thấy"
  },
  {
    "chinese": "夢想",
    "level": "B2",
    "pinyin": "mèngxiăng",
    "part_of_speech": "N",
    "meaning": "mộng tưởng"
  },
  {
    "chinese": "夢想",
    "level": "B2",
    "pinyin": "mèngxiăng",
    "part_of_speech": "V",
    "meaning": "khát khao, mơ ước"
  },
  {
    "chinese": "迷",
    "level": "B2",
    "pinyin": "mí",
    "part_of_speech": "Vst",
    "meaning": "say đắm"
  },
  {
    "chinese": "迷糊",
    "level": "B2",
    "pinyin": "míhu",
    "part_of_speech": "Vs",
    "meaning": "bối rối"
  },
  {
    "chinese": "迷失",
    "level": "B2",
    "pinyin": "míshī",
    "part_of_speech": "Vp",
    "meaning": "mất phương hướng"
  },
  {
    "chinese": "迷信",
    "level": "B2",
    "pinyin": "míxìn",
    "part_of_speech": "N",
    "meaning": "mê tín"
  },
  {
    "chinese": "迷信",
    "level": "B2",
    "pinyin": "míxìn",
    "part_of_speech": "Vs",
    "meaning": "sùng bái"
  },
  {
    "chinese": "密",
    "level": "B2",
    "pinyin": "mì",
    "part_of_speech": "Vs",
    "meaning": "dày, chặt chẽ"
  },
  {
    "chinese": "蜜蜂",
    "level": "B2",
    "pinyin": "mìfēng",
    "part_of_speech": "N",
    "meaning": "mật ong"
  },
  {
    "chinese": "秘/祕書",
    "level": "B2",
    "pinyin": "mìshū",
    "part_of_speech": "N",
    "meaning": "thư ký"
  },
  {
    "chinese": "棉",
    "level": "B2",
    "pinyin": "mián",
    "part_of_speech": "N",
    "meaning": "bong vải"
  },
  {
    "chinese": "棉被",
    "level": "B2",
    "pinyin": "miánbèi",
    "part_of_speech": "N",
    "meaning": "chăn bông"
  },
  {
    "chinese": "棉花",
    "level": "B2",
    "pinyin": "miánhua",
    "part_of_speech": "N",
    "meaning": "cây bông vải"
  },
  {
    "chinese": "免得",
    "level": "B2",
    "pinyin": "miănde",
    "part_of_speech": "Vaux",
    "meaning": "tránh khỏi, đỡ phải"
  },
  {
    "chinese": "勉強",
    "level": "B2",
    "pinyin": "miǎnqiǎng",
    "part_of_speech": "Vs",
    "meaning": "miễn cưỡng"
  },
  {
    "chinese": "面",
    "level": "B2",
    "pinyin": "miàn",
    "part_of_speech": "M",
    "meaning": "mặt"
  },
  {
    "chinese": "面對",
    "level": "B2",
    "pinyin": "miànduì",
    "part_of_speech": "V",
    "meaning": "đối mặt"
  },
  {
    "chinese": "面臨",
    "level": "B2",
    "pinyin": "miànlín",
    "part_of_speech": "Vst",
    "meaning": "đứng trước, gặp phải"
  },
  {
    "chinese": "面貌",
    "level": "B2",
    "pinyin": "miànmào",
    "part_of_speech": "N",
    "meaning": "diện mạo"
  },
  {
    "chinese": "面子",
    "level": "B2",
    "pinyin": "miànzi",
    "part_of_speech": "N",
    "meaning": "bề mặt"
  },
  {
    "chinese": "麵粉",
    "level": "B2",
    "pinyin": "miànfěn",
    "part_of_speech": "N",
    "meaning": "bột mì"
  },
  {
    "chinese": "妙",
    "level": "B2",
    "pinyin": "miào",
    "part_of_speech": "Vs",
    "meaning": "đẹp, tuyệt diệu"
  },
  {
    "chinese": "滅亡",
    "level": "B2",
    "pinyin": "mièwáng",
    "part_of_speech": "Vp",
    "meaning": "diệt vong"
  },
  {
    "chinese": "民間",
    "level": "B2",
    "pinyin": "mínjiān",
    "part_of_speech": "N",
    "meaning": "dân gian"
  },
  {
    "chinese": "民謠",
    "level": "B2",
    "pinyin": "mínyáo",
    "part_of_speech": "N",
    "meaning": "ca dao"
  },
  {
    "chinese": "民眾",
    "level": "B2",
    "pinyin": "mínzhòng",
    "part_of_speech": "N",
    "meaning": "dân chúng"
  },
  {
    "chinese": "民主",
    "level": "B2",
    "pinyin": "mínzhŭ",
    "part_of_speech": "N",
    "meaning": "dân chủ"
  },
  {
    "chinese": "民主",
    "level": "B2",
    "pinyin": "mínzhŭ",
    "part_of_speech": "Vs",
    "meaning": "dân chủ"
  },
  {
    "chinese": "名",
    "level": "B2",
    "pinyin": "míng",
    "part_of_speech": "Vst",
    "meaning": "tên gọi"
  },
  {
    "chinese": "名稱",
    "level": "B2",
    "pinyin": "míngchēng",
    "part_of_speech": "N",
    "meaning": "tên, tên gọi"
  },
  {
    "chinese": "名單",
    "level": "B2",
    "pinyin": "míngdān",
    "part_of_speech": "N",
    "meaning": "danh sách"
  },
  {
    "chinese": "名牌",
    "level": "B2",
    "pinyin": "míngpái",
    "part_of_speech": "N",
    "meaning": "nhãn hiệu nổi tiếng"
  },
  {
    "chinese": "名片",
    "level": "B2",
    "pinyin": "míngpiàn",
    "part_of_speech": "N",
    "meaning": "danh thiếp"
  },
  {
    "chinese": "明白",
    "level": "B2",
    "pinyin": "míngbái",
    "part_of_speech": "Vs",
    "meaning": "rõ ràng"
  },
  {
    "chinese": "明亮",
    "level": "B2",
    "pinyin": "míngliàng",
    "part_of_speech": "Vs",
    "meaning": "sáng sủa"
  },
  {
    "chinese": "明明",
    "level": "B2",
    "pinyin": "míngmíng",
    "part_of_speech": "Adv",
    "meaning": "rõ ràng, rành rành"
  },
  {
    "chinese": "明確",
    "level": "B2",
    "pinyin": "míngquè",
    "part_of_speech": "Vs",
    "meaning": "đúng đắn"
  },
  {
    "chinese": "命",
    "level": "B2",
    "pinyin": "mìng",
    "part_of_speech": "V",
    "meaning": "sinh mệnh, tính mạng"
  },
  {
    "chinese": "命令",
    "level": "B2",
    "pinyin": "mìnglìng",
    "part_of_speech": "N",
    "meaning": "mệnh lệnh"
  },
  {
    "chinese": "命令",
    "level": "B2",
    "pinyin": "mìnglìng",
    "part_of_speech": "V",
    "meaning": "ra lệnh"
  },
  {
    "chinese": "命運",
    "level": "B2",
    "pinyin": "mìngyùn",
    "part_of_speech": "N",
    "meaning": "số phận"
  },
  {
    "chinese": "磨",
    "level": "B2",
    "pinyin": "mó",
    "part_of_speech": "V",
    "meaning": "xay"
  },
  {
    "chinese": "模仿",
    "level": "B2",
    "pinyin": "mófăng",
    "part_of_speech": "V",
    "meaning": "mô phỏng, bắt chước theo"
  },
  {
    "chinese": "模糊",
    "level": "B2",
    "pinyin": "móhú",
    "part_of_speech": "Vs",
    "meaning": "mơ hồ"
  },
  {
    "chinese": "模型",
    "level": "B2",
    "pinyin": "móxíng",
    "part_of_speech": "N",
    "meaning": "mô hình"
  },
  {
    "chinese": "模樣",
    "level": "B2",
    "pinyin": "móyàng",
    "part_of_speech": "N",
    "meaning": "dáng dấp"
  },
  {
    "chinese": "抹",
    "level": "B2",
    "pinyin": "mŏ",
    "part_of_speech": "V",
    "meaning": "lau chùi"
  },
  {
    "chinese": "目標",
    "level": "B2",
    "pinyin": "mùbiāo",
    "part_of_speech": "N",
    "meaning": "mục tiêu"
  },
  {
    "chinese": "目的地",
    "level": "B2",
    "pinyin": "mùdìdì",
    "part_of_speech": "N",
    "meaning": "đích đến, nơi đến"
  },
  {
    "chinese": "目錄",
    "level": "B2",
    "pinyin": "mùlù",
    "part_of_speech": "N",
    "meaning": "mục lục"
  },
  {
    "chinese": "哪怕",
    "level": "B2",
    "pinyin": "năpà",
    "part_of_speech": "Conj",
    "meaning": "cho dù"
  },
  {
    "chinese": "奶粉",
    "level": "B2",
    "pinyin": "năifěn",
    "part_of_speech": "N",
    "meaning": "sữa bột"
  },
  {
    "chinese": "耐心",
    "level": "B2",
    "pinyin": "nàixīn",
    "part_of_speech": "Adv",
    "meaning": "kiên trì"
  },
  {
    "chinese": "耐用",
    "level": "B2",
    "pinyin": "nàiyòng",
    "part_of_speech": "Vs",
    "meaning": "bền"
  },
  {
    "chinese": "難道",
    "level": "B2",
    "pinyin": "nándào",
    "part_of_speech": "Adv",
    "meaning": "lẽ nào, chẳng lẽ"
  },
  {
    "chinese": "難得",
    "level": "B2",
    "pinyin": "nándé",
    "part_of_speech": "Vs",
    "meaning": "khó có được"
  },
  {
    "chinese": "難受",
    "level": "B2",
    "pinyin": "nánshòu",
    "part_of_speech": "Vs",
    "meaning": "khó chịu"
  },
  {
    "chinese": "難以",
    "level": "B2",
    "pinyin": "nányǐ",
    "part_of_speech": "Adv",
    "meaning": "khó mà"
  },
  {
    "chinese": "男性",
    "level": "B2",
    "pinyin": "nánxìng",
    "part_of_speech": "N",
    "meaning": "nam giới"
  },
  {
    "chinese": "腦袋",
    "level": "B2",
    "pinyin": "năodai",
    "part_of_speech": "N",
    "meaning": "đầu, ý thức"
  },
  {
    "chinese": "腦筋",
    "level": "B2",
    "pinyin": "năojīn",
    "part_of_speech": "N",
    "meaning": "suy nghĩ, đầu óc"
  },
  {
    "chinese": "鬧",
    "level": "B2",
    "pinyin": "nào",
    "part_of_speech": "V",
    "meaning": "ồn ào"
  },
  {
    "chinese": "鬧區",
    "level": "B2",
    "pinyin": "nàoqū",
    "part_of_speech": "N",
    "meaning": "trung tâm thành phố"
  },
  {
    "chinese": "內部",
    "level": "B2",
    "pinyin": "nèibù",
    "part_of_speech": "N",
    "meaning": "nội bộ"
  },
  {
    "chinese": "內地",
    "level": "B2",
    "pinyin": "nèidì",
    "part_of_speech": "N",
    "meaning": "đất liền"
  },
  {
    "chinese": "內行",
    "level": "B2",
    "pinyin": "nèiháng",
    "part_of_speech": "Vs",
    "meaning": "trong nghề, thành thạo"
  },
  {
    "chinese": "內科",
    "level": "B2",
    "pinyin": "nèikē",
    "part_of_speech": "N",
    "meaning": "nội khoa"
  },
  {
    "chinese": "能幹",
    "level": "B2",
    "pinyin": "nénggàn",
    "part_of_speech": "Vs",
    "meaning": "tài giỏi"
  },
  {
    "chinese": "能源",
    "level": "B2",
    "pinyin": "néngyuán",
    "part_of_speech": "N",
    "meaning": "nguồn năng lượng"
  },
  {
    "chinese": "泥",
    "level": "B2",
    "pinyin": "ní",
    "part_of_speech": "N",
    "meaning": "bùn"
  },
  {
    "chinese": "泥土",
    "level": "B2",
    "pinyin": "nítŭ",
    "part_of_speech": "N",
    "meaning": "thổ nhưỡng"
  },
  {
    "chinese": "黏/粘",
    "level": "B2",
    "pinyin": "nián",
    "part_of_speech": "V",
    "meaning": "dính"
  },
  {
    "chinese": "黏/粘",
    "level": "B2",
    "pinyin": "nián",
    "part_of_speech": "Vs",
    "meaning": "dính, sánh"
  },
  {
    "chinese": "尿",
    "level": "B2",
    "pinyin": "niào",
    "part_of_speech": "N",
    "meaning": "nước tiểu"
  },
  {
    "chinese": "尿",
    "level": "B2",
    "pinyin": "niào",
    "part_of_speech": "Vi",
    "meaning": "đi tiểu"
  },
  {
    "chinese": "捏",
    "level": "B2",
    "pinyin": "niē",
    "part_of_speech": "V",
    "meaning": "nhón, nhặt"
  },
  {
    "chinese": "寧可",
    "level": "B2",
    "pinyin": "níngkě",
    "part_of_speech": "Vaux",
    "meaning": "thà rằng, thà"
  },
  {
    "chinese": "寧願",
    "level": "B2",
    "pinyin": "níngyuàn",
    "part_of_speech": "Vaux",
    "meaning": "tình nguyện"
  },
  {
    "chinese": "鈕扣",
    "level": "B2",
    "pinyin": "niŭkòu",
    "part_of_speech": "N",
    "meaning": "cúc áo"
  },
  {
    "chinese": "農場",
    "level": "B2",
    "pinyin": "nóngchăng",
    "part_of_speech": "N",
    "meaning": "nông trường"
  },
  {
    "chinese": "農產品",
    "level": "B2",
    "pinyin": "nóngchănpĭn",
    "part_of_speech": "N",
    "meaning": "nông sản"
  },
  {
    "chinese": "農村",
    "level": "B2",
    "pinyin": "nóngcūn",
    "part_of_speech": "N",
    "meaning": "nông thôn"
  },
  {
    "chinese": "農民/農夫",
    "level": "B2",
    "pinyin": "nóngmín/nóngfū",
    "part_of_speech": "N",
    "meaning": "nông dân"
  },
  {
    "chinese": "農藥",
    "level": "B2",
    "pinyin": "nóngyào",
    "part_of_speech": "N",
    "meaning": "thuốc trừ sâu"
  },
  {
    "chinese": "濃",
    "level": "B2",
    "pinyin": "nóng",
    "part_of_speech": "Vs",
    "meaning": "đặc, đậm"
  },
  {
    "chinese": "濃厚",
    "level": "B2",
    "pinyin": "nónghòu",
    "part_of_speech": "Vs",
    "meaning": "dày đặc"
  },
  {
    "chinese": "暖",
    "level": "B2",
    "pinyin": "nuăn",
    "part_of_speech": "Vs",
    "meaning": "ấm áp"
  },
  {
    "chinese": "暖和",
    "level": "B2",
    "pinyin": "nuănhuo",
    "part_of_speech": "Vs",
    "meaning": "ấm, sưởi ấm"
  },
  {
    "chinese": "暖氣",
    "level": "B2",
    "pinyin": "nuănqì",
    "part_of_speech": "N",
    "meaning": "lò sưởi, hơi ấm"
  },
  {
    "chinese": "女性",
    "level": "B2",
    "pinyin": "nǚxìng",
    "part_of_speech": "N",
    "meaning": "nữ giới"
  },
  {
    "chinese": "偶然",
    "level": "B2",
    "pinyin": "ǒurán",
    "part_of_speech": "Vs",
    "meaning": "ngẫu nhiên, tình cờ"
  },
  {
    "chinese": "排",
    "level": "B2",
    "pinyin": "pái",
    "part_of_speech": "M",
    "meaning": "hàng"
  },
  {
    "chinese": "排",
    "level": "B2",
    "pinyin": "pái",
    "part_of_speech": "V",
    "meaning": "xếp, sắp xếp"
  },
  {
    "chinese": "排斥",
    "level": "B2",
    "pinyin": "páichì",
    "part_of_speech": "V",
    "meaning": "bài xích"
  },
  {
    "chinese": "排列",
    "level": "B2",
    "pinyin": "páiliè",
    "part_of_speech": "V",
    "meaning": "xếp đặt"
  },
  {
    "chinese": "排球",
    "level": "B2",
    "pinyin": "páiqiú",
    "part_of_speech": "N",
    "meaning": "bóng chuyền"
  },
  {
    "chinese": "派",
    "level": "B2",
    "pinyin": "pài",
    "part_of_speech": "V",
    "meaning": "phái, bè cánh"
  },
  {
    "chinese": "攀",
    "level": "B2",
    "pinyin": "pān",
    "part_of_speech": "V",
    "meaning": "leo, trèo"
  },
  {
    "chinese": "盤",
    "level": "B2",
    "pinyin": "pán",
    "part_of_speech": "M",
    "meaning": "khay, mâm"
  },
  {
    "chinese": "判斷",
    "level": "B2",
    "pinyin": "pànduàn",
    "part_of_speech": "V",
    "meaning": "phán đoán"
  },
  {
    "chinese": "泡",
    "level": "B2",
    "pinyin": "pào",
    "part_of_speech": "V",
    "meaning": "ngâm"
  },
  {
    "chinese": "炮",
    "level": "B2",
    "pinyin": "pào",
    "part_of_speech": "N",
    "meaning": "xào, nướng, rang"
  },
  {
    "chinese": "砲",
    "level": "B2",
    "pinyin": "pào",
    "part_of_speech": "N",
    "meaning": "Pháo (vũ khí)"
  },
  {
    "chinese": "賠",
    "level": "B2",
    "pinyin": "péi",
    "part_of_speech": "V",
    "meaning": "bồi thường, đền"
  },
  {
    "chinese": "賠償",
    "level": "B2",
    "pinyin": "péicháng",
    "part_of_speech": "V",
    "meaning": "đền bù"
  },
  {
    "chinese": "陪同",
    "level": "B2",
    "pinyin": "péitóng",
    "part_of_speech": "V",
    "meaning": "cùng đi"
  },
  {
    "chinese": "佩服",
    "level": "B2",
    "pinyin": "pèifu",
    "part_of_speech": "Vst",
    "meaning": "bái phục, khâm phục"
  },
  {
    "chinese": "噴",
    "level": "B2",
    "pinyin": "pēn",
    "part_of_speech": "V",
    "meaning": "phun ra"
  },
  {
    "chinese": "盆",
    "level": "B2",
    "pinyin": "pén",
    "part_of_speech": "M",
    "meaning": "chậu, bồn"
  },
  {
    "chinese": "膨脹",
    "level": "B2",
    "pinyin": "péngzhàng",
    "part_of_speech": "Vp",
    "meaning": "giãn nở, bành trướng"
  },
  {
    "chinese": "捧",
    "level": "B2",
    "pinyin": "pěng",
    "part_of_speech": "V",
    "meaning": "nâng, bê, bưng"
  },
  {
    "chinese": "碰見",
    "level": "B2",
    "pinyin": "pèngjiàn",
    "part_of_speech": "Vpt",
    "meaning": "tình cờ gặp"
  },
  {
    "chinese": "匹",
    "level": "B2",
    "pinyin": "pī",
    "part_of_speech": "M",
    "meaning": "sánh được, xứng với"
  },
  {
    "chinese": "批",
    "level": "B2",
    "pinyin": "pī",
    "part_of_speech": "M",
    "meaning": "tập, xấp"
  },
  {
    "chinese": "批",
    "level": "B2",
    "pinyin": "pī",
    "part_of_speech": "V",
    "meaning": "phát, đánh"
  },
  {
    "chinese": "批判",
    "level": "B2",
    "pinyin": "pīpàn",
    "part_of_speech": "V",
    "meaning": "phê bình, phê phán"
  },
  {
    "chinese": "皮",
    "level": "B2",
    "pinyin": "pí",
    "part_of_speech": "Vs",
    "meaning": "da, vỏ"
  },
  {
    "chinese": "披",
    "level": "B2",
    "pinyin": "pī",
    "part_of_speech": "V",
    "meaning": "khoác, choàng"
  },
  {
    "chinese": "疲倦",
    "level": "B2",
    "pinyin": "píjuàn",
    "part_of_speech": "Vs",
    "meaning": "mệt mỏi rã rời"
  },
  {
    "chinese": "疲勞",
    "level": "B2",
    "pinyin": "píláo",
    "part_of_speech": "Vs",
    "meaning": "mệt nhoài"
  },
  {
    "chinese": "脾氣",
    "level": "B2",
    "pinyin": "píqi",
    "part_of_speech": "N",
    "meaning": "tính tình, tính cách"
  },
  {
    "chinese": "屁股",
    "level": "B2",
    "pinyin": "pìgu",
    "part_of_speech": "N",
    "meaning": "mông đít"
  },
  {
    "chinese": "篇",
    "level": "B2",
    "pinyin": "piān",
    "part_of_speech": "M",
    "meaning": "bài, phần, trang"
  },
  {
    "chinese": "偏/偏偏",
    "level": "B2",
    "pinyin": "piān/piānpiān",
    "part_of_speech": "Adv",
    "meaning": "lại, cứ, cố ý"
  },
  {
    "chinese": "偏食",
    "level": "B2",
    "pinyin": "piānshí",
    "part_of_speech": "Vs",
    "meaning": "kén ăn"
  },
  {
    "chinese": "偏向",
    "level": "B2",
    "pinyin": "piānxiàng",
    "part_of_speech": "Vst",
    "meaning": "khuynh hướng"
  },
  {
    "chinese": "騙",
    "level": "B2",
    "pinyin": "piàn",
    "part_of_speech": "V",
    "meaning": "lừa gạt"
  },
  {
    "chinese": "片面",
    "level": "B2",
    "pinyin": "piànmiàn",
    "part_of_speech": "Vs-attr",
    "meaning": "phiến diện"
  },
  {
    "chinese": "片子",
    "level": "B2",
    "pinyin": "piànzi",
    "part_of_speech": "N",
    "meaning": "tấm, miếng, danh thiếp"
  },
  {
    "chinese": "飄",
    "level": "B2",
    "pinyin": "piāo",
    "part_of_speech": "Vi",
    "meaning": "tung bay"
  },
  {
    "chinese": "拼命",
    "level": "B2",
    "pinyin": "pīnmìng",
    "part_of_speech": "Vs",
    "meaning": "liều mạng"
  },
  {
    "chinese": "貧窮",
    "level": "B2",
    "pinyin": "pínqióng",
    "part_of_speech": "Vs",
    "meaning": "bần cùng, nghèo túng"
  },
  {
    "chinese": "品德",
    "level": "B2",
    "pinyin": "pĭndé",
    "part_of_speech": "N",
    "meaning": "đức tính"
  },
  {
    "chinese": "聘請",
    "level": "B2",
    "pinyin": "pìnqĭng",
    "part_of_speech": "V",
    "meaning": "mời đảm nhiệm chức vụ"
  },
  {
    "chinese": "憑",
    "level": "B2",
    "pinyin": "píng",
    "part_of_speech": "Prep",
    "meaning": "dựa, tựa"
  },
  {
    "chinese": "平常",
    "level": "B2",
    "pinyin": "píngcháng",
    "part_of_speech": "Vs",
    "meaning": "thường ngày"
  },
  {
    "chinese": "平衡",
    "level": "B2",
    "pinyin": "pínghéng",
    "part_of_speech": "Vst",
    "meaning": "cân bằng"
  },
  {
    "chinese": "平靜",
    "level": "B2",
    "pinyin": "píngjìng",
    "part_of_speech": "Vs",
    "meaning": "yên bình"
  },
  {
    "chinese": "平均",
    "level": "B2",
    "pinyin": "píngjūn",
    "part_of_speech": "Vs",
    "meaning": "trung bình"
  },
  {
    "chinese": "婆婆",
    "level": "B2",
    "pinyin": "pópo",
    "part_of_speech": "N",
    "meaning": "mẹ chồng"
  },
  {
    "chinese": "頗",
    "level": "B2",
    "pinyin": "pŏ",
    "part_of_speech": "Adv",
    "meaning": "tương đối"
  },
  {
    "chinese": "破爛",
    "level": "B2",
    "pinyin": "pòlàn",
    "part_of_speech": "Vs",
    "meaning": "rách nát, tả tơi"
  },
  {
    "chinese": "破裂",
    "level": "B2",
    "pinyin": "pòliè",
    "part_of_speech": "Vp",
    "meaning": "vỡ, rạn nứt"
  },
  {
    "chinese": "迫切",
    "level": "B2",
    "pinyin": "pòqiè",
    "part_of_speech": "Vs",
    "meaning": "cấp bách"
  },
  {
    "chinese": "撲",
    "level": "B2",
    "pinyin": "pū",
    "part_of_speech": "V",
    "meaning": "bổ nhào"
  },
  {
    "chinese": "撲滅",
    "level": "B2",
    "pinyin": "pūmiè",
    "part_of_speech": "V",
    "meaning": "dập tắt"
  },
  {
    "chinese": "鋪",
    "level": "B2",
    "pinyin": "pū",
    "part_of_speech": "V",
    "meaning": "trải, lót"
  },
  {
    "chinese": "普及",
    "level": "B2",
    "pinyin": "pŭjí",
    "part_of_speech": "Vs",
    "meaning": "phổ cập"
  },
  {
    "chinese": "普通",
    "level": "B2",
    "pinyin": "pŭtōng",
    "part_of_speech": "Vs",
    "meaning": "phổ thông"
  },
  {
    "chinese": "普通話",
    "level": "B2",
    "pinyin": "pŭtōnghuà",
    "part_of_speech": "N",
    "meaning": "tiếng phổ thông"
  },
  {
    "chinese": "瀑布",
    "level": "B2",
    "pinyin": "pùbù",
    "part_of_speech": "N",
    "meaning": "thác nước"
  },
  {
    "chinese": "欺騙",
    "level": "B2",
    "pinyin": "qīpiàn",
    "part_of_speech": "V",
    "meaning": "lừa dối"
  },
  {
    "chinese": "妻子",
    "level": "B2",
    "pinyin": "qīzĭ",
    "part_of_speech": "N",
    "meaning": "vợ"
  },
  {
    "chinese": "期",
    "level": "B2",
    "pinyin": "qí",
    "part_of_speech": "N",
    "meaning": "một năm tròn, một tháng tròn"
  },
  {
    "chinese": "期限",
    "level": "B2",
    "pinyin": "qíxiàn",
    "part_of_speech": "N",
    "meaning": "kỳ hạn"
  },
  {
    "chinese": "其",
    "level": "B2",
    "pinyin": "qí",
    "part_of_speech": "N",
    "meaning": "của nó, bọn nó"
  },
  {
    "chinese": "其餘",
    "level": "B2",
    "pinyin": "qíyú",
    "part_of_speech": "Det",
    "meaning": "còn lại"
  },
  {
    "chinese": "棋",
    "level": "B2",
    "pinyin": "qí",
    "part_of_speech": "N",
    "meaning": "đánh cờ, chơi cờ"
  },
  {
    "chinese": "齊",
    "level": "B2",
    "pinyin": "qí",
    "part_of_speech": "Vs",
    "meaning": "làm cho đều nhau"
  },
  {
    "chinese": "齊全",
    "level": "B2",
    "pinyin": "qíquán",
    "part_of_speech": "Vs",
    "meaning": "đầy đủ"
  },
  {
    "chinese": "旗袍",
    "level": "B2",
    "pinyin": "qípáo",
    "part_of_speech": "N",
    "meaning": "sườn xám"
  },
  {
    "chinese": "旗子",
    "level": "B2",
    "pinyin": "qízi",
    "part_of_speech": "N",
    "meaning": "lá cờ"
  },
  {
    "chinese": "歧視",
    "level": "B2",
    "pinyin": "qíshì",
    "part_of_speech": "Vst",
    "meaning": "kỳ thị"
  },
  {
    "chinese": "起",
    "level": "B2",
    "pinyin": "qĭ",
    "part_of_speech": "M",
    "meaning": "cái, vụ"
  },
  {
    "chinese": "起",
    "level": "B2",
    "pinyin": "qĭ",
    "part_of_speech": "V",
    "meaning": "dậy, rời khỏi"
  },
  {
    "chinese": "起初",
    "level": "B2",
    "pinyin": "qĭchū",
    "part_of_speech": "Adv",
    "meaning": "lúc đầu, mới đầu"
  },
  {
    "chinese": "起火",
    "level": "B2",
    "pinyin": "qĭhuŏ",
    "part_of_speech": "Vp",
    "meaning": "nấu cơm, thổi cơm"
  },
  {
    "chinese": "企圖",
    "level": "B2",
    "pinyin": "qìtú",
    "part_of_speech": "N",
    "meaning": "ý đồ, mưu đồ"
  },
  {
    "chinese": "企圖",
    "level": "B2",
    "pinyin": "qìtú",
    "part_of_speech": "Vaux",
    "meaning": "mưu tính"
  },
  {
    "chinese": "汽油",
    "level": "B2",
    "pinyin": "qìyóu",
    "part_of_speech": "N",
    "meaning": "xăng"
  },
  {
    "chinese": "器材",
    "level": "B2",
    "pinyin": "qìcái",
    "part_of_speech": "N",
    "meaning": "dụng cụ"
  },
  {
    "chinese": "器官",
    "level": "B2",
    "pinyin": "qìguān",
    "part_of_speech": "N",
    "meaning": "bộ máy, cơ quan"
  },
  {
    "chinese": "氣氛",
    "level": "B2",
    "pinyin": "qìfēn",
    "part_of_speech": "N",
    "meaning": "bầu không khí"
  },
  {
    "chinese": "氣憤",
    "level": "B2",
    "pinyin": "qìfèn",
    "part_of_speech": "Vs",
    "meaning": "tức giận, căm giận"
  },
  {
    "chinese": "氣候",
    "level": "B2",
    "pinyin": "qìhòu",
    "part_of_speech": "N",
    "meaning": "khí hậu"
  },
  {
    "chinese": "氣味",
    "level": "B2",
    "pinyin": "qìwèi",
    "part_of_speech": "N",
    "meaning": "mùi"
  },
  {
    "chinese": "氣息",
    "level": "B2",
    "pinyin": "qìxí",
    "part_of_speech": "N",
    "meaning": "hơi thở"
  },
  {
    "chinese": "氣象",
    "level": "B2",
    "pinyin": "qìxiàng",
    "part_of_speech": "N",
    "meaning": "khí tượng"
  },
  {
    "chinese": "千萬",
    "level": "B2",
    "pinyin": "qiānwàn",
    "part_of_speech": "Adv",
    "meaning": "nhất định, tuyệt đối"
  },
  {
    "chinese": "牽",
    "level": "B2",
    "pinyin": "qiān",
    "part_of_speech": "V",
    "meaning": "dắt"
  },
  {
    "chinese": "遷",
    "level": "B2",
    "pinyin": "qiān",
    "part_of_speech": "V",
    "meaning": "di chuyển, dời"
  },
  {
    "chinese": "簽",
    "level": "B2",
    "pinyin": "qiān",
    "part_of_speech": "V",
    "meaning": "khâu, may lược"
  },
  {
    "chinese": "簽訂",
    "level": "B2",
    "pinyin": "qiāndìng",
    "part_of_speech": "V",
    "meaning": "ký kết"
  },
  {
    "chinese": "簽約",
    "level": "B2",
    "pinyin": "qiānyuē",
    "part_of_speech": "V-sep",
    "meaning": "ký hợp đồng"
  },
  {
    "chinese": "簽字",
    "level": "B2",
    "pinyin": "qiānzì",
    "part_of_speech": "V-sep",
    "meaning": "ký tên"
  },
  {
    "chinese": "前方",
    "level": "B2",
    "pinyin": "qiánfāng",
    "part_of_speech": "N",
    "meaning": "phía trước"
  },
  {
    "chinese": "前進",
    "level": "B2",
    "pinyin": "qiánjìn",
    "part_of_speech": "V",
    "meaning": "tiến lên"
  },
  {
    "chinese": "前頭",
    "level": "B2",
    "pinyin": "qiántou",
    "part_of_speech": "N",
    "meaning": "trước mặt"
  },
  {
    "chinese": "前途",
    "level": "B2",
    "pinyin": "qiántú",
    "part_of_speech": "N",
    "meaning": "tiền đồ"
  },
  {
    "chinese": "前往",
    "level": "B2",
    "pinyin": "qiánwăng",
    "part_of_speech": "V",
    "meaning": "tiến về phía trước"
  },
  {
    "chinese": "前院",
    "level": "B2",
    "pinyin": "qiányuàn",
    "part_of_speech": "N",
    "meaning": "trước sân"
  },
  {
    "chinese": "欠",
    "level": "B2",
    "pinyin": "qiàn",
    "part_of_speech": "V",
    "meaning": "ngáp"
  },
  {
    "chinese": "歉意",
    "level": "B2",
    "pinyin": "qiànyì",
    "part_of_speech": "N",
    "meaning": "áy náy"
  },
  {
    "chinese": "槍",
    "level": "B2",
    "pinyin": "qiāng",
    "part_of_speech": "N",
    "meaning": "cây giáo"
  },
  {
    "chinese": "強",
    "level": "B2",
    "pinyin": "qiáng",
    "part_of_speech": "Vs",
    "meaning": "kiên cường"
  },
  {
    "chinese": "強大",
    "level": "B2",
    "pinyin": "qiángdà",
    "part_of_speech": "Vs",
    "meaning": "lớn mạnh"
  },
  {
    "chinese": "強度",
    "level": "B2",
    "pinyin": "qiángdù",
    "part_of_speech": "N",
    "meaning": "cường độ"
  },
  {
    "chinese": "強烈",
    "level": "B2",
    "pinyin": "qiángliè",
    "part_of_speech": "Vs",
    "meaning": "mãnh liệt"
  },
  {
    "chinese": "強人",
    "level": "B2",
    "pinyin": "qiángrén",
    "part_of_speech": "N",
    "meaning": "tên cướp"
  },
  {
    "chinese": "牆壁",
    "level": "B2",
    "pinyin": "qiángbì",
    "part_of_speech": "N",
    "meaning": "tường, bức tường"
  },
  {
    "chinese": "強迫",
    "level": "B2",
    "pinyin": "qiăngpò",
    "part_of_speech": "V",
    "meaning": "ép buộc"
  },
  {
    "chinese": "搶救",
    "level": "B2",
    "pinyin": "qiăngjiù",
    "part_of_speech": "V",
    "meaning": "cấp cứu"
  },
  {
    "chinese": "敲",
    "level": "B2",
    "pinyin": "qiāo",
    "part_of_speech": "V",
    "meaning": "gõ, khua"
  },
  {
    "chinese": "瞧",
    "level": "B2",
    "pinyin": "qiáo",
    "part_of_speech": "V",
    "meaning": "nhìn"
  },
  {
    "chinese": "巧",
    "level": "B2",
    "pinyin": "qiăo",
    "part_of_speech": "Vs",
    "meaning": "nhanh nhẹn, khéo léo"
  },
  {
    "chinese": "巧妙",
    "level": "B2",
    "pinyin": "qiăomiào",
    "part_of_speech": "Vs",
    "meaning": "tài tình, khéo léo"
  },
  {
    "chinese": "悄悄",
    "level": "B2",
    "pinyin": "qiăoqiăo",
    "part_of_speech": "Adv",
    "meaning": "lặng lẽ"
  },
  {
    "chinese": "切",
    "level": "B2",
    "pinyin": "qiē",
    "part_of_speech": "V",
    "meaning": "thân thiết, gần gũi"
  },
  {
    "chinese": "且",
    "level": "B2",
    "pinyin": "qiě",
    "part_of_speech": "Conj",
    "meaning": "mà còn"
  },
  {
    "chinese": "親愛",
    "level": "B2",
    "pinyin": "qīnài",
    "part_of_speech": "Vs-attr",
    "meaning": "thân ái"
  },
  {
    "chinese": "親口",
    "level": "B2",
    "pinyin": "qīnkŏu",
    "part_of_speech": "Adv",
    "meaning": "chính miệng"
  },
  {
    "chinese": "親戚",
    "level": "B2",
    "pinyin": "qīnqī",
    "part_of_speech": "N",
    "meaning": "thân thích"
  },
  {
    "chinese": "親人",
    "level": "B2",
    "pinyin": "qīnrén",
    "part_of_speech": "N",
    "meaning": "người thân"
  },
  {
    "chinese": "侵害",
    "level": "B2",
    "pinyin": "qīnhài",
    "part_of_speech": "V",
    "meaning": "xâm hại"
  },
  {
    "chinese": "侵入",
    "level": "B2",
    "pinyin": "qīnrù",
    "part_of_speech": "V",
    "meaning": "xâm nhập"
  },
  {
    "chinese": "勤勞",
    "level": "B2",
    "pinyin": "qínláo",
    "part_of_speech": "Vs",
    "meaning": "cần cù"
  },
  {
    "chinese": "寢室",
    "level": "B2",
    "pinyin": "qǐnshì",
    "part_of_speech": "N",
    "meaning": "phòng ngủ"
  },
  {
    "chinese": "青",
    "level": "B2",
    "pinyin": "qīng",
    "part_of_speech": "Vs",
    "meaning": "xanh, màu xanh"
  },
  {
    "chinese": "清",
    "level": "B2",
    "pinyin": "qīng",
    "part_of_speech": "V",
    "meaning": "trong suốt"
  },
  {
    "chinese": "清晨",
    "level": "B2",
    "pinyin": "qīngchén",
    "part_of_speech": "N",
    "meaning": "sáng sớm"
  },
  {
    "chinese": "清除",
    "level": "B2",
    "pinyin": "qīngchú",
    "part_of_speech": "V",
    "meaning": "loại bỏ"
  },
  {
    "chinese": "清楚",
    "level": "B2",
    "pinyin": "qīngchŭ",
    "part_of_speech": "Vs",
    "meaning": "rõ ràng"
  },
  {
    "chinese": "清淡",
    "level": "B2",
    "pinyin": "qīngdàn",
    "part_of_speech": "Vs",
    "meaning": "nhẹ, loãng, nhạt"
  },
  {
    "chinese": "清晰",
    "level": "B2",
    "pinyin": "qīngxī",
    "part_of_speech": "Vs",
    "meaning": "rõ rệt"
  },
  {
    "chinese": "清醒",
    "level": "B2",
    "pinyin": "qīngxĭng",
    "part_of_speech": "Vs",
    "meaning": "tỉnh táo"
  },
  {
    "chinese": "輕傷",
    "level": "B2",
    "pinyin": "qīngshāng",
    "part_of_speech": "N",
    "meaning": "bị thương nhẹ"
  },
  {
    "chinese": "輕視",
    "level": "B2",
    "pinyin": "qīngshì",
    "part_of_speech": "Vst",
    "meaning": "khinh thường"
  },
  {
    "chinese": "傾向",
    "level": "B2",
    "pinyin": "qīngxiàng",
    "part_of_speech": "Vst",
    "meaning": "nghiêng về"
  },
  {
    "chinese": "情書",
    "level": "B2",
    "pinyin": "qíngshū",
    "part_of_speech": "N",
    "meaning": "thư tình"
  },
  {
    "chinese": "情緒",
    "level": "B2",
    "pinyin": "qíngxù",
    "part_of_speech": "N",
    "meaning": "hứng thú"
  },
  {
    "chinese": "秋季",
    "level": "B2",
    "pinyin": "qiūjì",
    "part_of_speech": "N",
    "meaning": "mùa thu"
  },
  {
    "chinese": "求婚",
    "level": "B2",
    "pinyin": "qiúhūn",
    "part_of_speech": "V-sep",
    "meaning": "cầu hôn"
  },
  {
    "chinese": "球隊",
    "level": "B2",
    "pinyin": "qiúduì",
    "part_of_speech": "N",
    "meaning": "đội bóng"
  },
  {
    "chinese": "球鞋",
    "level": "B2",
    "pinyin": "qiúxié",
    "part_of_speech": "N",
    "meaning": "giày đá bóng"
  },
  {
    "chinese": "曲折",
    "level": "B2",
    "pinyin": "qūzhé",
    "part_of_speech": "Vs",
    "meaning": "quanh co"
  },
  {
    "chinese": "區別",
    "level": "B2",
    "pinyin": "qūbié",
    "part_of_speech": "N",
    "meaning": "điểm khác biệt"
  },
  {
    "chinese": "區別",
    "level": "B2",
    "pinyin": "qūbié",
    "part_of_speech": "V",
    "meaning": "phân biệt"
  },
  {
    "chinese": "區域",
    "level": "B2",
    "pinyin": "qūyù",
    "part_of_speech": "N",
    "meaning": "khu vực, vùng"
  },
  {
    "chinese": "取",
    "level": "B2",
    "pinyin": "qŭ",
    "part_of_speech": "V",
    "meaning": "lấy, đạt được"
  },
  {
    "chinese": "取得",
    "level": "B2",
    "pinyin": "qŭdé",
    "part_of_speech": "Vpt",
    "meaning": "giành được"
  },
  {
    "chinese": "取笑",
    "level": "B2",
    "pinyin": "qŭxiào",
    "part_of_speech": "V",
    "meaning": "pha trò"
  },
  {
    "chinese": "取消",
    "level": "B2",
    "pinyin": "qŭxiāo",
    "part_of_speech": "V",
    "meaning": "thủ tiêu"
  },
  {
    "chinese": "娶",
    "level": "B2",
    "pinyin": "qŭ",
    "part_of_speech": "V",
    "meaning": "lấy vợ"
  },
  {
    "chinese": "去",
    "level": "B2",
    "pinyin": "qù",
    "part_of_speech": "V",
    "meaning": "rời đi"
  },
  {
    "chinese": "圈",
    "level": "B2",
    "pinyin": "quān",
    "part_of_speech": "M",
    "meaning": "chuồng"
  },
  {
    "chinese": "全家",
    "level": "B2",
    "pinyin": "quánjiā",
    "part_of_speech": "N",
    "meaning": "cả nhà"
  },
  {
    "chinese": "全面",
    "level": "B2",
    "pinyin": "quánmiàn",
    "part_of_speech": "Adv",
    "meaning": "toàn diện"
  },
  {
    "chinese": "全面",
    "level": "B2",
    "pinyin": "quánmiàn",
    "part_of_speech": "Vs-attr",
    "meaning": "mọi mặt"
  },
  {
    "chinese": "全體",
    "level": "B2",
    "pinyin": "quántĭ",
    "part_of_speech": "N",
    "meaning": "toàn thể"
  },
  {
    "chinese": "拳頭",
    "level": "B2",
    "pinyin": "quántou",
    "part_of_speech": "N",
    "meaning": "nắm đấm, nắm tay"
  },
  {
    "chinese": "權利",
    "level": "B2",
    "pinyin": "quánlì",
    "part_of_speech": "N",
    "meaning": "quyền lợi"
  },
  {
    "chinese": "勸",
    "level": "B2",
    "pinyin": "quàn",
    "part_of_speech": "V",
    "meaning": "khuyên nhủ"
  },
  {
    "chinese": "缺",
    "level": "B2",
    "pinyin": "quē",
    "part_of_speech": "Vst",
    "meaning": "thiếu"
  },
  {
    "chinese": "缺乏",
    "level": "B2",
    "pinyin": "quēfá",
    "part_of_speech": "Vst",
    "meaning": "thiếu hụt"
  },
  {
    "chinese": "缺少",
    "level": "B2",
    "pinyin": "quēshăo",
    "part_of_speech": "Vst",
    "meaning": "thiếu"
  },
  {
    "chinese": "缺席",
    "level": "B2",
    "pinyin": "quēxí",
    "part_of_speech": "Vs",
    "meaning": "vắng họp, nghỉ học"
  },
  {
    "chinese": "確實",
    "level": "B2",
    "pinyin": "quèshí",
    "part_of_speech": "Vs",
    "meaning": "đích thực"
  },
  {
    "chinese": "群",
    "level": "B2",
    "pinyin": "qún",
    "part_of_speech": "M",
    "meaning": "bầy, đàn"
  },
  {
    "chinese": "群眾",
    "level": "B2",
    "pinyin": "qúnzhòng",
    "part_of_speech": "N",
    "meaning": "quần chúng"
  },
  {
    "chinese": "然而",
    "level": "B2",
    "pinyin": "ránér",
    "part_of_speech": "Conj",
    "meaning": "nhưng mà"
  },
  {
    "chinese": "燃料",
    "level": "B2",
    "pinyin": "ránliào",
    "part_of_speech": "N",
    "meaning": "nguyên liệu, chất đốt"
  },
  {
    "chinese": "燃燒",
    "level": "B2",
    "pinyin": "ránshāo",
    "part_of_speech": "V",
    "meaning": "bùng cháy"
  },
  {
    "chinese": "染",
    "level": "B2",
    "pinyin": "răn",
    "part_of_speech": "V",
    "meaning": "nhuộm"
  },
  {
    "chinese": "讓",
    "level": "B2",
    "pinyin": "ràng",
    "part_of_speech": "V",
    "meaning": "nhường"
  },
  {
    "chinese": "讓步",
    "level": "B2",
    "pinyin": "ràngbù",
    "part_of_speech": "Vi",
    "meaning": "nhường bước"
  },
  {
    "chinese": "繞",
    "level": "B2",
    "pinyin": "rào",
    "part_of_speech": "V",
    "meaning": "quấn, buộc"
  },
  {
    "chinese": "惹",
    "level": "B2",
    "pinyin": "rě",
    "part_of_speech": "V",
    "meaning": "dẫn đến"
  },
  {
    "chinese": "惹",
    "level": "B2",
    "pinyin": "rě",
    "part_of_speech": "Vst",
    "meaning": "trêu chọc"
  },
  {
    "chinese": "熱愛",
    "level": "B2",
    "pinyin": "rèài",
    "part_of_speech": "Vst",
    "meaning": "yêu, tha thiết"
  },
  {
    "chinese": "熱烈",
    "level": "B2",
    "pinyin": "rèliè",
    "part_of_speech": "Vs",
    "meaning": "nhiệt liệt"
  },
  {
    "chinese": "熱門",
    "level": "B2",
    "pinyin": "rèmén",
    "part_of_speech": "Vs",
    "meaning": "hấp dẫn, lôi cuốn"
  },
  {
    "chinese": "熱情",
    "level": "B2",
    "pinyin": "rèqíng",
    "part_of_speech": "N",
    "meaning": "sự niềm nở"
  },
  {
    "chinese": "熱情",
    "level": "B2",
    "pinyin": "rèqíng",
    "part_of_speech": "Vs",
    "meaning": "nhiệt tình"
  },
  {
    "chinese": "熱心",
    "level": "B2",
    "pinyin": "rèxīn",
    "part_of_speech": "Vs",
    "meaning": "sốt sắng"
  },
  {
    "chinese": "人才",
    "level": "B2",
    "pinyin": "réncái",
    "part_of_speech": "N",
    "meaning": "nhân tài"
  },
  {
    "chinese": "人格",
    "level": "B2",
    "pinyin": "réngé",
    "part_of_speech": "N",
    "meaning": "tính cách"
  },
  {
    "chinese": "人工",
    "level": "B2",
    "pinyin": "réngōng",
    "part_of_speech": "N",
    "meaning": "nhân công"
  },
  {
    "chinese": "人力",
    "level": "B2",
    "pinyin": "rénlì",
    "part_of_speech": "N",
    "meaning": "nhân lực"
  },
  {
    "chinese": "人權",
    "level": "B2",
    "pinyin": "rénquán",
    "part_of_speech": "N",
    "meaning": "nhân quyền"
  },
  {
    "chinese": "人生",
    "level": "B2",
    "pinyin": "rénshēng",
    "part_of_speech": "N",
    "meaning": "đời người"
  },
  {
    "chinese": "人事",
    "level": "B2",
    "pinyin": "rénshì",
    "part_of_speech": "N",
    "meaning": "việc của con người"
  },
  {
    "chinese": "人體",
    "level": "B2",
    "pinyin": "réntĭ",
    "part_of_speech": "N",
    "meaning": "nhân thể, thân thể"
  },
  {
    "chinese": "人心",
    "level": "B2",
    "pinyin": "rénxīn",
    "part_of_speech": "N",
    "meaning": "lòng người"
  },
  {
    "chinese": "人行道",
    "level": "B2",
    "pinyin": "rénxíngdào",
    "part_of_speech": "N",
    "meaning": "đường dành cho người đi bộ"
  },
  {
    "chinese": "人員",
    "level": "B2",
    "pinyin": "rényuán",
    "part_of_speech": "N",
    "meaning": "nhân viên"
  },
  {
    "chinese": "忍不住",
    "level": "B2",
    "pinyin": "rěnbùzhù",
    "part_of_speech": "Vs",
    "meaning": "không thể chịu đựng"
  },
  {
    "chinese": "忍受",
    "level": "B2",
    "pinyin": "rěnshòu",
    "part_of_speech": "Vst",
    "meaning": "nén chịu"
  },
  {
    "chinese": "忍心",
    "level": "B2",
    "pinyin": "rěnxīn",
    "part_of_speech": "Vs",
    "meaning": "nhẫn tâm"
  },
  {
    "chinese": "任",
    "level": "B2",
    "pinyin": "rèn",
    "part_of_speech": "Vst",
    "meaning": "bổ nhiệm"
  },
  {
    "chinese": "任性",
    "level": "B2",
    "pinyin": "rènxìng",
    "part_of_speech": "Vs",
    "meaning": "tùy hứng"
  },
  {
    "chinese": "日常",
    "level": "B2",
    "pinyin": "rìcháng",
    "part_of_speech": "Vs-attr",
    "meaning": "hàng ngày"
  },
  {
    "chinese": "日後",
    "level": "B2",
    "pinyin": "rìhòu",
    "part_of_speech": "N",
    "meaning": "sau này"
  },
  {
    "chinese": "日用品",
    "level": "B2",
    "pinyin": "rìyòngpĭn",
    "part_of_speech": "N",
    "meaning": "vật dụng hàng ngày"
  },
  {
    "chinese": "容",
    "level": "B2",
    "pinyin": "róng",
    "part_of_speech": "Vst",
    "meaning": "dung nạp"
  },
  {
    "chinese": "融化",
    "level": "B2",
    "pinyin": "rónghuà",
    "part_of_speech": "Vp",
    "meaning": "tan, hòa tan"
  },
  {
    "chinese": "榮幸",
    "level": "B2",
    "pinyin": "róngxìng",
    "part_of_speech": "Vs",
    "meaning": "vinh hạnh"
  },
  {
    "chinese": "如",
    "level": "B2",
    "pinyin": "rú",
    "part_of_speech": "Vst",
    "meaning": "như, giống như"
  },
  {
    "chinese": "如果說",
    "level": "B2",
    "pinyin": "rúguŏshuō",
    "part_of_speech": "Conj",
    "meaning": "nếu nói"
  },
  {
    "chinese": "如何",
    "level": "B2",
    "pinyin": "rúhé",
    "part_of_speech": "Adv",
    "meaning": "như thế nào, ra sao"
  },
  {
    "chinese": "如何",
    "level": "B2",
    "pinyin": "rúhé",
    "part_of_speech": "Vs",
    "meaning": "làm sao, làm thế nào"
  },
  {
    "chinese": "如今",
    "level": "B2",
    "pinyin": "rújīn",
    "part_of_speech": "N",
    "meaning": "giờ đây, đến nay"
  },
  {
    "chinese": "如同",
    "level": "B2",
    "pinyin": "rútóng",
    "part_of_speech": "Vst",
    "meaning": "dường như"
  },
  {
    "chinese": "入",
    "level": "B2",
    "pinyin": "rù",
    "part_of_speech": "V",
    "meaning": "đi vào"
  },
  {
    "chinese": "入境",
    "level": "B2",
    "pinyin": "rùjìng",
    "part_of_speech": "V",
    "meaning": "nhập cảnh"
  },
  {
    "chinese": "入口",
    "level": "B2",
    "pinyin": "rùkŏu",
    "part_of_speech": "N",
    "meaning": "nhập khẩu"
  },
  {
    "chinese": "入學",
    "level": "B2",
    "pinyin": "rùxué",
    "part_of_speech": "Vp",
    "meaning": "nhập học"
  },
  {
    "chinese": "軟",
    "level": "B2",
    "pinyin": "ruăn",
    "part_of_speech": "Vs",
    "meaning": "mềm mại"
  },
  {
    "chinese": "塞",
    "level": "B2",
    "pinyin": "sāi",
    "part_of_speech": "V",
    "meaning": "nhét, đút"
  },
  {
    "chinese": "賽跑",
    "level": "B2",
    "pinyin": "sàipăo",
    "part_of_speech": "Vi",
    "meaning": "thi chạy"
  },
  {
    "chinese": "三角形",
    "level": "B2",
    "pinyin": "sānjiăoxíng",
    "part_of_speech": "N",
    "meaning": "hình tam giác"
  },
  {
    "chinese": "散",
    "level": "B2",
    "pinyin": "sàn",
    "part_of_speech": "V",
    "meaning": "lỏng lẻo, rời rạc"
  },
  {
    "chinese": "散",
    "level": "B2",
    "pinyin": "sàn",
    "part_of_speech": "Vp",
    "meaning": "không tập trung"
  },
  {
    "chinese": "喪失",
    "level": "B2",
    "pinyin": "sàngshī",
    "part_of_speech": "Vpt",
    "meaning": "mất mát"
  },
  {
    "chinese": "艘",
    "level": "B2",
    "pinyin": "sāo",
    "part_of_speech": "M",
    "meaning": "chiếc, con"
  },
  {
    "chinese": "掃",
    "level": "B2",
    "pinyin": "săo",
    "part_of_speech": "V",
    "meaning": "quét, loại bỏ"
  },
  {
    "chinese": "色彩",
    "level": "B2",
    "pinyin": "sècăi",
    "part_of_speech": "N",
    "meaning": "màu sắc"
  },
  {
    "chinese": "色情",
    "level": "B2",
    "pinyin": "sèqíng",
    "part_of_speech": "N",
    "meaning": "tình dục"
  },
  {
    "chinese": "沙",
    "level": "B2",
    "pinyin": "shā",
    "part_of_speech": "N",
    "meaning": "sàng"
  },
  {
    "chinese": "沙漠",
    "level": "B2",
    "pinyin": "shāmò",
    "part_of_speech": "N",
    "meaning": "sa mạc"
  },
  {
    "chinese": "沙灘",
    "level": "B2",
    "pinyin": "shātān",
    "part_of_speech": "N",
    "meaning": "bãi cát"
  },
  {
    "chinese": "沙子",
    "level": "B2",
    "pinyin": "shāzi",
    "part_of_speech": "N",
    "meaning": "hạt cát"
  },
  {
    "chinese": "殺價",
    "level": "B2",
    "pinyin": "shājià",
    "part_of_speech": "V-sep",
    "meaning": "ép giá"
  },
  {
    "chinese": "傻",
    "level": "B2",
    "pinyin": "shă",
    "part_of_speech": "Vs",
    "meaning": "dốt, ngốc"
  },
  {
    "chinese": "曬太陽",
    "level": "B2",
    "pinyin": "shàitàiyáng",
    "part_of_speech": "Vi",
    "meaning": "tắm nắng"
  },
  {
    "chinese": "山地",
    "level": "B2",
    "pinyin": "shāndì",
    "part_of_speech": "N",
    "meaning": "vùng núi"
  },
  {
    "chinese": "閃",
    "level": "B2",
    "pinyin": "shăn",
    "part_of_speech": "Vi",
    "meaning": "lánh, trốn"
  },
  {
    "chinese": "閃",
    "level": "B2",
    "pinyin": "shăn",
    "part_of_speech": "Vp",
    "meaning": "chớp, chợt xuất hiện"
  },
  {
    "chinese": "善於",
    "level": "B2",
    "pinyin": "shànyú",
    "part_of_speech": "Vst",
    "meaning": "có sở trường về..."
  },
  {
    "chinese": "扇子",
    "level": "B2",
    "pinyin": "shànzi",
    "part_of_speech": "N",
    "meaning": "cái quạt"
  },
  {
    "chinese": "傷",
    "level": "B2",
    "pinyin": "shāng",
    "part_of_speech": "N",
    "meaning": "tổn thất"
  },
  {
    "chinese": "傷",
    "level": "B2",
    "pinyin": "shāng",
    "part_of_speech": "Vs",
    "meaning": "làm tổn hại"
  },
  {
    "chinese": "傷腦筋",
    "level": "B2",
    "pinyin": "shāngnăojīn",
    "part_of_speech": "Vs",
    "meaning": "hao tổn tâm trí"
  },
  {
    "chinese": "商標",
    "level": "B2",
    "pinyin": "shāngbiāo",
    "part_of_speech": "N",
    "meaning": "nhãn hiệu"
  },
  {
    "chinese": "商場",
    "level": "B2",
    "pinyin": "shāngchăng",
    "part_of_speech": "N",
    "meaning": "thương trường"
  },
  {
    "chinese": "商量",
    "level": "B2",
    "pinyin": "shāngliang",
    "part_of_speech": "V",
    "meaning": "thương lượng"
  },
  {
    "chinese": "上",
    "level": "B2",
    "pinyin": "shàng",
    "part_of_speech": "V",
    "meaning": "ở trên"
  },
  {
    "chinese": "上級",
    "level": "B2",
    "pinyin": "shàngjí",
    "part_of_speech": "N",
    "meaning": "cấp trên"
  },
  {
    "chinese": "上升",
    "level": "B2",
    "pinyin": "shàngshēng",
    "part_of_speech": "Vi",
    "meaning": "lên cao, tăng lên"
  },
  {
    "chinese": "上市",
    "level": "B2",
    "pinyin": "shàngshì",
    "part_of_speech": "Vp",
    "meaning": "đưa ra thị trường"
  },
  {
    "chinese": "上述",
    "level": "B2",
    "pinyin": "shàngshù",
    "part_of_speech": "N",
    "meaning": "kể trên, nói trên"
  },
  {
    "chinese": "上台/臺",
    "level": "B2",
    "pinyin": "shàngtái",
    "part_of_speech": "V-sep",
    "meaning": "lên sân khấu"
  },
  {
    "chinese": "上頭",
    "level": "B2",
    "pinyin": "shàngtou",
    "part_of_speech": "N",
    "meaning": "búi tóc"
  },
  {
    "chinese": "上下",
    "level": "B2",
    "pinyin": "shàngxià",
    "part_of_speech": "N",
    "meaning": "trên dưới"
  },
  {
    "chinese": "上游",
    "level": "B2",
    "pinyin": "shàngyóu",
    "part_of_speech": "N",
    "meaning": "thượng nguồn"
  },
  {
    "chinese": "稍",
    "level": "B2",
    "pinyin": "shāo",
    "part_of_speech": "Adv",
    "meaning": "sơ qua"
  },
  {
    "chinese": "稍微",
    "level": "B2",
    "pinyin": "shāowéi",
    "part_of_speech": "Adv",
    "meaning": "hơi, một chút"
  },
  {
    "chinese": "少數",
    "level": "B2",
    "pinyin": "shăoshù",
    "part_of_speech": "Det",
    "meaning": "thiểu số"
  },
  {
    "chinese": "少年",
    "level": "B2",
    "pinyin": "shàonián",
    "part_of_speech": "N",
    "meaning": "thiếu niên"
  },
  {
    "chinese": "少女",
    "level": "B2",
    "pinyin": "shàonǚ",
    "part_of_speech": "N",
    "meaning": "thiếu nữ"
  },
  {
    "chinese": "舌頭",
    "level": "B2",
    "pinyin": "shétou",
    "part_of_speech": "N",
    "meaning": "lưỡi"
  },
  {
    "chinese": "捨不得",
    "level": "B2",
    "pinyin": "shěbùde",
    "part_of_speech": "Vst",
    "meaning": "không nỡ"
  },
  {
    "chinese": "捨得",
    "level": "B2",
    "pinyin": "shěde",
    "part_of_speech": "Vst",
    "meaning": "cam lòng"
  },
  {
    "chinese": "射",
    "level": "B2",
    "pinyin": "shè",
    "part_of_speech": "V",
    "meaning": "bắn, sút"
  },
  {
    "chinese": "社會",
    "level": "B2",
    "pinyin": "shèhuì",
    "part_of_speech": "N",
    "meaning": "xã hội"
  },
  {
    "chinese": "社交",
    "level": "B2",
    "pinyin": "shèjiāo",
    "part_of_speech": "N",
    "meaning": "giao tiếp xã hội"
  },
  {
    "chinese": "社團",
    "level": "B2",
    "pinyin": "shètuán",
    "part_of_speech": "N",
    "meaning": "đoàn thể"
  },
  {
    "chinese": "設立",
    "level": "B2",
    "pinyin": "shèlì",
    "part_of_speech": "V",
    "meaning": "thành lập"
  },
  {
    "chinese": "設置",
    "level": "B2",
    "pinyin": "shèzhì",
    "part_of_speech": "V",
    "meaning": "thiết lập"
  },
  {
    "chinese": "攝影",
    "level": "B2",
    "pinyin": "shèyĭng",
    "part_of_speech": "Vi",
    "meaning": "chụp ảnh"
  },
  {
    "chinese": "申請",
    "level": "B2",
    "pinyin": "shēnqĭng",
    "part_of_speech": "V",
    "meaning": "xin"
  },
  {
    "chinese": "伸",
    "level": "B2",
    "pinyin": "shēn",
    "part_of_speech": "V",
    "meaning": "duỗi, dang"
  },
  {
    "chinese": "伸手",
    "level": "B2",
    "pinyin": "shēnshŏu",
    "part_of_speech": "Vi",
    "meaning": "chìa tay"
  },
  {
    "chinese": "身材",
    "level": "B2",
    "pinyin": "shēncái",
    "part_of_speech": "N",
    "meaning": "vóc người"
  },
  {
    "chinese": "身分",
    "level": "B2",
    "pinyin": "shēnfèn",
    "part_of_speech": "N",
    "meaning": "tư cách, thân phận"
  },
  {
    "chinese": "身分證",
    "level": "B2",
    "pinyin": "shēnfènzhèng",
    "part_of_speech": "N",
    "meaning": "chứng minh nhân dân"
  },
  {
    "chinese": "深刻",
    "level": "B2",
    "pinyin": "shēnkè",
    "part_of_speech": "Vs",
    "meaning": "sâu sắc"
  },
  {
    "chinese": "深淺",
    "level": "B2",
    "pinyin": "shēnqiăn",
    "part_of_speech": "N",
    "meaning": "mức độ"
  },
  {
    "chinese": "深夜",
    "level": "B2",
    "pinyin": "shēnyè",
    "part_of_speech": "N",
    "meaning": "đêm khuya"
  },
  {
    "chinese": "神",
    "level": "B2",
    "pinyin": "shén",
    "part_of_speech": "N",
    "meaning": "thần linh"
  },
  {
    "chinese": "神話",
    "level": "B2",
    "pinyin": "shénhuà",
    "part_of_speech": "N",
    "meaning": "thần thoại"
  },
  {
    "chinese": "神經",
    "level": "B2",
    "pinyin": "shénjīng",
    "part_of_speech": "N",
    "meaning": "thần kinh"
  },
  {
    "chinese": "神秘",
    "level": "B2",
    "pinyin": "shénmì",
    "part_of_speech": "Vs",
    "meaning": "thần bí"
  },
  {
    "chinese": "神奇",
    "level": "B2",
    "pinyin": "shénqí",
    "part_of_speech": "Vs",
    "meaning": "thần kỳ"
  },
  {
    "chinese": "神氣",
    "level": "B2",
    "pinyin": "shénqì",
    "part_of_speech": "Vs",
    "meaning": "thần sắc"
  },
  {
    "chinese": "神聖",
    "level": "B2",
    "pinyin": "shénshèng",
    "part_of_speech": "Vs",
    "meaning": "thần thánh, thiêng liêng"
  },
  {
    "chinese": "神仙",
    "level": "B2",
    "pinyin": "shénxiān",
    "part_of_speech": "N",
    "meaning": "thần tiên"
  },
  {
    "chinese": "審查",
    "level": "B2",
    "pinyin": "shěnchá",
    "part_of_speech": "V",
    "meaning": "thẩm tra"
  },
  {
    "chinese": "慎重",
    "level": "B2",
    "pinyin": "shènzhòng",
    "part_of_speech": "Vs",
    "meaning": "thận trọng"
  },
  {
    "chinese": "升",
    "level": "B2",
    "pinyin": "shēng",
    "part_of_speech": "Vp",
    "meaning": "lên cao, thăng"
  },
  {
    "chinese": "升高",
    "level": "B2",
    "pinyin": "shēnggāo",
    "part_of_speech": "Vp",
    "meaning": "nâng cao"
  },
  {
    "chinese": "升級",
    "level": "B2",
    "pinyin": "shēngjí",
    "part_of_speech": "Vp",
    "meaning": "thăng chức"
  },
  {
    "chinese": "升學",
    "level": "B2",
    "pinyin": "shēngxué",
    "part_of_speech": "Vi",
    "meaning": "học lên"
  },
  {
    "chinese": "生",
    "level": "B2",
    "pinyin": "shēng",
    "part_of_speech": "Vs-attr",
    "meaning": "sinh đẻ"
  },
  {
    "chinese": "生存",
    "level": "B2",
    "pinyin": "shēngcún",
    "part_of_speech": "Vs",
    "meaning": "sinh tồn"
  },
  {
    "chinese": "生肖",
    "level": "B2",
    "pinyin": "shēngxiào",
    "part_of_speech": "N",
    "meaning": "cầm tinh"
  },
  {
    "chinese": "生長",
    "level": "B2",
    "pinyin": "shēngzhăng",
    "part_of_speech": "Vs",
    "meaning": "sinh trưởng, lớn lên"
  },
  {
    "chinese": "聲",
    "level": "B2",
    "pinyin": "shēng",
    "part_of_speech": "M",
    "meaning": "âm thanh"
  },
  {
    "chinese": "繩(子)",
    "level": "B2",
    "pinyin": "shéng(zi)",
    "part_of_speech": "N",
    "meaning": "dây thừng"
  },
  {
    "chinese": "省",
    "level": "B2",
    "pinyin": "shěng",
    "part_of_speech": "Vs",
    "meaning": "tự kiểm điểm bản thân"
  },
  {
    "chinese": "省得",
    "level": "B2",
    "pinyin": "shěngde",
    "part_of_speech": "Vaux",
    "meaning": "tránh khỏi"
  },
  {
    "chinese": "勝",
    "level": "B2",
    "pinyin": "shèng",
    "part_of_speech": "Vp",
    "meaning": "Thắng, vượt qua"
  },
  {
    "chinese": "勝利",
    "level": "B2",
    "pinyin": "shènglì",
    "part_of_speech": "Vp",
    "meaning": "thắng lợi"
  },
  {
    "chinese": "失敗",
    "level": "B2",
    "pinyin": "shībài",
    "part_of_speech": "Vs",
    "meaning": "thất bại"
  },
  {
    "chinese": "失掉",
    "level": "B2",
    "pinyin": "shīdiào",
    "part_of_speech": "Vpt",
    "meaning": "lỡ mất"
  },
  {
    "chinese": "失眠",
    "level": "B2",
    "pinyin": "shīmián",
    "part_of_speech": "Vp",
    "meaning": "mất ngủ"
  },
  {
    "chinese": "失望",
    "level": "B2",
    "pinyin": "shīwàng",
    "part_of_speech": "Vs",
    "meaning": "thất vọng"
  },
  {
    "chinese": "失業",
    "level": "B2",
    "pinyin": "shīyè",
    "part_of_speech": "Vp",
    "meaning": "thất nghiệp"
  },
  {
    "chinese": "溼",
    "level": "B2",
    "pinyin": "shī",
    "part_of_speech": "Vs",
    "meaning": "Ướt, ẩm"
  },
  {
    "chinese": "詩",
    "level": "B2",
    "pinyin": "shī",
    "part_of_speech": "N",
    "meaning": "thơ ca"
  },
  {
    "chinese": "詩人",
    "level": "B2",
    "pinyin": "shīrén",
    "part_of_speech": "N",
    "meaning": "nhà thơ"
  },
  {
    "chinese": "師父",
    "level": "B2",
    "pinyin": "shīfu",
    "part_of_speech": "N",
    "meaning": "sư phụ"
  },
  {
    "chinese": "師傅",
    "level": "B2",
    "pinyin": "shīfù",
    "part_of_speech": "N",
    "meaning": "thầy dạy, sư phụ"
  },
  {
    "chinese": "師母",
    "level": "B2",
    "pinyin": "shīmŭ",
    "part_of_speech": "N",
    "meaning": "sư mẫu (vợ của thầy)"
  },
  {
    "chinese": "施工",
    "level": "B2",
    "pinyin": "shīgōng",
    "part_of_speech": "Vi",
    "meaning": "thi công"
  },
  {
    "chinese": "時常",
    "level": "B2",
    "pinyin": "shícháng",
    "part_of_speech": "Adv",
    "meaning": "thường thường"
  },
  {
    "chinese": "時機",
    "level": "B2",
    "pinyin": "shíjī",
    "part_of_speech": "N",
    "meaning": "thời cơ"
  },
  {
    "chinese": "時期",
    "level": "B2",
    "pinyin": "shíqí",
    "part_of_speech": "N",
    "meaning": "thời kỳ"
  },
  {
    "chinese": "時時",
    "level": "B2",
    "pinyin": "shíshí",
    "part_of_speech": "Adv",
    "meaning": "luôn luôn"
  },
  {
    "chinese": "食品",
    "level": "B2",
    "pinyin": "shípĭn",
    "part_of_speech": "N",
    "meaning": "thực phẩm"
  },
  {
    "chinese": "實用",
    "level": "B2",
    "pinyin": "shíyòng",
    "part_of_speech": "Vs",
    "meaning": "thực dụng"
  },
  {
    "chinese": "實在",
    "level": "B2",
    "pinyin": "shízài",
    "part_of_speech": "Adv",
    "meaning": "chắc chắn"
  },
  {
    "chinese": "實施",
    "level": "B2",
    "pinyin": "shíshī",
    "part_of_speech": "V",
    "meaning": "thực thi"
  },
  {
    "chinese": "實現",
    "level": "B2",
    "pinyin": "shíxiàn",
    "part_of_speech": "V",
    "meaning": "thực hiện"
  },
  {
    "chinese": "實驗",
    "level": "B2",
    "pinyin": "shíyàn",
    "part_of_speech": "N",
    "meaning": "thí nghiệm"
  },
  {
    "chinese": "實驗",
    "level": "B2",
    "pinyin": "shíyàn",
    "part_of_speech": "Vi",
    "meaning": "thực nghiệm"
  },
  {
    "chinese": "使",
    "level": "B2",
    "pinyin": "shĭ",
    "part_of_speech": "V",
    "meaning": "sai khiến"
  },
  {
    "chinese": "始終",
    "level": "B2",
    "pinyin": "shĭzhōng",
    "part_of_speech": "Adv",
    "meaning": "từ đầu đến cuối"
  },
  {
    "chinese": "示威",
    "level": "B2",
    "pinyin": "shìwēi",
    "part_of_speech": "Vi",
    "meaning": "thị uy, uy lực"
  },
  {
    "chinese": "式樣",
    "level": "B2",
    "pinyin": "shìyàng",
    "part_of_speech": "N",
    "meaning": "kiểu dáng"
  },
  {
    "chinese": "世",
    "level": "B2",
    "pinyin": "shì",
    "part_of_speech": "N",
    "meaning": "đời, thế hệ"
  },
  {
    "chinese": "世紀",
    "level": "B2",
    "pinyin": "shìjì",
    "part_of_speech": "N",
    "meaning": "thế kỷ"
  },
  {
    "chinese": "市立",
    "level": "B2",
    "pinyin": "shìlì",
    "part_of_speech": "Vs-attr",
    "meaning": "thành phố"
  },
  {
    "chinese": "市民",
    "level": "B2",
    "pinyin": "shìmín",
    "part_of_speech": "N",
    "meaning": "dân thành phố"
  },
  {
    "chinese": "市區",
    "level": "B2",
    "pinyin": "shìqū",
    "part_of_speech": "N",
    "meaning": "khu vực thành thị"
  },
  {
    "chinese": "視",
    "level": "B2",
    "pinyin": "shì",
    "part_of_speech": "Prep",
    "meaning": "nhìn, đối xử"
  },
  {
    "chinese": "視野",
    "level": "B2",
    "pinyin": "shìyě",
    "part_of_speech": "N",
    "meaning": "tầm nhìn"
  },
  {
    "chinese": "適當",
    "level": "B2",
    "pinyin": "shìdàng",
    "part_of_speech": "Vs",
    "meaning": "thỏa đáng"
  },
  {
    "chinese": "適合",
    "level": "B2",
    "pinyin": "shìhé",
    "part_of_speech": "Vst",
    "meaning": "phù hợp"
  },
  {
    "chinese": "適用",
    "level": "B2",
    "pinyin": "shìyòng",
    "part_of_speech": "Vst",
    "meaning": "thích hợp dùng"
  },
  {
    "chinese": "是非",
    "level": "B2",
    "pinyin": "shìfēi",
    "part_of_speech": "N",
    "meaning": "phải trải, đúng sai"
  },
  {
    "chinese": "是否",
    "level": "B2",
    "pinyin": "shìfŏu",
    "part_of_speech": "Adv",
    "meaning": "phải chăng"
  },
  {
    "chinese": "事件",
    "level": "B2",
    "pinyin": "shìjiàn",
    "part_of_speech": "N",
    "meaning": "sự kiện"
  },
  {
    "chinese": "事實上",
    "level": "B2",
    "pinyin": "shìshíshàng",
    "part_of_speech": "Adv",
    "meaning": "trên thực tế"
  },
  {
    "chinese": "事物",
    "level": "B2",
    "pinyin": "shìwù",
    "part_of_speech": "N",
    "meaning": "sự vật"
  },
  {
    "chinese": "事先",
    "level": "B2",
    "pinyin": "shìxiān",
    "part_of_speech": "Adv",
    "meaning": "trước khi xảy ra"
  },
  {
    "chinese": "勢力",
    "level": "B2",
    "pinyin": "shìlì",
    "part_of_speech": "N",
    "meaning": "thế lực"
  },
  {
    "chinese": "試驗",
    "level": "B2",
    "pinyin": "shìyàn",
    "part_of_speech": "V",
    "meaning": "thử nghiệm"
  },
  {
    "chinese": "收據",
    "level": "B2",
    "pinyin": "shōujù",
    "part_of_speech": "N",
    "meaning": "biên lai, biên nhận"
  },
  {
    "chinese": "收看",
    "level": "B2",
    "pinyin": "shōukàn",
    "part_of_speech": "V",
    "meaning": "thưởng thức"
  },
  {
    "chinese": "收入",
    "level": "B2",
    "pinyin": "shōurù",
    "part_of_speech": "N",
    "meaning": "thu nhập"
  },
  {
    "chinese": "收拾",
    "level": "B2",
    "pinyin": "shōushí",
    "part_of_speech": "V",
    "meaning": "chỉnh đốn"
  },
  {
    "chinese": "手電筒",
    "level": "B2",
    "pinyin": "shŏudiàntŏng",
    "part_of_speech": "N",
    "meaning": "đèn pin"
  },
  {
    "chinese": "手段",
    "level": "B2",
    "pinyin": "shŏuduàn",
    "part_of_speech": "N",
    "meaning": "thủ đoạn"
  },
  {
    "chinese": "手工",
    "level": "B2",
    "pinyin": "shŏugōng",
    "part_of_speech": "N",
    "meaning": "thủ công"
  },
  {
    "chinese": "手術",
    "level": "B2",
    "pinyin": "shŏushù",
    "part_of_speech": "N",
    "meaning": "phẫu thuật"
  },
  {
    "chinese": "首",
    "level": "B2",
    "pinyin": "shŏu",
    "part_of_speech": "Det",
    "meaning": "đầu, đứng đầu"
  },
  {
    "chinese": "首都",
    "level": "B2",
    "pinyin": "shŏudū",
    "part_of_speech": "N",
    "meaning": "thủ đô"
  },
  {
    "chinese": "首先",
    "level": "B2",
    "pinyin": "shŏuxiān",
    "part_of_speech": "Adv",
    "meaning": "đầu tiên"
  },
  {
    "chinese": "受",
    "level": "B2",
    "pinyin": "shòu",
    "part_of_speech": "Prep",
    "meaning": "chịu đựng"
  },
  {
    "chinese": "受",
    "level": "B2",
    "pinyin": "shòu",
    "part_of_speech": "Vst",
    "meaning": "nhận, được"
  },
  {
    "chinese": "受不了",
    "level": "B2",
    "pinyin": "shòubuliăo",
    "part_of_speech": "Vst",
    "meaning": "chịu không nổi"
  },
  {
    "chinese": "受到",
    "level": "B2",
    "pinyin": "shòudào",
    "part_of_speech": "Vpt",
    "meaning": "nhận được"
  },
  {
    "chinese": "售",
    "level": "B2",
    "pinyin": "shòu",
    "part_of_speech": "V",
    "meaning": "thi hành, thực hiện"
  },
  {
    "chinese": "壽命",
    "level": "B2",
    "pinyin": "shòumìng",
    "part_of_speech": "N",
    "meaning": "tuổi thọ"
  },
  {
    "chinese": "疏忽",
    "level": "B2",
    "pinyin": "shūhū",
    "part_of_speech": "Vp",
    "meaning": "lơ là, qua quýt"
  },
  {
    "chinese": "書房",
    "level": "B2",
    "pinyin": "shūfáng",
    "part_of_speech": "N",
    "meaning": "phòng sách"
  },
  {
    "chinese": "書籍",
    "level": "B2",
    "pinyin": "shūjí",
    "part_of_speech": "N",
    "meaning": "sách vở"
  },
  {
    "chinese": "輸出",
    "level": "B2",
    "pinyin": "shūchū",
    "part_of_speech": "V",
    "meaning": "xuất cảng, xuất khẩu"
  },
  {
    "chinese": "輸入",
    "level": "B2",
    "pinyin": "shūrù",
    "part_of_speech": "V",
    "meaning": "nhập cảng, nhập khẩu"
  },
  {
    "chinese": "熟練",
    "level": "B2",
    "pinyin": "shúliàn",
    "part_of_speech": "Vs",
    "meaning": "thuần thục"
  },
  {
    "chinese": "熟人",
    "level": "B2",
    "pinyin": "shúrén",
    "part_of_speech": "N",
    "meaning": "người quen"
  },
  {
    "chinese": "屬",
    "level": "B2",
    "pinyin": "shŭ",
    "part_of_speech": "Vst",
    "meaning": "loài, loại"
  },
  {
    "chinese": "屬於",
    "level": "B2",
    "pinyin": "shŭyú",
    "part_of_speech": "Vst",
    "meaning": "thuộc về"
  },
  {
    "chinese": "暑期",
    "level": "B2",
    "pinyin": "shŭqí",
    "part_of_speech": "N",
    "meaning": "kỳ nghỉ hè"
  },
  {
    "chinese": "束",
    "level": "B2",
    "pinyin": "shù",
    "part_of_speech": "M",
    "meaning": "buộc, cột"
  },
  {
    "chinese": "數",
    "level": "B2",
    "pinyin": "shù",
    "part_of_speech": "N",
    "meaning": "nhiều lần"
  },
  {
    "chinese": "數量",
    "level": "B2",
    "pinyin": "shùliàng",
    "part_of_speech": "N",
    "meaning": "số lượng"
  },
  {
    "chinese": "數目",
    "level": "B2",
    "pinyin": "shùmù",
    "part_of_speech": "N",
    "meaning": "con số"
  },
  {
    "chinese": "樹林",
    "level": "B2",
    "pinyin": "shùlín",
    "part_of_speech": "N",
    "meaning": "rừng cây"
  },
  {
    "chinese": "刷",
    "level": "B2",
    "pinyin": "shuā",
    "part_of_speech": "V",
    "meaning": "quẹt (thẻ)"
  },
  {
    "chinese": "刷(子)",
    "level": "B2",
    "pinyin": "shuā(zi)",
    "part_of_speech": "N",
    "meaning": "bàn chải"
  },
  {
    "chinese": "刷卡",
    "level": "B2",
    "pinyin": "shuākă",
    "part_of_speech": "V-sep",
    "meaning": "quẹt thẻ"
  },
  {
    "chinese": "耍",
    "level": "B2",
    "pinyin": "shuă",
    "part_of_speech": "V",
    "meaning": "giở trò"
  },
  {
    "chinese": "摔",
    "level": "B2",
    "pinyin": "shuāi",
    "part_of_speech": "V",
    "meaning": "ngã, té"
  },
  {
    "chinese": "衰退",
    "level": "B2",
    "pinyin": "shuāituì",
    "part_of_speech": "Vp",
    "meaning": "suy yếu"
  },
  {
    "chinese": "甩",
    "level": "B2",
    "pinyin": "shuăi",
    "part_of_speech": "V",
    "meaning": "vung, vẩy"
  },
  {
    "chinese": "率領",
    "level": "B2",
    "pinyin": "shuàilĭng",
    "part_of_speech": "V",
    "meaning": "dẫn đầu"
  },
  {
    "chinese": "雙",
    "level": "B2",
    "pinyin": "shuāng",
    "part_of_speech": "M",
    "meaning": "đôi, kép"
  },
  {
    "chinese": "雙胞胎",
    "level": "B2",
    "pinyin": "shuāngbāotāi",
    "part_of_speech": "N",
    "meaning": "thai song sinh"
  },
  {
    "chinese": "雙方",
    "level": "B2",
    "pinyin": "shuāngfāng",
    "part_of_speech": "N",
    "meaning": "hai bên, đôi bên"
  },
  {
    "chinese": "水分",
    "level": "B2",
    "pinyin": "shuĭfèn",
    "part_of_speech": "N",
    "meaning": "hàm lượng nước"
  },
  {
    "chinese": "水災",
    "level": "B2",
    "pinyin": "shuĭzāi",
    "part_of_speech": "N",
    "meaning": "lũ lụt"
  },
  {
    "chinese": "稅",
    "level": "B2",
    "pinyin": "shuì",
    "part_of_speech": "N",
    "meaning": "thuế"
  },
  {
    "chinese": "說服",
    "level": "B2",
    "pinyin": "shuìfú",
    "part_of_speech": "V",
    "meaning": "thuyết phục"
  },
  {
    "chinese": "順",
    "level": "B2",
    "pinyin": "shùn",
    "part_of_speech": "Prep",
    "meaning": "thuận, xuôi"
  },
  {
    "chinese": "順",
    "level": "B2",
    "pinyin": "shùn",
    "part_of_speech": "Vs",
    "meaning": "lần lượt"
  },
  {
    "chinese": "順手",
    "level": "B2",
    "pinyin": "shùnshŏu",
    "part_of_speech": "Vs",
    "meaning": "thuận tay, tiện tay"
  },
  {
    "chinese": "順序",
    "level": "B2",
    "pinyin": "shùnxù",
    "part_of_speech": "N",
    "meaning": "trật tự, thứ tự"
  },
  {
    "chinese": "說不定",
    "level": "B2",
    "pinyin": "shuōbudìng",
    "part_of_speech": "Adv",
    "meaning": "không nói chắc"
  },
  {
    "chinese": "碩士",
    "level": "B2",
    "pinyin": "shuòshì",
    "part_of_speech": "N",
    "meaning": "thạc sĩ"
  },
  {
    "chinese": "絲",
    "level": "B2",
    "pinyin": "sī",
    "part_of_speech": "N",
    "meaning": "tơ tằm, sợi"
  },
  {
    "chinese": "撕",
    "level": "B2",
    "pinyin": "sī",
    "part_of_speech": "V",
    "meaning": "xé, kéo"
  },
  {
    "chinese": "私立",
    "level": "B2",
    "pinyin": "sīlì",
    "part_of_speech": "Vs-attr",
    "meaning": "tư nhân"
  },
  {
    "chinese": "私人",
    "level": "B2",
    "pinyin": "sīrén",
    "part_of_speech": "N",
    "meaning": "tư nhân, cá nhân"
  },
  {
    "chinese": "思索",
    "level": "B2",
    "pinyin": "sīsuŏ",
    "part_of_speech": "V",
    "meaning": "suy nghĩ tìm tòi"
  },
  {
    "chinese": "死",
    "level": "B2",
    "pinyin": "sĭ",
    "part_of_speech": "Adv",
    "meaning": "chết"
  },
  {
    "chinese": "死亡",
    "level": "B2",
    "pinyin": "sĭwáng",
    "part_of_speech": "Vp",
    "meaning": "tử vong"
  },
  {
    "chinese": "四處",
    "level": "B2",
    "pinyin": "sìchù",
    "part_of_speech": "Adv",
    "meaning": "khắp nơi"
  },
  {
    "chinese": "四處",
    "level": "B2",
    "pinyin": "sìchù",
    "part_of_speech": "N",
    "meaning": "xung quanh"
  },
  {
    "chinese": "四方",
    "level": "B2",
    "pinyin": "sìfāng",
    "part_of_speech": "N",
    "meaning": "khắp nơi"
  },
  {
    "chinese": "四季",
    "level": "B2",
    "pinyin": "sìjì",
    "part_of_speech": "N",
    "meaning": "bốn mùa"
  },
  {
    "chinese": "四周/週",
    "level": "B2",
    "pinyin": "sìzhōu",
    "part_of_speech": "N",
    "meaning": "chu vi, xung quanh"
  },
  {
    "chinese": "飼養",
    "level": "B2",
    "pinyin": "sìyăng",
    "part_of_speech": "V",
    "meaning": "chăn nuôi"
  },
  {
    "chinese": "鬆",
    "level": "B2",
    "pinyin": "sōng",
    "part_of_speech": "Vs",
    "meaning": "cây thông"
  },
  {
    "chinese": "送行",
    "level": "B2",
    "pinyin": "sòngxíng",
    "part_of_speech": "Vi",
    "meaning": "tiễn đưa"
  },
  {
    "chinese": "俗",
    "level": "B2",
    "pinyin": "sú",
    "part_of_speech": "Vs",
    "meaning": "phong tục"
  },
  {
    "chinese": "俗話",
    "level": "B2",
    "pinyin": "súhuà",
    "part_of_speech": "N",
    "meaning": "tục ngữ"
  },
  {
    "chinese": "俗話說",
    "level": "B2",
    "pinyin": "súhuàshuō",
    "part_of_speech": "tục",
    "meaning": "ngữ có câu..."
  },
  {
    "chinese": "算",
    "level": "B2",
    "pinyin": "suàn",
    "part_of_speech": "V",
    "meaning": "tính toán"
  },
  {
    "chinese": "算起來",
    "level": "B2",
    "pinyin": "suànqilai",
    "part_of_speech": "Adv",
    "meaning": "làm tròn, tính toán"
  },
  {
    "chinese": "算是",
    "level": "B2",
    "pinyin": "suànshì",
    "part_of_speech": "Vst",
    "meaning": "rốt cuộc, xem như là"
  },
  {
    "chinese": "算帳",
    "level": "B2",
    "pinyin": "suànzhàng",
    "part_of_speech": "V-sep",
    "meaning": "tính sổ, đòi công bằng"
  },
  {
    "chinese": "隨",
    "level": "B2",
    "pinyin": "suí",
    "part_of_speech": "Vst",
    "meaning": "theo, đi theo"
  },
  {
    "chinese": "隨手",
    "level": "B2",
    "pinyin": "suíshŏu",
    "part_of_speech": "Adv",
    "meaning": "thuận tay, tiện tay"
  },
  {
    "chinese": "隨意",
    "level": "B2",
    "pinyin": "suíyì",
    "part_of_speech": "Vs",
    "meaning": "tùy ý"
  },
  {
    "chinese": "隨著",
    "level": "B2",
    "pinyin": "suízhe",
    "part_of_speech": "Prep",
    "meaning": "cùng với"
  },
  {
    "chinese": "碎",
    "level": "B2",
    "pinyin": "suì",
    "part_of_speech": "Vp",
    "meaning": "vỡ, bể"
  },
  {
    "chinese": "歲數",
    "level": "B2",
    "pinyin": "suìshu",
    "part_of_speech": "N",
    "meaning": "số tuổi"
  },
  {
    "chinese": "孫女",
    "level": "B2",
    "pinyin": "sūnnǚ",
    "part_of_speech": "N",
    "meaning": "cháu gái"
  },
  {
    "chinese": "孫子",
    "level": "B2",
    "pinyin": "sūnzi",
    "part_of_speech": "N",
    "meaning": "cháu trai"
  },
  {
    "chinese": "損失",
    "level": "B2",
    "pinyin": "sŭnshī",
    "part_of_speech": "N",
    "meaning": "tổn thất"
  },
  {
    "chinese": "損失",
    "level": "B2",
    "pinyin": "sŭnshī",
    "part_of_speech": "Vpt",
    "meaning": "thiệt hại"
  },
  {
    "chinese": "縮",
    "level": "B2",
    "pinyin": "suō",
    "part_of_speech": "V",
    "meaning": "co, rút lại"
  },
  {
    "chinese": "縮短",
    "level": "B2",
    "pinyin": "suōduăn",
    "part_of_speech": "V",
    "meaning": "rút ngắn"
  },
  {
    "chinese": "縮水",
    "level": "B2",
    "pinyin": "suōshuĭ",
    "part_of_speech": "Vp",
    "meaning": "ngâm nước"
  },
  {
    "chinese": "鎖",
    "level": "B2",
    "pinyin": "suŏ",
    "part_of_speech": "N",
    "meaning": "cái khóa"
  },
  {
    "chinese": "鎖",
    "level": "B2",
    "pinyin": "suŏ",
    "part_of_speech": "V",
    "meaning": "khóa lại"
  },
  {
    "chinese": "塌",
    "level": "B2",
    "pinyin": "tā",
    "part_of_speech": "Vp",
    "meaning": "đổ sụp"
  },
  {
    "chinese": "踏",
    "level": "B2",
    "pinyin": "tà",
    "part_of_speech": "V",
    "meaning": "giẫm, đạp"
  },
  {
    "chinese": "抬頭",
    "level": "B2",
    "pinyin": "táitóu",
    "part_of_speech": "V-sep",
    "meaning": "ngẩng đầu"
  },
  {
    "chinese": "太空",
    "level": "B2",
    "pinyin": "tàikōng",
    "part_of_speech": "N",
    "meaning": "vũ trụ"
  },
  {
    "chinese": "攤子",
    "level": "B2",
    "pinyin": "tānzi",
    "part_of_speech": "N",
    "meaning": "sạp, quầy (hàng)"
  },
  {
    "chinese": "彈",
    "level": "B2",
    "pinyin": "tán",
    "part_of_speech": "V",
    "meaning": "đánh, gảy (đàn)"
  },
  {
    "chinese": "談判",
    "level": "B2",
    "pinyin": "tánpàn",
    "part_of_speech": "Vi",
    "meaning": "đàm phán"
  },
  {
    "chinese": "毯子",
    "level": "B2",
    "pinyin": "tănzi",
    "part_of_speech": "N",
    "meaning": "tấm thảm"
  },
  {
    "chinese": "探",
    "level": "B2",
    "pinyin": "tàn",
    "part_of_speech": "V",
    "meaning": "thăm dò"
  },
  {
    "chinese": "探親",
    "level": "B2",
    "pinyin": "tànqīn",
    "part_of_speech": "V-sep",
    "meaning": "thăm người thân"
  },
  {
    "chinese": "探討",
    "level": "B2",
    "pinyin": "tàntăo",
    "part_of_speech": "V",
    "meaning": "nghiên cứu thảo luận"
  },
  {
    "chinese": "趟",
    "level": "B2",
    "pinyin": "tàng",
    "part_of_speech": "M",
    "meaning": "lần, chuyến"
  },
  {
    "chinese": "燙",
    "level": "B2",
    "pinyin": "tàng",
    "part_of_speech": "V",
    "meaning": "phỏng, bỏng"
  },
  {
    "chinese": "燙",
    "level": "B2",
    "pinyin": "tàng",
    "part_of_speech": "Vs",
    "meaning": "là, ủi"
  },
  {
    "chinese": "掏",
    "level": "B2",
    "pinyin": "tāo",
    "part_of_speech": "V",
    "meaning": "móc, đào"
  },
  {
    "chinese": "逃",
    "level": "B2",
    "pinyin": "táo",
    "part_of_speech": "Vi",
    "meaning": "trốn chạy"
  },
  {
    "chinese": "逃避",
    "level": "B2",
    "pinyin": "táobì",
    "part_of_speech": "V",
    "meaning": "trốn tránh"
  },
  {
    "chinese": "逃走",
    "level": "B2",
    "pinyin": "táozŏu",
    "part_of_speech": "Vp",
    "meaning": "chạy trốn"
  },
  {
    "chinese": "陶瓷",
    "level": "B2",
    "pinyin": "táocí",
    "part_of_speech": "N",
    "meaning": "gốm sứ"
  },
  {
    "chinese": "淘氣",
    "level": "B2",
    "pinyin": "táoqì",
    "part_of_speech": "Vs",
    "meaning": "tinh nghịch"
  },
  {
    "chinese": "桃子",
    "level": "B2",
    "pinyin": "táozi",
    "part_of_speech": "N",
    "meaning": "quả đào"
  },
  {
    "chinese": "討",
    "level": "B2",
    "pinyin": "tăo",
    "part_of_speech": "V",
    "meaning": "thỉnh cầu, xin"
  },
  {
    "chinese": "套",
    "level": "B2",
    "pinyin": "tào",
    "part_of_speech": "M",
    "meaning": "bộ"
  },
  {
    "chinese": "套",
    "level": "B2",
    "pinyin": "tào",
    "part_of_speech": "V",
    "meaning": "trùm ngoài, bọc ngoài"
  },
  {
    "chinese": "特別",
    "level": "B2",
    "pinyin": "tèbié",
    "part_of_speech": "Adv",
    "meaning": "đặc biệt"
  },
  {
    "chinese": "特點",
    "level": "B2",
    "pinyin": "tèdiăn",
    "part_of_speech": "N",
    "meaning": "đặc điểm"
  },
  {
    "chinese": "提",
    "level": "B2",
    "pinyin": "tí",
    "part_of_speech": "V",
    "meaning": "đề cập, nói đến"
  },
  {
    "chinese": "提起",
    "level": "B2",
    "pinyin": "tíqĭ",
    "part_of_speech": "V",
    "meaning": "nhắc nhở"
  },
  {
    "chinese": "提前",
    "level": "B2",
    "pinyin": "tíqián",
    "part_of_speech": "Vp",
    "meaning": "trước thời hạn"
  },
  {
    "chinese": "提醒",
    "level": "B2",
    "pinyin": "tíxĭng",
    "part_of_speech": "V",
    "meaning": "nhắc nhở"
  },
  {
    "chinese": "提早",
    "level": "B2",
    "pinyin": "tízăo",
    "part_of_speech": "Vp",
    "meaning": "sớm hơn, trước thời hạn"
  },
  {
    "chinese": "題",
    "level": "B2",
    "pinyin": "tí",
    "part_of_speech": "M",
    "meaning": "đề mục"
  },
  {
    "chinese": "體溫",
    "level": "B2",
    "pinyin": "tĭwēn",
    "part_of_speech": "N",
    "meaning": "nhiệt độ cơ thể"
  },
  {
    "chinese": "體驗",
    "level": "B2",
    "pinyin": "tǐyàn",
    "part_of_speech": "V",
    "meaning": "trải nghiệm"
  },
  {
    "chinese": "天才",
    "level": "B2",
    "pinyin": "tiāncái",
    "part_of_speech": "N",
    "meaning": "thiên tài"
  },
  {
    "chinese": "天空",
    "level": "B2",
    "pinyin": "tiānkōng",
    "part_of_speech": "N",
    "meaning": "bầu trời"
  },
  {
    "chinese": "天然",
    "level": "B2",
    "pinyin": "tiānrán",
    "part_of_speech": "Vs",
    "meaning": "thiên nhiên"
  },
  {
    "chinese": "天文",
    "level": "B2",
    "pinyin": "tiānwén",
    "part_of_speech": "N",
    "meaning": "thiên văn"
  },
  {
    "chinese": "天真",
    "level": "B2",
    "pinyin": "tiānzhēn",
    "part_of_speech": "Vs",
    "meaning": "ngây thơ"
  },
  {
    "chinese": "天主教",
    "level": "B2",
    "pinyin": "tiānzhŭjiào",
    "part_of_speech": "N",
    "meaning": "đạo Thiên Chúa"
  },
  {
    "chinese": "田野",
    "level": "B2",
    "pinyin": "tiányě",
    "part_of_speech": "N",
    "meaning": "đồng ruộng"
  },
  {
    "chinese": "挑",
    "level": "B2",
    "pinyin": "tiāo",
    "part_of_speech": "V",
    "meaning": "khều, khêu"
  },
  {
    "chinese": "挑選",
    "level": "B2",
    "pinyin": "tiāoxuăn",
    "part_of_speech": "V",
    "meaning": "chọn lựa"
  },
  {
    "chinese": "條",
    "level": "B2",
    "pinyin": "tiáo",
    "part_of_speech": "M",
    "meaning": "cành, nhánh"
  },
  {
    "chinese": "條約",
    "level": "B2",
    "pinyin": "tiáoyuē",
    "part_of_speech": "N",
    "meaning": "điều ước"
  },
  {
    "chinese": "調",
    "level": "B2",
    "pinyin": "tiáo",
    "part_of_speech": "V",
    "meaning": "điều động, phân phối"
  },
  {
    "chinese": "調整",
    "level": "B2",
    "pinyin": "tiáozhěng",
    "part_of_speech": "V",
    "meaning": "điều chỉnh"
  },
  {
    "chinese": "跳高",
    "level": "B2",
    "pinyin": "tiàogāo",
    "part_of_speech": "Vi",
    "meaning": "nhảy cao"
  },
  {
    "chinese": "跳遠",
    "level": "B2",
    "pinyin": "tiàoyuăn",
    "part_of_speech": "Vi",
    "meaning": "nhảy xa"
  },
  {
    "chinese": "貼心",
    "level": "B2",
    "pinyin": "tiēxīn",
    "part_of_speech": "Vs",
    "meaning": "thân mật"
  },
  {
    "chinese": "停止",
    "level": "B2",
    "pinyin": "tíngzhĭ",
    "part_of_speech": "Vpt",
    "meaning": "đình chỉ"
  },
  {
    "chinese": "挺",
    "level": "B2",
    "pinyin": "tĭng",
    "part_of_speech": "V",
    "meaning": "thẳng, ngay thẳng"
  },
  {
    "chinese": "挺",
    "level": "B2",
    "pinyin": "tĭng",
    "part_of_speech": "Vs",
    "meaning": "ưỡn, ngửa ra"
  },
  {
    "chinese": "通",
    "level": "B2",
    "pinyin": "tōng",
    "part_of_speech": "M",
    "meaning": "hồi, trận"
  },
  {
    "chinese": "通",
    "level": "B2",
    "pinyin": "tōng",
    "part_of_speech": "Vs",
    "meaning": "thông"
  },
  {
    "chinese": "通常",
    "level": "B2",
    "pinyin": "tōngcháng",
    "part_of_speech": "Adv",
    "meaning": "thông thường"
  },
  {
    "chinese": "通過",
    "level": "B2",
    "pinyin": "tōngguò",
    "part_of_speech": "V",
    "meaning": "thông qua"
  },
  {
    "chinese": "通信",
    "level": "B2",
    "pinyin": "tōngxìn",
    "part_of_speech": "V-sep",
    "meaning": "thư từ qua lại"
  },
  {
    "chinese": "通訊",
    "level": "B2",
    "pinyin": "tōngxùn",
    "part_of_speech": "N",
    "meaning": "thông tin"
  },
  {
    "chinese": "同",
    "level": "B2",
    "pinyin": "tóng",
    "part_of_speech": "Adv",
    "meaning": "giống nhau"
  },
  {
    "chinese": "同",
    "level": "B2",
    "pinyin": "tóng",
    "part_of_speech": "Vs",
    "meaning": "cùng nhau"
  },
  {
    "chinese": "同胞",
    "level": "B2",
    "pinyin": "tóngbāo",
    "part_of_speech": "N",
    "meaning": "anh chị em ruột"
  },
  {
    "chinese": "同志",
    "level": "B2",
    "pinyin": "tóngzhì",
    "part_of_speech": "N",
    "meaning": "đồng chí"
  },
  {
    "chinese": "銅",
    "level": "B2",
    "pinyin": "tóng",
    "part_of_speech": "N",
    "meaning": "đồng (kim loại)"
  },
  {
    "chinese": "桶",
    "level": "B2",
    "pinyin": "tǒng",
    "part_of_speech": "M",
    "meaning": "thùng"
  },
  {
    "chinese": "統計",
    "level": "B2",
    "pinyin": "tǒngjì",
    "part_of_speech": "V",
    "meaning": "thống kê"
  },
  {
    "chinese": "統一",
    "level": "B2",
    "pinyin": "tǒngyī",
    "part_of_speech": "Vs",
    "meaning": "thống nhất"
  },
  {
    "chinese": "統治",
    "level": "B2",
    "pinyin": "tǒngzhì",
    "part_of_speech": "V",
    "meaning": "thống trị"
  },
  {
    "chinese": "痛快",
    "level": "B2",
    "pinyin": "tòngkuai",
    "part_of_speech": "Vs",
    "meaning": "vui vẻ"
  },
  {
    "chinese": "偷/偷偷",
    "level": "B2",
    "pinyin": "tōu/tōutōu",
    "part_of_speech": "Adv",
    "meaning": "vụng trộm, lén lút"
  },
  {
    "chinese": "頭",
    "level": "B2",
    "pinyin": "tóu",
    "part_of_speech": "M",
    "meaning": "đầu"
  },
  {
    "chinese": "頭腦",
    "level": "B2",
    "pinyin": "tóunăo",
    "part_of_speech": "N",
    "meaning": "đầu óc, tư duy"
  },
  {
    "chinese": "投票",
    "level": "B2",
    "pinyin": "tóupiào",
    "part_of_speech": "V-sep",
    "meaning": "bỏ phiếu"
  },
  {
    "chinese": "投入",
    "level": "B2",
    "pinyin": "tóurù",
    "part_of_speech": "V",
    "meaning": "đi vào"
  },
  {
    "chinese": "投降",
    "level": "B2",
    "pinyin": "tóuxiáng",
    "part_of_speech": "Vi",
    "meaning": "đầu hàng"
  },
  {
    "chinese": "投資",
    "level": "B2",
    "pinyin": "tóuzī",
    "part_of_speech": "N",
    "meaning": "đầu tư"
  },
  {
    "chinese": "透",
    "level": "B2",
    "pinyin": "tòu",
    "part_of_speech": "Vs",
    "meaning": "thẩm thấu, thấm qua"
  },
  {
    "chinese": "透過",
    "level": "B2",
    "pinyin": "tòuguò",
    "part_of_speech": "Prep",
    "meaning": "qua"
  },
  {
    "chinese": "禿",
    "level": "B2",
    "pinyin": "tū",
    "part_of_speech": "Vs",
    "meaning": "trọc, trụi"
  },
  {
    "chinese": "突出",
    "level": "B2",
    "pinyin": "túchū",
    "part_of_speech": "Vs",
    "meaning": "xông ra, nhô ra"
  },
  {
    "chinese": "突破",
    "level": "B2",
    "pinyin": "túpò",
    "part_of_speech": "N",
    "meaning": "sự đột phá"
  },
  {
    "chinese": "突破",
    "level": "B2",
    "pinyin": "túpò",
    "part_of_speech": "V",
    "meaning": "đột phá"
  },
  {
    "chinese": "途徑",
    "level": "B2",
    "pinyin": "tújìng",
    "part_of_speech": "N",
    "meaning": "con đường, đường lối"
  },
  {
    "chinese": "圖書",
    "level": "B2",
    "pinyin": "túshū",
    "part_of_speech": "N",
    "meaning": "con dấu, con mộc"
  },
  {
    "chinese": "圖章",
    "level": "B2",
    "pinyin": "túzhāng",
    "part_of_speech": "N",
    "meaning": "dấu ấn, dấu mộc"
  },
  {
    "chinese": "吐",
    "level": "B2",
    "pinyin": "tŭ",
    "part_of_speech": "V",
    "meaning": "nhổ, nhả"
  },
  {
    "chinese": "團",
    "level": "B2",
    "pinyin": "tuán",
    "part_of_speech": "M",
    "meaning": "hình tròn"
  },
  {
    "chinese": "團結",
    "level": "B2",
    "pinyin": "tuánjié",
    "part_of_speech": "Vs",
    "meaning": "đoàn kết"
  },
  {
    "chinese": "推動",
    "level": "B2",
    "pinyin": "tuīdòng",
    "part_of_speech": "V",
    "meaning": "thúc đẩy"
  },
  {
    "chinese": "推翻",
    "level": "B2",
    "pinyin": "tuīfān",
    "part_of_speech": "V",
    "meaning": "lật đổ"
  },
  {
    "chinese": "推廣",
    "level": "B2",
    "pinyin": "tuīguăng",
    "part_of_speech": "V",
    "meaning": "mở rộng"
  },
  {
    "chinese": "退",
    "level": "B2",
    "pinyin": "tuì",
    "part_of_speech": "Vpt",
    "meaning": "lui, lùi"
  },
  {
    "chinese": "退出",
    "level": "B2",
    "pinyin": "tuìchū",
    "part_of_speech": "Vpt",
    "meaning": "rút khỏi"
  },
  {
    "chinese": "退回",
    "level": "B2",
    "pinyin": "tuìhuí",
    "part_of_speech": "Vpt",
    "meaning": "trả lại"
  },
  {
    "chinese": "吞",
    "level": "B2",
    "pinyin": "tūn",
    "part_of_speech": "V",
    "meaning": "nuốt, ngốn"
  },
  {
    "chinese": "拖",
    "level": "B2",
    "pinyin": "tuō",
    "part_of_speech": "V",
    "meaning": "kéo, dắt"
  },
  {
    "chinese": "拖鞋",
    "level": "B2",
    "pinyin": "tuōxié",
    "part_of_speech": "N",
    "meaning": "dép lê"
  },
  {
    "chinese": "托兒所",
    "level": "B2",
    "pinyin": "tuōérsuŏ",
    "part_of_speech": "N",
    "meaning": "nhà trẻ"
  },
  {
    "chinese": "脫離",
    "level": "B2",
    "pinyin": "tuōlí",
    "part_of_speech": "V",
    "meaning": "thoát ly"
  },
  {
    "chinese": "妥當",
    "level": "B2",
    "pinyin": "tuǒdang",
    "part_of_speech": "Vs",
    "meaning": "thỏa đáng"
  },
  {
    "chinese": "妥善",
    "level": "B2",
    "pinyin": "tuŏshàn",
    "part_of_speech": "Vs",
    "meaning": "ổn thỏa"
  },
  {
    "chinese": "妥協",
    "level": "B2",
    "pinyin": "tuŏxié",
    "part_of_speech": "Vi",
    "meaning": "thỏa hiệp"
  },
  {
    "chinese": "哇",
    "level": "B2",
    "pinyin": "wā",
    "part_of_speech": "Ptc",
    "meaning": "oa oa, oe oe (từ tượng thanh)"
  },
  {
    "chinese": "挖",
    "level": "B2",
    "pinyin": "wā",
    "part_of_speech": "V",
    "meaning": "đào, khoét"
  },
  {
    "chinese": "歪",
    "level": "B2",
    "pinyin": "wāi",
    "part_of_speech": "Vs",
    "meaning": "nghiêng, lệch"
  },
  {
    "chinese": "外部",
    "level": "B2",
    "pinyin": "wàibù",
    "part_of_speech": "N",
    "meaning": "phần ngoài, vẻ ngoài"
  },
  {
    "chinese": "外出",
    "level": "B2",
    "pinyin": "wàichū",
    "part_of_speech": "Vi",
    "meaning": "đi chơi"
  },
  {
    "chinese": "外地",
    "level": "B2",
    "pinyin": "wàidì",
    "part_of_speech": "N",
    "meaning": "nơi khác, vùng khác"
  },
  {
    "chinese": "外觀",
    "level": "B2",
    "pinyin": "wàiguān",
    "part_of_speech": "N",
    "meaning": "bề ngoài"
  },
  {
    "chinese": "外行",
    "level": "B2",
    "pinyin": "wàiháng",
    "part_of_speech": "Vs",
    "meaning": "không chuyên môn, ngoài nghề"
  },
  {
    "chinese": "外匯",
    "level": "B2",
    "pinyin": "wàihuì",
    "part_of_speech": "N",
    "meaning": "ngoại hối"
  },
  {
    "chinese": "外交",
    "level": "B2",
    "pinyin": "wàijiāo",
    "part_of_speech": "N",
    "meaning": "ngoại giao"
  },
  {
    "chinese": "外界",
    "level": "B2",
    "pinyin": "wàijiè",
    "part_of_speech": "N",
    "meaning": "bên ngoài"
  },
  {
    "chinese": "外科",
    "level": "B2",
    "pinyin": "wàikē",
    "part_of_speech": "N",
    "meaning": "ngoại khoa"
  },
  {
    "chinese": "外頭",
    "level": "B2",
    "pinyin": "wàitou",
    "part_of_speech": "N",
    "meaning": "bề ngoài"
  },
  {
    "chinese": "彎",
    "level": "B2",
    "pinyin": "wān",
    "part_of_speech": "Vs",
    "meaning": "cong, ngoằn ngoèo"
  },
  {
    "chinese": "彎腰",
    "level": "B2",
    "pinyin": "wānyāo",
    "part_of_speech": "V-sep",
    "meaning": "cúi gập người"
  },
  {
    "chinese": "完畢",
    "level": "B2",
    "pinyin": "wánbì",
    "part_of_speech": "Vp",
    "meaning": "hoàn tất"
  },
  {
    "chinese": "完善",
    "level": "B2",
    "pinyin": "wánshàn",
    "part_of_speech": "Vs",
    "meaning": "hoàn thiện"
  },
  {
    "chinese": "完整",
    "level": "B2",
    "pinyin": "wánzhěng",
    "part_of_speech": "Vs",
    "meaning": "toàn vẹn"
  },
  {
    "chinese": "玩笑",
    "level": "B2",
    "pinyin": "wánxiào",
    "part_of_speech": "N",
    "meaning": "vui đùa"
  },
  {
    "chinese": "晚輩",
    "level": "B2",
    "pinyin": "wănbèi",
    "part_of_speech": "N",
    "meaning": "thế hệ sau, hậu bối"
  },
  {
    "chinese": "往",
    "level": "B2",
    "pinyin": "wăng",
    "part_of_speech": "V",
    "meaning": "hướng về"
  },
  {
    "chinese": "望",
    "level": "B2",
    "pinyin": "wàng",
    "part_of_speech": "V",
    "meaning": "trông, nhìn (xa)"
  },
  {
    "chinese": "威脅",
    "level": "B2",
    "pinyin": "wēixié",
    "part_of_speech": "N",
    "meaning": "sự uy hiếp"
  },
  {
    "chinese": "威脅",
    "level": "B2",
    "pinyin": "wēixié",
    "part_of_speech": "V",
    "meaning": "uy hiếp"
  },
  {
    "chinese": "圍",
    "level": "B2",
    "pinyin": "wéi",
    "part_of_speech": "V",
    "meaning": "vây, bao vây"
  },
  {
    "chinese": "違反",
    "level": "B2",
    "pinyin": "wéifăn",
    "part_of_speech": "Vst",
    "meaning": "trái với"
  },
  {
    "chinese": "維護",
    "level": "B2",
    "pinyin": "wéihù",
    "part_of_speech": "V",
    "meaning": "giữ gìn, bảo vệ"
  },
  {
    "chinese": "維他命",
    "level": "B2",
    "pinyin": "wéitāmìng",
    "part_of_speech": "N",
    "meaning": "vitamin"
  },
  {
    "chinese": "危機",
    "level": "B2",
    "pinyin": "wéijī",
    "part_of_speech": "N",
    "meaning": "nguy cơ"
  },
  {
    "chinese": "為難",
    "level": "B2",
    "pinyin": "wéinán",
    "part_of_speech": "Vs",
    "meaning": "khó xử"
  },
  {
    "chinese": "唯一",
    "level": "B2",
    "pinyin": "wéiyī",
    "part_of_speech": "Vs-attr",
    "meaning": "duy nhất"
  },
  {
    "chinese": "尾巴",
    "level": "B2",
    "pinyin": "wěiba",
    "part_of_speech": "N",
    "meaning": "cái đuôi"
  },
  {
    "chinese": "委屈",
    "level": "B2",
    "pinyin": "wěiqū",
    "part_of_speech": "Vs",
    "meaning": "tủi thân"
  },
  {
    "chinese": "委託",
    "level": "B2",
    "pinyin": "wěituō",
    "part_of_speech": "V",
    "meaning": "ủy thác"
  },
  {
    "chinese": "委員",
    "level": "B2",
    "pinyin": "wěiyuán",
    "part_of_speech": "N",
    "meaning": "ủy viên"
  },
  {
    "chinese": "未",
    "level": "B2",
    "pinyin": "wèi",
    "part_of_speech": "Adv",
    "meaning": "vị, chưa, không"
  },
  {
    "chinese": "未婚",
    "level": "B2",
    "pinyin": "wèihūn",
    "part_of_speech": "Vs",
    "meaning": "chưa cưới"
  },
  {
    "chinese": "位於",
    "level": "B2",
    "pinyin": "wèiyú",
    "part_of_speech": "Vst",
    "meaning": "nằm ở"
  },
  {
    "chinese": "味/味兒",
    "level": "B2",
    "pinyin": "wèi/wèir",
    "part_of_speech": "N",
    "meaning": "vị"
  },
  {
    "chinese": "味精",
    "level": "B2",
    "pinyin": "wèijīng",
    "part_of_speech": "N",
    "meaning": "bột ngọt"
  },
  {
    "chinese": "為何",
    "level": "B2",
    "pinyin": "wèihé",
    "part_of_speech": "Adv",
    "meaning": "vì sao"
  },
  {
    "chinese": "衛生",
    "level": "B2",
    "pinyin": "wèishēng",
    "part_of_speech": "Vs",
    "meaning": "vệ sinh"
  },
  {
    "chinese": "衛生紙",
    "level": "B2",
    "pinyin": "wèishēngzhĭ",
    "part_of_speech": "N",
    "meaning": "giấy vệ sinh"
  },
  {
    "chinese": "衛星",
    "level": "B2",
    "pinyin": "wèixīng",
    "part_of_speech": "N",
    "meaning": "vệ tinh nhân tạo"
  },
  {
    "chinese": "慰問",
    "level": "B2",
    "pinyin": "wèiwèn",
    "part_of_speech": "V",
    "meaning": "thăm hỏi"
  },
  {
    "chinese": "溫和",
    "level": "B2",
    "pinyin": "wēnhé",
    "part_of_speech": "Vs",
    "meaning": "ôn hòa"
  },
  {
    "chinese": "文法",
    "level": "B2",
    "pinyin": "wénfă",
    "part_of_speech": "N",
    "meaning": "ngữ pháp, văn phạm"
  },
  {
    "chinese": "文具",
    "level": "B2",
    "pinyin": "wénjù",
    "part_of_speech": "N",
    "meaning": "văn phòng phẩm"
  },
  {
    "chinese": "文憑",
    "level": "B2",
    "pinyin": "wénpíng",
    "part_of_speech": "N",
    "meaning": "văn bằng"
  },
  {
    "chinese": "文物",
    "level": "B2",
    "pinyin": "wénwù",
    "part_of_speech": "N",
    "meaning": "di vật văn hóa"
  },
  {
    "chinese": "文藝",
    "level": "B2",
    "pinyin": "wényì",
    "part_of_speech": "N",
    "meaning": "văn nghệ"
  },
  {
    "chinese": "蚊子",
    "level": "B2",
    "pinyin": "wénzi",
    "part_of_speech": "N",
    "meaning": "con muỗi"
  },
  {
    "chinese": "吻",
    "level": "B2",
    "pinyin": "wěn",
    "part_of_speech": "N",
    "meaning": "mõm (động vật)"
  },
  {
    "chinese": "吻",
    "level": "B2",
    "pinyin": "wěn",
    "part_of_speech": "V",
    "meaning": "hôn"
  },
  {
    "chinese": "穩",
    "level": "B2",
    "pinyin": "wěn",
    "part_of_speech": "Vs",
    "meaning": "ổn định, vững"
  },
  {
    "chinese": "握",
    "level": "B2",
    "pinyin": "wò",
    "part_of_speech": "V",
    "meaning": "nắm, bắt, cầm"
  },
  {
    "chinese": "臥房",
    "level": "B2",
    "pinyin": "wòfáng",
    "part_of_speech": "N",
    "meaning": "phòng ngủ"
  },
  {
    "chinese": "汙/污染",
    "level": "B2",
    "pinyin": "wūrăn",
    "part_of_speech": "V",
    "meaning": "ô nhiễm"
  },
  {
    "chinese": "無可奈何",
    "level": "B2",
    "pinyin": "wúkěnàihé",
    "part_of_speech": "Vs",
    "meaning": "không biết làm thế nào"
  },
  {
    "chinese": "無論",
    "level": "B2",
    "pinyin": "wúlùn",
    "part_of_speech": "Conj",
    "meaning": "bất kể, bất luận"
  },
  {
    "chinese": "無情",
    "level": "B2",
    "pinyin": "wúqíng",
    "part_of_speech": "Vs",
    "meaning": "vô tình"
  },
  {
    "chinese": "無數",
    "level": "B2",
    "pinyin": "wúshù",
    "part_of_speech": "Det",
    "meaning": "vô số"
  },
  {
    "chinese": "無限",
    "level": "B2",
    "pinyin": "wúxiàn",
    "part_of_speech": "Vs",
    "meaning": "vô hạn"
  },
  {
    "chinese": "無意",
    "level": "B2",
    "pinyin": "wúyì",
    "part_of_speech": "Vs",
    "meaning": "vô ý"
  },
  {
    "chinese": "武器",
    "level": "B2",
    "pinyin": "wŭqì",
    "part_of_speech": "N",
    "meaning": "vũ khí"
  },
  {
    "chinese": "武術",
    "level": "B2",
    "pinyin": "wŭshù",
    "part_of_speech": "N",
    "meaning": "võ thuật"
  },
  {
    "chinese": "舞",
    "level": "B2",
    "pinyin": "wŭ",
    "part_of_speech": "N",
    "meaning": "vũ, khiêu vũ"
  },
  {
    "chinese": "舞蹈",
    "level": "B2",
    "pinyin": "wŭdào",
    "part_of_speech": "N",
    "meaning": "điệu múa, vũ đạo"
  },
  {
    "chinese": "舞台/臺",
    "level": "B2",
    "pinyin": "wŭtái",
    "part_of_speech": "N",
    "meaning": "sân khấu"
  },
  {
    "chinese": "舞廳",
    "level": "B2",
    "pinyin": "wŭtīng",
    "part_of_speech": "N",
    "meaning": "phòng nhảy"
  },
  {
    "chinese": "勿",
    "level": "B2",
    "pinyin": "wù",
    "part_of_speech": "Adv",
    "meaning": "chớ, đừng, không nên"
  },
  {
    "chinese": "物理",
    "level": "B2",
    "pinyin": "wùlĭ",
    "part_of_speech": "N",
    "meaning": "vật lý"
  },
  {
    "chinese": "物質",
    "level": "B2",
    "pinyin": "wùzhí",
    "part_of_speech": "N",
    "meaning": "vật chất"
  },
  {
    "chinese": "誤",
    "level": "B2",
    "pinyin": "wù",
    "part_of_speech": "Adv",
    "meaning": "lầm, sai"
  },
  {
    "chinese": "誤",
    "level": "B2",
    "pinyin": "wù",
    "part_of_speech": "Vst",
    "meaning": "lỡ tay"
  },
  {
    "chinese": "誤點",
    "level": "B2",
    "pinyin": "wùdiăn",
    "part_of_speech": "Vp",
    "meaning": "trễ giờ"
  },
  {
    "chinese": "誤會",
    "level": "B2",
    "pinyin": "wùhuì",
    "part_of_speech": "Vst",
    "meaning": "hiểu lầm"
  },
  {
    "chinese": "霧",
    "level": "B2",
    "pinyin": "wù",
    "part_of_speech": "N",
    "meaning": "sương mù"
  },
  {
    "chinese": "西裝",
    "level": "B2",
    "pinyin": "xīzhuāng",
    "part_of_speech": "N",
    "meaning": "âu phục"
  },
  {
    "chinese": "吸",
    "level": "B2",
    "pinyin": "xī",
    "part_of_speech": "V",
    "meaning": "hút, hít"
  },
  {
    "chinese": "吸取",
    "level": "B2",
    "pinyin": "xīqŭ",
    "part_of_speech": "V",
    "meaning": "rút ra, hấp thụ"
  },
  {
    "chinese": "吸食",
    "level": "B2",
    "pinyin": "xīshí",
    "part_of_speech": "V",
    "meaning": "hút, húp"
  },
  {
    "chinese": "吸菸",
    "level": "B2",
    "pinyin": "xīyān",
    "part_of_speech": "V-sep",
    "meaning": "hút thuốc"
  },
  {
    "chinese": "媳婦",
    "level": "B2",
    "pinyin": "xífù",
    "part_of_speech": "N",
    "meaning": "con dâu"
  },
  {
    "chinese": "喜酒",
    "level": "B2",
    "pinyin": "xĭjiŭ",
    "part_of_speech": "N",
    "meaning": "rượu cưới"
  },
  {
    "chinese": "喜劇",
    "level": "B2",
    "pinyin": "xǐjù",
    "part_of_speech": "N",
    "meaning": "hài kịch"
  },
  {
    "chinese": "系列",
    "level": "B2",
    "pinyin": "xìliè",
    "part_of_speech": "N",
    "meaning": "hàng loạt"
  },
  {
    "chinese": "細胞",
    "level": "B2",
    "pinyin": "xìbāo",
    "part_of_speech": "N",
    "meaning": "tế bào"
  },
  {
    "chinese": "細節",
    "level": "B2",
    "pinyin": "xìjié",
    "part_of_speech": "N",
    "meaning": "tình tiết, chi tiết"
  },
  {
    "chinese": "細菌",
    "level": "B2",
    "pinyin": "xìjùn",
    "part_of_speech": "N",
    "meaning": "vi trùng"
  },
  {
    "chinese": "細小",
    "level": "B2",
    "pinyin": "xìxiăo",
    "part_of_speech": "Vs",
    "meaning": "nhỏ bé"
  },
  {
    "chinese": "瞎",
    "level": "B2",
    "pinyin": "xiā",
    "part_of_speech": "Vp",
    "meaning": "mù lòa"
  },
  {
    "chinese": "蝦(子)",
    "level": "B2",
    "pinyin": "xiā(zi)",
    "part_of_speech": "N",
    "meaning": "con cóc"
  },
  {
    "chinese": "蝦米",
    "level": "B2",
    "pinyin": "xiāmi",
    "part_of_speech": "N",
    "meaning": "tôm nhỏ, tép"
  },
  {
    "chinese": "下巴",
    "level": "B2",
    "pinyin": "xiàba",
    "part_of_speech": "N",
    "meaning": "cằm, hàm"
  },
  {
    "chinese": "下降",
    "level": "B2",
    "pinyin": "xiàjiàng",
    "part_of_speech": "Vp",
    "meaning": "hạ thấp"
  },
  {
    "chinese": "下來",
    "level": "B2",
    "pinyin": "xiàlái",
    "part_of_speech": "N",
    "meaning": "xuống"
  },
  {
    "chinese": "下棋",
    "level": "B2",
    "pinyin": "xiàqí",
    "part_of_speech": "V-sep",
    "meaning": "chơi cờ, đánh cờ"
  },
  {
    "chinese": "下去",
    "level": "B2",
    "pinyin": "xiàqu",
    "part_of_speech": "Ptc",
    "meaning": "xuống phía dưới"
  },
  {
    "chinese": "下午茶",
    "level": "B2",
    "pinyin": "xiàwŭchá",
    "part_of_speech": "N",
    "meaning": "trà chiều"
  },
  {
    "chinese": "下游",
    "level": "B2",
    "pinyin": "xiàyóu",
    "part_of_speech": "N",
    "meaning": "hạ lưu"
  },
  {
    "chinese": "夏季",
    "level": "B2",
    "pinyin": "xiàjì",
    "part_of_speech": "N",
    "meaning": "mùa hè"
  },
  {
    "chinese": "先進",
    "level": "B2",
    "pinyin": "xiānjìn",
    "part_of_speech": "Vs",
    "meaning": "tiên tiến"
  },
  {
    "chinese": "鮮",
    "level": "B2",
    "pinyin": "xiān",
    "part_of_speech": "Vs",
    "meaning": "ít, hiếm"
  },
  {
    "chinese": "鮮花",
    "level": "B2",
    "pinyin": "xiānhuā",
    "part_of_speech": "N",
    "meaning": "hoa tươi"
  },
  {
    "chinese": "鮮奶",
    "level": "B2",
    "pinyin": "xiānnăi",
    "part_of_speech": "N",
    "meaning": "sữa tươi"
  },
  {
    "chinese": "鮮血",
    "level": "B2",
    "pinyin": "xiānxiě",
    "part_of_speech": "N",
    "meaning": "máu tươi"
  },
  {
    "chinese": "閒",
    "level": "B2",
    "pinyin": "xián",
    "part_of_speech": "Vs",
    "meaning": "nhàn, rỗi"
  },
  {
    "chinese": "嫌",
    "level": "B2",
    "pinyin": "xián",
    "part_of_speech": "Vst",
    "meaning": "nghi ngờ"
  },
  {
    "chinese": "顯得",
    "level": "B2",
    "pinyin": "xiănde",
    "part_of_speech": "Vs",
    "meaning": "lộ ra"
  },
  {
    "chinese": "顯然",
    "level": "B2",
    "pinyin": "xiănrán",
    "part_of_speech": "Adv",
    "meaning": "hiển nhiên"
  },
  {
    "chinese": "顯示",
    "level": "B2",
    "pinyin": "xiănshì",
    "part_of_speech": "V",
    "meaning": "biểu thị, tỏ ra"
  },
  {
    "chinese": "顯著",
    "level": "B2",
    "pinyin": "xiănzhù",
    "part_of_speech": "Vs",
    "meaning": "hiển thị"
  },
  {
    "chinese": "現",
    "level": "B2",
    "pinyin": "xiàn",
    "part_of_speech": "Adv",
    "meaning": "hiện nay"
  },
  {
    "chinese": "現場",
    "level": "B2",
    "pinyin": "xiànchăng",
    "part_of_speech": "N",
    "meaning": "hiện trường"
  },
  {
    "chinese": "現成",
    "level": "B2",
    "pinyin": "xiànchéng",
    "part_of_speech": "Vs-attr",
    "meaning": "sẵn có"
  },
  {
    "chinese": "現金",
    "level": "B2",
    "pinyin": "xiànjīn",
    "part_of_speech": "N",
    "meaning": "tiền mặt"
  },
  {
    "chinese": "羨慕",
    "level": "B2",
    "pinyin": "xiànmù",
    "part_of_speech": "Vst",
    "meaning": "hâm mộ"
  },
  {
    "chinese": "限制",
    "level": "B2",
    "pinyin": "xiànzhì",
    "part_of_speech": "V",
    "meaning": "hạn chế"
  },
  {
    "chinese": "相",
    "level": "B2",
    "pinyin": "xiāng",
    "part_of_speech": "Adv",
    "meaning": "Lẫn nhau, cùng nhau"
  },
  {
    "chinese": "相處",
    "level": "B2",
    "pinyin": "xiāngchŭ",
    "part_of_speech": "Vi",
    "meaning": "sống chung với nhau"
  },
  {
    "chinese": "相當",
    "level": "B2",
    "pinyin": "xiāngdāng",
    "part_of_speech": "Vs",
    "meaning": "tương đương"
  },
  {
    "chinese": "相互",
    "level": "B2",
    "pinyin": "xiānghù",
    "part_of_speech": "Adv",
    "meaning": "lẫn nhau"
  },
  {
    "chinese": "相親相愛",
    "level": "B2",
    "pinyin": "xiāngqīnxiāngài",
    "part_of_speech": "Vs",
    "meaning": "tương thân tương ái"
  },
  {
    "chinese": "相似",
    "level": "B2",
    "pinyin": "xiāngsì",
    "part_of_speech": "Vs",
    "meaning": "tương tự"
  },
  {
    "chinese": "箱",
    "level": "B2",
    "pinyin": "xiāng",
    "part_of_speech": "M",
    "meaning": "rương, hòm"
  },
  {
    "chinese": "香腸",
    "level": "B2",
    "pinyin": "xiāngcháng",
    "part_of_speech": "N",
    "meaning": "lạp xưởng"
  },
  {
    "chinese": "鄉村",
    "level": "B2",
    "pinyin": "xiāngcūn",
    "part_of_speech": "N",
    "meaning": "nông thôn"
  },
  {
    "chinese": "想不到",
    "level": "B2",
    "pinyin": "xiăngbudào",
    "part_of_speech": "Vpt",
    "meaning": "Không ngờ tới"
  },
  {
    "chinese": "想念",
    "level": "B2",
    "pinyin": "xiăngniàn",
    "part_of_speech": "Vst",
    "meaning": "tưởng niệm, nhớ nhung"
  },
  {
    "chinese": "享受",
    "level": "B2",
    "pinyin": "xiăngshòu",
    "part_of_speech": "Vst",
    "meaning": "hưởng thụ, tận hưởng"
  },
  {
    "chinese": "享有",
    "level": "B2",
    "pinyin": "xiăngyŏu",
    "part_of_speech": "Vst",
    "meaning": "được hưởng (quyền lợi…)"
  },
  {
    "chinese": "響應",
    "level": "B2",
    "pinyin": "xiăngyìng",
    "part_of_speech": "V",
    "meaning": "hưởng ứng"
  },
  {
    "chinese": "象",
    "level": "B2",
    "pinyin": "xiàng",
    "part_of_speech": "N",
    "meaning": "con voi"
  },
  {
    "chinese": "相片/相片兒",
    "level": "B2",
    "pinyin": "xiàngpiàn/xiàngpi",
    "part_of_speech": "N",
    "meaning": "ảnh chụp (người)"
  },
  {
    "chinese": "相親",
    "level": "B2",
    "pinyin": "xiàngqīn",
    "part_of_speech": "V-sep",
    "meaning": "gặp mặt, xem mắt"
  },
  {
    "chinese": "巷(子)",
    "level": "B2",
    "pinyin": "xiàng(zi)",
    "part_of_speech": "N",
    "meaning": "ngõ, hẻm"
  },
  {
    "chinese": "向來",
    "level": "B2",
    "pinyin": "xiànglái",
    "part_of_speech": "Adv",
    "meaning": "từ trước đến nay"
  },
  {
    "chinese": "項目",
    "level": "B2",
    "pinyin": "xiàngmù",
    "part_of_speech": "N",
    "meaning": "hạng mục"
  },
  {
    "chinese": "消",
    "level": "B2",
    "pinyin": "xiāo",
    "part_of_speech": "Vp",
    "meaning": "biến mất"
  },
  {
    "chinese": "消除",
    "level": "B2",
    "pinyin": "xiāochú",
    "part_of_speech": "V",
    "meaning": "trừ khử"
  },
  {
    "chinese": "消費",
    "level": "B2",
    "pinyin": "xiāofèi",
    "part_of_speech": "N",
    "meaning": "chi phí"
  },
  {
    "chinese": "消費",
    "level": "B2",
    "pinyin": "xiāofèi",
    "part_of_speech": "V",
    "meaning": "tiêu dùng"
  },
  {
    "chinese": "消化",
    "level": "B2",
    "pinyin": "xiāohuà",
    "part_of_speech": "V",
    "meaning": "tiêu hóa"
  },
  {
    "chinese": "消極",
    "level": "B2",
    "pinyin": "xiāojí",
    "part_of_speech": "Vs",
    "meaning": "tiêu cực"
  },
  {
    "chinese": "消滅",
    "level": "B2",
    "pinyin": "xiāomiè",
    "part_of_speech": "Vpt",
    "meaning": "tiêu diệt"
  },
  {
    "chinese": "消失",
    "level": "B2",
    "pinyin": "xiāoshī",
    "part_of_speech": "Vp",
    "meaning": "tan biến"
  },
  {
    "chinese": "消/宵夜",
    "level": "B2",
    "pinyin": "xiāoyè",
    "part_of_speech": "N",
    "meaning": "đồ ăn khuya"
  },
  {
    "chinese": "銷路",
    "level": "B2",
    "pinyin": "xiāolù",
    "part_of_speech": "N",
    "meaning": "nguồn tiêu thụ"
  },
  {
    "chinese": "銷售",
    "level": "B2",
    "pinyin": "xiāoshòu",
    "part_of_speech": "V",
    "meaning": "tiêu thụ"
  },
  {
    "chinese": "小便",
    "level": "B2",
    "pinyin": "xiăobiàn",
    "part_of_speech": "Vi",
    "meaning": "tiểu tiện"
  },
  {
    "chinese": "小費",
    "level": "B2",
    "pinyin": "xiăofèi",
    "part_of_speech": "N",
    "meaning": "tiền boa, tiền tip"
  },
  {
    "chinese": "小麥",
    "level": "B2",
    "pinyin": "xiăomài",
    "part_of_speech": "N",
    "meaning": "lúa mì"
  },
  {
    "chinese": "小氣",
    "level": "B2",
    "pinyin": "xiăoqì",
    "part_of_speech": "Vs",
    "meaning": "keo kiệt"
  },
  {
    "chinese": "小腿",
    "level": "B2",
    "pinyin": "xiăotuǐ",
    "part_of_speech": "N",
    "meaning": "cẳng chân"
  },
  {
    "chinese": "小子",
    "level": "B2",
    "pinyin": "xiăozi",
    "part_of_speech": "N",
    "meaning": "người trẻ tuổi"
  },
  {
    "chinese": "曉得",
    "level": "B2",
    "pinyin": "xiăode",
    "part_of_speech": "Vst",
    "meaning": "biết, hiểu"
  },
  {
    "chinese": "校車",
    "level": "B2",
    "pinyin": "xiàochē",
    "part_of_speech": "N",
    "meaning": "xe buýt đưa đón của trường"
  },
  {
    "chinese": "校友",
    "level": "B2",
    "pinyin": "xiàoyŏu",
    "part_of_speech": "N",
    "meaning": "bạn cùng trường"
  },
  {
    "chinese": "效率",
    "level": "B2",
    "pinyin": "xiàolǜ",
    "part_of_speech": "N",
    "meaning": "hiệu suất"
  },
  {
    "chinese": "笑容",
    "level": "B2",
    "pinyin": "xiàoróng",
    "part_of_speech": "N",
    "meaning": "nụ cười"
  },
  {
    "chinese": "歇",
    "level": "B2",
    "pinyin": "xiē",
    "part_of_speech": "Vi",
    "meaning": "nghỉ ngơi"
  },
  {
    "chinese": "斜",
    "level": "B2",
    "pinyin": "xié",
    "part_of_speech": "Vs",
    "meaning": "nghiêng"
  },
  {
    "chinese": "血管",
    "level": "B2",
    "pinyin": "xiěguăn",
    "part_of_speech": "N",
    "meaning": "mạch máu"
  },
  {
    "chinese": "血型",
    "level": "B2",
    "pinyin": "xiěxíng",
    "part_of_speech": "N",
    "meaning": "nhóm máu"
  },
  {
    "chinese": "血液",
    "level": "B2",
    "pinyin": "xiěyè",
    "part_of_speech": "N",
    "meaning": "thành phần chính"
  },
  {
    "chinese": "心靈",
    "level": "B2",
    "pinyin": "xīnlíng",
    "part_of_speech": "N",
    "meaning": "thông minh, sáng dạ"
  },
  {
    "chinese": "心目中",
    "level": "B2",
    "pinyin": "xīnmùzhōng",
    "part_of_speech": "N",
    "meaning": "trong tâm trí"
  },
  {
    "chinese": "心聲",
    "level": "B2",
    "pinyin": "xīnshēng",
    "part_of_speech": "N",
    "meaning": "tiếng lòng"
  },
  {
    "chinese": "心跳",
    "level": "B2",
    "pinyin": "xīntiào",
    "part_of_speech": "N",
    "meaning": "nhịp tim đập"
  },
  {
    "chinese": "心臟",
    "level": "B2",
    "pinyin": "xīnzàng",
    "part_of_speech": "N",
    "meaning": "trái tim"
  },
  {
    "chinese": "新郎",
    "level": "B2",
    "pinyin": "xīnláng",
    "part_of_speech": "N",
    "meaning": "chú rể"
  },
  {
    "chinese": "新娘",
    "level": "B2",
    "pinyin": "xīnniáng",
    "part_of_speech": "N",
    "meaning": "cô dâu"
  },
  {
    "chinese": "新式",
    "level": "B2",
    "pinyin": "xīnshì",
    "part_of_speech": "Vs-attr",
    "meaning": "kiểu mới"
  },
  {
    "chinese": "新興",
    "level": "B2",
    "pinyin": "xīnxīng",
    "part_of_speech": "Vs-attr",
    "meaning": "mới mẻ"
  },
  {
    "chinese": "薪水",
    "level": "B2",
    "pinyin": "xīnshuĭ",
    "part_of_speech": "N",
    "meaning": "tiền lương"
  },
  {
    "chinese": "信號",
    "level": "B2",
    "pinyin": "xìnhào",
    "part_of_speech": "N",
    "meaning": "tin hiệu"
  },
  {
    "chinese": "信任",
    "level": "B2",
    "pinyin": "xìnrèn",
    "part_of_speech": "Vst",
    "meaning": "tín nhiệm"
  },
  {
    "chinese": "信仰",
    "level": "B2",
    "pinyin": "xìnyăng",
    "part_of_speech": "N",
    "meaning": "tín ngưỡng"
  },
  {
    "chinese": "信仰",
    "level": "B2",
    "pinyin": "xìnyăng",
    "part_of_speech": "Vst",
    "meaning": "tin tưởng và ngưỡng mộ"
  },
  {
    "chinese": "信用",
    "level": "B2",
    "pinyin": "xìnyòng",
    "part_of_speech": "N",
    "meaning": "chữ tín, tín dụng"
  },
  {
    "chinese": "星光",
    "level": "B2",
    "pinyin": "xīngguāng",
    "part_of_speech": "N",
    "meaning": "ánh sao"
  },
  {
    "chinese": "行程",
    "level": "B2",
    "pinyin": "xíngchéng",
    "part_of_speech": "N",
    "meaning": "lộ trình"
  },
  {
    "chinese": "行動",
    "level": "B2",
    "pinyin": "xíngdòng",
    "part_of_speech": "Vi",
    "meaning": "hành vi, cử động"
  },
  {
    "chinese": "行人",
    "level": "B2",
    "pinyin": "xíngrén",
    "part_of_speech": "N",
    "meaning": "người đi đường"
  },
  {
    "chinese": "形成",
    "level": "B2",
    "pinyin": "xíngchéng",
    "part_of_speech": "Vpt",
    "meaning": "hình thành"
  },
  {
    "chinese": "形式",
    "level": "B2",
    "pinyin": "xíngshì",
    "part_of_speech": "N",
    "meaning": "hình thức"
  },
  {
    "chinese": "形象",
    "level": "B2",
    "pinyin": "xíngxiàng",
    "part_of_speech": "N",
    "meaning": "hình tượng"
  },
  {
    "chinese": "形狀",
    "level": "B2",
    "pinyin": "xíngzhuàng",
    "part_of_speech": "N",
    "meaning": "hình dạng"
  },
  {
    "chinese": "性質",
    "level": "B2",
    "pinyin": "xìngzhí",
    "part_of_speech": "N",
    "meaning": "tính chất"
  },
  {
    "chinese": "雄偉",
    "level": "B2",
    "pinyin": "xióngwěi",
    "part_of_speech": "Vs",
    "meaning": "hùng vĩ, to lớn"
  },
  {
    "chinese": "休假",
    "level": "B2",
    "pinyin": "xiūjià",
    "part_of_speech": "V-sep",
    "meaning": "nghỉ phép"
  },
  {
    "chinese": "休閒",
    "level": "B2",
    "pinyin": "xiūxián",
    "part_of_speech": "Vi",
    "meaning": "nhàn rỗi"
  },
  {
    "chinese": "修正",
    "level": "B2",
    "pinyin": "xiūzhèng",
    "part_of_speech": "V",
    "meaning": "đính chính"
  },
  {
    "chinese": "需",
    "level": "B2",
    "pinyin": "xū",
    "part_of_speech": "Vst",
    "meaning": "nhu cầu, cần"
  },
  {
    "chinese": "須知",
    "level": "B2",
    "pinyin": "xūzhī",
    "part_of_speech": "N",
    "meaning": "điều cần biết"
  },
  {
    "chinese": "許",
    "level": "B2",
    "pinyin": "xŭ",
    "part_of_speech": "V",
    "meaning": "tán dương, ca ngợi"
  },
  {
    "chinese": "許願",
    "level": "B2",
    "pinyin": "xŭyuàn",
    "part_of_speech": "V-sep",
    "meaning": "cầu nguyện"
  },
  {
    "chinese": "宣布/佈",
    "level": "B2",
    "pinyin": "xuānbù",
    "part_of_speech": "V",
    "meaning": "tuyên bố"
  },
  {
    "chinese": "宣傳",
    "level": "B2",
    "pinyin": "xuānchuán",
    "part_of_speech": "N",
    "meaning": "tuyên truyền"
  },
  {
    "chinese": "宣傳",
    "level": "B2",
    "pinyin": "xuānchuán",
    "part_of_speech": "V",
    "meaning": "tuyên truyền"
  },
  {
    "chinese": "懸",
    "level": "B2",
    "pinyin": "xuán",
    "part_of_speech": "V",
    "meaning": "treo, công bố"
  },
  {
    "chinese": "選手",
    "level": "B2",
    "pinyin": "xuănshŏu",
    "part_of_speech": "N",
    "meaning": "tuyển thủ"
  },
  {
    "chinese": "靴(子)",
    "level": "B2",
    "pinyin": "xuē(zi)",
    "part_of_speech": "N",
    "meaning": "chiếc ủng"
  },
  {
    "chinese": "學會",
    "level": "B2",
    "pinyin": "xuéhuì",
    "part_of_speech": "N",
    "meaning": "học cách"
  },
  {
    "chinese": "學歷",
    "level": "B2",
    "pinyin": "xuélì",
    "part_of_speech": "N",
    "meaning": "học vấn"
  },
  {
    "chinese": "學術",
    "level": "B2",
    "pinyin": "xuéshù",
    "part_of_speech": "N",
    "meaning": "học thuật"
  },
  {
    "chinese": "學位",
    "level": "B2",
    "pinyin": "xuéwèi",
    "part_of_speech": "N",
    "meaning": "học vị"
  },
  {
    "chinese": "學業",
    "level": "B2",
    "pinyin": "xuéyè",
    "part_of_speech": "N",
    "meaning": "bài tập"
  },
  {
    "chinese": "學者",
    "level": "B2",
    "pinyin": "xuézhě",
    "part_of_speech": "N",
    "meaning": "học giả"
  },
  {
    "chinese": "雪花",
    "level": "B2",
    "pinyin": "xuěhuā",
    "part_of_speech": "N",
    "meaning": "hoa tuyết"
  },
  {
    "chinese": "削減",
    "level": "B2",
    "pinyin": "xuèjiăn",
    "part_of_speech": "V",
    "meaning": "cắt giảm"
  },
  {
    "chinese": "尋",
    "level": "B2",
    "pinyin": "xún",
    "part_of_speech": "V",
    "meaning": "tìm kiếm"
  },
  {
    "chinese": "循環",
    "level": "B2",
    "pinyin": "xúnhuán",
    "part_of_speech": "Vi",
    "meaning": "tuần hoàn"
  },
  {
    "chinese": "迅速",
    "level": "B2",
    "pinyin": "xùnsù",
    "part_of_speech": "Vs",
    "meaning": "cấp tốc"
  },
  {
    "chinese": "壓",
    "level": "B2",
    "pinyin": "yā",
    "part_of_speech": "V",
    "meaning": "ép, đè"
  },
  {
    "chinese": "壓力",
    "level": "B2",
    "pinyin": "yālì",
    "part_of_speech": "N",
    "meaning": "áp lực"
  },
  {
    "chinese": "壓迫",
    "level": "B2",
    "pinyin": "yāpò",
    "part_of_speech": "V",
    "meaning": "áp bức"
  },
  {
    "chinese": "牙膏",
    "level": "B2",
    "pinyin": "yágāo",
    "part_of_speech": "N",
    "meaning": "kem đánh răng"
  },
  {
    "chinese": "煙/菸",
    "level": "B2",
    "pinyin": "yān",
    "part_of_speech": "N",
    "meaning": "khói"
  },
  {
    "chinese": "沿",
    "level": "B2",
    "pinyin": "yán",
    "part_of_speech": "Prep",
    "meaning": "xuôi theo"
  },
  {
    "chinese": "嚴",
    "level": "B2",
    "pinyin": "yán",
    "part_of_speech": "Vs",
    "meaning": "chặt chẽ, nghiêm"
  },
  {
    "chinese": "嚴格",
    "level": "B2",
    "pinyin": "yángé",
    "part_of_speech": "Vs",
    "meaning": "nghiêm khắc"
  },
  {
    "chinese": "嚴肅",
    "level": "B2",
    "pinyin": "yánsù",
    "part_of_speech": "Vs",
    "meaning": "nghiêm túc"
  },
  {
    "chinese": "鹽巴",
    "level": "B2",
    "pinyin": "yánbā",
    "part_of_speech": "N",
    "meaning": "muối ăn"
  },
  {
    "chinese": "延長",
    "level": "B2",
    "pinyin": "yáncháng",
    "part_of_speech": "V",
    "meaning": "kéo dài"
  },
  {
    "chinese": "癌症",
    "level": "B2",
    "pinyin": "áizhèng",
    "part_of_speech": "N",
    "meaning": "ung thư"
  },
  {
    "chinese": "演唱",
    "level": "B2",
    "pinyin": "yănchàng",
    "part_of_speech": "V",
    "meaning": "biểu diễn"
  },
  {
    "chinese": "演奏",
    "level": "B2",
    "pinyin": "yănzòu",
    "part_of_speech": "V",
    "meaning": "biểu diễn (nhạc cụ)"
  },
  {
    "chinese": "掩蓋",
    "level": "B2",
    "pinyin": "yăngài",
    "part_of_speech": "V",
    "meaning": "che đậy"
  },
  {
    "chinese": "宴會",
    "level": "B2",
    "pinyin": "yànhuì",
    "part_of_speech": "N",
    "meaning": "tiệc"
  },
  {
    "chinese": "厭惡",
    "level": "B2",
    "pinyin": "yànwù",
    "part_of_speech": "Vs",
    "meaning": "chán ghét"
  },
  {
    "chinese": "癢",
    "level": "B2",
    "pinyin": "yăng",
    "part_of_speech": "Vs",
    "meaning": "ngứa"
  },
  {
    "chinese": "氧氣",
    "level": "B2",
    "pinyin": "yăngqì",
    "part_of_speech": "N",
    "meaning": "khí ô-xy"
  },
  {
    "chinese": "樣品",
    "level": "B2",
    "pinyin": "yàngpĭn",
    "part_of_speech": "N",
    "meaning": "hàng mẫu"
  },
  {
    "chinese": "喲",
    "level": "B2",
    "pinyin": "yāo",
    "part_of_speech": "Ptc",
    "meaning": "nhé, nha"
  },
  {
    "chinese": "腰",
    "level": "B2",
    "pinyin": "yāo",
    "part_of_speech": "N",
    "meaning": "lưng, eo"
  },
  {
    "chinese": "搖",
    "level": "B2",
    "pinyin": "yáo",
    "part_of_speech": "V",
    "meaning": "đong đưa, rung"
  },
  {
    "chinese": "搖擺",
    "level": "B2",
    "pinyin": "yáobăi",
    "part_of_speech": "V",
    "meaning": "lúc lắc, lắc lư"
  },
  {
    "chinese": "搖頭",
    "level": "B2",
    "pinyin": "yáotóu",
    "part_of_speech": "V-sep",
    "meaning": "lắc đầu"
  },
  {
    "chinese": "要不",
    "level": "B2",
    "pinyin": "yàobù",
    "part_of_speech": "Conj",
    "meaning": "nếu không thì..."
  },
  {
    "chinese": "要好",
    "level": "B2",
    "pinyin": "yàohăo",
    "part_of_speech": "Vs",
    "meaning": "thân nhau, có quan hệ tốt"
  },
  {
    "chinese": "要命",
    "level": "B2",
    "pinyin": "yàomìng",
    "part_of_speech": "Vs",
    "meaning": "chết người, nguy hiểm"
  },
  {
    "chinese": "藥方",
    "level": "B2",
    "pinyin": "yàofāng",
    "part_of_speech": "N",
    "meaning": "phương thuốc"
  },
  {
    "chinese": "藥水",
    "level": "B2",
    "pinyin": "yàoshuĭ",
    "part_of_speech": "N",
    "meaning": "thuốc nước"
  },
  {
    "chinese": "藥物",
    "level": "B2",
    "pinyin": "yàowù",
    "part_of_speech": "N",
    "meaning": "thuốc"
  },
  {
    "chinese": "野",
    "level": "B2",
    "pinyin": "yě",
    "part_of_speech": "Vs",
    "meaning": "ngoài đồng,vườn"
  },
  {
    "chinese": "野獸",
    "level": "B2",
    "pinyin": "yěshòu",
    "part_of_speech": "N",
    "meaning": "dã thú, muông thú"
  },
  {
    "chinese": "野心",
    "level": "B2",
    "pinyin": "yěxīn",
    "part_of_speech": "N",
    "meaning": "dã tâm"
  },
  {
    "chinese": "夜景",
    "level": "B2",
    "pinyin": "yèjǐng",
    "part_of_speech": "N",
    "meaning": "cảnh đêm"
  },
  {
    "chinese": "夜晚",
    "level": "B2",
    "pinyin": "yèwăn",
    "part_of_speech": "N",
    "meaning": "ban đêm"
  },
  {
    "chinese": "業務",
    "level": "B2",
    "pinyin": "yèwù",
    "part_of_speech": "N",
    "meaning": "nghiệp vụ"
  },
  {
    "chinese": "業餘",
    "level": "B2",
    "pinyin": "yèyú",
    "part_of_speech": "Vs-attr",
    "meaning": "rảnh rỗi"
  },
  {
    "chinese": "葉子",
    "level": "B2",
    "pinyin": "yèzi",
    "part_of_speech": "N",
    "meaning": "lá cây"
  },
  {
    "chinese": "一一",
    "level": "B2",
    "pinyin": "yīyī",
    "part_of_speech": "Adv",
    "meaning": "từng cái một"
  },
  {
    "chinese": "衣裳",
    "level": "B2",
    "pinyin": "yīshang",
    "part_of_speech": "N",
    "meaning": "quần áo"
  },
  {
    "chinese": "依據",
    "level": "B2",
    "pinyin": "yījù",
    "part_of_speech": "N",
    "meaning": "căn cứ theo"
  },
  {
    "chinese": "依然",
    "level": "B2",
    "pinyin": "yīrán",
    "part_of_speech": "Adv",
    "meaning": "như cũ"
  },
  {
    "chinese": "醫",
    "level": "B2",
    "pinyin": "yī",
    "part_of_speech": "V",
    "meaning": "y khoa"
  },
  {
    "chinese": "醫師",
    "level": "B2",
    "pinyin": "yīshī",
    "part_of_speech": "N",
    "meaning": "y sĩ, thầy thuốc"
  },
  {
    "chinese": "醫學",
    "level": "B2",
    "pinyin": "yīxué",
    "part_of_speech": "N",
    "meaning": "y học"
  },
  {
    "chinese": "一帶",
    "level": "B2",
    "pinyin": "yīdài",
    "part_of_speech": "N",
    "meaning": "vùng, khu vực"
  },
  {
    "chinese": "一旦",
    "level": "B2",
    "pinyin": "yīdàn",
    "part_of_speech": "Conj",
    "meaning": "một ngày, một khi"
  },
  {
    "chinese": "一大早",
    "level": "B2",
    "pinyin": "yīdàzăo",
    "part_of_speech": "N",
    "meaning": "sáng sớm"
  },
  {
    "chinese": "一面",
    "level": "B2",
    "pinyin": "yīmiàn",
    "part_of_speech": "Adv",
    "meaning": "một mặt"
  },
  {
    "chinese": "一再",
    "level": "B2",
    "pinyin": "yīzài",
    "part_of_speech": "Adv",
    "meaning": "nhiều lần, năm lần bảy lượt"
  },
  {
    "chinese": "一致",
    "level": "B2",
    "pinyin": "yīzhì",
    "part_of_speech": "Vs",
    "meaning": "nhất trí"
  },
  {
    "chinese": "移",
    "level": "B2",
    "pinyin": "yí",
    "part_of_speech": "V",
    "meaning": "di chuyển"
  },
  {
    "chinese": "移動",
    "level": "B2",
    "pinyin": "yídòng",
    "part_of_speech": "V",
    "meaning": "di động"
  },
  {
    "chinese": "移民",
    "level": "B2",
    "pinyin": "yímín",
    "part_of_speech": "Vp",
    "meaning": "di dân"
  },
  {
    "chinese": "疑問",
    "level": "B2",
    "pinyin": "yíwèn",
    "part_of_speech": "N",
    "meaning": "nghi vấn, nghi ngờ"
  },
  {
    "chinese": "儀器",
    "level": "B2",
    "pinyin": "yíqì",
    "part_of_speech": "N",
    "meaning": "máy móc"
  },
  {
    "chinese": "儀式",
    "level": "B2",
    "pinyin": "yíshì",
    "part_of_speech": "N",
    "meaning": "nghi thức"
  },
  {
    "chinese": "乙",
    "level": "B2",
    "pinyin": "yĭ",
    "part_of_speech": "N",
    "meaning": "ất"
  },
  {
    "chinese": "已婚",
    "level": "B2",
    "pinyin": "yĭhūn",
    "part_of_speech": "Vs",
    "meaning": "đã có gia đình, đã kết hôn"
  },
  {
    "chinese": "以",
    "level": "B2",
    "pinyin": "yĭ",
    "part_of_speech": "Conj",
    "meaning": "dùng, lấy, theo"
  },
  {
    "chinese": "以便",
    "level": "B2",
    "pinyin": "yĭbiàn",
    "part_of_speech": "Conj",
    "meaning": "để, nhằm"
  },
  {
    "chinese": "以及",
    "level": "B2",
    "pinyin": "yĭjí",
    "part_of_speech": "Conj",
    "meaning": "và, cùng"
  },
  {
    "chinese": "以往",
    "level": "B2",
    "pinyin": "yĭwăng",
    "part_of_speech": "N",
    "meaning": "ngày xưa"
  },
  {
    "chinese": "一般而言",
    "level": "B2",
    "pinyin": "yībānéryán",
    "part_of_speech": "Conj",
    "meaning": "nói chung"
  },
  {
    "chinese": "一口氣",
    "level": "B2",
    "pinyin": "yīkŏuqì",
    "part_of_speech": "Adv",
    "meaning": "một hơi thở"
  },
  {
    "chinese": "一旁",
    "level": "B2",
    "pinyin": "yīpáng",
    "part_of_speech": "N",
    "meaning": "bên cạnh"
  },
  {
    "chinese": "一齊",
    "level": "B2",
    "pinyin": "yīqí",
    "part_of_speech": "Adv",
    "meaning": "đồng thời"
  },
  {
    "chinese": "一天到晚",
    "level": "B2",
    "pinyin": "yītiāndàowăn",
    "part_of_speech": "Adv",
    "meaning": "suốt ngày, từ sáng đến tối"
  },
  {
    "chinese": "易",
    "level": "B2",
    "pinyin": "yì",
    "part_of_speech": "Vs",
    "meaning": "dễ dàng"
  },
  {
    "chinese": "意識",
    "level": "B2",
    "pinyin": "yìshì",
    "part_of_speech": "N",
    "meaning": "ý thức"
  },
  {
    "chinese": "意外",
    "level": "B2",
    "pinyin": "yìwài",
    "part_of_speech": "Vs",
    "meaning": "bất ngờ, không ngờ"
  },
  {
    "chinese": "意願",
    "level": "B2",
    "pinyin": "yìyuàn",
    "part_of_speech": "N",
    "meaning": "nguyện vọng"
  },
  {
    "chinese": "意志",
    "level": "B2",
    "pinyin": "yìzhì",
    "part_of_speech": "N",
    "meaning": "ý chí"
  },
  {
    "chinese": "億",
    "level": "B2",
    "pinyin": "yì",
    "part_of_speech": "N",
    "meaning": "một trăm triệu"
  },
  {
    "chinese": "義務",
    "level": "B2",
    "pinyin": "yìwù",
    "part_of_speech": "N",
    "meaning": "nghĩa vụ"
  },
  {
    "chinese": "議會",
    "level": "B2",
    "pinyin": "yìhuì",
    "part_of_speech": "N",
    "meaning": "nghị viện, quốc hội"
  },
  {
    "chinese": "因而",
    "level": "B2",
    "pinyin": "yīnér",
    "part_of_speech": "Conj",
    "meaning": "cho nên, bởi thế"
  },
  {
    "chinese": "因素",
    "level": "B2",
    "pinyin": "yīnsù",
    "part_of_speech": "N",
    "meaning": "nhân tố"
  },
  {
    "chinese": "銀",
    "level": "B2",
    "pinyin": "yín",
    "part_of_speech": "N",
    "meaning": "bạc"
  },
  {
    "chinese": "引發",
    "level": "B2",
    "pinyin": "yĭnfā",
    "part_of_speech": "V",
    "meaning": "gợi ra"
  },
  {
    "chinese": "飲",
    "level": "B2",
    "pinyin": "yĭn",
    "part_of_speech": "V",
    "meaning": "uống"
  },
  {
    "chinese": "飲食",
    "level": "B2",
    "pinyin": "yĭnshí",
    "part_of_speech": "N",
    "meaning": "đồ ăn thức uống"
  },
  {
    "chinese": "印",
    "level": "B2",
    "pinyin": "yìn",
    "part_of_speech": "V",
    "meaning": "con dấu"
  },
  {
    "chinese": "印刷",
    "level": "B2",
    "pinyin": "yìnshuā",
    "part_of_speech": "Vi",
    "meaning": "in ấn"
  },
  {
    "chinese": "印象",
    "level": "B2",
    "pinyin": "yìnxiàng",
    "part_of_speech": "N",
    "meaning": "ấn tượng"
  },
  {
    "chinese": "印章",
    "level": "B2",
    "pinyin": "yìnzhāng",
    "part_of_speech": "N",
    "meaning": "con dấu"
  },
  {
    "chinese": "應當",
    "level": "B2",
    "pinyin": "yīngdāng",
    "part_of_speech": "Adv",
    "meaning": "nên, cần phải"
  },
  {
    "chinese": "嬰兒",
    "level": "B2",
    "pinyin": "yīngér",
    "part_of_speech": "N",
    "meaning": "trẻ sơ sinh"
  },
  {
    "chinese": "英雄",
    "level": "B2",
    "pinyin": "yīngxióng",
    "part_of_speech": "N",
    "meaning": "anh hùng"
  },
  {
    "chinese": "贏得",
    "level": "B2",
    "pinyin": "yíngdé",
    "part_of_speech": "Vpt",
    "meaning": "giành được"
  },
  {
    "chinese": "迎接",
    "level": "B2",
    "pinyin": "yíngjiē",
    "part_of_speech": "V",
    "meaning": "nghênh đón"
  },
  {
    "chinese": "營養",
    "level": "B2",
    "pinyin": "yíngyăng",
    "part_of_speech": "Vs",
    "meaning": "dinh dưỡng"
  },
  {
    "chinese": "營業",
    "level": "B2",
    "pinyin": "yíngyè",
    "part_of_speech": "Vi",
    "meaning": "kinh doanh"
  },
  {
    "chinese": "影本",
    "level": "B2",
    "pinyin": "yĭngběn",
    "part_of_speech": "N",
    "meaning": "bản sao"
  },
  {
    "chinese": "影印",
    "level": "B2",
    "pinyin": "yĭngyìn",
    "part_of_speech": "V",
    "meaning": "in chụp, photocopy"
  },
  {
    "chinese": "影子",
    "level": "B2",
    "pinyin": "yĭngzi",
    "part_of_speech": "N",
    "meaning": "bóng dáng"
  },
  {
    "chinese": "硬",
    "level": "B2",
    "pinyin": "yìng",
    "part_of_speech": "Vs",
    "meaning": "cứng rắn"
  },
  {
    "chinese": "應付",
    "level": "B2",
    "pinyin": "yìngfù",
    "part_of_speech": "V",
    "meaning": "ứng phó"
  },
  {
    "chinese": "應邀",
    "level": "B2",
    "pinyin": "yìngyāo",
    "part_of_speech": "Vi",
    "meaning": "nhận lời mời"
  },
  {
    "chinese": "應用",
    "level": "B2",
    "pinyin": "yìngyòng",
    "part_of_speech": "V",
    "meaning": "ứng dụng"
  },
  {
    "chinese": "擁抱",
    "level": "B2",
    "pinyin": "yŏngbào",
    "part_of_speech": "V",
    "meaning": "ôm"
  },
  {
    "chinese": "擁護",
    "level": "B2",
    "pinyin": "yŏnghù",
    "part_of_speech": "V",
    "meaning": "ủng hộ, tán thành"
  },
  {
    "chinese": "擁擠",
    "level": "B2",
    "pinyin": "yŏngjĭ",
    "part_of_speech": "Vs",
    "meaning": "chen chúc"
  },
  {
    "chinese": "勇氣",
    "level": "B2",
    "pinyin": "yŏngqì",
    "part_of_speech": "N",
    "meaning": "dũng khí"
  },
  {
    "chinese": "用不著",
    "level": "B2",
    "pinyin": "yòngbùzháo",
    "part_of_speech": "Adv",
    "meaning": "không cần"
  },
  {
    "chinese": "用處",
    "level": "B2",
    "pinyin": "yòngchu",
    "part_of_speech": "N",
    "meaning": "tác dụng"
  },
  {
    "chinese": "用得著",
    "level": "B2",
    "pinyin": "yòngdezháo",
    "part_of_speech": "Vs",
    "meaning": "có thể sử dụng"
  },
  {
    "chinese": "用具",
    "level": "B2",
    "pinyin": "yòngjù",
    "part_of_speech": "N",
    "meaning": "dụng cụ"
  },
  {
    "chinese": "用力",
    "level": "B2",
    "pinyin": "yònglì",
    "part_of_speech": "Vs-sep",
    "meaning": "cố sức, gắng sức"
  },
  {
    "chinese": "用心",
    "level": "B2",
    "pinyin": "yòngxīn",
    "part_of_speech": "Vs-sep",
    "meaning": "chăm chỉ, để tâm"
  },
  {
    "chinese": "憂鬱",
    "level": "B2",
    "pinyin": "yōuyù",
    "part_of_speech": "Vs",
    "meaning": "buồn thương"
  },
  {
    "chinese": "優惠",
    "level": "B2",
    "pinyin": "yōuhuì",
    "part_of_speech": "Vs",
    "meaning": "ưu đãi"
  },
  {
    "chinese": "優良",
    "level": "B2",
    "pinyin": "yōuliáng",
    "part_of_speech": "Vs",
    "meaning": "tốt đẹp"
  },
  {
    "chinese": "優美",
    "level": "B2",
    "pinyin": "yōuměi",
    "part_of_speech": "Vs",
    "meaning": "tươi đẹp"
  },
  {
    "chinese": "優越",
    "level": "B2",
    "pinyin": "yōuyuè",
    "part_of_speech": "Vs",
    "meaning": "ưu việt"
  },
  {
    "chinese": "由",
    "level": "B2",
    "pinyin": "yóu",
    "part_of_speech": "Prep",
    "meaning": "nguyên do, do"
  },
  {
    "chinese": "油",
    "level": "B2",
    "pinyin": "yóu",
    "part_of_speech": "Vs",
    "meaning": "dầu, mỡ"
  },
  {
    "chinese": "油膩",
    "level": "B2",
    "pinyin": "yóunì",
    "part_of_speech": "Vs",
    "meaning": "chứa nhiều dầu mỡ, ngấy"
  },
  {
    "chinese": "游",
    "level": "B2",
    "pinyin": "yóu",
    "part_of_speech": "Vi",
    "meaning": "bơi lội"
  },
  {
    "chinese": "郵差",
    "level": "B2",
    "pinyin": "yóuchāi",
    "part_of_speech": "N",
    "meaning": "người đưa thư"
  },
  {
    "chinese": "郵件",
    "level": "B2",
    "pinyin": "yóujiàn",
    "part_of_speech": "N",
    "meaning": "bưu kiện"
  },
  {
    "chinese": "遊戲",
    "level": "B2",
    "pinyin": "yóuxì",
    "part_of_speech": "N",
    "meaning": "trò chơi"
  },
  {
    "chinese": "遊戲",
    "level": "B2",
    "pinyin": "yóuxì",
    "part_of_speech": "Vi",
    "meaning": "chơi trò chơi"
  },
  {
    "chinese": "遊行",
    "level": "B2",
    "pinyin": "yóuxíng",
    "part_of_speech": "Vi",
    "meaning": "du hành"
  },
  {
    "chinese": "猶豫",
    "level": "B2",
    "pinyin": "yóuyù",
    "part_of_speech": "Vs",
    "meaning": "do dự"
  },
  {
    "chinese": "友好",
    "level": "B2",
    "pinyin": "yŏuhăo",
    "part_of_speech": "Vs",
    "meaning": "hữu nghị"
  },
  {
    "chinese": "有關",
    "level": "B2",
    "pinyin": "yŏuguān",
    "part_of_speech": "Prep",
    "meaning": "có liên quan"
  },
  {
    "chinese": "有關",
    "level": "B2",
    "pinyin": "yŏuguān",
    "part_of_speech": "Vs",
    "meaning": "đề cập đến"
  },
  {
    "chinese": "有力",
    "level": "B2",
    "pinyin": "yŏulì",
    "part_of_speech": "Vs",
    "meaning": "mạnh mẽ"
  },
  {
    "chinese": "有利",
    "level": "B2",
    "pinyin": "yŏulì",
    "part_of_speech": "Vs",
    "meaning": "có lợi, có ích"
  },
  {
    "chinese": "有些",
    "level": "B2",
    "pinyin": "yŏuxiē",
    "part_of_speech": "Adv",
    "meaning": "có một số"
  },
  {
    "chinese": "有些",
    "level": "B2",
    "pinyin": "yŏuxiē",
    "part_of_speech": "Det",
    "meaning": "có phần"
  },
  {
    "chinese": "娛樂",
    "level": "B2",
    "pinyin": "yúlè",
    "part_of_speech": "N",
    "meaning": "tiêu khiển, giải trí"
  },
  {
    "chinese": "語調",
    "level": "B2",
    "pinyin": "yŭdiào",
    "part_of_speech": "N",
    "meaning": "ngữ điệu"
  },
  {
    "chinese": "語氣",
    "level": "B2",
    "pinyin": "yŭqì",
    "part_of_speech": "N",
    "meaning": "ngữ khí, giọng điệu"
  },
  {
    "chinese": "語音",
    "level": "B2",
    "pinyin": "yŭyīn",
    "part_of_speech": "N",
    "meaning": "ngữ âm"
  },
  {
    "chinese": "與其",
    "level": "B2",
    "pinyin": "yŭqí",
    "part_of_speech": "Conj",
    "meaning": "so với, thay vì"
  },
  {
    "chinese": "遇",
    "level": "B2",
    "pinyin": "yù",
    "part_of_speech": "Vst",
    "meaning": "gặp mặt"
  },
  {
    "chinese": "遇見",
    "level": "B2",
    "pinyin": "yùjiàn",
    "part_of_speech": "Vpt",
    "meaning": "gặp phải"
  },
  {
    "chinese": "預報",
    "level": "B2",
    "pinyin": "yùbào",
    "part_of_speech": "N",
    "meaning": "dự báo"
  },
  {
    "chinese": "預定",
    "level": "B2",
    "pinyin": "yùdìng",
    "part_of_speech": "V",
    "meaning": "dự định"
  },
  {
    "chinese": "預訂",
    "level": "B2",
    "pinyin": "yùdìng",
    "part_of_speech": "V",
    "meaning": "đặt trước"
  },
  {
    "chinese": "預計",
    "level": "B2",
    "pinyin": "yùjì",
    "part_of_speech": "Vaux",
    "meaning": "dự tính"
  },
  {
    "chinese": "預算",
    "level": "B2",
    "pinyin": "yùsuàn",
    "part_of_speech": "N",
    "meaning": "dự toán"
  },
  {
    "chinese": "預先",
    "level": "B2",
    "pinyin": "yùxiān",
    "part_of_speech": "Adv",
    "meaning": "trước, sẵn"
  },
  {
    "chinese": "冤枉",
    "level": "B2",
    "pinyin": "yuānwăng",
    "part_of_speech": "Vs",
    "meaning": "bị oan, làm oan"
  },
  {
    "chinese": "冤枉",
    "level": "B2",
    "pinyin": "yuānwăng",
    "part_of_speech": "Vst",
    "meaning": "xử oan"
  },
  {
    "chinese": "元旦",
    "level": "B2",
    "pinyin": "yuándàn",
    "part_of_speech": "N",
    "meaning": "nguyên đán"
  },
  {
    "chinese": "原來",
    "level": "B2",
    "pinyin": "yuánlái",
    "part_of_speech": "Vs-attr",
    "meaning": "lúc đầu"
  },
  {
    "chinese": "原理",
    "level": "B2",
    "pinyin": "yuánlĭ",
    "part_of_speech": "N",
    "meaning": "nguyên lý"
  },
  {
    "chinese": "原料",
    "level": "B2",
    "pinyin": "yuánliào",
    "part_of_speech": "N",
    "meaning": "nguyên liệu"
  },
  {
    "chinese": "原始",
    "level": "B2",
    "pinyin": "yuánshĭ",
    "part_of_speech": "Vs",
    "meaning": "đầu tiên, nguyên thủy"
  },
  {
    "chinese": "原先",
    "level": "B2",
    "pinyin": "yuánxiān",
    "part_of_speech": "Adv",
    "meaning": "trước kia,ban đầu"
  },
  {
    "chinese": "原則",
    "level": "B2",
    "pinyin": "yuánzé",
    "part_of_speech": "N",
    "meaning": "nguyên tắc"
  },
  {
    "chinese": "原則上",
    "level": "B2",
    "pinyin": "yuánzéshàng",
    "part_of_speech": "Adv",
    "meaning": "về nguyên tắc"
  },
  {
    "chinese": "原子筆",
    "level": "B2",
    "pinyin": "yuánzĭbĭ",
    "part_of_speech": "N",
    "meaning": "bút bi"
  },
  {
    "chinese": "圓滿",
    "level": "B2",
    "pinyin": "yuánmăn",
    "part_of_speech": "Vs",
    "meaning": "toàn vẹn"
  },
  {
    "chinese": "圓形",
    "level": "B2",
    "pinyin": "yuánxíng",
    "part_of_speech": "N",
    "meaning": "tròn"
  },
  {
    "chinese": "緣故",
    "level": "B2",
    "pinyin": "yuángù",
    "part_of_speech": "N",
    "meaning": "duyên cớ, nguyên do"
  },
  {
    "chinese": "遠大",
    "level": "B2",
    "pinyin": "yuăndà",
    "part_of_speech": "Vs",
    "meaning": "rộng lớn"
  },
  {
    "chinese": "願",
    "level": "B2",
    "pinyin": "yuàn",
    "part_of_speech": "Vst",
    "meaning": "mong ước"
  },
  {
    "chinese": "月分",
    "level": "B2",
    "pinyin": "yuèfèn",
    "part_of_speech": "N",
    "meaning": "tháng"
  },
  {
    "chinese": "月光",
    "level": "B2",
    "pinyin": "yuèguāng",
    "part_of_speech": "N",
    "meaning": "ánh trăng"
  },
  {
    "chinese": "月球",
    "level": "B2",
    "pinyin": "yuèqiú",
    "part_of_speech": "N",
    "meaning": "mặt trăng"
  },
  {
    "chinese": "暈",
    "level": "B2",
    "pinyin": "yūn",
    "part_of_speech": "Vs",
    "meaning": "choáng váng"
  },
  {
    "chinese": "允許",
    "level": "B2",
    "pinyin": "yŭnxŭ",
    "part_of_speech": "V",
    "meaning": "cho phép"
  },
  {
    "chinese": "運輸",
    "level": "B2",
    "pinyin": "yùnshū",
    "part_of_speech": "V",
    "meaning": "vận tải, vận chuyển"
  },
  {
    "chinese": "運送",
    "level": "B2",
    "pinyin": "yùnsòng",
    "part_of_speech": "V",
    "meaning": "chuyên chở"
  },
  {
    "chinese": "運用",
    "level": "B2",
    "pinyin": "yùnyòng",
    "part_of_speech": "V",
    "meaning": "vận dụng"
  },
  {
    "chinese": "運轉",
    "level": "B2",
    "pinyin": "yùnzhuăn",
    "part_of_speech": "Vi",
    "meaning": "quay quanh, xoay quanh"
  },
  {
    "chinese": "砸",
    "level": "B2",
    "pinyin": "zá",
    "part_of_speech": "V",
    "meaning": "đánh, đập"
  },
  {
    "chinese": "雜",
    "level": "B2",
    "pinyin": "zá",
    "part_of_speech": "Vs",
    "meaning": "tạp, lặt vặt, linh tinh"
  },
  {
    "chinese": "災害",
    "level": "B2",
    "pinyin": "zāihài",
    "part_of_speech": "N",
    "meaning": "tai họa, thiên tai"
  },
  {
    "chinese": "災難",
    "level": "B2",
    "pinyin": "zāinàn",
    "part_of_speech": "N",
    "meaning": "tai nạn"
  },
  {
    "chinese": "在乎",
    "level": "B2",
    "pinyin": "zàihū",
    "part_of_speech": "Vst",
    "meaning": "lưu ý, để ý"
  },
  {
    "chinese": "再度",
    "level": "B2",
    "pinyin": "zàidù",
    "part_of_speech": "Adv",
    "meaning": "lại lần nữa"
  },
  {
    "chinese": "再說",
    "level": "B2",
    "pinyin": "zàishuō",
    "part_of_speech": "Conj",
    "meaning": "vả lại, hơn nữa"
  },
  {
    "chinese": "載",
    "level": "B2",
    "pinyin": "zài",
    "part_of_speech": "V",
    "meaning": "chở"
  },
  {
    "chinese": "咱們",
    "level": "B2",
    "pinyin": "zánmen",
    "part_of_speech": "N",
    "meaning": "chúng ta"
  },
  {
    "chinese": "贊成",
    "level": "B2",
    "pinyin": "zànchéng",
    "part_of_speech": "Vst",
    "meaning": "tán thành"
  },
  {
    "chinese": "贊同",
    "level": "B2",
    "pinyin": "zàntóng",
    "part_of_speech": "Vst",
    "meaning": "đồng ý"
  },
  {
    "chinese": "讚美",
    "level": "B2",
    "pinyin": "zànměi",
    "part_of_speech": "V",
    "meaning": "ca ngợi, ca tụng"
  },
  {
    "chinese": "葬禮",
    "level": "B2",
    "pinyin": "zànglĭ",
    "part_of_speech": "N",
    "meaning": "lễ tang"
  },
  {
    "chinese": "糟",
    "level": "B2",
    "pinyin": "zāo",
    "part_of_speech": "Vs",
    "meaning": "mục nát, hỏng việc"
  },
  {
    "chinese": "糟糕",
    "level": "B2",
    "pinyin": "zāogāo",
    "part_of_speech": "Vs",
    "meaning": "hỏng bét, kinh khủng"
  },
  {
    "chinese": "遭到",
    "level": "B2",
    "pinyin": "zāodào",
    "part_of_speech": "Vpt",
    "meaning": "đau khổ"
  },
  {
    "chinese": "遭受",
    "level": "B2",
    "pinyin": "zāoshòu",
    "part_of_speech": "Vst",
    "meaning": "gặp, bị, chịu"
  },
  {
    "chinese": "遭遇",
    "level": "B2",
    "pinyin": "zāoyù",
    "part_of_speech": "N",
    "meaning": "cảnh ngộ"
  },
  {
    "chinese": "早晨",
    "level": "B2",
    "pinyin": "zăochén",
    "part_of_speech": "N",
    "meaning": "sáng sớm"
  },
  {
    "chinese": "早點",
    "level": "B2",
    "pinyin": "zăodiăn",
    "part_of_speech": "Adv",
    "meaning": "điểm tâm sáng"
  },
  {
    "chinese": "早點",
    "level": "B2",
    "pinyin": "zăodiăn",
    "part_of_speech": "N",
    "meaning": "điểm tâm sáng"
  },
  {
    "chinese": "早晚",
    "level": "B2",
    "pinyin": "zǎowǎn",
    "part_of_speech": "Adv",
    "meaning": "sớm tối, sớm muộn thì..."
  },
  {
    "chinese": "早已",
    "level": "B2",
    "pinyin": "zăoyĭ",
    "part_of_speech": "Adv",
    "meaning": "sớm đã, từ lâu đã"
  },
  {
    "chinese": "造",
    "level": "B2",
    "pinyin": "zào",
    "part_of_speech": "V",
    "meaning": "làm ra, tạo ra"
  },
  {
    "chinese": "造句",
    "level": "B2",
    "pinyin": "zàojù",
    "part_of_speech": "V-sep",
    "meaning": "đặt câu"
  },
  {
    "chinese": "則",
    "level": "B2",
    "pinyin": "zé",
    "part_of_speech": "Adv",
    "meaning": "phép tắc"
  },
  {
    "chinese": "則",
    "level": "B2",
    "pinyin": "zé",
    "part_of_speech": "M",
    "meaning": "điều, mục"
  },
  {
    "chinese": "怎",
    "level": "B2",
    "pinyin": "zěn",
    "part_of_speech": "Adv",
    "meaning": "sao, thế nào"
  },
  {
    "chinese": "增長",
    "level": "B2",
    "pinyin": "zēngzhăng",
    "part_of_speech": "Vst",
    "meaning": "tăng trưởng"
  },
  {
    "chinese": "贈品",
    "level": "B2",
    "pinyin": "zèngpĭn",
    "part_of_speech": "N",
    "meaning": "quà tặng"
  },
  {
    "chinese": "贈送",
    "level": "B2",
    "pinyin": "zèngsòng",
    "part_of_speech": "V",
    "meaning": "biếu, tặng"
  },
  {
    "chinese": "窄",
    "level": "B2",
    "pinyin": "zhăi",
    "part_of_speech": "Vs",
    "meaning": "hẹp, chật"
  },
  {
    "chinese": "展出",
    "level": "B2",
    "pinyin": "zhănchū",
    "part_of_speech": "V",
    "meaning": "hiển thị"
  },
  {
    "chinese": "展開",
    "level": "B2",
    "pinyin": "zhănkāi",
    "part_of_speech": "V",
    "meaning": "triển khai"
  },
  {
    "chinese": "展覽",
    "level": "B2",
    "pinyin": "zhănlăn",
    "part_of_speech": "N",
    "meaning": "buổi triển lãm"
  },
  {
    "chinese": "展覽",
    "level": "B2",
    "pinyin": "zhănlăn",
    "part_of_speech": "V",
    "meaning": "triển lãm"
  },
  {
    "chinese": "展示",
    "level": "B2",
    "pinyin": "zhănshì",
    "part_of_speech": "V",
    "meaning": "bày ra, phơi ra"
  },
  {
    "chinese": "占/佔",
    "level": "B2",
    "pinyin": "zhàn",
    "part_of_speech": "V",
    "meaning": "xem bói"
  },
  {
    "chinese": "占/佔",
    "level": "B2",
    "pinyin": "zhàn",
    "part_of_speech": "Vst",
    "meaning": "chiếm (%)"
  },
  {
    "chinese": "占/佔有",
    "level": "B2",
    "pinyin": "zhànyŏu",
    "part_of_speech": "Vst",
    "meaning": "chiếm giữ"
  },
  {
    "chinese": "站住",
    "level": "B2",
    "pinyin": "zhànzhù",
    "part_of_speech": "Vi",
    "meaning": "dừng lại, đứng lại"
  },
  {
    "chinese": "戰場",
    "level": "B2",
    "pinyin": "zhànchăng",
    "part_of_speech": "N",
    "meaning": "chiến trường"
  },
  {
    "chinese": "張",
    "level": "B2",
    "pinyin": "zhāng",
    "part_of_speech": "V",
    "meaning": "mở ra, giương ra"
  },
  {
    "chinese": "章",
    "level": "B2",
    "pinyin": "zhāng",
    "part_of_speech": "M",
    "meaning": "chương, mục"
  },
  {
    "chinese": "長",
    "level": "B2",
    "pinyin": "zhǎng",
    "part_of_speech": "Vst",
    "meaning": "lớn, nhiều tuổi"
  },
  {
    "chinese": "長輩",
    "level": "B2",
    "pinyin": "zhǍngbèi",
    "part_of_speech": "N",
    "meaning": "đàn anh, trưởng bối"
  },
  {
    "chinese": "漲",
    "level": "B2",
    "pinyin": "zhăng",
    "part_of_speech": "Vp",
    "meaning": "tăng lên cao"
  },
  {
    "chinese": "漲價",
    "level": "B2",
    "pinyin": "zhăngjià",
    "part_of_speech": "Vp-sep",
    "meaning": "tăng giá"
  },
  {
    "chinese": "掌聲",
    "level": "B2",
    "pinyin": "zhăngshēng",
    "part_of_speech": "N",
    "meaning": "tiếng vỗ tay"
  },
  {
    "chinese": "帳單",
    "level": "B2",
    "pinyin": "zhàngdān",
    "part_of_speech": "N",
    "meaning": "hóa đoan"
  },
  {
    "chinese": "丈夫",
    "level": "B2",
    "pinyin": "zhàngfū",
    "part_of_speech": "N",
    "meaning": "chồng"
  },
  {
    "chinese": "招呼",
    "level": "B2",
    "pinyin": "zhāohu",
    "part_of_speech": "V",
    "meaning": "chào hỏi"
  },
  {
    "chinese": "招手",
    "level": "B2",
    "pinyin": "zhāoshŏu",
    "part_of_speech": "V-sep",
    "meaning": "vẫy tay"
  },
  {
    "chinese": "照",
    "level": "B2",
    "pinyin": "zhào",
    "part_of_speech": "Adv",
    "meaning": "chiếu, soi, rọi"
  },
  {
    "chinese": "照常",
    "level": "B2",
    "pinyin": "zhàocháng",
    "part_of_speech": "Vs",
    "meaning": "như thường lệ"
  },
  {
    "chinese": "召開",
    "level": "B2",
    "pinyin": "zhàokāi",
    "part_of_speech": "V",
    "meaning": "mời dự họp"
  },
  {
    "chinese": "折",
    "level": "B2",
    "pinyin": "zhé",
    "part_of_speech": "V",
    "meaning": "bẻ gãy"
  },
  {
    "chinese": "折合",
    "level": "B2",
    "pinyin": "zhéhé",
    "part_of_speech": "Vst",
    "meaning": "tương đương"
  },
  {
    "chinese": "折扣",
    "level": "B2",
    "pinyin": "zhékòu",
    "part_of_speech": "N",
    "meaning": "chiếu khấu, giảm giá"
  },
  {
    "chinese": "折磨",
    "level": "B2",
    "pinyin": "zhémó",
    "part_of_speech": "V",
    "meaning": "dằn vặt, dày vò"
  },
  {
    "chinese": "者",
    "level": "B2",
    "pinyin": "zhě",
    "part_of_speech": "N",
    "meaning": "người, kẻ"
  },
  {
    "chinese": "針",
    "level": "B2",
    "pinyin": "zhēn",
    "part_of_speech": "N",
    "meaning": "cây kim"
  },
  {
    "chinese": "針對",
    "level": "B2",
    "pinyin": "zhēnduì",
    "part_of_speech": "Prep",
    "meaning": "nhằm vào, chĩa vào"
  },
  {
    "chinese": "偵探",
    "level": "B2",
    "pinyin": "zhēntàn",
    "part_of_speech": "N",
    "meaning": "trinh thám"
  },
  {
    "chinese": "珍惜",
    "level": "B2",
    "pinyin": "zhēnxí",
    "part_of_speech": "Vst",
    "meaning": "trân quý"
  },
  {
    "chinese": "珍珠",
    "level": "B2",
    "pinyin": "zhēnzhū",
    "part_of_speech": "N",
    "meaning": "trân châu"
  },
  {
    "chinese": "真心",
    "level": "B2",
    "pinyin": "zhēnxīn",
    "part_of_speech": "N",
    "meaning": "thật lòng, thành thật"
  },
  {
    "chinese": "枕頭",
    "level": "B2",
    "pinyin": "zhěntou",
    "part_of_speech": "N",
    "meaning": "cái gối"
  },
  {
    "chinese": "陣",
    "level": "B2",
    "pinyin": "zhèn",
    "part_of_speech": "M",
    "meaning": "trận"
  },
  {
    "chinese": "陣子",
    "level": "B2",
    "pinyin": "zhènzi",
    "part_of_speech": "N",
    "meaning": "trận, hồi, cơn"
  },
  {
    "chinese": "震動",
    "level": "B2",
    "pinyin": "zhèndòng",
    "part_of_speech": "Vi",
    "meaning": "rung động"
  },
  {
    "chinese": "爭",
    "level": "B2",
    "pinyin": "zhēng",
    "part_of_speech": "V",
    "meaning": "tranh giành"
  },
  {
    "chinese": "爭論",
    "level": "B2",
    "pinyin": "zhēnglùn",
    "part_of_speech": "V",
    "meaning": "tranh luận"
  },
  {
    "chinese": "爭取",
    "level": "B2",
    "pinyin": "zhēngqŭ",
    "part_of_speech": "V",
    "meaning": "tranh thủ"
  },
  {
    "chinese": "睜",
    "level": "B2",
    "pinyin": "zhēng",
    "part_of_speech": "V",
    "meaning": "mở to (mắt)"
  },
  {
    "chinese": "徵求",
    "level": "B2",
    "pinyin": "zhēngqiú",
    "part_of_speech": "V",
    "meaning": "trưng cầu"
  },
  {
    "chinese": "正月",
    "level": "B2",
    "pinyin": "zhēngyuè",
    "part_of_speech": "N",
    "meaning": "tháng giêng"
  },
  {
    "chinese": "整",
    "level": "B2",
    "pinyin": "zhěng",
    "part_of_speech": "N",
    "meaning": "trọn, cả, chẵn"
  },
  {
    "chinese": "整",
    "level": "B2",
    "pinyin": "zhěng",
    "part_of_speech": "Vs",
    "meaning": "chỉnh đốn"
  },
  {
    "chinese": "整潔",
    "level": "B2",
    "pinyin": "zhěngjié",
    "part_of_speech": "Vs",
    "meaning": "ngăn nắp, gọn gàng"
  },
  {
    "chinese": "整數",
    "level": "B2",
    "pinyin": "zhěngshù",
    "part_of_speech": "N",
    "meaning": "số nguyên"
  },
  {
    "chinese": "正",
    "level": "B2",
    "pinyin": "zhèng",
    "part_of_speech": "Vs",
    "meaning": "tháng 1"
  },
  {
    "chinese": "正方形",
    "level": "B2",
    "pinyin": "zhèngfāngxíng",
    "part_of_speech": "N",
    "meaning": "hình vuông"
  },
  {
    "chinese": "正規",
    "level": "B2",
    "pinyin": "zhèngguī",
    "part_of_speech": "Vs-attr",
    "meaning": "chính quy"
  },
  {
    "chinese": "正好",
    "level": "B2",
    "pinyin": "zhènghăo",
    "part_of_speech": "Adv",
    "meaning": "vừa vặn, đúng lúc"
  },
  {
    "chinese": "正好",
    "level": "B2",
    "pinyin": "zhènghăo",
    "part_of_speech": "Vs",
    "meaning": "được dịp"
  },
  {
    "chinese": "正經",
    "level": "B2",
    "pinyin": "zhèngjing",
    "part_of_speech": "Vs",
    "meaning": "đoan trang"
  },
  {
    "chinese": "正面",
    "level": "B2",
    "pinyin": "zhèngmiàn",
    "part_of_speech": "N",
    "meaning": "mặt chính"
  },
  {
    "chinese": "政策",
    "level": "B2",
    "pinyin": "zhèngcè",
    "part_of_speech": "N",
    "meaning": "chính sách"
  },
  {
    "chinese": "政黨",
    "level": "B2",
    "pinyin": "zhèngdăng",
    "part_of_speech": "N",
    "meaning": "chính đảng"
  },
  {
    "chinese": "政府",
    "level": "B2",
    "pinyin": "zhèngfŭ",
    "part_of_speech": "N",
    "meaning": "chính phủ"
  },
  {
    "chinese": "證件",
    "level": "B2",
    "pinyin": "zhèngjiàn",
    "part_of_speech": "N",
    "meaning": "giấy chứng nhận"
  },
  {
    "chinese": "證據",
    "level": "B2",
    "pinyin": "zhèngjù",
    "part_of_speech": "N",
    "meaning": "chứng cứ"
  },
  {
    "chinese": "證明",
    "level": "B2",
    "pinyin": "zhèngmíng",
    "part_of_speech": "N",
    "meaning": "chứng nhận"
  },
  {
    "chinese": "證實",
    "level": "B2",
    "pinyin": "zhèngshí",
    "part_of_speech": "Vpt",
    "meaning": "chứng thực"
  },
  {
    "chinese": "症狀",
    "level": "B2",
    "pinyin": "zhèngzhuàng",
    "part_of_speech": "N",
    "meaning": "bệnh trạng"
  },
  {
    "chinese": "之",
    "level": "B2",
    "pinyin": "zhī",
    "part_of_speech": "N",
    "meaning": "hướng, tới"
  },
  {
    "chinese": "之",
    "level": "B2",
    "pinyin": "zhī",
    "part_of_speech": "Ptc",
    "meaning": "này, đó"
  },
  {
    "chinese": "之間",
    "level": "B2",
    "pinyin": "zhījiān",
    "part_of_speech": "N",
    "meaning": "giữa"
  },
  {
    "chinese": "之類",
    "level": "B2",
    "pinyin": "zhīlèi",
    "part_of_speech": "N",
    "meaning": "vân vân"
  },
  {
    "chinese": "支",
    "level": "B2",
    "pinyin": "zhī",
    "part_of_speech": "M",
    "meaning": "chống, đỡ"
  },
  {
    "chinese": "支持",
    "level": "B2",
    "pinyin": "zhīchí",
    "part_of_speech": "V",
    "meaning": "ủng hộ"
  },
  {
    "chinese": "支出",
    "level": "B2",
    "pinyin": "zhīchū",
    "part_of_speech": "Vpt",
    "meaning": "chi tiêu"
  },
  {
    "chinese": "支票",
    "level": "B2",
    "pinyin": "zhīpiào",
    "part_of_speech": "N",
    "meaning": "chi phiếu"
  },
  {
    "chinese": "支援",
    "level": "B2",
    "pinyin": "zhīyuán",
    "part_of_speech": "V",
    "meaning": "chi viện"
  },
  {
    "chinese": "直",
    "level": "B2",
    "pinyin": "zhí",
    "part_of_speech": "Adv",
    "meaning": "thẳng đứng"
  },
  {
    "chinese": "直接",
    "level": "B2",
    "pinyin": "zhíjiē",
    "part_of_speech": "Vs",
    "meaning": "trực tiếp"
  },
  {
    "chinese": "直線",
    "level": "B2",
    "pinyin": "zhíxiàn",
    "part_of_speech": "Adv",
    "meaning": "đường thẳng, trực tiếp"
  },
  {
    "chinese": "值",
    "level": "B2",
    "pinyin": "zhí",
    "part_of_speech": "Vst",
    "meaning": "giá trị"
  },
  {
    "chinese": "擲",
    "level": "B2",
    "pinyin": "zhí",
    "part_of_speech": "V",
    "meaning": "ném, quang"
  },
  {
    "chinese": "職位",
    "level": "B2",
    "pinyin": "zhíwèi",
    "part_of_speech": "N",
    "meaning": "chức vị"
  },
  {
    "chinese": "執行",
    "level": "B2",
    "pinyin": "zhíxíng",
    "part_of_speech": "V",
    "meaning": "chấp hành, thực thi"
  },
  {
    "chinese": "止",
    "level": "B2",
    "pinyin": "zhǐ",
    "part_of_speech": "Vs",
    "meaning": "dừng lại"
  },
  {
    "chinese": "只",
    "level": "B2",
    "pinyin": "zhĭ",
    "part_of_speech": "M",
    "meaning": "chỉ có"
  },
  {
    "chinese": "只是",
    "level": "B2",
    "pinyin": "zhĭshì",
    "part_of_speech": "Adv",
    "meaning": "chỉ là, chẳng qua là, nhưng"
  },
  {
    "chinese": "指",
    "level": "B2",
    "pinyin": "zhĭ",
    "part_of_speech": "V",
    "meaning": "chỉ điểm, chỉ ra"
  },
  {
    "chinese": "指出",
    "level": "B2",
    "pinyin": "zhĭchū",
    "part_of_speech": "Vpt",
    "meaning": "chỉ ra"
  },
  {
    "chinese": "指導",
    "level": "B2",
    "pinyin": "zhĭdăo",
    "part_of_speech": "V",
    "meaning": "chỉ đạo, hướng dẫn"
  },
  {
    "chinese": "指定",
    "level": "B2",
    "pinyin": "zhĭdìng",
    "part_of_speech": "V",
    "meaning": "chỉ định"
  },
  {
    "chinese": "指示",
    "level": "B2",
    "pinyin": "zhĭshì",
    "part_of_speech": "N",
    "meaning": "chỉ thị"
  },
  {
    "chinese": "指示",
    "level": "B2",
    "pinyin": "zhĭshì",
    "part_of_speech": "V",
    "meaning": "chỉ thị"
  },
  {
    "chinese": "指責",
    "level": "B2",
    "pinyin": "zhǐzé",
    "part_of_speech": "V",
    "meaning": "chỉ trích"
  },
  {
    "chinese": "紙張",
    "level": "B2",
    "pinyin": "zhĭzhāng",
    "part_of_speech": "N",
    "meaning": "giấy"
  },
  {
    "chinese": "治",
    "level": "B2",
    "pinyin": "zhì",
    "part_of_speech": "V",
    "meaning": "sắp đặt, sửa sang"
  },
  {
    "chinese": "至",
    "level": "B2",
    "pinyin": "zhì",
    "part_of_speech": "V",
    "meaning": "đến nỗi"
  },
  {
    "chinese": "制定",
    "level": "B2",
    "pinyin": "zhìdìng",
    "part_of_speech": "V",
    "meaning": "lập ra, đặt ra quy định"
  },
  {
    "chinese": "制止",
    "level": "B2",
    "pinyin": "zhìzhĭ",
    "part_of_speech": "V",
    "meaning": "ngăn cấm"
  },
  {
    "chinese": "志氣",
    "level": "B2",
    "pinyin": "zhìqì",
    "part_of_speech": "N",
    "meaning": "chí khí"
  },
  {
    "chinese": "志願",
    "level": "B2",
    "pinyin": "zhìyuàn",
    "part_of_speech": "N",
    "meaning": "chí hướng và nguyện vọng"
  },
  {
    "chinese": "秩序",
    "level": "B2",
    "pinyin": "zhìxù",
    "part_of_speech": "N",
    "meaning": "trật tự"
  },
  {
    "chinese": "製造",
    "level": "B2",
    "pinyin": "zhìzào",
    "part_of_speech": "V",
    "meaning": "chế tạo"
  },
  {
    "chinese": "製作",
    "level": "B2",
    "pinyin": "zhìzuò",
    "part_of_speech": "V",
    "meaning": "chế ra, làm ra"
  },
  {
    "chinese": "中",
    "level": "B2",
    "pinyin": "zhōng",
    "part_of_speech": "Vs-attr",
    "meaning": "trúng, bị, mắc phải"
  },
  {
    "chinese": "中級",
    "level": "B2",
    "pinyin": "zhōngjí",
    "part_of_speech": "N",
    "meaning": "trung cấp"
  },
  {
    "chinese": "中年",
    "level": "B2",
    "pinyin": "zhōngnián",
    "part_of_speech": "N",
    "meaning": "trung niên"
  },
  {
    "chinese": "中途",
    "level": "B2",
    "pinyin": "zhōngtú",
    "part_of_speech": "N",
    "meaning": "nửa đường, giữa đường"
  },
  {
    "chinese": "中央",
    "level": "B2",
    "pinyin": "zhōngyāng",
    "part_of_speech": "N",
    "meaning": "trung ương"
  },
  {
    "chinese": "中藥",
    "level": "B2",
    "pinyin": "zhōngyào",
    "part_of_speech": "N",
    "meaning": "thuốc Đông Y"
  },
  {
    "chinese": "腫",
    "level": "B2",
    "pinyin": "zhŏng",
    "part_of_speech": "Vs",
    "meaning": "sưng, phù"
  },
  {
    "chinese": "種類",
    "level": "B2",
    "pinyin": "zhŏnglèi",
    "part_of_speech": "N",
    "meaning": "chủng loại"
  },
  {
    "chinese": "種子",
    "level": "B2",
    "pinyin": "zhŏngzĭ",
    "part_of_speech": "N",
    "meaning": "hạt giống"
  },
  {
    "chinese": "種族",
    "level": "B2",
    "pinyin": "zhŏngzú",
    "part_of_speech": "N",
    "meaning": "chủng tộc"
  },
  {
    "chinese": "中",
    "level": "B2",
    "pinyin": "zhòng",
    "part_of_speech": "Vp",
    "meaning": "trúng"
  },
  {
    "chinese": "中毒",
    "level": "B2",
    "pinyin": "zhòngdú",
    "part_of_speech": "Vp-sep",
    "meaning": "trúng độc"
  },
  {
    "chinese": "重",
    "level": "B2",
    "pinyin": "zhòng",
    "part_of_speech": "Vst",
    "meaning": "nặng"
  },
  {
    "chinese": "重大",
    "level": "B2",
    "pinyin": "zhòngdà",
    "part_of_speech": "Vs",
    "meaning": "trọng đại, to lớn"
  },
  {
    "chinese": "重量",
    "level": "B2",
    "pinyin": "zhòngliàng",
    "part_of_speech": "N",
    "meaning": "trong lượng"
  },
  {
    "chinese": "重傷",
    "level": "B2",
    "pinyin": "zhòngshāng",
    "part_of_speech": "N",
    "meaning": "trọng thương"
  },
  {
    "chinese": "重傷",
    "level": "B2",
    "pinyin": "zhòngshāng",
    "part_of_speech": "Vs",
    "meaning": "bị thương nặng"
  },
  {
    "chinese": "重心",
    "level": "B2",
    "pinyin": "zhòngxīn",
    "part_of_speech": "N",
    "meaning": "trọng tâm"
  },
  {
    "chinese": "州",
    "level": "B2",
    "pinyin": "zhōu",
    "part_of_speech": "N",
    "meaning": "châu"
  },
  {
    "chinese": "周/週",
    "level": "B2",
    "pinyin": "zhōu",
    "part_of_speech": "M",
    "meaning": "tuần"
  },
  {
    "chinese": "周到",
    "level": "B2",
    "pinyin": "zhōudào",
    "part_of_speech": "Vs",
    "meaning": "chu đáo"
  },
  {
    "chinese": "粥",
    "level": "B2",
    "pinyin": "zhōu",
    "part_of_speech": "N",
    "meaning": "cháo"
  },
  {
    "chinese": "竹(子)",
    "level": "B2",
    "pinyin": "zhú(zi)",
    "part_of_speech": "N",
    "meaning": "cây trúc, tre"
  },
  {
    "chinese": "逐漸",
    "level": "B2",
    "pinyin": "zhújiàn",
    "part_of_speech": "Adv",
    "meaning": "dần dần"
  },
  {
    "chinese": "主辦",
    "level": "B2",
    "pinyin": "zhŭbàn",
    "part_of_speech": "V",
    "meaning": "người chịu trách nhiệm"
  },
  {
    "chinese": "主持",
    "level": "B2",
    "pinyin": "zhŭchí",
    "part_of_speech": "V",
    "meaning": "chủ trì"
  },
  {
    "chinese": "主觀",
    "level": "B2",
    "pinyin": "zhŭguān",
    "part_of_speech": "Vs",
    "meaning": "chủ quan"
  },
  {
    "chinese": "主角",
    "level": "B2",
    "pinyin": "zhŭjiăo/jué",
    "part_of_speech": "N",
    "meaning": "vai chính, nhân vật chính"
  },
  {
    "chinese": "主席",
    "level": "B2",
    "pinyin": "zhŭxí",
    "part_of_speech": "N",
    "meaning": "chủ tịch"
  },
  {
    "chinese": "主張",
    "level": "B2",
    "pinyin": "zhŭzhāng",
    "part_of_speech": "N",
    "meaning": "chủ trương"
  },
  {
    "chinese": "主張",
    "level": "B2",
    "pinyin": "zhŭzhāng",
    "part_of_speech": "V",
    "meaning": "cho rằng"
  },
  {
    "chinese": "祝賀",
    "level": "B2",
    "pinyin": "zhùhè",
    "part_of_speech": "V",
    "meaning": "chúc mừng"
  },
  {
    "chinese": "住院",
    "level": "B2",
    "pinyin": "zhùyuàn",
    "part_of_speech": "V-sep",
    "meaning": "nằm viện"
  },
  {
    "chinese": "住宅",
    "level": "B2",
    "pinyin": "zhùzhái",
    "part_of_speech": "N",
    "meaning": "nơi ở, chỗ ở"
  },
  {
    "chinese": "住址",
    "level": "B2",
    "pinyin": "zhùzhĭ",
    "part_of_speech": "N",
    "meaning": "chỗ ở"
  },
  {
    "chinese": "注射",
    "level": "B2",
    "pinyin": "zhùshè",
    "part_of_speech": "V",
    "meaning": "tiêm, chích"
  },
  {
    "chinese": "註冊",
    "level": "B2",
    "pinyin": "zhùcè",
    "part_of_speech": "V-sep",
    "meaning": "đăng ký"
  },
  {
    "chinese": "專家",
    "level": "B2",
    "pinyin": "zhuānjiā",
    "part_of_speech": "N",
    "meaning": "chuyên gia"
  },
  {
    "chinese": "專利",
    "level": "B2",
    "pinyin": "zhuānlì",
    "part_of_speech": "N",
    "meaning": "độc quyền"
  },
  {
    "chinese": "專門",
    "level": "B2",
    "pinyin": "zhuānmén",
    "part_of_speech": "Vs",
    "meaning": "chuyên biệt"
  },
  {
    "chinese": "專人",
    "level": "B2",
    "pinyin": "zhuānrén",
    "part_of_speech": "N",
    "meaning": "chuyên gia"
  },
  {
    "chinese": "專業",
    "level": "B2",
    "pinyin": "zhuānyè",
    "part_of_speech": "N",
    "meaning": "chuyên nghiệp"
  },
  {
    "chinese": "轉",
    "level": "B2",
    "pinyin": "zhuăn",
    "part_of_speech": "V",
    "meaning": "chuyển"
  },
  {
    "chinese": "轉變",
    "level": "B2",
    "pinyin": "zhuănbiàn",
    "part_of_speech": "Vpt",
    "meaning": "chuyển biến"
  },
  {
    "chinese": "轉播",
    "level": "B2",
    "pinyin": "zhuănbò",
    "part_of_speech": "V",
    "meaning": "tiếp sóng (phát thanh)"
  },
  {
    "chinese": "轉達",
    "level": "B2",
    "pinyin": "zhuăndá",
    "part_of_speech": "V",
    "meaning": "truyền đạt"
  },
  {
    "chinese": "轉告",
    "level": "B2",
    "pinyin": "zhuăngào",
    "part_of_speech": "V",
    "meaning": "chuyển lời"
  },
  {
    "chinese": "轉機",
    "level": "B2",
    "pinyin": "zhuănjī",
    "part_of_speech": "Vi",
    "meaning": "có thể xoay chuyển"
  },
  {
    "chinese": "轉身",
    "level": "B2",
    "pinyin": "zhuănshēn",
    "part_of_speech": "Vi",
    "meaning": "quay người lại"
  },
  {
    "chinese": "轉向",
    "level": "B2",
    "pinyin": "zhuănxiàng",
    "part_of_speech": "V",
    "meaning": "mất phương hướng"
  },
  {
    "chinese": "轉",
    "level": "B2",
    "pinyin": "zhuàn",
    "part_of_speech": "Vp",
    "meaning": "chuyển"
  },
  {
    "chinese": "賺",
    "level": "B2",
    "pinyin": "zhuàn",
    "part_of_speech": "V",
    "meaning": "kiếm (tiền)"
  },
  {
    "chinese": "裝飾",
    "level": "B2",
    "pinyin": "zhuāngshì",
    "part_of_speech": "V",
    "meaning": "trang sức"
  },
  {
    "chinese": "壯",
    "level": "B2",
    "pinyin": "zhuàng",
    "part_of_speech": "Vs",
    "meaning": "cường tráng"
  },
  {
    "chinese": "撞",
    "level": "B2",
    "pinyin": "zhuàng",
    "part_of_speech": "V",
    "meaning": "đụng, va chạm"
  },
  {
    "chinese": "狀況",
    "level": "B2",
    "pinyin": "zhuàngkuàng",
    "part_of_speech": "N",
    "meaning": "tình trạng"
  },
  {
    "chinese": "追",
    "level": "B2",
    "pinyin": "zhuī",
    "part_of_speech": "V",
    "meaning": "truy đuổi"
  },
  {
    "chinese": "准",
    "level": "B2",
    "pinyin": "zhŭn",
    "part_of_speech": "V",
    "meaning": "cho phép"
  },
  {
    "chinese": "准考證/証",
    "level": "B2",
    "pinyin": "zhŭnkăozhèng",
    "part_of_speech": "N",
    "meaning": "thẻ dự thi"
  },
  {
    "chinese": "準",
    "level": "B2",
    "pinyin": "zhŭn",
    "part_of_speech": "Vs",
    "meaning": "chuẩn, chuẩn mực"
  },
  {
    "chinese": "準確",
    "level": "B2",
    "pinyin": "zhŭnquè",
    "part_of_speech": "Vs",
    "meaning": "chính xác"
  },
  {
    "chinese": "捉",
    "level": "B2",
    "pinyin": "zhuō",
    "part_of_speech": "V",
    "meaning": "cầm, nắm, bắt"
  },
  {
    "chinese": "桌",
    "level": "B2",
    "pinyin": "zhuō",
    "part_of_speech": "M",
    "meaning": "bàn, mâm"
  },
  {
    "chinese": "資本",
    "level": "B2",
    "pinyin": "zīběn",
    "part_of_speech": "N",
    "meaning": "tư bản"
  },
  {
    "chinese": "資格",
    "level": "B2",
    "pinyin": "zīgé",
    "part_of_speech": "N",
    "meaning": "tư cách"
  },
  {
    "chinese": "資金",
    "level": "B2",
    "pinyin": "zījīn",
    "part_of_speech": "N",
    "meaning": "tiền vốn, quỹ"
  },
  {
    "chinese": "資訊",
    "level": "B2",
    "pinyin": "zīxùn",
    "part_of_speech": "N",
    "meaning": "thông tin"
  },
  {
    "chinese": "紫",
    "level": "B2",
    "pinyin": "zĭ",
    "part_of_speech": "Vs-attr",
    "meaning": "màu tím"
  },
  {
    "chinese": "子女",
    "level": "B2",
    "pinyin": "zĭnǚ",
    "part_of_speech": "N",
    "meaning": "con cái"
  },
  {
    "chinese": "字幕",
    "level": "B2",
    "pinyin": "zìmù",
    "part_of_speech": "N",
    "meaning": "phụ đề"
  },
  {
    "chinese": "字母",
    "level": "B2",
    "pinyin": "zìmŭ",
    "part_of_speech": "N",
    "meaning": "chữ cái"
  },
  {
    "chinese": "自來水",
    "level": "B2",
    "pinyin": "zìláishuĭ",
    "part_of_speech": "N",
    "meaning": "nước máy"
  },
  {
    "chinese": "自然",
    "level": "B2",
    "pinyin": "zìrán",
    "part_of_speech": "N",
    "meaning": "tự nhiên"
  },
  {
    "chinese": "自私",
    "level": "B2",
    "pinyin": "zìsī",
    "part_of_speech": "Vs",
    "meaning": "ích kỷ"
  },
  {
    "chinese": "自我",
    "level": "B2",
    "pinyin": "zìwǒ",
    "part_of_speech": "N",
    "meaning": "tự mình, bản thân"
  },
  {
    "chinese": "自信",
    "level": "B2",
    "pinyin": "zìxìn",
    "part_of_speech": "Vs",
    "meaning": "tự tin"
  },
  {
    "chinese": "自願",
    "level": "B2",
    "pinyin": "zìyuàn",
    "part_of_speech": "Vs",
    "meaning": "tự nguyện"
  },
  {
    "chinese": "自主",
    "level": "B2",
    "pinyin": "zìzhŭ",
    "part_of_speech": "Vs",
    "meaning": "tự chủ"
  },
  {
    "chinese": "總",
    "level": "B2",
    "pinyin": "zǒng",
    "part_of_speech": "Adv",
    "meaning": "tổng"
  },
  {
    "chinese": "總共",
    "level": "B2",
    "pinyin": "zǒnggòng",
    "part_of_speech": "Adv",
    "meaning": "tổng cộng"
  },
  {
    "chinese": "總理",
    "level": "B2",
    "pinyin": "zǒnglĭ",
    "part_of_speech": "N",
    "meaning": "thủ tướng"
  },
  {
    "chinese": "綜合",
    "level": "B2",
    "pinyin": "zònghé",
    "part_of_speech": "V",
    "meaning": "tổng hợp"
  },
  {
    "chinese": "綜合",
    "level": "B2",
    "pinyin": "zònghé",
    "part_of_speech": "Vs-attr",
    "meaning": "tổng hợp"
  },
  {
    "chinese": "走道",
    "level": "B2",
    "pinyin": "zǒudào",
    "part_of_speech": "N",
    "meaning": "vỉa hè, hành lang"
  },
  {
    "chinese": "走私",
    "level": "B2",
    "pinyin": "zǒusī",
    "part_of_speech": "V",
    "meaning": "buôn lậu"
  },
  {
    "chinese": "足",
    "level": "B2",
    "pinyin": "zú",
    "part_of_speech": "Vs",
    "meaning": "chân, giò"
  },
  {
    "chinese": "足以",
    "level": "B2",
    "pinyin": "zúyĭ",
    "part_of_speech": "Vaux",
    "meaning": "đủ để"
  },
  {
    "chinese": "組",
    "level": "B2",
    "pinyin": "zŭ",
    "part_of_speech": "V",
    "meaning": "tổ chức"
  },
  {
    "chinese": "組織",
    "level": "B2",
    "pinyin": "zŭzhī",
    "part_of_speech": "N",
    "meaning": "tổ chức, hệ thống"
  },
  {
    "chinese": "阻礙",
    "level": "B2",
    "pinyin": "zŭài",
    "part_of_speech": "V",
    "meaning": "ngăn cản"
  },
  {
    "chinese": "阻止",
    "level": "B2",
    "pinyin": "zŭzhĭ",
    "part_of_speech": "V",
    "meaning": "cản trở"
  },
  {
    "chinese": "祖國",
    "level": "B2",
    "pinyin": "zŭguó",
    "part_of_speech": "N",
    "meaning": "tổ quốc"
  },
  {
    "chinese": "鑽",
    "level": "B2",
    "pinyin": "zuān",
    "part_of_speech": "V",
    "meaning": "dùi, khoan"
  },
  {
    "chinese": "鑽石",
    "level": "B2",
    "pinyin": "zuànshí",
    "part_of_speech": "N",
    "meaning": "kim cương"
  },
  {
    "chinese": "罪",
    "level": "B2",
    "pinyin": "zuì",
    "part_of_speech": "N",
    "meaning": "tội"
  },
  {
    "chinese": "最少",
    "level": "B2",
    "pinyin": "zuìshăo",
    "part_of_speech": "Adv",
    "meaning": "ít nhất, tối thiểu"
  },
  {
    "chinese": "遵守",
    "level": "B2",
    "pinyin": "zūnshŏu",
    "part_of_speech": "Vst",
    "meaning": "tuân thủ"
  },
  {
    "chinese": "尊重",
    "level": "B2",
    "pinyin": "zūnzhòng",
    "part_of_speech": "Vst",
    "meaning": "tôn trọng"
  },
  {
    "chinese": "左右",
    "level": "B2",
    "pinyin": "zuŏyòu",
    "part_of_speech": "N",
    "meaning": "trái và phải, hai bên"
  },
  {
    "chinese": "左右",
    "level": "B2",
    "pinyin": "zuŏyòu",
    "part_of_speech": "V",
    "meaning": "khoảng"
  },
  {
    "chinese": "作",
    "level": "B2",
    "pinyin": "zuò",
    "part_of_speech": "V",
    "meaning": "làm, sáng tác"
  },
  {
    "chinese": "作家",
    "level": "B2",
    "pinyin": "zuòjiā",
    "part_of_speech": "N",
    "meaning": "tác giả"
  },
  {
    "chinese": "作為",
    "level": "B2",
    "pinyin": "zuòwéi",
    "part_of_speech": "Vst",
    "meaning": "hành động"
  },
  {
    "chinese": "作文",
    "level": "B2",
    "pinyin": "zuòwén",
    "part_of_speech": "N",
    "meaning": "bài văn"
  },
  {
    "chinese": "作文",
    "level": "B2",
    "pinyin": "zuòwén",
    "part_of_speech": "Vi",
    "meaning": "làm văn, viết văn"
  },
  {
    "chinese": "作用",
    "level": "B2",
    "pinyin": "zuòyòng",
    "part_of_speech": "N",
    "meaning": "ảnh hưởng, tác dụng"
  },
  {
    "chinese": "做",
    "level": "B2",
    "pinyin": "zuò",
    "part_of_speech": "V",
    "meaning": "làm ra, chế tạo ra"
  },
  {
    "chinese": "做客",
    "level": "B2",
    "pinyin": "zuòkè",
    "part_of_speech": "Vi",
    "meaning": "làm khách"
  }
];
