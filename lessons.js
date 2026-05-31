const lessons = [
    {
        id: 1,
        narrator: "dianne",
        category: "people",
        narratorAudio: "Audio/people-dianne-best-friend-story.mp3",
        answerAudio: "Audio/people-dianne-best-friend-answer.mp3",
        sentence: ["I", "told", "her", "not", "to", "come", "over"],
        correctOrder: ["I", "told", "her", "not", "to", "come", "over"],
        english: "I told her not to come over.",
        spanish: "Mi mejor amiga quería visitarme en mi casa, pero le dije que no."
    },
    {
        id: 2,
        narrator: "adam",
        category: "people",
        narratorAudio: "Audio/people-adam-ran-into-story.mp3",
        answerAudio: "Audio/people-adam-ran-into-answer.mp3",
        sentence: ["I", "ran", "into", "my", "friend", "at", "the", "store",],
        correctOrder: ["I", "ran", "into", "my", "friend", "at", "the", "store",],
        english: "I ran into my friend t the store.",
        spanish: "Me encontré con mi amigo en el mercado el otro día."
    },
    {
        id: 3,
        narrator: "laura",
        category: "work",
        narratorAudio: "Audio/work-laura-go-without-story.mp3",
        answerAudio: "Audio/work-laura-go-without-answer.mp3",
        sentence: ["I", "guess", "I'll", "have", "to", "go", "without"],
        correctOrder: ["I", "guess", "I'll", "have", "to", "go", "without"],
        english: "I guess I'll have to go without.",
        spanish: "No tengo dinero para comprar el almuerzo."
    },
    {
    id: 4,
    narrator: "john",
    category: "people",
    narratorAudio: "Audio/people-john-look-after-story.mp3",
    answerAudio: "Audio/people-john-look-after-answer.mp3",
    sentence: ["My", "father", "will", "look", "after", "her"],
    correctOrder: ["My", "father", "will", "look", "after", "her"],
    english: "My father will look after her.",
    spanish: "Mi mamá está en la cama con la gripa. Mi papá la va a cuidar."
},
    
{
    id: 5,
    narrator: "jessica",
    category: "people",
    narratorAudio: "Audio/people-jessica-get-over-story.mp3",
    answerAudio: "Audio/people-jessica-get-over-answer.mp3",
    sentence: ["I'm","glad","she", "got", "over", "it"],
    correctOrder: ["I'm","glad","she", "got", "over", "it"],
    english: "I'm glad sh got over it.",
    spanish: "Mi mamá por fin se recuperó de la gripa que tenía."
},
{
    id: 6,
    narrator: "becky",
    category: "outabout",
    narratorAudio: "Audio/outabout-becky-come-across-story.mp3",
    answerAudio: "Audio/outabout-becky-come-across-answer.mp3",
    sentence: ["I", "know", "I'll", "come", "across", "them"],
    correctOrder: ["I", "know", "I'll", "come", "across", "them"],
    english: "I know I'll come across them",
    spanish: "He dejado mis llaves en algún lugar, pero no sé dónde."
},
{
    id: 7,
    narrator: "john",
    category: "work",
    narratorAudio: "Audio/work-john-go-over-story.mp3",
    answerAudio: "Audio/work-john-go-over-answer.mp3",
    sentence: ["I", "need", "to", "go", "over", "my", "answers"],
    correctOrder: ["I", "need", "to", "go", "over", "my", "answers"],
    english: "I need to go over my answers.",
    spanish: "Tengo que revisar mi tarea."
},{

    id: 8,
    narrator: "harry",
    category: "people",
    narratorAudio: "Audio/people-harry-put-up-with-story.mp3",
    answerAudio: "Audio/people-harry-put-up-with-answer.mp3",
    sentence: ["I", "won't", "put", "up", "with", "it",],
    correctOrder: ["I", "won't", "put", "up", "with", "it",],
    english: "I won't put up with it.",
    spanish: "No voy a aguantar el bullicio que hacen los vecinos."
},

{
    id: 9,
    narrator: "mark",
    category: "people",
    narratorAudio: "Audio/people-mark-cut-back-on-story.mp3",
    answerAudio: "Audio/people-mark-cut-back-on-answer.mp3",
    sentence: ["She", "needs", "to", "cut", "back", "on", "sweets"],
    correctOrder: ["She", "needs", "to", "cut", "back", "on", "sweets"],
    english: "She needs to cut back on sweets.",
    spanish: "Mi hermana está engordando mucho! Tiene que reducir el consumo de dulces!"
},  {

    id: 10,
    narrator: "dianne",
    category: "work",
    narratorAudio: "Audio/work-dianne-run-out-of-story.mp3",
    answerAudio: "Audio/work-dianne-run-out-of-answer.mp3",
    sentence: ["I", "ran", "out", "of", "money"],
    correctOrder: ["I", "ran", "out", "of", "money"],
    english: "I ran out of money.",
    spanish: "Iba a comprarme otra hamburguesa, pero se me acabó el dinero."
},

{
    id: 11,
    narrator: "mark",
    category: "people",
    narratorAudio: "Audio/people-mark-get-through-story.mp3",
    answerAudio: "Audio/people-mark-get-through-answer.mp3",
    sentence: ["We're", "going", "to", "get", "through", "this"],
    correctOrder: ["We're", "going", "to", "get", "through", "this"],
    english: "We're going to get through this.",
    spanish: "Hay que llegar al final de estos problemas."
},

{
    id: 12,
    narrator: "laura",
    category: "people",
    narratorAudio: "Audio/people-laura-get-along-story.mp3",
    answerAudio: "Audio/people-laura-get-along-answer.mp3",
    sentence: ["We", "don't", "get", "along", "very", "well"],
    correctOrder: ["We", "don't", "get", "along", "very", "well"],
    english: "We don't get along very well.",
    spanish: "Parece que siempre estoy peleando con mi vecina."
},

{
    id: 13,
    narrator: "jessica",
    category: "people",
    narratorAudio: "Audio/people-jessica-take-off-story.mp3",
    answerAudio: "Audio/people-jessica-take-off-answer.mp3",
    sentence: ["I'm", "going", "to", "take", "off"],
    correctOrder: ["I'm", "going", "to", "take", "off"],
    english: "I'm going to take off.",
    spanish: "Pues, ya me voy, hasta luego."
},

{
    id: 14,
    narrator: "becky",
    category: "people",
    narratorAudio: "Audio/people-becky-fall-for-story.mp3",
    answerAudio: "Audio/people-becky-fall-for-answer.mp3",
    sentence: ["I'm", "not", "going", "to", "fall", "for", "that"],
    correctOrder: ["I'm", "not", "going", "to", "fall", "for", "that"],
    english: "I'm not going to fall for that.",
    spanish: "Yo no creo lo que mi hermana me decía."
},

{
    id: 15,
    narrator: "john",
    category: "funculture",
    narratorAudio: "Audio/funculture-john-come-up-with-story.mp3",
    answerAudio: "Audio/funculture-john-come-up-with-answer.mp3",
    sentence: ["We", "need", "to", "come", "up", "with", "some", "ideas"],
    correctOrder: ["We", "need", "to", "come", "up", "with", "some", "ideas"],
    english: "We need to come up with some ideas.",
    spanish: "Necesitamos un plan para el fin de semana."
},

{
    id: 16,
    narrator: "harry",
    category: "outabout",
    narratorAudio: "Audio/outabout-harry-look-into-story.mp3",
    answerAudio: "Audio/outabout-harry-look-into-answer.mp3",
    sentence: ["I'll", "look", "into", "it"],
    correctOrder: ["I'll", "look", "into", "it"],
    english: "I'll look into it.",
    spanish: "Hay que investigar ese ruido que el carro hace."
},{
    id: 17,
    narrator: "dianne",
    category: "work",
    narratorAudio: "Audio/work-dianne-get-away-with-story.mp3",
    answerAudio: "Audio/work-dianne-get-away-with-answer.mp3",
    sentence: ["He", "lets", "me", "get", "away", "with", "it"],
    correctOrder: ["He", "lets", "me", "get", "away", "with", "it"],
    english: "He lets me get away with it.",
    spanish: "Llego tarde todo el tiempo y mi jefe no dice nada."
},

{
    id: 18,
    narrator: "mark",
    category: "people",
    narratorAudio: "Audio/people-mark-keep-to-herself-story.mp3",
    answerAudio: "Audio/people-mark-keep-to-herself-answer.mp3",
    sentence: ["She", "likes", "to", "keep", "to", "herself"],
    correctOrder: ["She", "likes", "to", "keep", "to", "herself"],
    english: "She likes to keep to herself.",
    spanish: "Ella no le gusta socializar mucho."
},

{
    id: 19,
    narrator: "laura",
    category: "people",
    narratorAudio: "Audio/people-laura-stick-to-story.mp3",
    answerAudio: "Audio/people-laura-stick-to-answer.mp3",
    sentence: ["I", "have", "to", "stick", "to", "my", "diet"],
    correctOrder: ["I", "have", "to", "stick", "to", "my", "diet"],
    english: "I have to stick to my diet.",
    spanish: "Tengo ganas de comerme un dulce, pero no lo voy a comer."
},

{
    id: 20,
    narrator: "john",
    category: "funculture",
    narratorAudio: "Audio/funculture-john-feel-like-story.mp3",
    answerAudio: "Audio/funculture-john-feel-like-answer.mp3",
    sentence: ["I", "don't", "feel", "like", "going", "out"],
    correctOrder: ["I", "don't", "feel", "like", "going", "out"],
    english: "I don't feel like going out.",
    spanish: "Voy a quedarme en casa."
},
    ];