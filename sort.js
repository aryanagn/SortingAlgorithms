// Define the algorithm to visualize (in this case, bubble sort)
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n-1; i++) {
      for (let j = 0; j < n-i-1; j++) {
        if (arr[j] > arr[j+1]) {
          let temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
        }
      }
    }
  }

  //Set up the visualization
  const container = document.getElementById("container");
  const bars = [];

  //Generate a random array of values to sort
  const arr = Array.from({length: 20}, () => Math.floor(Math.random() * 100));

  //Create a bar element for each value in the array
  for (let i = 0; i < arr.length; i++) {
    const bar = document.createElement("div");
    const text = document.createElement("span");
    bar.className = "bar";
    bar.style.height = `${arr[i]}px`;
    text.innerText = arr[i];
    bar.appendChild(text);
    container.appendChild(bar);
    bars.push(bar);
  }

  //Call the sorting algorithm and animate the bars as they are sorted
  async function sort() {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        bars[j].classList.add("red");
        bars[j+1].classList.add("red");
        await new Promise(resolve => setTimeout(resolve, 100));
        if (arr[j] > arr[j+1]) {
          let temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
          for (let k = 0; k < arr.length; k++) {
            bars[k].style.height = `${arr[k]}px`;
            bars[k].firstChild.innerText = arr[k];
          }
        }
        bars[j].classList.remove("red");
        bars[j+1].classList.remove("red");
      }
      bars[arr.length - i - 1].classList.add("green");
    }
  }

  //Call the sorting function when the button is clicked
  const sortButton = document.getElementById("sortButton");
  sortButton.addEventListener("click", sort);

