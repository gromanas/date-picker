const DatePickerComponent = require('../components/date_picker_component');

const androidDatePickerMonth = (month) => {
  const datePickerComponent = new DatePickerComponent();

  const mapMonths = new Map([
    ['January', 1],
    ['February', 2],
    ['March', 3],
    ['April', 4],
    ['May', 5],
    ['June', 6],
    ['July', 7],
    ['August', 8],
    ['September', 9],
    ['October', 10],
    ['November', 11],
    ['December', 12],
  ]);

  const currentMonth = datePickerComponent
    .getDatePickerAndroidMonth()
    .getAttribute('content-desc')
    .match(/([A-Z])\w+/)[0];
  const expectedMonth = month;

  const currentMonthIndex = mapMonths.get(currentMonth);
  const expectedMonthIndex = mapMonths.get(expectedMonth);

  const getMonthBtn =
    currentMonthIndex > expectedMonthIndex
      ? datePickerComponent.getDatePickerAndroidPreviousBtn()
      : datePickerComponent.getDatePickerAndroidNextBtn();

  for (let i = 0; i < Math.abs(currentMonthIndex - expectedMonthIndex); i++) {
    getMonthBtn.click();
  }
};

module.exports.androidDatePickerMonth = androidDatePickerMonth;
