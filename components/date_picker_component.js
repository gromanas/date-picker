class DatePickerComponent {
  getDatePickerIosMonth() {
    return $('//XCUIElementTypePickerWheel[1]');
  }

  getDatePickerIosDay() {
    return $('//XCUIElementTypePickerWheel[2]');
  }

  getDatePickerIosYear() {
    return $('//XCUIElementTypePickerWheel[3]');
  }

  getDatePickerIosOKBtn() {
    return $('//XCUIElementTypeButton[@name="Ok"]');
  }

  getDatePickerIosCancelBtn() {
    return $('//XCUIElementTypeButton[@name="Cancel"]');
  }

  getDatePickerAndroidPreviousBtn() {
    return $('android=new UiSelector().resourceId("android:id/prev")');
  }

  getDatePickerAndroidNextBtn() {
    return $('android=new UiSelector().resourceId("android:id/next")');
  }

  getDatePickerAndroidMonth() {
    return $('//android.view.View[2]');
  }

  getDatePickerAndroidYear() {
    return $('android=new UiSelector().resourceId("android:id/date_picker_header_year")');
  }

  getDatePickerAndroidYearBtn(year) {
    return $('//android.widget.ListView/android.widget.TextView[@text="' + year + '"]');
  }

  getDatePickerAndroidDateBtn(day, month, year) {
    return $('//android.view.View[@content-desc="' + day + ' ' + month + ' ' + year + '"]');
  }

  getDatePickerAndroidDayBtn(day) {
    return $('//android.view.View[@text="' + day + '"]');
  }

  getDatePickerAndroidOKBtn() {
    return $('android=new UiSelector().resourceId("android:id/button1")');
  }

  getDatePickerAndroidCancelBtn() {
    return $('android=new UiSelector().resourceId("android:id/button2")');
  }
}

module.exports = DatePickerComponent;
