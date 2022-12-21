// Bài tập 1: Tiền lương nhân viên
document.getElementById("total").onclick = function () {
  let dayWork = +document.getElementById("dayWork").value;
  let salary = +document.getElementById("salary").value;

  let result = dayWork * salary;

  document.getElementById("result-wrapper").style.display = "block";
  document.getElementById("result").innerHTML = "VND : " + result;
};

// Bài tập 2: Tính trung bình 5 số thực
document.getElementById("trungbinh").onclick = function () {
  let realNumber1 = +document.getElementById("realNumber1").value;
  let realNumber2 = +document.getElementById("realNumber2").value;
  let realNumber3 = +document.getElementById("realNumber3").value;
  let realNumber4 = +document.getElementById("realNumber4").value;
  let realNumber5 = +document.getElementById("realNumber5").value;

  let result2 =
    (realNumber1 + realNumber2 + realNumber3 + realNumber4 + realNumber5) / 5;

  document.getElementById("result2-wrapper").style.display = "block";
  document.getElementById("result2").innerHTML =
    "tổng trung bình 5 số =" + result2;
};

//Bài tập 3: Quy đổi tiền
document.getElementById("change").onclick = function () {
  const number = 23500;
  let changeUsd = +document.getElementById("changeUsd").value;
  let result3 = changeUsd * number;
  document.getElementById("result3-wrapper").style.display = "block";
  document.getElementById("result3").innerHTML =
    "Số tiền đã quy đổi = " +
    new Intl.NumberFormat("vn-VN").format(result3) +
    " VND";
};

//Bài tập 4:
document.getElementById("calculate").onclick = function () {
  let long = +document.getElementById("long").value;
  let width = +document.getElementById("width").value;

  let result1 = long * width;

  let result2 = (long + width) * 2;
  document.getElementById("result4-wrapper").style.display = "block";
  document.getElementById("results1").innerHTML = "Diện tích HCN  :" + result1;
  document.getElementById("results2").innerHTML = "Chu vi HCN  :" + result2;
};

//Bài tập 5:
document.getElementById("total2").onclick = function () {
  let Chuso = +document.getElementById("Chuso").value;
  let result5 = 0;

  result5 = Chuso % 10;

  Chuso = Math.floor(Chuso / 10);

  result5 += Chuso;

  document.getElementById("result5-wrapper").style.display = "block";
  document.getElementById("result5").innerHTML = "Tổng 2 ký số  = " + result5;
};
