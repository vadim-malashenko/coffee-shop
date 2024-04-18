import MenuService from "./MenuService.js"
import MenuPresenter from "./MenuPresenter.js"

export default class CoffeeShop
{
    #service = new Set()
    #presenter = new Set()

    constructor()
    {
        this.#service.add(`menu`, new MenuService())

        window.addEventListener(`load`, this.onLoad.bind(this))
    }

    async onLoad(ev)
    {
        this.#presenter.add(
            `menu`,
            new MenuPresenter(
                document.body,
                await this.#service.get(`menu`).getDrinks()
            )
        )
    }
}