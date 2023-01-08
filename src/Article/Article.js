import { observer } from "mobx-react";
import { useParams } from "react-router-dom";
import './Article.css'

const DeRu = () => {
  return(
    <div className='article-content'>
      <p className='article-text'>
        Опустынивание Земли — серьезная проблема, которая усугубляется последствиями глобального потепления. Опустынивание — это деградация земель в засушливых, полузасушливых и сухих субгумидных регионах в результате деятельности человека, такой как чрезмерный выпас скота, обезлесение и неустойчивое сельское хозяйство. Глобальное потепление усиливает этот процесс, поскольку приводит к уменьшению количества осадков, повышению температуры и увеличению испарения влаги из почвы.
      </p>
      <br></br>
      <p className='article-text'>
        Чтобы понять, как опустынивание связано с глобальным потеплением, важно изучить химию и географию климата Земли. Химия глобального потепления основана на парниковом эффекте, то есть удержании тепла в атмосфере из-за увеличения концентрации парниковых газов, таких как углекислый газ и метан. Эти газы выбрасываются в атмосферу в основном при сжигании ископаемого топлива. География глобального потепления основана на том факте, что последствия глобального потепления неравномерно распределены по земному шару. Некоторые районы, такие как засушливые земли, особенно уязвимы к глобальному потеплению из-за их и без того засушливого климата.
      </p>
      <br></br>
      <p className='article-text'>
        Сочетание химии и географии глобального потепления приводит к опустыниванию определенных частей Земли. С повышением температуры увеличивается и испарение влаги из почвы. Это приводит к более сухим почвам и уменьшению растительности, что в конечном итоге приводит к опустыниванию. По мере опустынивания Земли земля становится все более подверженной эрозии, что может привести к дальнейшей деградации земель и уменьшению доступности воды для сельскохозяйственных, промышленных и бытовых нужд.
      </p>
      <br></br>
      <p className='article-text'>
        Опустынивание Земли — серьезная проблема, которую необходимо решать, чтобы ограничить последствия глобального потепления. Решения этой проблемы включают сокращение выбросов парниковых газов, защиту уязвимых экосистем и продвижение устойчивых методов ведения сельского хозяйства. С помощью этих мер мы можем помочь смягчить последствия глобального потепления и уменьшить опустынивание Земли.
      </p>
    </div>
  )
}

const DeEng = () => {
  return(
    <div className='article-content'>
      <p className='article-text'>
        Desertification of the Earth is a serious problem that is exacerbated by the effects of global warming. Desertification is the degradation of land in arid, semi-arid and dry sub-humid regions due to human activities such as overgrazing, deforestation and unsustainable agriculture. Global warming exacerbates this process by reducing precipitation, increasing temperatures, and increasing evaporation of moisture from the soil.
      </p>
      <br></br>
      <p className='article-text'>
        To understand how desertification is related to global warming, it is important to study the chemistry and geography of Earth's climate. The chemistry of global warming is based on the greenhouse effect, that is, the retention of heat in the atmosphere due to increased concentrations of greenhouse gases such as carbon dioxide and methane. These gases are released into the atmosphere mainly by burning fossil fuels. The geography of global warming is based on the fact that the effects of global warming are not evenly distributed across the globe. Some areas, such as arid lands, are especially vulnerable to global warming because of their already arid climate.
      </p>
      <br></br>
      <p className='article-text'>
        The combination of chemistry and the geography of global warming leads to desertification of certain parts of the Earth. As temperatures rise, so does the evaporation of moisture from the soil. This leads to drier soils and less vegetation, eventually leading to desertification. As the Earth becomes more desertified, the land becomes more susceptible to erosion, which can lead to further land degradation and reduced water availability for agricultural, industrial, and domestic use.
      </p>
      <br></br>
      <p className='article-text'>
        Desertification of the Earth is a serious problem that must be addressed to limit the effects of global warming. Solutions to this problem include reducing greenhouse gas emissions, protecting vulnerable ecosystems, and promoting sustainable agricultural practices. Through these measures, we can help mitigate the effects of global warming and reduce the Earth's desertification.
      </p>
    </div>
  )
}

const IceRu = () => {
  return(
    <div className='article-content'>
      <p className='article-text'>
        Ледяные шапки обычно используются в качестве защитного покрытия для наших океанов и улучшения условий жизни. Основное назначение ледяных шапок - это их отражающие свойства, которые помогают нашей планете сохранять прохладу от постоянных солнечных тепловых лучей. Возраст ледников, существующих сегодня, резко варьируется от примерно первого ледникового периода до недавнего времени, когда они образовались всего несколько тысяч лет назад. Такое несоответствие между типами, возрастом и толщиной ледников/ледяных шапок помогает ученым изучать изменения климата на Земле с течением времени. Но в связи с последними новостями о глобальном потеплении многие из этих ледников и ледяных шапок начинают таять. Их таяние приводит к повышению уровня моря, что делает некоторые острова, пляжи, берега и т.д. потенциально непригодными для жизни. Примером тому могут служить белые медведи, которые теряют свою среду обитания из-за значительного уменьшения площади поверхности ледников.
      </p>
      <br></br>
      <br></br>
      <p className='article-subtext'>
        Почему это происходит?
      </p>
      <br></br>
      <br></br>
      <p className='article-text'>
        Начиная примерно со времен промышленной революции (1840-1900-е годы), в связи с быстрым темпом развития технологий люди выбрасывают в атмосферу большое количество углекислого газа, который накапливается под озоновым слоем вместе с другими газами, такими как закись азота, образующаяся при переработке твердых отходов, и метан, образующийся от наших животных и их газовых выделений. Все эти газы соединяются и смешиваются в атмосфере, не имея возможности покинуть ее, что приводит к резкому повышению общей температуры Земли примерно на 0,18-1 градус Цельсия каждый год. Если бездействие останется в том же состоянии, в котором оно находится сейчас, то примерно к 2100 году растает большая часть мировых гальциров и морского льда, и Земля станет непригодной для жизни. А по данным ученых, 95% самого старого льда в Антарктике, сохранившегося там со времен ледникового периода, растаяло и исчезло навсегда.
      </p>
      <br></br>
      <p className='article-subtext'>
        Каковы последствия этого для нас?
      </p>
      <br></br>
      <br></br>
      <p className='article-text'>
        Сегодня Арктика нагревается в два раза быстрее, чем любая другая точка Земли, а морской лед там сокращается более чем на 10% каждые 10 лет. По мере таяния этого льда начинают появляться более темные океанические плиты, устраняя прежний охлаждающий эффект полюсов, создавая более теплые температуры воздуха и тем самым нарушая схемы циркуляции океана. нормально. Исследование показало, что полярные вихри чаще возникают за пределами Арктики из-за изменений в струйных течениях, вызванных сочетанием потепления температуры воздуха и океана в Арктике и тропиках.
      </p>
      <br></br>
      <p className='article-text'>
        Таяние льдов, которое мы наблюдаем сегодня в Антарктиде и Гренландии, изменяет течение Атлантики и связано с крахом рыболовства в заливе Мэн, а также с разрушительными ураганами и ураганами. больше, чем на всей планете.
      </p>
      <br></br>
      <p className='article-text'>
        То, что происходит в этих местах, имеет глобальные последствия. По мере таяния морского льда и ледников и потепления океанов океанические течения будут продолжать нарушать погодные условия во всем мире. Промышленность, которая процветает благодаря активному рыболовству, пострадает, поскольку более теплые воды изменят место и время нереста рыбы. Прибрежные сообщества будут продолжать сталкиваться с многомиллиардными счетами за восстановление после стихийных бедствий, поскольку наводнения станут более частыми, а штормы - более сильными. Пострадают не только люди. В Арктике, по мере таяния морского льда, дикие животные, такие как моржи, теряют свою среду обитания, а белые медведи проводят больше времени на суше, что приводит к увеличению конфликтов между людьми и медведями.
      </p>
    </div>
  )
}

const IceEng = () => {
  return(
    <div className='article-content'>
      <p className='article-text'>
        Ice caps are usually used as a protective cover for our oceans and better our living conditions. The main use of ice caps is their reflective properties that help our planet keep cool from the sun’s constant heat rays. The glaciers that exist today range in their age dramatically from around the first ice age until only recently, being formed only thousands of years ago. This kind of discrepancy between the types, ages and thickness of the ice glaciers/ice caps help scientists study the changes in climate over time on earth. But due to recent news about the global warming, a lot of these glaciers and ice caps are starting to melt. Their melting causes sea levels to rise, making some islands, beaches, shores, etc. potentially uninhabitable. An example of this can be seen with polar bears, who are losing their habitat due to the majorly decreasing surface area of the ice glaciers.
      </p>
      <br></br>
      <br></br>
      <p className='article-subtext'>
        Why does this happen?
      </p>
      <br></br>
      <br></br>
      <p className='article-text'>
        Since around the times of the industrial revolution (1840s-1900s), with the rapid pace of technological development humans have been releasing a lot of carbon dioxide gas emissions into the atmosphere, causing them to pile up under the ozone layer along with other emission gasses like nitrous oxide that forms from treating solid waste, and methane that comes from our animals and their gas outputs. All of these gases combine and mix in the atmosphere, not being able to leave it, causing the overall temperature of the earth to dramatically increase by around 0.18-1 degrees celsius every year. If inaction remains in the same state that it’s in right now, then most of the world’s galciers and sea ice will melt by around 2100 and the earth would be rendered uninhabitable. And according to scientists, 95% of the oldest ice in the Antarctic that has remained there since the ice age is melted and gone forever.
      </p>
      <br></br>
      <p className='article-subtext'>
        What are the effects of this on us?
      </p>
      <br></br>
      <br></br>
      <p className='article-text'>
        Today, the Arctic is warming twice as fast as anywhere else on Earth, and the sea ice there is shrinking by more than 10% every 10 years. As this ice melts, darker oceanic plates begin to appear, removing the previous cooling effect of the poles, creating warmer air temperatures and thereby disrupting ocean circulation patterns. normal. The study found that polar vortexes occur more frequently outside the Arctic due to changes in jet currents, caused by a combination of warming air and ocean temperatures in the Arctic and the tropics.
      </p>
      <br></br>
      <p className='article-text'>
        The melting ice we're seeing in Antarctica and Greenland today is changing the flow of the Atlantic and is linked to the collapse of fisheries in the Gulf of Maine as well as devastating hurricanes and hurricanes. larger than all over the planet.
      </p>
      <br></br>
      <p className='article-text'>
        What happens in these places has worldwide consequences. As sea ice and glaciers melt and oceans warm, ocean currents will continue to disrupt weather patterns around the world. Industries that thrive on vibrant fisheries will suffer as warmer waters change where and when fish spawn. Coastal communities will continue to face multi-billion dollar disaster recovery bills as floods become more frequent and storms become more intense. People are not the only ones affected. In the Arctic, as sea ice melts, wildlife such as walruses lose their habitat and polar bears spend more time on land, leading to increased human-bear conflict.
      </p>
    </div>
  )
}

const CausesEng = () => {
  return(
    <div className='article-content'>
      <p className='article-text'>
        Global warming is one of the most pressing environmental issues of our time. As temperatures around the world continue to increase, the effects of global warming are becoming increasingly apparent through extreme weather events, rising sea levels and the disappearance of certain species. In this essay, we will explore the causes and effects of global warming and the steps that can be taken to address this urgent issue.
      </p>
      <br></br>
      <p className="article-text">
        Climate change is having a far-reaching effect on the environment and human populations worldwide. As temperatures and sea levels rise, changes to weather patterns are emerging, such as extreme weather events, droughts, floods, and more frequent wildfires (“Climate Change and Its Effects,” 2019). This can impact the availability of crucial natural resources like food, clean water, and energy. For instance, water shortages occur when plant growth is affected by temperature changes (“Water Scarcity - Climate Change,” 2017). Additionally, economic conditions are impacted due to rising sea levels, as coastal areas are particularly at risk of storm surge, flooding, and erosion (“Economic Impacts of Climate Change,” 2018). This can lead to major damage to structures, endanger livelihoods and jobs, and pose a threat to public health and safety.
      </p>
      <br></br>
      <p className="article-text">
        In conclusion, climate change has the potential to have serious impacts on our environment, human populations, and the economy, particularly in terms of the availability and sustainable use of natural resources.
      </p>
      <br></br>
      <p className="article-text">
        Climate change has become one of the most pressing issues facing humanity today. The world’s temperature is rising at an unparalleled rate, and its effects are far-reaching. Effects on the environment are expected to be far-reaching, with changing weather patterns, increasingly extreme temperatures, and rising sea levels, leading to loss of coastal habitats, land productivity, and biodiversity (Duarte et al. 12). Human populations are likely to be significantly impacted by extreme weather events, health risks, loss of livelihoods, and displacement (United Nations). Climate change is anticipated to impose permanent economic costs, with ongoing increases in energy costs, infrastructure repair, and other impacts (Sabe et. al). Natural resources such as tropical forests, water, and fisheries are also expected to be adversely affected, with negative consequences for food and water security (Holzner). Clearly, climate change poses a serious threat not just to the environment, but also to humanity and its economic prospects.
      </p>
      <br></br>
      <br></br>
      <p className="article-citiation">
        Works Cited
        <br></br>
        “Climate Change and Its Effects.” World Wildlife Fund, 2019, www.worldwildlife.org/threats/climate-change.
        “Economic Impacts of Climate Change.” Office of Energy Efficiency & Renewable Energy, 2018, www.energy.gov/eere/articles/economic-impacts-climate-change.
        “Water Scarcity - Climate Change.” The Water Project, 2017, thewaterproject.org/water-scarcity/causes-of-water-scarcity.
      </p>
    </div>
  )
}

const CausesRu = () => {
  return(
    <div className='article-content'>
      <p className='article-text'>
        Глобальное потепление - одна из самых актуальных экологических проблем современности. Поскольку температура по всему миру продолжает расти, последствия глобального потепления становятся все более очевидными благодаря экстремальным погодным явлениям, повышению уровня моря и исчезновению некоторых видов. В этом эссе мы рассмотрим причины и последствия глобального потепления, а также шаги, которые можно предпринять для решения этой насущной проблемы.
      </p>
      <br></br>
      <p className="article-text">
        Изменение климата оказывает далеко идущее влияние на окружающую среду и население всего мира. По мере повышения температуры и уровня моря возникают изменения в погодных условиях, такие как экстремальные погодные явления, засухи, наводнения и более частые лесные пожары ("Изменение климата и его последствия", 2019). Это может повлиять на доступность важнейших природных ресурсов, таких как продовольствие, чистая вода и энергия. Например, нехватка воды возникает, когда на рост растений влияют изменения температуры ("Дефицит воды - изменение климата", 2017). Кроме того, на экономические условия влияет повышение уровня моря, поскольку прибрежные районы особенно подвержены риску штормовых нагонов, наводнений и эрозии ("Экономические последствия изменения климата", 2018). Это может привести к серьезным повреждениям сооружений, поставить под угрозу средства к существованию и рабочие места, а также создать угрозу здоровью и безопасности населения.
      </p>
      <br></br>
      <p className="article-text">
        В заключение следует отметить, что изменение климата может оказать серьезное воздействие на окружающую среду, население и экономику, особенно в плане доступности и устойчивого использования природных ресурсов.
      </p>
      <br></br>
      <br></br>
      <p className="article-text">
        Изменение климата стало одной из самых актуальных проблем, стоящих сегодня перед человечеством. Температура в мире повышается беспрецедентными темпами, и последствия этого изменения далеко идущие. Ожидается, что воздействие на окружающую среду будет далеко идущим: изменение погодных условий, все более экстремальные температуры и повышение уровня моря приведут к потере прибрежной среды обитания, продуктивности земель и биоразнообразия (Duarte et al. 12). На население, вероятно, будет оказано значительное воздействие в результате экстремальных погодных явлений, рисков для здоровья, потери средств к существованию и перемещения (Организация Объединенных Наций). Ожидается, что изменение климата повлечет за собой постоянные экономические издержки, связанные с постоянным увеличением затрат на энергию, ремонт инфраструктуры и другие последствия (Sabe et. al.). Ожидается, что природные ресурсы, такие как тропические леса, вода и рыболовство, также подвергнутся негативному воздействию, что негативно скажется на продовольственной и водной безопасности (Holzner). Очевидно, что изменение климата представляет серьезную угрозу не только для окружающей среды, но и для человечества и его экономических перспектив.
      </p>
      <br></br>
      <br></br>
      <p className="article-citiation">
        Цитируемые работы
        <br></br>
        “Climate Change and Its Effects.” World Wildlife Fund, 2019, www.worldwildlife.org/threats/climate-change.
        “Economic Impacts of Climate Change.” Office of Energy Efficiency & Renewable Energy, 2018, www.energy.gov/eere/articles/economic-impacts-climate-change.
        “Water Scarcity - Climate Change.” The Water Project, 2017, thewaterproject.org/water-scarcity/causes-of-water-scarcity.
      </p>
    </div>
  )
}

const Article = observer(({lang}) => {

  const name = useParams()

  return(
    <main className='article-page'>
      <div className='container'>
          {name.name == 'Desertification of the Earth' ?
            lang.lang == 'Ru' ? <p className='article-title'>Опустынивание Земли</p> : <p className='article-title'>Desertification of the Earth</p> : ''
          }
          {name.name == 'Ice Caps' ?
            lang.lang == 'Ru' ? <p className='article-title'>Ледняки</p> : <p className='article-title'>Ice Caps</p> : ''
          }
          {name.name == 'Global Warming Causes' ?
            lang.lang == 'Ru' ? <p className='article-title'>Последствия глобального потепления</p> : <p className='article-title'>Global Warming Causes</p> : ''
          }


          {name.name == 'Desertification of the Earth' ? lang.lang == 'Ru' ? <DeRu /> : <DeEng /> : ''}
          {name.name == 'Ice Caps' ? lang.lang == 'Ru' ? <IceRu /> : <IceEng /> : ''}
          {name.name == 'Global Warming Causes' ? lang.lang == 'Ru' ? <CausesRu /> : <CausesEng /> : ''}
      </div>
    </main>
  )
})


export default Article;