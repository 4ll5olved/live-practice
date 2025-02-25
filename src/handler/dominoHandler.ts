import { dominoCards } from "@/app/source/source";
import dominoUtils from "@/service/service";

const buttons = () => {
    const handleSameNumber = () => {
        const result = dominoUtils(dominoCards).sameNumber();
        console.log(result);
        const element = document.getElementById('same-number-result');
        if (element) {
            element.innerHTML = `[[${result.map((card:[number, number]) => `[${card[0]}, ${card[1]}]`).join(', ')}]]`;
          } else {
            alert('Error: Input element not found');
          }
      };
    
      const handleSortAscending = () => {
        const result = dominoUtils(dominoCards).sortAscending();
        console.log(result);
        const element = document.getElementById('sort-ascending-result');
        if (element) {
            element.innerHTML = `[[${result.map((card:[number, number]) => `[${card[0]}, ${card[1]}]`).join(', ')}]]`;
          } else {
            alert('Error: Input element not found');
          }
      };
    
      const handleSortDescending = () => {
        const result = dominoUtils(dominoCards).sortDescending();
        console.log(result);
        const element = document.getElementById('sort-descending-result');
        if (element) {
            element.innerHTML = `[[${result.map(card => `[${card[0]}, ${card[1]}]`).join(', ')}]]`;
          } else {
            alert('Error: Input element not found');
          }
      };
    
      const handleRemoveDuplicates = () => {
        const result = dominoUtils(dominoCards).removeDuplicates();
        console.log(result);
        const element = document.getElementById('remove-duplicates-result');
        if (element) {
            element.innerHTML = `[[${result.map(card => `[${card[0]}, ${card[1]}]`).join(', ')}]]`;
          } else {
            alert('Error: Input element not found');
          }
      };
    
      const handleFlipCards = () => {
        const result = dominoUtils(dominoCards).flipCards();
        console.log(result);
        const element = document.getElementById('flip-cards-result');
        if (element) {
            element.innerHTML = `[[${result.map(card => `[${card[0]}, ${card[1]}]`).join(', ')}]]`;
          } else {
            alert('Error: Input element not found');
          }
    };
    
    const handleRemoveTotal = () => {
        const totalNumberInput = document.getElementById('total-number-input') as HTMLInputElement;
        if (totalNumberInput) {
          const totalNumber = parseInt(totalNumberInput.value);
          const result = dominoUtils(dominoCards).removeTotal(totalNumber);
          console.log(result);
          const element = document.getElementById('remove-total-result');
          if (element) {
            element.innerHTML = `[[${result.map(card => `[${card[0]}, ${card[1]}]`).join(', ')}]]`;
          } else {
            alert('Error: Input element not found');
          }
        } else {
          alert('Error: Input element not found');
        }
    };
    
    return {
        handleSameNumber,
        handleSortAscending,
        handleSortDescending,
        handleRemoveDuplicates,
        handleFlipCards,
        handleRemoveTotal
      }
}

export default buttons