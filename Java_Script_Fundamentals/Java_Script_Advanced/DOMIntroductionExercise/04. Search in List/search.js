function search() {
   const listRef = document.getElementById('towns');
   const searchTextRef = document.getElementById('searchText');
   let resultRef = document.getElementById('result');
   const list = Array.from(listRef.children);
   const searchText = searchTextRef.value;
   let count = 0;
   for (let i=0; i<list.length; i++) {
      if (list[i].textContent.includes(searchText)) {
         count++;
         listRef.children[i].style.textDecoration = 'underline';
         listRef.children[i].style.fontWeight = 'bold';
      } else {
         listRef.children[i].style.textDecoration = '';
         listRef.children[i].style.fontWeight = '';
      }
   }   

   resultRef.textContent = `${count} matches found`;
   resultRef.style.display = 'block';
}
