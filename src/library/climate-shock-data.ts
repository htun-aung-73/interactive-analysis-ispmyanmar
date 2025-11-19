export type Line = {
  name: string
  value: number
  color: string
  Drought: number
  'Water Scarcity': number
  'Heavy Rainfall': number
  Flood: number
  'Extreme Heat': number
  'Extreme Cold': number
  Earthquake: number
  'Heavy Winds': number
  'Land Erosion': number
  'Severe Pollution': number
}
export type LineChartData = {
  id: number
  // type: string; // for chart type
  layout: string
  name: string
  analysisTitle: string
  analysisPara: string
  title: string
  description: string
  data: Line[]
}

export type StackBar = {
  name: string
  value: number
  color: string
  Mar: number
  Apr: number
  May: number
  Jun: number
  Jul: number
  Aug: number
  Sep: number
  Oct: number
  Nov: number
  Dec: number
  Jan: number
  Feb: number
}
export type StackBarData = {
  id: number
  // type: string; // for chart type
  layout: string
  name: string
  analysisTitle: string
  analysisPara: string
  title: string
  description: string
  data: StackBar[]
}

export type StackArea = {
  name: string
  value: number
  color: string
  'Agricultural Damages'?: number
  'Transportation Difficulties'?: number
  'Livelihood Difficulties'?: number
  'Loss of Livestock'?: number
  'Insufficient Civic Services'?: number
  'Local Ad Hoc Groups'?: number
  'Charity Groups'?: number
  'CSOs, NGOs, INGOs'?: number
  'No Help'?: number
  'SAC Welfare Groups'?: number
  'NUG Administration'?: number
}
export enum DataKey {
  Agricultural_Damages = 'Agricultural Damages',
  Transportation_Difficulties = 'Transportation Difficulties',
  Livelihood_Difficulties = 'Livelihood Difficulties',
  Loss_of_Livestock = 'Loss of Livestock',
  Insufficient_Civic_Services = 'Insufficient Civic Services',
  Local_Ad_Hoc_Groups = 'Local Ad Hoc Groups',
  Charity_Groups = 'Charity Groups',
  CSOs_NGOs_INGOs = 'CSOs, NGOs, INGOs',
  No_Help = 'No Help',
  SAC_Welfare_Groups = 'SAC Welfare Groups',
  NUG_Administration = 'NUG Administration',
}
export type StackAreaDataKey = {
  color: string
  key: DataKey
}
export type StackAreaData = {
  id: number
  // type: string; // for chart type
  layout: string
  name: string
  title: string
  analysisTitle: string
  analysisPara: string
  description: string
  dataKey: StackAreaDataKey[]
  data: StackArea[]
}

export const lineChart: LineChartData[] = [
  {
    id: 1,
    layout: 'horizontal',
    name: 'Disasters caused by Climate Change',
    title: 'Waves of extreme weather events',
    analysisTitle: 'Frequent Shocks by Extreme Heat and Floods',
    analysisPara:
      'Myanmar is a geographically diverse country, from the sun-scorched dry zone to the misty mountain ranges and the windswept coast, the country’s geography captures every shade of terrain. The diverse terrain means various extreme weather conditions can fall on Myanmar and they did. Residents of 26 to 48 townships across the country suffered extreme heatwaves from March to May for three months. Several dry zone cities were among the hottest places on earth, reaching 48°C in April 2024. Due to the extreme heat in April, seven township residents suffered from drought and 13 township residents suffered from water scarcity. In July, 45 township residents experienced flooding and 37 townships faced heavy rainfalls. A few months later in September, 47 township residents suffered from severe flooding and heavy rainfalls with the arrival of Typhoon Yagi; the unusual flash floods took away people’s houses and savings. Other natural disasters such as earthquakes, heavy wind, extreme cold, as well as man made disasters like land erosion and severe pollution also recorded in some townships.',
    description:
      'People are also experiencing the severe impacts of the climate crisis along with the conflict. Myanmar people faced extreme temperatures in April 2024. Out of 110 townships surveyed by ISP-Myanmar, 48 townships experienced extreme heatwaves. Even in May, when temperatures slightly decreased, 26 townships still endured extreme heat. When the heat subsided, heavy rainfalls and floods continued to occur. In July 2024, 45 townships out of 110 townships experienced heavy rainfalls. The number decreased to 21 townships in August, but heavy rainfalls and floods returned with the arrival of Typhoon Yagi in September.',
    data: [
      {
        name: '2024 Mar',
        value: 63,
        color: '#3295A5',
        Drought: 1,
        'Water Scarcity': 4,
        'Heavy Rainfall': 1,
        Flood: 0,
        'Extreme Heat': 26,
        'Extreme Cold': 1,
        Earthquake: 1,
        'Heavy Winds': 3,
        'Land Erosion': 0,
        'Severe Pollution': 2,
      },
      {
        name: 'Apr',
        value: 58,
        Drought: 7,
        'Water Scarcity': 13,
        'Heavy Rainfall': 1,
        Flood: 0,
        'Extreme Heat': 48,
        'Extreme Cold': 0,
        Earthquake: 1,
        'Heavy Winds': 7,
        'Land Erosion': 0,
        'Severe Pollution': 1,
        color: '#F58735',
      },
      {
        name: 'May',
        value: 37,
        Drought: 4,
        'Water Scarcity': 7,
        'Heavy Rainfall': 20,
        Flood: 7,
        'Extreme Heat': 26,
        'Extreme Cold': 0,
        Earthquake: 0,
        'Heavy Winds': 20,
        'Land Erosion': 2,
        'Severe Pollution': 2,
        color: '#61C0A6',
      },
      {
        name: 'Jun',
        value: 33,
        Drought: 1,
        'Water Scarcity': 0,
        'Heavy Rainfall': 14,
        Flood: 12,
        'Extreme Heat': 3,
        'Extreme Cold': 0,
        Earthquake: 0,
        'Heavy Winds': 5,
        'Land Erosion': 3,
        'Severe Pollution': 4,
        color: '#A1BB79',
      },
      {
        name: 'Jul',
        value: 31,
        Drought: 3,
        'Water Scarcity': 1,
        'Heavy Rainfall': 37,
        Flood: 45,
        'Extreme Heat': 1,
        'Extreme Cold': 0,
        Earthquake: 0,
        'Heavy Winds': 7,
        'Land Erosion': 7,
        'Severe Pollution': 2,
        color: '#C3B69B',
      },
      {
        name: 'Aug',
        value: 27,
        Drought: 1,
        'Water Scarcity': 1,
        'Heavy Rainfall': 21,
        Flood: 21,
        'Extreme Heat': 5,
        'Extreme Cold': 0,
        Earthquake: 0,
        'Heavy Winds': 6,
        'Land Erosion': 2,
        'Severe Pollution': 1,
        color: '#DC5848',
      },
      {
        name: 'Sep',
        value: 9,
        Drought: 0,
        'Water Scarcity': 0,
        'Heavy Rainfall': 47,
        Flood: 47,
        'Extreme Heat': 11,
        'Extreme Cold': 0,
        Earthquake: 0,
        'Heavy Winds': 13,
        'Land Erosion': 9,
        'Severe Pollution': 6,
        color: '#FBB458',
      },
      {
        name: 'Oct',
        value: 9,
        Drought: 0,
        'Water Scarcity': 0,
        'Heavy Rainfall': 20,
        Flood: 21,
        'Extreme Heat': 1,
        'Extreme Cold': 0,
        Earthquake: 0,
        'Heavy Winds': 4,
        'Land Erosion': 2,
        'Severe Pollution': 2,
        color: '#FBB458',
      },
      {
        name: 'Nov',
        value: 9,
        Drought: 0,
        'Water Scarcity': 0,
        'Heavy Rainfall': 3,
        Flood: 2,
        'Extreme Heat': 0,
        'Extreme Cold': 0,
        Earthquake: 2,
        'Heavy Winds': 1,
        'Land Erosion': 0,
        'Severe Pollution': 0,
        color: '#FBB458',
      },
      {
        name: 'Dec',
        value: 9,
        Drought: 0,
        'Water Scarcity': 0,
        'Heavy Rainfall': 0,
        Flood: 0,
        'Extreme Heat': 0,
        'Extreme Cold': 0,
        Earthquake: 0,
        'Heavy Winds': 0,
        'Land Erosion': 0,
        'Severe Pollution': 0,
        color: '#FBB458',
      },
      {
        name: 'Jan',
        value: 9,
        Drought: 0,
        'Water Scarcity': 0,
        'Heavy Rainfall': 0,
        Flood: 0,
        'Extreme Heat': 0,
        'Extreme Cold': 0,
        Earthquake: 0,
        'Heavy Winds': 0,
        'Land Erosion': 0,
        'Severe Pollution': 0,
        color: '#FBB458',
      },
      {
        name: 'Feb 2025',
        value: 9,
        Drought: 0,
        'Water Scarcity': 0,
        'Heavy Rainfall': 0,
        Flood: 0,
        'Extreme Heat': 0,
        'Extreme Cold': 0,
        Earthquake: 0,
        'Heavy Winds': 0,
        'Land Erosion': 0,
        'Severe Pollution': 0,
        color: '#FBB458',
      },
    ],
  },
]

export const stackAreaChart: StackAreaData[] = [
  {
    id: 1,
    layout: 'horizontal',
    name: 'Damage caused by disasters',
    analysisTitle: 'Added Burdens On the People',
    analysisPara:
      'As Myanmar’s majority population rely on the agricultural sector, people’s livelihoods are tangent to the good weather conditions required for farming and therefore are highly vulnerable to the impacts of extreme weather events such as floods, droughts and extreme temperatures. According to the UNOSAT S-1 Flood AI Monitoring Dashboard data, at least 10 million acres of agricultural land were flooded due to the climate disaster across the country in 2024. Our survey findings also showed that the heaviest impacts fall on the agricultural sector causing losses of agricultural output. It was followed by challenges in transportation, livelihoods, loss of livestocks and insufficient public services. Flooding and heavy rainfalls in July and September 2024 caused the most damage through agricultural damages, transportation difficulties, livelihood challenges and livestock losses.',
    dataKey: [
      { color: '#3295A5', key: DataKey.Agricultural_Damages },
      { color: '#F58735', key: DataKey.Transportation_Difficulties },
      { color: '#DC5848', key: DataKey.Livelihood_Difficulties },
      { color: '#FBB458', key: DataKey.Loss_of_Livestock },
      { color: '#A1BB79', key: DataKey.Insufficient_Civic_Services },
    ],
    title:
      'Agricultural damages were the most frequently adverse effects suffered across the country',
    description:
      'The interactive graph shows the aggregate scope of impact on each category of challenges and monthly data can be viewed through the filter. The most severely hard hit area was the agricultural sector, followed by transportation, livelihood and public services.',
    data: [
      {
        name: '2024 Mar',
        value: 63,
        color: '#3295A5',
        'Agricultural Damages': 12,
        'Transportation Difficulties': 5,
        'Livelihood Difficulties': 8,
        'Loss of Livestock': 12,
        'Insufficient Civic Services': 10,
      },
      {
        name: 'Apr',
        value: 58,
        'Agricultural Damages': 26,
        'Transportation Difficulties': 9,
        'Livelihood Difficulties': 21,
        'Loss of Livestock': 19,
        'Insufficient Civic Services': 25,
        color: '#F58735',
      },
      {
        name: 'May',
        value: 37,
        'Agricultural Damages': 22,
        'Transportation Difficulties': 20,
        'Livelihood Difficulties': 16,
        'Loss of Livestock': 16,
        'Insufficient Civic Services': 17,
        color: '#61C0A6',
      },
      {
        name: 'Jun',
        value: 33,
        'Agricultural Damages': 10,
        'Transportation Difficulties': 11,
        'Livelihood Difficulties': 9,
        'Loss of Livestock': 4,
        'Insufficient Civic Services': 2,
        color: '#A1BB79',
      },
      {
        name: 'Jul',
        value: 31,
        'Agricultural Damages': 39,
        'Transportation Difficulties': 37,
        'Livelihood Difficulties': 34,
        'Loss of Livestock': 20,
        'Insufficient Civic Services': 22,
        color: '#C3B69B',
      },
      {
        name: 'Aug',
        value: 27,
        'Agricultural Damages': 24,
        'Transportation Difficulties': 21,
        'Livelihood Difficulties': 17,
        'Loss of Livestock': 10,
        'Insufficient Civic Services': 10,
        color: '#DC5848',
      },
      {
        name: 'Sep',
        value: 9,
        'Agricultural Damages': 42,
        'Transportation Difficulties': 44,
        'Livelihood Difficulties': 33,
        'Loss of Livestock': 29,
        'Insufficient Civic Services': 20,
        color: '#FBB458',
      },
      {
        name: 'Oct',
        value: 9,
        'Agricultural Damages': 18,
        'Transportation Difficulties': 2,
        'Livelihood Difficulties': 13,
        'Loss of Livestock': 11,
        'Insufficient Civic Services': 9,
        color: '#FBB458',
      },
      {
        name: 'Nov',
        value: 9,
        'Agricultural Damages': 4,
        'Transportation Difficulties': 2,
        'Livelihood Difficulties': 1,
        'Loss of Livestock': 1,
        'Insufficient Civic Services': 1,
        color: '#FBB458',
      },
      {
        name: 'Dec',
        value: 9,
        'Agricultural Damages': 0,
        'Transportation Difficulties': 0,
        'Livelihood Difficulties': 0,
        'Loss of Livestock': 0,
        'Insufficient Civic Services': 0,
        color: '#FBB458',
      },
      {
        name: 'Jan',
        value: 9,
        'Agricultural Damages': 0,
        'Transportation Difficulties': 0,
        'Livelihood Difficulties': 0,
        'Loss of Livestock': 0,
        'Insufficient Civic Services': 0,
        color: '#FBB458',
      },
      {
        name: 'Feb 2025',
        value: 9,
        'Agricultural Damages': 0,
        'Transportation Difficulties': 0,
        'Livelihood Difficulties': 0,
        'Loss of Livestock': 0,
        'Insufficient Civic Services': 0,
        color: '#FBB458',
      },
    ],
  },
  {
    id: 2,
    layout: 'horizontal',
    name: 'Organizations dedicated to rehabilitation',
    analysisTitle: 'Scrambling for help',
    analysisPara:
      'People impacted by climate disasters like floods had few sources of support. They depended on local, ad hoc disaster relief groups for assistance; however, in some areas, no help was available. In other locations, civil society organizations (CSOs) provided aid. The SAC’s Relief teams’ efforts were few and far between. The capability of public administrations under the NUG was also limited. Based on the findings, it seems that more help was available for disasters like flash flood, heavy rainfall while there was little help or aid to prevent losses caused by extreme heat.',
    title: 'Who Answers in a Crisis?',
    description:
      'The figure showed the levels of help available to the residents of the surveyed townships from different groups including state support systems like SAC welfare department, NUG administration and charity organizations, NGOs and CSOs to local ad hoc groups. Local ad hoc disaster relief groups and charity were the most commonly found help across most regions especially for flood rescue and relief.',
    dataKey: [
      { color: '#3295A5', key: DataKey.Local_Ad_Hoc_Groups },
      { color: '#F58735', key: DataKey.Charity_Groups },
      { color: '#DC5848', key: DataKey.CSOs_NGOs_INGOs },
      { color: '#FBB458', key: DataKey.No_Help },
      { color: '#A1BB79', key: DataKey.SAC_Welfare_Groups },
      { color: '#4285F4', key: DataKey.NUG_Administration },
    ],
    data: [
      {
        name: '2024 Mar',
        value: 63,
        color: '#3295A5',
        'Local Ad Hoc Groups': 8,
        'Charity Groups': 8,
        'CSOs, NGOs, INGOs': 7,
        'No Help': 12,
        'SAC Welfare Groups': 5,
        'NUG Administration': 0,
      },
      {
        name: 'Apr',
        value: 58,
        'Local Ad Hoc Groups': 17,
        'Charity Groups': 19,
        'CSOs, NGOs, INGOs': 14,
        'No Help': 24,
        'SAC Welfare Groups': 7,
        'NUG Administration': 1,
        color: '#F58735',
      },
      {
        name: 'May',
        value: 37,
        'Local Ad Hoc Groups': 25,
        'Charity Groups': 21,
        'CSOs, NGOs, INGOs': 12,
        'No Help': 12,
        'SAC Welfare Groups': 8,
        'NUG Administration': 2,
        color: '#61C0A6',
      },
      {
        name: 'Jun',
        value: 33,
        'Local Ad Hoc Groups': 9,
        'Charity Groups': 9,
        'CSOs, NGOs, INGOs': 4,
        'No Help': 9,
        'SAC Welfare Groups': 0,
        'NUG Administration': 0,
        color: '#A1BB79',
      },
      {
        name: 'Jul',
        value: 31,
        'Local Ad Hoc Groups': 32,
        'Charity Groups': 30,
        'CSOs, NGOs, INGOs': 13,
        'No Help': 14,
        'SAC Welfare Groups': 12,
        'NUG Administration': 3,
        color: '#C3B69B',
      },
      {
        name: 'Aug',
        value: 27,
        'Local Ad Hoc Groups': 19,
        'Charity Groups': 14,
        'CSOs, NGOs, INGOs': 7,
        'No Help': 10,
        'SAC Welfare Groups': 5,
        'NUG Administration': 2,
        color: '#DC5848',
      },
      {
        name: 'Sep',
        value: 9,
        'Local Ad Hoc Groups': 40,
        'Charity Groups': 34,
        'CSOs, NGOs, INGOs': 22,
        'No Help': 2,
        'SAC Welfare Groups': 20,
        'NUG Administration': 6,
        color: '#FBB458',
      },
      {
        name: 'Oct',
        value: 9,
        'Local Ad Hoc Groups': 17,
        'Charity Groups': 16,
        'CSOs, NGOs, INGOs': 9,
        'No Help': 5,
        'SAC Welfare Groups': 10,
        'NUG Administration': 3,
        color: '#FBB458',
      },
      {
        name: 'Nov',
        value: 9,
        'Local Ad Hoc Groups': 3,
        'Charity Groups': 3,
        'CSOs, NGOs, INGOs': 2,
        'No Help': 2,
        'SAC Welfare Groups': 1,
        'NUG Administration': 1,
        color: '#FBB458',
      },
      {
        name: 'Dec',
        value: 9,
        'Local Ad Hoc Groups': 0,
        'Charity Groups': 0,
        'CSOs, NGOs, INGOs': 0,
        'No Help': 0,
        'SAC Welfare Groups': 0,
        'NUG Administration': 0,
        color: '#FBB458',
      },
      {
        name: 'Jan',
        value: 9,
        'Local Ad Hoc Groups': 0,
        'Charity Groups': 0,
        'CSOs, NGOs, INGOs': 0,
        'No Help': 0,
        'SAC Welfare Groups': 0,
        'NUG Administration': 0,
        color: '#FBB458',
      },
      {
        name: 'Feb 2025',
        value: 9,
        'Local Ad Hoc Groups': 0,
        'Charity Groups': 0,
        'CSOs, NGOs, INGOs': 0,
        'No Help': 0,
        'SAC Welfare Groups': 0,
        'NUG Administration': 0,
        color: '#FBB458',
      },
    ],
  },
]

export const stackBarChart: StackBarData[] = [
  {
    id: 1,
    layout: 'horizontal',
    name: 'Damage caused by disasters',
    analysisTitle: 'Added Burdens On the People',
    analysisPara:
      'As Myanmar’s majority population rely on the agricultural sector, people’s livelihoods are tangent to the good weather conditions required for farming and therefore are highly vulnerable to the impacts of extreme weather events such as floods, droughts and extreme temperatures. According to the UNOSAT S-1 Flood AI Monitoring Dashboard data, at least 10 million acres of agricultural land were flooded due to the climate disaster across the country in 2024. Our survey findings also showed that the heaviest impacts fall on the agricultural sector causing losses of agricultural output. It was followed by challenges in transportation, livelihoods, loss of livestocks and insufficient public services. Flooding and heavy rainfalls in July and September 2024 caused the most damage through agricultural damages, transportation difficulties, livelihood challenges and livestock losses.',
    title:
      'Agricultural damages were the most frequently adverse effects suffered across the country',
    description:
      'The interactive graph shows the aggregate scope of impact on each category of challenges and monthly data can be viewed through the filter. The most severely hard hit area was the agricultural sector, followed by transportation, livelihood and public services.',
    data: [
      {
        name: 'Agricultural Damages',
        value: 63,
        color: '#3295A5',
        Mar: 12,
        Apr: 26,
        May: 22,
        Jun: 10,
        Jul: 39,
        Aug: 24,
        Sep: 42,
        Oct: 18,
        Nov: 4,
        Dec: 0,
        Jan: 0,
        Feb: 0,
      },
      {
        name: 'Transportation Difficulties',
        value: 63,
        color: '#F58735',
        Mar: 5,
        Apr: 9,
        May: 20,
        Jun: 11,
        Jul: 37,
        Aug: 21,
        Sep: 44,
        Oct: 19,
        Nov: 2,
        Dec: 0,
        Jan: 0,
        Feb: 0,
      },
      {
        name: 'Livelihood Difficulties',
        value: 63,
        color: '#DC5848',
        Mar: 8,
        Apr: 21,
        May: 16,
        Jun: 9,
        Jul: 34,
        Aug: 17,
        Sep: 33,
        Oct: 13,
        Nov: 1,
        Dec: 0,
        Jan: 0,
        Feb: 0,
      },
      {
        name: 'Loss of Livestock',
        value: 63,
        color: '#FBB458',
        Mar: 12,
        Apr: 19,
        May: 16,
        Jun: 4,
        Jul: 20,
        Aug: 10,
        Sep: 29,
        Oct: 11,
        Nov: 1,
        Dec: 0,
        Jan: 0,
        Feb: 0,
      },
      {
        name: 'Insufficient Civic Services',
        value: 63,
        color: '#A1BB79',
        Mar: 10,
        Apr: 25,
        May: 17,
        Jun: 2,
        Jul: 22,
        Aug: 10,
        Sep: 20,
        Oct: 9,
        Nov: 1,
        Dec: 0,
        Jan: 0,
        Feb: 0,
      },
      // {
      //     name: "Difficulties in Health Services",
      //     value: 63,
      //     color: "#3295A5",
      //     "Mar": 2,
      //     "Apr": 4,
      //     "May": 11,
      //     "Jun": 6,
      //     "Jul": 27,
      //     "Aug": 14,
      //     "Sep": 27,
      //     "Oct": 9,
      //     "Nov": 2,
      //     "Dec": 0,
      //     "Jan": 0,
      //     "Feb": 0,
      // },
      // {
      //     name: "Difficulties in Education Opportunities",
      //     value: 63,
      //     color: "#3295A5",
      //     "Mar": 0,
      //     "Apr": 2,
      //     "May": 3,
      //     "Jun": 4,
      //     "Jul": 24,
      //     "Aug": 8,
      //     "Sep": 19,
      //     "Oct": 7,
      //     "Nov": 0,
      //     "Dec": 0,
      //     "Jan": 0,
      //     "Feb": 0,
      // },
      // {
      //     name: "Difficulties in Resource Mining",
      //     value: 63,
      //     color: "#3295A5",
      //     "Mar": 2,
      //     "Apr": 4,
      //     "May": 7,
      //     "Jun": 5,
      //     "Jul": 10,
      //     "Aug": 1,
      //     "Sep": 6,
      //     "Oct": 2,
      //     "Nov": 1,
      //     "Dec": 0,
      //     "Jan": 0,
      //     "Feb": 0,
      // },
    ],
  },
  {
    id: 2,
    layout: 'horizontal',
    name: 'Organizations dedicated to rehabilitation',
    analysisTitle: 'Scrambling for help',
    analysisPara:
      'People impacted by climate disasters like floods had few sources of support. They depended on local, ad hoc disaster relief groups for assistance; however, in some areas, no help was available. In other locations, civil society organizations (CSOs) provided aid. The SAC’s Relief teams’ efforts were few and far between. The capability of public administrations under the NUG was also limited. Based on the findings, it seems that more help was available for disasters like flash flood, heavy rainfall while there was little help or aid to prevent losses caused by extreme heat.',
    title: 'Who Answers in a Crisis?',
    description:
      'The figure showed the levels of help available to the residents of the surveyed townships from different groups including state support systems like SAC welfare department, NUG administration and charity organizations, NGOs and CSOs to local ad hoc groups. Local ad hoc disaster relief groups and charity were the most commonly found help across most regions especially for flood rescue and relief.',
    data: [
      {
        name: 'Local Ad Hoc Groups',
        value: 63,
        color: '#3295A5',
        Mar: 8,
        Apr: 17,
        May: 25,
        Jun: 9,
        Jul: 32,
        Aug: 19,
        Sep: 40,
        Oct: 17,
        Nov: 3,
        Dec: 0,
        Jan: 0,
        Feb: 0,
      },
      {
        name: 'Charity Groups',
        value: 63,
        color: '#F58735',
        Mar: 8,
        Apr: 19,
        May: 21,
        Jun: 9,
        Jul: 30,
        Aug: 14,
        Sep: 34,
        Oct: 16,
        Nov: 3,
        Dec: 0,
        Jan: 0,
        Feb: 0,
      },
      {
        name: 'CSOs, NGOs, INGOs',
        value: 63,
        color: '#DC5848',
        Mar: 7,
        Apr: 14,
        May: 12,
        Jun: 4,
        Jul: 13,
        Aug: 7,
        Sep: 22,
        Oct: 9,
        Nov: 2,
        Dec: 0,
        Jan: 0,
        Feb: 0,
      },
      {
        name: 'No help',
        value: 63,
        color: '#FBB458',
        Mar: 12,
        Apr: 24,
        May: 12,
        Jun: 9,
        Jul: 14,
        Aug: 10,
        Sep: 2,
        Oct: 5,
        Nov: 2,
        Dec: 0,
        Jan: 0,
        Feb: 0,
      },
      {
        name: 'SAC Welfare Groups',
        value: 63,
        color: '#A1BB79',
        Mar: 5,
        Apr: 7,
        May: 8,
        Jun: 0,
        Jul: 12,
        Aug: 5,
        Sep: 20,
        Oct: 10,
        Nov: 1,
        Dec: 0,
        Jan: 0,
        Feb: 0,
      },
      {
        name: 'NUG Administration',
        value: 63,
        color: '#4285F4',
        Mar: 0,
        Apr: 1,
        May: 2,
        Jun: 0,
        Jul: 3,
        Aug: 2,
        Sep: 6,
        Oct: 3,
        Nov: 1,
        Dec: 0,
        Jan: 0,
        Feb: 0,
      },
    ],
  },
]

// const colors:string[] = [];
// function colorExtractor(data:Line[]) {
//     data.forEach(element => {
//         colors.push(element.color)
//     })
//     return colors;
// }
// console.log(colorExtractor(lineChart[0].data));
