class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}


	addClock(time, callback, canCall = true) {
		if (!time || !callback) {
			throw new Error('Отсутствуют обязательные аргументы');
		} else if (this.alarmCollection.find(alarm => alarm.id === 1)) {
			console.warn('Уже присутствует звонок на это же время');
		}

		this.alarmCollection.push({
			time,
			callback,
			canCall,
		});
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
	}

	getCurrentFormattedTime() {
		return new Date().toTimeString().slice(0, 5);
	}

	start() {

		if (this.intervalId) {
			return;
		}

		this.intervalId = setInterval(() => this.alarmCollection.forEach(alarm => {
			if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
				alarm.canCall = false;
				alarm.callback();
			}
		}), 1000);
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach(alarm => alarm.canCall = true);
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}

}