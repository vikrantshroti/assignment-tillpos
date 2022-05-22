import { useEffect, useState } from "react";
import Counter from "./component/Counter";
import Dropdown from "./component/Dropdown";
import { customers, price, rules } from "./assets/mock/data";
import Checkout from "./utils/Checkout";
import { findIndexByKeyValue } from "./utils/commonUtils";
import { NO_OFFER_APPLICABLE, ID } from "./utils/Constants";
import "./App.css";

function App() {
  const [qtySmallPizza, setQtySmallPizza] = useState(0);
  const [qtyMediumPizza, setQtyMediumPizza] = useState(0);
  const [qtyLargePizza, setQtyLargePizza] = useState(0);

  const [output, setOutput] = useState(0);
  const [ruleOfferDescription, setRuleOfferDescription] =
    useState(NO_OFFER_APPLICABLE);

  const [selectedDropdownOption, setSelectedDropdownOption] =
    useState<String>();

  function onClickAddSmallPizza() {
    setQtySmallPizza(qtySmallPizza + 1);
  }

  function onClickAddMediumPizza() {
    setQtyMediumPizza(qtyMediumPizza + 1);
  }

  function onClickAddLargePizza() {
    setQtyLargePizza(qtyLargePizza + 1);
  }

  function onClickSubSmallPizza() {
    if (qtySmallPizza === 0) return;
    setQtySmallPizza(qtySmallPizza - 1);
  }

  function onClickSubMediumPizza() {
    if (qtyMediumPizza === 0) return;
    setQtyMediumPizza(qtyMediumPizza - 1);
  }

  function onClickSubLargePizza() {
    if (qtyLargePizza === 0) return;
    setQtyLargePizza(qtyLargePizza - 1);
  }

  function onChangeDropdown(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedDropdownOption(event.target.value);
    setQtySmallPizza(0);
    setQtyMediumPizza(0);
    setQtyLargePizza(0);
    if (event.target.value === "default") {
      setRuleOfferDescription(NO_OFFER_APPLICABLE);
    } else {
      const index = findIndexByKeyValue(rules, "customer", event.target.value);
      setRuleOfferDescription(rules[index].description);
    }
  }

  useEffect(() => {
    let output = new Checkout(price, rules);
    output.addItems(qtySmallPizza, qtyMediumPizza, qtyLargePizza);
    output.applyRules(selectedDropdownOption);
    setOutput(output.total());
  }, [selectedDropdownOption, qtySmallPizza, qtyMediumPizza, qtyLargePizza]);

  return (
    <div className="app-container">
      <Dropdown
        className={"app-dropdown"}
        id={ID.ID_CUSTOMER_DROPDOWN}
        values={customers}
        onChangeDropdown={onChangeDropdown}
      />
      <span className="app-rule-offer">{ruleOfferDescription}</span>
      <div className="app-text-counter-main-container">
        <div className="app-text-counter-container">
          <span className="app-text-name">{price[0].name}</span>
          <span className="app-text-price">${price[0].price}</span>
          <span className="app-text-description">{price[0].description}</span>
          <Counter
            idQtyText={ID.ID_QTY_TEXT_SMAL_PIZZA}
            idBtnAdd={ID.ID_BTN_ADD_SMALL_PIZZA}
            idBtnSub={ID.ID_BTN_SUB_SMALL_PIZZA}
            onClickAdd={onClickAddSmallPizza}
            onClickSub={onClickSubSmallPizza}
            quantity={qtySmallPizza}
            className="app-counter-container"
          />
        </div>
        <div className="app-text-counter-container">
          <span className="app-text-name">{price[1].name}</span>
          <span className="app-text-price">${price[1].price}</span>
          <span className="app-text-description">{price[1].description}</span>
          <Counter
            idQtyText={ID.ID_QTY_TEXT_MEDIUM_PIZZA}
            idBtnAdd={ID.ID_BTN_ADD_MEDIUM_PIZZA}
            idBtnSub={ID.ID_BTN_SUB_MEDIUM_PIZZA}
            onClickAdd={onClickAddMediumPizza}
            onClickSub={onClickSubMediumPizza}
            quantity={qtyMediumPizza}
            className="app-counter-container"
          />
        </div>
        <div className="app-text-counter-container">
          <span className="app-text-name">{price[2].name}</span>
          <span className="app-text-price">${price[2].price}</span>
          <span className="app-text-description">{price[2].description}</span>
          <Counter
            idQtyText={ID.ID_QTY_TEXT_LARGE_PIZZA}
            idBtnAdd={ID.ID_BTN_ADD_LARGE_PIZZA}
            idBtnSub={ID.ID_BTN_SUB_LARGE_PIZZA}
            onClickAdd={onClickAddLargePizza}
            onClickSub={onClickSubLargePizza}
            quantity={qtyLargePizza}
            className="app-counter-container"
          />
        </div>
      </div>
      <span
        id={ID.ID_OUTPUT_TEXT}
        className="app-output-text"
      >{`Output: $${output.toFixed(2)}`}</span>
    </div>
  );
}

export default App;
