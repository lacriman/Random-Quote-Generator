const quotes = [
   "Держи язык за зубами а зубы за губами",
   "Лучше быть последним – первым, чем первым – последним.",
   "Кем бы ты ни был, кем бы ты не стал, помни, где ты был и кем ты стал.",
   "Если волк молчит то лучше его не перебивать.",
   "Брат уйдёт от брата только если звонок на урок.",
   "Работа не волк, работа это ворк, а волк это ходить.",
   "Делай как надо, как не надо не делай.",
   "Если волк молчит то лучше его не перебивать.",
   "Кем бы ты ни был, кем бы ты не стал, помни, где ты был и кем ты стал."
]

const usedIndexes = new Set
const quoteElement = document.getElementById('quote')

function generateQuote() {
   if (usedIndexes.length >= quotes) { 
      usedIndexes.clear()
   }

   while (true) {
      const randomIdx = Math.floor(Math.random() * quotes.length);
      
      if (usedIndexes.has(randomIdx)) continue

      const quote = quotes[randomIdx];
      quoteElement.innerHTML = quote; 
      usedIndexes.add(randomIdx);
      break
   }
}
