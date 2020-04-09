const DatePickerComponent = require('../components/date_picker_component');
const { androidDatePicker } = require('./android_date_picker');

const selectDate = (day, month, year) => {
  const datePickerComponent = new DatePickerComponent();

  if (browser.isAndroid) {
    androidDatePicker(day, month, year);
  } else {
    datePickerComponent.getDatePickerIosMonth().waitForDisplayed(7000);
    datePickerComponent.getDatePickerIosMonth().addValue(month);
    datePickerComponent.getDatePickerIosDay().waitForDisplayed(7000);
    do {
      datePickerComponent.getDatePickerIosDay().addValue(day.replace(/^0+/, ''));
    } while (datePickerComponent.getDatePickerIosDay().getText() !== day.replace(/^0+/, ''));
    datePickerComponent.getDatePickerIosYear().waitForDisplayed(7000);
    do {
      datePickerComponent.getDatePickerIosYear().addValue(year);
    } while (datePickerComponent.getDatePickerIosYear().getText() !== year);
    datePickerComponent.getDatePickerIosOKBtn().click();
  }
};

module.exports.selectDate = selectDate;
