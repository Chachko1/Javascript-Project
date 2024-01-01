window.addEventListener("load", solve);

function solve() {
  const ulElement = document.getElementById('preview-list');
  const studentInputElement = document.getElementById('student');
  const universityInputElement = document.getElementById('university');
  const scoreInputElement = document.getElementById('score');
  const nextButtonElement = document.getElementById('next-btn');

  nextButtonElement.addEventListener('click', (e) => {
    e.preventDefault();
    if(!studentInputElement.value||!universityInputElement.value||!scoreInputElement.value){
      return;
    }

   
    const liElement = document.createElement('li');
    liElement.className = 'application';

    const articleElement = document.createElement('article');

    const articleHeaderElement = document.createElement('h4');

    articleHeaderElement.textContent = studentInputElement.value;

    const universityParagraphElement = document.createElement('p');
    
  
    universityParagraphElement.textContent = `University: ${universityInputElement.value}`;

    const scoreParagraphElement = document.createElement('p');
    

    scoreParagraphElement.textContent = `Score: ${scoreInputElement.value}`;

    articleElement.appendChild(articleHeaderElement);
    articleElement.appendChild(universityParagraphElement);
    articleElement.appendChild(scoreParagraphElement);

    const editButtonElement = document.createElement('button');
    editButtonElement.classList.add('action-btn');
    editButtonElement.classList.add('edit');
    editButtonElement.textContent = 'edit';
    const applyButtonElement = document.createElement('button');
    applyButtonElement.classList.add('action-btn');
    applyButtonElement.classList.add('apply');
    applyButtonElement.textContent = 'apply';
    liElement.appendChild(articleElement);
    liElement.appendChild(editButtonElement);
    liElement.appendChild(applyButtonElement);

    ulElement.appendChild(liElement);
    studentInputElement.value = '';
    universityInputElement.value = '';
    scoreInputElement.value = '';
    nextButtonElement.setAttribute('disabled', true);

    editButtonElement.addEventListener('click', ()=>{
          const studentName= ulElement.querySelector('h4').textContent;
          const paragraphs=Array.from(ulElement.querySelectorAll('p'));
          
          const universityParagraph=paragraphs[0];
          const universityName=universityParagraph.textContent.split(': ')[1];
          const scoreNumberParagraph=paragraphs[1];
          const scoreNumber=scoreNumberParagraph.textContent.split(': ')[1];
          

          studentInputElement.value=studentName;
          universityInputElement.value = universityName;
          scoreInputElement.value = scoreNumber;

          ulElement.removeChild(liElement);
          nextButtonElement.disabled=false;

    })

    applyButtonElement.addEventListener('click',()=>{
      const takenLi=liElement;
      ulElement.removeChild(liElement);
      const UlCandidates=document.getElementById('candidates-list');
      takenLi.removeChild(applyButtonElement);
      takenLi.removeChild(editButtonElement);
      UlCandidates.appendChild(takenLi);

    })
  });
}