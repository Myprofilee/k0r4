const mobilesList = document.querySelector(".mobiles-table-content");

const fetchMobilePhones = (data) => {
  let mobilelist = "";

  data.map((doc) => {
    const product = doc.data();
    const li = `
        <tr>
            <td>${product.name}</td>
            <td contenteditable="true">${product.color}</td>
             <td contenteditable="true"><img src=${product.image} width="50px"></td>
            <td contenteditable="true">${product.price}</td>
            <td contenteditable="true">${product.storage}</td>
            <td contenteditable="true">${product.processor}</td>
            <td contenteditable="true">${product.camera}</td>
            <td contenteditable="true">${product.battery}</td>
            <td><i class="material-icons" onClick="updateItem('${product.name}')">check</i></td>
            
        </tr>
        `;

    mobilelist += li;
  });
  mobilesList.innerHTML = mobilelist;
};
const updateItem = (name) => {
  console.log(name);
};
