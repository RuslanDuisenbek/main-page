import "./App.css";
import React from "react";
import Body from "./components/Body/Body";
import Module from "./components/Module/Module";
import drevniyVek from "../src/assets/drevniyVek.png";
import kazakh from "../src/assets/kazakh.png";
import mngl from "../src/assets/mngl.png";
import independent from "../src/assets/independent.png";
import kazakh_people from "../src/assets/kazakh_people.png";
import turkish from "../src/assets/turkish.png";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          title: "Древний век",
          descr:
            "В этой главе мы рассмотрим древний Казахстан, начиная с каменного века до Тюрков. Будут затронуты периоды бронзового века, а также история народов саков и сарматов. Помимо этого, мы рассмотрим вклад Казахстана в развитие ремесел, земледелия и животноводства. Особое внимание будет уделено уникальным археологическим находкам и памятникам, которые раскроют многогранность прошлого этого удивительного региона.",
          number_questions: "123 вопросов",
          time: "14 часов",
          users: "55.5K польвателей",
          complexity: 3,
          all_date: 57,
          img: drevniyVek,
        },
        {
          title: "Тюркский период",
          descr:
            "В этой главе мы перейдем к тюркскому периоду, когда тюркские племена начали активно поселяться на территории Казахстана. Раскроем роль этих племен в формировании ранних тюркских государств и их влияние на культуру и общество региона. Изучим язык и письменность тюрков, их религию и мифологию, а также важные исторические события, определившие будущее этой земли. Погрузимся в богатую и разнообразную историю древнего Казахстана, которая оставила следы в современном облике этой страны.",
          number_questions: "193 вопросов",
          time: "20 часов",
          users: "34.5K польвателей",
          complexity: 4,
          all_date: 0,
          img: turkish,
        },
        {
          title: "Монгольское вторжение и его последствия",
          descr:
            "В важным этапом в истории Казахстана было Монгольское вторжение и его последствия. Монгольское завоевание, возглавляемое Чингисханом, имело глубокое влияние на этот регион, приведя к изменениям в политике, экономике и культуре. Исследуем масштабные события этого периода, его последствия для народов Казахстана и их долгосрочные последствия на историческое развитие страны.",
          number_questions: "223 вопросов",
          time: "25 часов",
          users: "22.5K польвателей",
          complexity: 5,
          all_date: 0,
          img: mngl,
        },
        {
          title: "Казахское ханство",
          descr:
            "В этой главе мы рассмотрим Казахское ханство, его политическую структуру, роль ханов и их взаимоотношения с соседними государствами. Изучим важные периоды и события, которые повлияли на становление и укрепление ханства. Будут затронуты ключевые ханы и их вклад в формирование культурного и социального облика Казахстана. Также рассмотрим влияние ханства на экономику, торговлю и связи с другими регионами. В результате получим углубленное представление о значимости Казахского ханства в истории этой земли.",
          number_questions: "223 вопросов",
          time: "25 часов",
          users: "22.5K польвателей",
          complexity: 5,
          all_date: 0,
          img: kazakh,
        },
        {
          title: "Казахский народ в XVIII-XX",
          descr:
            "В этой главе мы рассмотрим историю Казахского народа с XVIII по XX век. Изучим период казахских ханств и их участие в геополитических событиях. Обратим внимание на влияние российской империи и его последствия для казахской культуры, обычаев и образа жизни. Также рассмотрим события, связанные с формированием Казахской автономной области и переходом в Казахскую ССР. Исследуем развитие национального самосознания и культурного восстановления Казахского народа в XX веке.",
          number_questions: "223 вопросов",
          time: "25 часов",
          users: "22.5K польвателей",
          complexity: 5,
          all_date: 0,
          img: kazakh_people,
        },
        {
          title: "Независимость",
          descr:
            "В этой главе мы рассмотрим историю независимости Казахстана. В конце XX века, после распада Советского Союза в 1991 году, Казахстан объявил о своей независимости. Исследуем процесс формирования суверенного государства, включая создание новой конституции, установление политических институтов и развитие экономики. Рассмотрим роль первого Президента Казахстана, Нурсултана Назарбаева, в формировании национальной идентичности и мирного перехода к независимости. Также обратим внимание на внутренние и внешние вызовы, с которыми столкнулся Казахстан в процессе строительства своего суверенного будущего.",
          number_questions: "223 вопросов",
          time: "25 часов",
          users: "22.5K польвателей",
          complexity: 5,
          all_date: 0,
          img: independent,
        },
      ],
    };
  }
  render() {
    return (
      <div className="main">
        <Body />
        <Module items={this.state.items} />
      </div>
    );
  }
}
export default App;
