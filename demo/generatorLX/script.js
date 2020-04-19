var randomsNumber = function(x) {
   return Math.floor(Math.random() * x.length);
};

var one = function() {
	score++;
	document.querySelector('.imgResult').style.visibility = "visible";
	document.querySelector('.imgResult img').style.visibility = "visible";
	document.querySelector('.imgResult a').style.visibility = "visible";
	document.querySelector('.infoResult').style.visibility = "visible";
	document.querySelector('.viewImg').style.visibility = "visible";
	document.querySelector('.result').style.visibility = "hidden";
	document.querySelector('.score').textContent = "Сообщение по счёту: " + score;
	for (var i = 0; i < 10; i++) {
		if (score === 1) {
			document.querySelector('.infoResult p').textContent = greetingResult;
		} else if (score === 2 && (document.querySelector(".womanCheck").checked)) {
			document.querySelector('.infoResult p').textContent = twoResultW;
		} else if (score === 2 && (document.querySelector(".manCheck").checked)) {
			document.querySelector('.infoResult p').textContent = twoResultM;
		} else if (score === 3) {
			document.querySelector('.infoResult p').textContent = threeResult;
		} else if (score === 4) {
			document.querySelector('.infoResult p').textContent = fourResult;
		} else if (score === 5) {
			document.querySelector('.infoResult p').textContent = fiveResult;
		} else if (score === 6) {
			document.querySelector('.infoResult p').textContent = sixResult;
		} else if (score === 7) {
			document.querySelector('.infoResult p').textContent = sevenResult;
		} else if (score === 8) {
			document.querySelector('.infoResult p').textContent = eightResult;
		} else if (score === 9) {
			document.querySelector('.infoResult p').textContent = nineResult;
		} else if (score === 10) {
			document.querySelector('.infoResult p').textContent = tenResult;
		}
	}
	if (document.querySelector(".womanCheck").checked) {
		document.querySelector('.imgMW').src = "imgWoman/"+ imgResult +".jpg";
		document.querySelector(".manCheck").disabled = "true";
		document.querySelector('.downloadIMG').href = "imgWoman/"+ imgResult +".jpg";
		document.querySelector('.viewImg').href = "imgWoman/"+ imgResult +".jpg";
	} else if (document.querySelector(".manCheck").checked) {
		document.querySelector('.imgMW').src = "imgMan/"+ imgResult +".jpg";
		document.querySelector(".womanCheck").disabled = "true";
		document.querySelector('.downloadIMG').href = "imgMan/"+ imgResult +".jpg";
		document.querySelector('.viewImg').href = "imgMan/"+ imgResult +".jpg";
	}
	if (score > 10) {
		document.querySelector('.popup').style.visibility = "visible";
	}
}

var womanName = ['Августа', 'Авдотья', 'Аврора', 'Агата', 'Алёна', 'Александра', 'Алёна', 'Алина', 'Алиса', 'Алла', 'Альбина', 'Анастасия', 'Ангелина', 'Анжела', 'Анна', 'Антонина', 'Арина', 'Богдана','Валентина', 'Валерия', 'Варвара', 'Василиса', 'Венера', 'Вера', 'Вероника', 'Веселина', 'Веста', 'Викторина', 'Виталия', 'Влада', 'Владислава', 'Власта', 'Галина', 'Глория', 'Дана', 'Дарья', 'Дарина', 'Дарьяна', 'Джульетта', 'Дина', 'Ева', 'Евгения', 'Евдокия', 'Екатерина', 'Елена', 'Елизавета', 'Ефимия', 'Ждана', 'Жанна', 'Зарина', 'Зинаида', 'Злата', 'Зоя', 'Иванна', 'Инга', 'Инесса', 'Иоанна', 'Ипатия', 'Ирина', 'Каролина', 'Катерина', 'Кира', 'Кирилла', 'Клавдия', 'Клара', 'Клариса', 'Ксения', 'Кристина', 'Лада', 'Лариса', 'Леонида', 'Леся', 'Лидия', 'Лилия', 'Лина', 'Людмила', 'Майя', 'Маргарита', 'Марина', 'Мария', 'Мари', 'Марта', 'Марфа', 'Милослава', 'Надежда', 'Настасья', 'Наталья', 'Нелли', 'Неонила', 'Ника', 'Нина', 'Нинель', 'Нора', 'Оксана', 'Олеся', 'Ольга', 'Полина','Раиса', 'Рената', 'Регина', 'Роза', 'Ростислава', 'Руслана', 'Сабина', 'Светослава', 'Светлана', 'Слава', 'Снежана',  'Софья', 'Стелла',  'Стефания', 'Таисия', 'Тамара', 'Татьяна',  'Кристина', 'Эльза', 'Эльвира', 'Элеонора', 'Эльмира', 'Юлия', 'Ярослава'];
var manName = ['Александр', 'Алексей', 'Альберт', 'Анатолий', 'Андрей', 'Антон', 'Аристарх', 'Аркадий', 'Арсений', 'Артём', 'Артур', 'Афанасий', 'Богдан', 'Борис', 'Вадим', 'Валентин', 'Валерий', 'Валерий', 'Вениамин', 'Виктор', 'Виталий', 'Владимир', 'Владислав', 'Вячеслав', 'Геннадий', 'Георгий', 'Герман', 'Глеб', 'Григорий', 'Даниил', 'Денис', 'Дмитрий', 'Евгений', 'Егор', 'Елисей', 'Емельян', 'Ефим', 'Иван', 'Игнат', 'Игорь', 'Илья', 'Лев', 'Леонид', 'Леон', 'Макар', 'Максим', 'Марк', 'Матвей', 'Мирослав', 'Михаил', 'Никита', 'Николай', 'Олег', 'Павел', 'Пётр', 'Роберт', 'Роман', 'Рустам', 'Святослав', 'Семён', 'Сергей', 'Станислав', 'Степан', 'Тарас', 'Тимофей', 'Трофим', 'Фёдор', 'Филипп', 'Эдуард', 'Эрнест', 'Юрий', 'Ярослав'];
var years = [1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990];
var mounth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, '01', '02', '03', '04', '05', '06', '07', '08', '09'];
var day = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, '01', '02', '03', '04', '05', '06', '07', '08', '09'];
var greeting = ['Здравствуйте', 'здравствуйте', 'Здравствуйте, можно у вас спросить?', 'здравствуйте, можно у вас спросить?', 'Здравствуйте. Можно у вас спросить?', 'здравствуйте. можно у вас спросить?', 'здравствуйте можно у вас спросить?' , 'Здравствуйте, вы делаете раслады бесплатно?','Здравствуйте. Вы делаете раслады бесплатно?', 'здравствуйте вы делаете раслады бесплатно?', 'здравствуйте. вы делаете раслады бесплатно?' , 'Здравствуйте, вы только гадаете?', 'здравствуйте, вы только гадаете?', 'Здравствуйте. Вы только гадаете?','здравствуйте Вы только гадаете?' , 'Здравствуйте, вы умеете смотреть в ситуацию без карт?','здравствуйте, вы умеете смотреть в ситуацию без карт?','Здравствуйте, Вы умеете смотреть в ситуацию без карт?', 'Здравствуйте. Вы умеете смотреть в ситуацию без карт?','здравствуйте вы умеете смотреть в ситуацию без карт', 'Здравствуйте, вы оказываете услуги бесплатно?', 'здравствуйте, вы оказываете услуги бесплатно?', 'Здравствуйте. Вы оказываете услуги бесплатно?','здравствуйте вы оказываете услуги бесплатно?', 'Вы гадаете?', 'вы гадаете?', 'Вы не заняты сейчас?', 'вы не заняты сейчас?', 'Здравствуйте, вы не заняты сейчас?', 'здравствуйте, вы не заняты сейчас?', 'Здравствуйте. Вы не заняты сейчас?', 'Здравствуйте. Вы не заняты сейчас?', 'Здравствуйте, вы очень сейчас заняты? Можно спросить?', 'Здравствуйте. Вы очень сейчас заняты? Можно спросить?'];
var womanResult = womanName[randomsNumber(womanName)], manResult = manName[randomsNumber(manName)];
var twoM = ['Меня зовут '+ manResult];
var twoW = ['Меня зовут '+ womanResult];
var three = [];
var four = [];
var five = [];
var six = [];
var seven = [];
var eight = [];
var nine = [];
var ten = ['Спасибо вам большое.', 'спасибо вам большое', 'Спасибо вам большое', 'Спасибо за консультацийю','Спасибо за консультацию.', 'спасибо за консультацию', 'Спасибо, вы мне помогли.', 'Спасибо. Вы мне помогли)', 'спасибо, вы мне помогли)', 'спасибо вы мне помогли', 'спасибо вы мне помогли.', 'Спасибо вам', 'Спасибо', 'спасибо вам', 'спасибо', 'Спасибо.', 'спасибо.', 'Благодарю за консультацию', 'Благодарствую за консультацию', 'Благодарю', 'Благодарю за консультацию.', 'Благодарствую за консультацию.', 'Благодарю.', 'благодарю за консультацию', 'благодарствую за консультацию', 'благодарю', 'благодарю за консультацию.', 'благодарствую за консультацию.', 'благодарю.'];
var img = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
var score = 0;



var yearsResult = years[randomsNumber(years)], dayResult = day[randomsNumber(day)],
mounthResult = mounth[randomsNumber(mounth)], greetingResult = greeting[randomsNumber(greeting)], twoResultM = twoM[randomsNumber(twoM)], twoResultW = twoW[randomsNumber(twoW)], threeResult = three[randomsNumber(three)],
fourResult = four[randomsNumber(four)], fiveResult = five[randomsNumber(five)], sixResult = six[randomsNumber(six)], sevenResult = seven[randomsNumber(seven)],
eightResult = eight[randomsNumber(eight)], nineResult = nine[randomsNumber(nine)], tenResult = ten[randomsNumber(ten)], imgResult = img[randomsNumber(img)]; 



/*CLICK*/
var clicks = document.querySelector('.btnResult');
clicks.addEventListener('click', function() {
	one();
});

var repeat = document.querySelector('.repeat');
repeat.addEventListener('click', function() {
	location.reload();
});

var reload = document.querySelector('.reload');
reload.addEventListener('click', function() {
	location.reload();
});
/*CLICK*/