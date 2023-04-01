import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import styled from "styled-components/native";

const modal = styled.Modal``;

const ModalArea = styled.View`
  background-color: rgba(0, 0, 0, 0.5);
  flex: 1;
  justify-content: flex-end;
`;

const Modalbody = styled.View`
  background-color: #83d6e3;
  min-height: 300px;
  padding: 10px 20px 40px 20px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

const CloseButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
`;

const ModalItem = styled.View`
  background-color: #ffffff;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 10px;
`;

const UserInfo = styled.View`
  align-items: center;
  flex-direction: row;
`;

const UserAvatar = styled.Image`
  width: 56px;
  height: 56px;
  margin-right: 15px;
  border-radius: 20px;
`;

const UserName = styled.Text`
  color: #000000;
  font-size: 18px;
  font-weight: bold;
`;

const ServiceInfo = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

const ServiceName = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

const ServicePrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

const FinishButton = styled.TouchableOpacity`
  background-color: #268596;
  height: 60px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const FinishButtonText = styled.Text`
  color: #ffffff;
  font-size: 17px;
  font-weight: bold;
`;

const DateInfo = styled.View`
  flex-direction: row;
`;

const DatePrevArea = styled.TouchableOpacity`
  justify-content: flex-end;
  align-items: flex-end;
  flex: 1;
`;

const DateTitleArea = styled.View`
  width: 140px;
  justify-content: center;
  align-items: center;
`;

const DateTitle = styled.Text`
  color: #000000;
  font-size: 17px;
  font-weight: bold;
`;

const DateNextArea = styled.TouchableOpacity`
  align-items: flex-start;
  flex: 1;
`;

const DateList = styled.ScrollView``;

const DateItem = styled.TouchableOpacity`
  width: 45px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const DateItemWeekDay = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

const DateItemNumber = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

const TimeList = styled.ScrollView``;

const TimeItem = styled.TouchableOpacity`
  width: 75px;
  height: 40px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const TimeItemText = styled.Text`
  font-size: 16px;
`;

const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const days = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

export default () => {
  const navigation = useNavigation();

  const [selectedYear, setSelectedYear] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedHour, setSelectedHour] = useState(0);

  useEffect(() => {
    if (user.available) {
      let daysInMonth = new Date(
        selectedYear,
        setSelectedMonth + 1,
        0
      ).getDate();
      let newListDays = [];

      for (let i = 1; i <= daysInMonth; i++) {
        let d = new Date(selectedYear, selectedMonth, i);
        let year = d.getFullYear();
        let month = d.getMonth() + 1;
        let day = d.getDate();

        month = month < 10 ? "0" + month : month;

        day = day < 10 ? "0" + day : day;

        let selDate = `${year}-${month}-${day}`;

        let availability = user.available.filter((e) => e.date === selDate);

        newListDays.push({
          status: availability.length > 0 ? true : false,
          weekday: days[d.getDay()],
          number: i,
        });
      }

      setListDays(newListDays);
      setSelectedDay(0);
      setListHours([]);
      setSelectedHour(0);
    }
  }, [user, selectedMonth, selectedYear]);

  useEffect(() => {
    if (user.available && selectedDay > 0) {
      let d = new Date(selectedYear, selectedMonth, selectedDay);
      let year = d.getFullYear();
      let month = d.getMonth() + 1;
      let day = d.getDay();

      month = month < 10 ? "0" + month : month;

      day = day < 10 ? "0" + day : day;

      let selDate = `${year}-${month}-${day}`;

      let availability = user.available.filter((e) => e.date === selDate);

      if (availability.length > 0) {
        setListHours(availability[0].hours);
      }
    }
    setSelectedHour();
  });
};
