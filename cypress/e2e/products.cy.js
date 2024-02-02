import * as element from "@helpers/elements";
import * as route from "@helpers/route";
import { PRODUCTS } from "@tests/const/routes";
import * as productPage from "@tests/pages/products.page";
import * as assert from "@helpers/asserts";

describe("Products Test", function () {
  beforeEach(() => {
    route.visit(PRODUCTS.product);
  });

  it("Successfull search product", () => {
    element.clearAndFillField(productPage.searchBar, "blue top");
    element.click(productPage.searchIcon)

    assert.containText("Blue Top ");
  });

  it.only("Successfull search & add products in cart", () => {
    element.clearAndFillField(productPage.searchBar, "blue top");
    element.click(productPage.searchIcon)

    element.forceClick(productPage.addToCartBtn)

    assert.containText("Your product has been added into cart.");
  });

})