export default function dominoUtils(domino: [number, number][]) {
    function sameNumber() {
      return domino.filter(([top, bottom]) => top === bottom).length;
    }
  

    function sortAscending() { 
        return domino.sort((a,b) => (a[0] + a[1]) - (b[0] + b[1]))
    }

    function sortDescending() {
        return domino.sort((a,b) => ((b[0] + b[1]) - (a[0] + a[1])))
    }

    function removeDuplicates() {
        return domino.filter((current, index, array) => {
          const normalizedCurrent = [Math.min(current[0], current[1]), Math.max(current[0], current[1])];
          return array.findIndex((element) => {
            return element[0] === normalizedCurrent[0] && element[1] === normalizedCurrent[1];
          }) === index;
        });
    }
    
    function flipCards() {
        return domino.map(([top, bottom]) => [bottom, top]);
  }
  
  function removeTotal(totalNumber : number) {
    return domino.filter(([top, bottom]) => top + bottom !== totalNumber);
  }
  
    
      return {
        sameNumber,
        sortAscending,
        sortDescending,
        removeDuplicates,
        flipCards,
        removeTotal,
      };
  }