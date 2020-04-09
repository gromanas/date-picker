const DatePickerComponent = require('../components/date_picker_component');
const { androidDatePickerMonth } = require('./android_date_picker_month');

const androidDatePicker = (day, month, year) => {
  const datePickerComponent = new DatePickerComponent();

  const yearBtn = datePickerComponent.getDatePickerAndroidYear();
  yearBtn.waitForDisplayed(7000);

  androidDatePickerMonth(month);
  datePickerComponent.getDatePickerAndroidDayBtn(day.replace(/^0+/, '')).click();

  yearBtn.click();
  datePickerComponent.getDatePickerAndroidYearBtn(year).click();
  yearBtn.getText().should.equal(year);

  datePickerComponent.getDatePickerAndroidDateBtn(day, month, year).click();
  datePickerComponent.getDatePickerAndroidOKBtn().click();
};

module.exports.androidDatePicker = androidDatePicker;
