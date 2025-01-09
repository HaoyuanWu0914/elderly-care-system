// 示例数据
const peopleData = [
 {
        id: "001",
        name: "刘福生",
        gender: "男",
        age: 70,
        birthDate: "1953年4月",
        healthCondition: "患有高血压和冠心病，日常需服用降压药和心脏保养药物，偶尔会有心慌气短的症状，尤其是在劳累后。行动略显迟缓，但生活基本能够自理，天气好的时候会下楼散步锻炼。",
        livingEnvironment: "居住在没有电梯的5楼老式小区，房屋面积60平米，卫生间狭小潮湿，地面有高低差，卧室采光一般。",
        specialNeeds: "卫生间需要安装扶手，方便起身；地面进行防滑处理；考虑在卧室增加感应夜灯，保障夜间行动安全。",
        familyMembers: "儿子在外地工作，每年回家次数较少，平时由老伴照顾，老伴身体尚可，能协助处理日常琐事。",
        economicStatus: "老两口每月退休金共6000元左右，日常开销后略有结余，有一定储蓄，可承担中等规模的改造费用。",
        address: "黑龙江省哈尔滨市道外区XX街XX号"
    },
    {
        id: "002",
        name: "林秀梅",
        gender: "女",
        age: 73,
        birthDate: "1970年9月",
        healthCondition: "膝关节有严重的退行性病变，上下楼梯困难，需借助拐杖行走。同时还有腰椎间盘突出，时常感到腰部疼痛，睡眠质量一般，夜间会因疼痛醒来一两次。",
        livingEnvironment: "住在3楼步梯房，房屋面积70平米，客厅家具摆放杂乱，厨房台面过高，操作不便。",
        specialNeeds: "在楼梯和室内主要行走路线铺设防滑垫；改造厨房台面高度，使其更适合轮椅或弯腰操作；卧室更换舒适的床垫，缓解腰部压力。",
        familyMembers: "子女都在同城，女儿住得较近，每周会来看望2-3次，帮忙打扫卫生、购置生活用品；儿子工作繁忙，偶尔电话问候。",
        economicStatus: "退休金每月4000元，子女经济条件较好，经常补贴家用，改造费用基本无压力，更注重品质和舒适性。",
        address: "黑龙江省齐齐哈尔市建华区XX小区XX栋"
    },
    {
        id: "003",
        name: "张建国",
        gender: "男",
        age: 68,
        birthDate: "1955年7月",
        healthCondition: "视力下降明显，患有白内障，已做过一次眼部手术，但视力仍未完全恢复。听力也有所减退，和人交流时需要对方大声说话。身体其他方面还算健康，平时喜欢下棋，思维较为清晰。",
        livingEnvironment: "房屋位于一楼，带小院，面积80平米，但室内光线较暗，门窗密封性差，冬天寒冷。",
        specialNeeds: "室内增加明亮的照明灯具，尤其是阅读、下棋区域；更换密封性好的门窗，提升保暖性；为门铃、电话等设备增加闪光提示功能，方便老人知晓。",
        familyMembers: "老伴去世，独居，有一个孙子在上小学，周末儿子儿媳会带孙子过来团聚，平时主要靠邻居照应。",
        economicStatus: "退休金每月3500元，有少量存款，生活较为节俭，希望改造费用控制在合理范围内，注重实用性。",
        address: "黑龙江省牡丹江市东安区XX胡同XX号"
    },
    {
        id: "004",
        name: "王素珍",
        gender: "女",
        age: 76,
        birthDate: "1947年11月",
        healthCondition: "曾患过脑梗塞，经过康复治疗后，右侧肢体力量较弱，说话语速较慢且不太清晰。有轻微的糖尿病，饮食上需要注意糖分摄入，需定期去医院检查血糖和做康复训练。",
        livingEnvironment: "住在高层电梯房，面积90平米，卫生间马桶高度不合适，厨房储物空间不足，客厅与阳台有门槛，不利于轮椅通行。",
        specialNeeds: "调整马桶高度，方便老人起坐；扩充厨房储物，便于存放药品、特殊食材；拆除客厅与阳台门槛，保证行动路线顺畅，便于轮椅进出阳台晒太阳。",
        familyMembers: "与儿子一家同住，儿子儿媳工作忙碌，白天大多时间老人独自在家，孙女读初中，放学回家能陪老人说说话。",
        economicStatus: "退休金每月5000元，儿子儿媳收入可观，家庭经济状况良好，愿意为老人改造投入较多资金，追求高品质、全方位的改造。",
        address: "黑龙江省大庆市萨尔图区XX路XX小区"
    },
    {
        id: "005",
        name: "陈永强",
        gender: "男",
        age: 66,
        birthDate: "1957年2月",
        healthCondition: "有慢性支气管炎，每年秋冬季节病情容易加重，咳嗽咳痰频繁，需要随身携带止咳药物。肠胃功能不太好，经常胃胀、反酸，饮食上以清淡易消化食物为主，身形偏瘦。",
        livingEnvironment: "居住在老旧四合院的一间偏房，面积50平米，房间地面不平，取暖依靠煤炉，通风条件差。",
        specialNeeds: "对地面进行平整处理；改造取暖设施，安装环保、安全的电暖设备；改善通风系统，安装新风换气机，保障空气清新。",
        familyMembers: "独居，兄弟姐妹偶尔会来探望，身体不适时会请邻居帮忙买药，距离最近的社区医院步行约15分钟。",
        economicStatus: "退休金每月3000元，经济较为拮据，希望能申请政府相关适老化改造补贴，改造以解决基本需求为主。",
        address: "黑龙江省佳木斯市向阳区XX里XX号"
    },
    {
        id: "006",
        name: "马慧芳",
        gender: "女",
        age: 71,
        birthDate: "1952年6月",
        healthCondition: "甲状腺功能减退，需长期服用优甲乐补充甲状腺素，精神状态不太好，容易疲劳、嗜睡。同时还有骨质疏松，轻微外力作用下就可能导致骨折，日常活动非常小心。",
        livingEnvironment: "房屋为4层楼的中间层，面积65平米，卧室衣柜位置不合理，拿取衣物困难，卫生间没有淋浴座椅。",
        specialNeeds: "重新规划卧室衣柜布局，方便老人拿取衣物；卫生间安装淋浴座椅，地面做好防滑；在室内易碰撞区域安装防撞角、防撞条。",
        familyMembers: "与老伴同住，老伴身体也不太好，患有心脏病，两人相互照顾，子女都在国外，每年回国1-2次。",
        economicStatus: "老两口退休金合计7000元，子女定期汇款，经济较为宽裕，倾向于选择进口、高品质的适老化产品进行改造。",
        address: "黑龙江省鸡西市鸡冠区XX小区XX单元"
    },
    {
        id: "007",
        name: "赵德义",
        gender: "男",
        age: 74,
        birthDate: "1949年1月",
        healthCondition: "患过胃溃疡，已治愈，但饮食上仍需注意避免刺激性食物，否则会有胃部不适。心脏偶尔会早搏，情绪激动时症状会明显一些，平时喜欢养花种草，态较为平和。",
        livingEnvironment: "住在独栋小院，面积100平米，院子有台阶，室内地板为光滑大理石，厨房与餐厅距离较远。",
        specialNeeds: "在院子台阶处增设斜坡，方便轮椅出入；更换室内地板为防滑材质；优化厨房与餐厅布局，缩短送餐距离，或考虑设置餐车轨道。",
        familyMembers: "子女已成家立业，住在附近，每天都会有人过来看看，帮忙料理家务、照料花草，孙子孙女常来玩耍。",
        economicStatus: "退休金每月4500元，子女经济条件不错，经常给予经济支持，改造预算充足，希望打造温馨、便捷且美观的居住环境。",
        address: "黑龙江省绥化市北林区XX街XX号"
    },
    {
        id: "008",
        name: "孙玉琴",
        gender: "女",
        age: 78,
        birthDate: "1945年8月",
        healthCondition: "身体整体较为虚弱，免疫力低下，容易感冒发烧。牙齿脱落较多，影响正常饮食，只能吃一些软烂的食物。记忆力严重减退，经常忘记近期发生的事情，但对过去的事情印象深刻。",
        livingEnvironment: "居住在老年公寓的一间标准房，面积40平米，房间内家具简单陈旧，没有智能呼叫设备。",
        specialNeeds: "更换适合老人身体状况的软质家具；安装智能呼叫系统，方便紧急求助；在显眼位置设置备忘录、日历等记忆辅助工具。",
        familyMembers: "无子女，侄子侄女逢年过节会来探望，平时由老年公寓工作人员照顾日常起居、饮食。",
        economicStatus: "退休金每月3000元，主要依靠积蓄支付老年公寓费用，改造资金有限，希望借助社会公益项目或政府补贴完成必要改造。",
        address: "黑龙江省黑河市爱辉区XX老年公寓XX房间"
    },
    {
        id: "009",
        name: "李长海",
        gender: "男",
        age: 69,
        birthDate: "1954年12月",
        healthCondition: "患有前列腺增生，夜尿频繁，每晚起夜3-4次，影响睡眠质量。有轻微的高血脂，在饮食上控制油脂摄入，坚持每天散步锻炼，体重维持在正常范围。",
        livingEnvironment: "住在7楼电梯房，面积75平米，卧室与卫生间距离较远，夜间行走不便，卫生间灯光较暗。",
        specialNeeds: "在卧室到卫生间的路线上安装夜灯，保证夜间照明；卫生间增加明亮的辅助照明；考虑在卧室配备小型冰箱，方便存放饮用水。",
        familyMembers: "老伴去世，与儿子儿媳同住，儿子工作忙经常加班，儿媳照顾孩子兼顾老人，有些力不从心。",
        economicStatus: "退休金每月4000元，儿子儿媳收入中等，家庭经济压力较大，希望改造费用性价比高，能切实解决老人生活不便问题。",
        address: "黑龙江省伊春市伊美区XX楼XX单元"
    },
    {
        id: "010",
        name: "周桂英",
        gender: "女",
        age: 75,
        birthDate: "1948年3月",
        healthCondition: "有风湿性关节炎，双手关节变形，握力减弱，日常生活如穿衣、系扣子等动作较为吃力。听力严重下降，需佩戴助听器才能正常与人交流，情绪上有时会因身体不适而略显烦躁。",
        livingEnvironment: "房屋位于2楼，面积60平米，门锁为老式机械锁，操作不便，客厅沙发较低，起身困难。",
        specialNeeds: "更换智能门锁，方便老人开门；更换合适高度的沙发，使增加沙发扶手，便于借力起身；在室内关键位置设置扩音设备，方便老人与家人沟通。",
        familyMembers: "子女都在外地，老伴身体还行，两人相互扶持，社区志愿者每周会上门帮忙打扫一次卫生、陪老人聊天。",
        economicStatus: "退休金每月3500元，子女偶尔寄钱，经济不算宽裕，倾向于选择经济实惠的改造方案。",
        address: "黑龙江省七台河市桃山区XX小区XX栋"
    },
    {
        id: "011",
        name: "吴强",
        gender: "男",
        age: 45,
        birthDate: "1978年5月",
        healthCondition: "因长期伏案工作，颈椎和腰椎问题突出，经常脖颈僵硬、腰部酸痛，影响日常活动。视力也有所下降，有轻微近视和散光，需佩戴眼镜。",
        livingEnvironment: "居住在现代高层小区，房屋面积90平米，室内装修风格简约，家具多为直角硬边，客厅采光充足但缺乏遮光设施。",
        specialNeeds: "调整办公桌椅高度，配备符合人体工程学的靠垫；在客厅窗户安装可调节遮光窗帘，保护视力；将家具直角改为圆角，防止磕碰受伤。",
        familyMembers: "妻子在医院工作，经常值夜班，孩子上初中，学业繁忙，平时大多时间自己照顾自己，父母偶尔会来小住。",
        economicStatus: "夫妻二人月收入合计15000元，有房贷、车贷压力，希望改造费用控制在5000元以内，注重改善工作和生活舒适度。",
        address: "黑龙江省双鸭山市尖山区XX小区XX号楼"
    },
    {
        id: "012",
        name: "陈悦",
        gender: "女",
        age: 50,
        birthDate: "1973年10月",
        healthCondition: "患有关节炎，尤其是手指关节，在阴雨天或寒冷季节疼痛加剧，日常精细动作如扣纽扣、握笔有些困难。同时有轻度耳鸣，睡眠偶尔受影响。",
        livingEnvironment: "住在6楼电梯房，面积80平米，卫生间干湿不分离，容易滑倒，卧室衣柜门为推拉式，开启费力。",
        specialNeeds: "卫生间进行干湿分离改造，地面防滑；更换卧室衣柜门为平开式，方便开关；在卧室放置助眠设备，缓解耳鸣对睡眠的影响。",
        familyMembers: "丈夫在外地出差较多，孩子上大学住校，自己独居，闺蜜住在同一小区，经常互相照应。",
        economicStatus: "月收入8000元，有一定储蓄，可承担10000元左右的改造费用，追求舒适、个性化的居住环境。",
        address: "黑龙江省鹤岗市工农区XX小区XX单元"
    },
    {
        id: "013",
        name: "刘海波",
        gender: "男",
        age: 48,
        birthDate: "1975年3月",
        healthCondition: "身体较为肥胖，伴有高血压前期症状，需控制饮食和加强锻炼。有轻微脂肪肝，肠胃消化功能一般，容易积食。",
        livingEnvironment: "房屋为4层楼的顶楼，带阁楼，面积120平米，楼梯陡峭，上下楼吃力，厨房空间小，储物不足。",
        specialNeeds: "改造楼梯坡度，增加扶手；扩充厨房空间，优化储物布局，方便存放健康食材；在室内合适位置设置健身区域，配备简单健身器材。",
        familyMembers: "妻子是全职太太，在家照顾他和孩子，孩子上小学，活泼好动，家庭氛围较活跃。",
        economicStatus: "家庭月收入12000元，有一定经济基础，愿意为健康生活投入资金，改造预算在20000元左右，希望打造适合锻炼、生活便利的空间。",
        address: "黑龙江省大兴安岭地区加格达奇区XX街XX号"
    },
    {
        id: "014",
        name: "王丽华",
        gender: "女",
        age: 55,
        birthDate: "1968年8月",
        healthCondition: "早年因意外腿部受伤，虽已痊愈但留下后遗症，走路略有跛行，不能长时间站立或行走。听力正常，视力轻度老花。",
        livingEnvironment: "住在一层带花园的房子，面积70平米，花园与室内地面有高差，卫生间马桶周围空间狭窄。",
        specialNeeds: "在花园与室内连接处设置无障碍斜坡；拓宽卫生间马桶周围空间，方便转身；在室内经常活动区域设置休息座椅。",
        familyMembers: "丈夫退休在家，与她相伴，儿子儿媳在隔壁小区居住，每天过来吃饭，帮忙料理家务。",
        economicStatus: "退休金每月4500元，家庭整体经济状况稳定，改造预算10000-15000元，注重实用性与美观性结合。",
        address: "黑龙江省绥芬河市XX街XX号"
    },
    {
        id: "015",
        name: "张伟",
        gender: "男",
        age: 42,
        birthDate: "1981年12月",
        healthCondition: "工作压力大，经常失眠、焦虑，有轻微神经衰弱症状。身体素质尚可，但缺乏锻炼，耐力不足。",
        livingEnvironment: "居住在单身公寓，面积45平米，空间狭小，家具紧凑，没有专门的休闲健身空间。",
        specialNeeds: "重新规划室内空间，打造小型休闲健身角落，如铺设瑜伽垫、安装壁挂式健身器材；改善室内照明，营造舒缓氛围，辅助睡眠。",
        familyMembers: "父母在老家，自己单身独居，朋友较多，周末经常一起聚会、运动。",
        economicStatus: "月收入10000元，无房贷、车贷压力，可支配收入较高，改造预算8000元左右，追求时尚、简约且功能性强的改造。",
        address: "黑龙江省抚远市XX公寓XX室"
    },
    {
        id: "016",
        name: "王素珍",
        gender: "女",
        age: 76,
        birthDate: "1947年11月",
        healthCondition: "曾患过脑梗塞，经过康复治疗后，右侧肢体力量较弱，说话语速较慢且不太清晰。有轻微的糖尿病，饮食上需要注意糖分摄入，需定期去医院检查血糖和做康复训练。",
        livingEnvironment: "住在高层电梯房，面积90平米，卫生间马桶高度不合适，厨房储物空间不足，客厅与阳台有门槛，不利于轮椅通行。",
        specialNeeds: "调整马桶高度，方便老人起坐；扩充厨房储物，便于存放药品、特殊食材；拆除客厅与阳台门槛，保证行动路线顺畅，便于轮椅进出阳台晒太阳。",
        familyMembers: "与儿子一家同住，儿子儿媳工作忙碌，白天大多时间老人独自在家，孙女读初中，放学回家能陪老人说说话。",
        economicStatus: "退休金每月5000元，儿子儿媳收入可观，家庭经济状况良好，愿意为老人改造投入较多资金，追求高品质、全方位的改造。",
        address: "黑龙江省大庆市萨尔图区XX路XX小区"
    },
    {
        id: "017",
        name: "陈永强",
        gender: "男",
        age: 66,
        birthDate: "1957年2月",
        healthCondition: "有慢性支气管炎，每年秋冬季节病情容易加重，咳嗽咳痰频繁，需要随身携带止咳药物。肠胃功能不太好，经常胃胀、反酸，饮食上以清淡易消化食物为主，身形偏瘦。",
        livingEnvironment: "居住在老旧四合院的一间偏房，面积50平米，房间地面不平，取暖依靠煤炉，通风条件差。",
        specialNeeds: "对地面进行平整处理；改造取暖设施，安装环保、安全的电暖设备；改善通风系统，安装新风换气机，保障空气清新。",
        familyMembers: "独居，兄弟姐妹偶尔会来探望，身体不适时会请邻居帮忙买药，距离最近的社区医院步行约15分钟。",
        economicStatus: "退休金每月3000元，经济较为拮据，希望能申请政府相关适老化改造补贴，改造以解决基本需求为主。",
        address: "黑龙江省佳木斯市向阳区XX里XX号"
    },
    {
        id: "018",
        name: "马慧芳",
        gender: "女",
        age: 71,
        birthDate: "1952年6月",
        healthCondition: "甲状腺功能减退，需长期服用优甲乐补充甲状腺素，精神状态不太好，容易疲劳、嗜睡。同时还有骨质疏松，轻微外力作用下就可能导致骨折，日常活动非常小心。",
        livingEnvironment: "房屋为4层楼的中间层，面积65平米，卧室衣柜位置不合理，拿取衣物困难，卫生间没有淋浴座椅。",
        specialNeeds: "重新规划卧室衣柜布局，方便老人拿取衣物；卫生间安装淋浴座椅，地面做好防滑；在室内易碰撞区域安装防撞角、防撞条。",
        familyMembers: "与老伴同住，老伴身体也不太好，患有心脏病，两人相互照顾，子女都在国外，每年回国1-2次。",
        economicStatus: "老两口退休金合计7000元，子女定期汇款，经济较为宽裕，倾向于选择进口、高品质的适老化产品进行改造。",
        address: "黑龙江省鸡西市鸡冠区XX小区XX单元"
    },
    {
        id: "019",
        name: "赵德义",
        gender: "男",
        age: 74,
        birthDate: "1949年1月",
        healthCondition: "患过胃溃疡，已治愈，但饮食上仍需注意避免刺激性食物，否则会有胃部不适。心脏偶尔会早搏，情绪激动时症状会明显一些，平时喜欢养花种草，态较为平和。",
        livingEnvironment: "住在独栋小院，面积100平米，院子有台阶，室内地板为光滑大理石，厨房与餐厅距离较远。",
        specialNeeds: "在院子台阶处增设斜坡，方便轮椅出入；更换室内地板为防滑材质；优化厨房与餐厅布局，缩短送餐距离，或考虑设置餐车轨道。",
        familyMembers: "子女已成家立业，住在附近，每天都会有人过来看看，帮忙料理家务、照料花草，孙子孙女常来玩耍。",
        economicStatus: "退休金每月4500元，子女经济条件不错，经常给予经济支持，改造预算充足，希望打造温馨、便捷且美观的居住环境。",
        address: "黑龙江省绥化市北林区XX街XX号"
    },
    {
        id: "020",
        name: "孙玉琴",
        gender: "女",
        age: 78,
        birthDate: "1945年8月",
        healthCondition: "身体整体较为虚弱，免疫力低下，容易感冒发烧。牙齿脱落较多，影响正常饮食，只能吃一些软烂的食物。记忆力严重减退，经常忘记近期发生的事情，但对过去的事情印象深刻。",
        livingEnvironment: "居住在老年公寓的一间标准房，面积40平米，房间内家具简单陈旧，没有智能呼叫设备。",
        specialNeeds: "更换适合老人身体状况的软质家具；安装智能呼叫系统，方便紧急求助；在显眼位置设置备忘录、日历等记忆辅助工具。",
        familyMembers: "无子女，侄子侄女逢年过节会来探望，平时由老年公寓工作人员照顾日常起居、饮食。",
        economicStatus: "退休金每月3000元，主要依靠积蓄支付老年公寓费用，改造资金有限，希望借助社会公益项目或政府补贴完成必要改造。",
        address: "黑龙江省黑河市爱辉区XX老年公寓XX房间"
    }   
];

// 搜索功能
function searchPeople() {
    const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
    const searchType = document.getElementById('searchType').value;
    const resultsContainer = document.getElementById('searchResults');
    const resultCount = document.getElementById('resultCount');
    
    let results = [];
    
    if (searchInput === '') {
        // 如果搜索框为空，显示所有数据
        results = peopleData;
    } else {
        results = peopleData.filter(person => {
            if (searchType === 'all') {
                // 在所有字段中搜索
                return Object.values(person).some(value => 
                    String(value).toLowerCase().includes(searchInput)
                );
            } else {
                // 在特定字段中搜索
                const fieldValue = String(person[searchType]).toLowerCase();
                return fieldValue.includes(searchInput);
            }
        });
    }
    
    // 更新结果计数
    resultCount.textContent = `找到 ${results.length} 条结果`;
    
    // 清空结果容器
    resultsContainer.innerHTML = '';
    
    if (results.length === 0) {
        resultsContainer.innerHTML = '<div class="no-results">未找到匹配的结果</div>';
        return;
    }
    
    // 显示结果
    results.forEach(person => {
        const card = document.createElement('div');
        card.className = 'person-card';
        card.innerHTML = `
            <div class="card-content">
                <h3>${person.name}</h3>
                <p>性别：${person.gender}</p>
                <p>年龄：${person.age}岁</p>
                <p>住址：${person.address}</p>
                <button class="detail-btn" onclick="showDetails('${person.id}')">查看详情</button>
            </div>
        `;
        resultsContainer.appendChild(card);
    });
}

// 显示详细信息
function showDetails(id) {
    const person = peopleData.find(p => p.id === id);
    const modal = document.getElementById('detailModal');
    const details = document.getElementById('personDetails');
    
    if (person) {
        details.innerHTML = `
            <div class="detail-content">
                <p><strong>姓名：</strong><span>${person.name}</span></p>
                <p><strong>性别：</strong><span>${person.gender}</span></p>
                <p><strong>年龄：</strong><span>${person.age}岁</span></p>
                <p><strong>出生年月：</strong><span>${person.birthDate}</span></p>
                <p><strong>身体状况：</strong><span>${person.healthCondition}</span></p>
                <p><strong>居住环境：</strong><span>${person.livingEnvironment}</span></p>
                <p><strong>特殊需求：</strong><span>${person.specialNeeds}</span></p>
                <p><strong>家庭成员：</strong><span>${person.familyMembers}</span></p>
                <p><strong>经济状况：</strong><span>${person.economicStatus}</span></p>
                <p><strong>住址：</strong><span>${person.address}</span></p>
            </div>
        `;
        modal.style.display = 'block';
    }
}

// 关闭模态框
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('detailModal').style.display = 'none';
});

// 点击模态框外部关闭
window.addEventListener('click', function(event) {
    const modal = document.getElementById('detailModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// 页面加载时显示所有数据
window.addEventListener('load', function() {
    searchPeople();
});

// 搜索按钮点击事件
document.getElementById('searchBtn').addEventListener('click', searchPeople);

// 搜索框回车事件
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchPeople();
    }
});