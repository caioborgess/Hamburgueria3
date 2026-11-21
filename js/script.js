/* Edite identidade e catálogo aqui. Preços em CENTAVOS: 2990 = R$ 29,90. */
window.BRASA_DATA = {
  brand: {
    name: "BRASA 47",
    tagline: "Bateu a fome? A brasa resolve!",
    colors: {
      background: "#FFF8EB",
      surface: "#FFFFFF",
      accent: "#E52B2F",
      text: "#251B18",
      highlight: "#FFCC29",
    },
    // Obrigatório para ativar WhatsApp. Só dígitos: país + DDD + número real.
    whatsapp: "",
    // Ative apenas depois de configurar o endereço real confirmado.
    addressVerified: false,
    aboutImage: "assets/sobre-cheeseburger.webp",
    heroProductId: "smokebacon",
    heroDescription:
      "Pão tostado, queijo derretendo e carne na brasa. Escolha o seu e monte do seu jeito.",
    address: "Rua Exemplo, 47 · Bairro Modelo",
    city: "Cidade demonstrativa · Brasil",
    hours: [
      "Terça a quinta · 18h às 23h",
      "Sexta e sábado · 18h à 0h",
      "Domingo · 18h às 22h",
      "Segunda · fechado",
    ],
    instagram: "",
    instagramLabel: "Instagram ainda não configurado",
    heroImage: "assets/bacon-47-hero.webp",
    story:
      "Nesta história fictícia, o número 47 era a senha de um lanche de madrugada. A turma gostou tanto que fez dele o nome da hamburgueria. Daí veio a ideia do nosso balcão: pedir sem cerimônia, escolher os extras e guardar a última batata pra quem sentar junto.",
  },
  // Taxas em centavos. Confirme a área e os preços antes de ativar entregas reais.
  deliveryCity: "São Paulo",
  deliveryState: "SP",
  deliveryVerified: false,
  deliveryZones: [
    { name: "Centro", fee: 500 },
    { name: "Sé", fee: 500 },
    { name: "Jardim das Flores", fee: 700 },
    { name: "Vila Nova", fee: 900 },
  ],
  categories: [
    { id: "burgers", name: "Hambúrgueres", symbol: "01" },
    { id: "combos", name: "Combos", symbol: "02" },
    { id: "sides", name: "Porções", symbol: "03" },
    { id: "drinks", name: "Bebidas", symbol: "04" },
    { id: "desserts", name: "Sobremesas", symbol: "05" },
  ],
  extras: {
    bacon: { name: "Bacon extra", price: 500 },
    cheese: { name: "Queijo extra", price: 350 },
    egg: { name: "Ovo", price: 300 },
    sauce: { name: "Molho especial", price: 200 },
    patty: { name: "Hambúrguer extra", price: 900 },
  },
  products: [
    {
      id: "classic47",
      name: "Clássico 47",
      category: "burgers",
      price: 2990,
      description:
        "O encontro que sempre dá certo. Suculento, fresco e no ponto.",
      ingredients: [
        "Pão brioche",
        "Blend bovino 160 g",
        "Queijo cheddar",
        "Alface",
        "Tomate",
        "Cebola",
        "Molho da casa",
      ],
      removable: [
        "Queijo cheddar",
        "Alface",
        "Tomate",
        "Cebola",
        "Molho da casa",
      ],
      extras: ["bacon", "cheese", "egg", "sauce", "patty"],
      image: "assets/classico-47.webp",
      badge: "O ORIGINAL",
      featured: true,
    },
    {
      id: "doublefire",
      name: "Duplo Fogo",
      category: "burgers",
      price: 3990,
      description: "Dois blends, cheddar em dobro e uma fome à altura.",
      ingredients: [
        "Pão brioche",
        "Dois blends bovinos de 120 g",
        "Queijo cheddar",
        "Picles",
        "Cebola",
        "Molho da casa",
      ],
      removable: ["Queijo cheddar", "Picles", "Cebola", "Molho da casa"],
      extras: ["bacon", "cheese", "egg", "sauce", "patty"],
      image: "assets/burger-double.webp",
      badge: "DOSE DUPLA",
      featured: true,
    },
    {
      id: "smokebacon",
      name: "Bacon na Brasa",
      category: "burgers",
      price: 3590,
      description:
        "Bacon crocante, cebola caramelizada e aquele toque de barbecue.",
      ingredients: [
        "Pão brioche",
        "Blend bovino 160 g",
        "Bacon",
        "Queijo cheddar",
        "Cebola caramelizada",
        "Barbecue",
      ],
      removable: ["Bacon", "Queijo cheddar", "Cebola caramelizada", "Barbecue"],
      extras: ["bacon", "cheese", "egg", "sauce", "patty"],
      image: "assets/bacon-na-brasa.webp",
      badge: "INTENSO",
      featured: true,
    },
    {
      id: "frangocrocante",
      name: "Frango Crocante",
      category: "burgers",
      price: 3190,
      description: "Frango empanado, picles e maionese de limão no pão macio.",
      ingredients: [
        "Pão brioche",
        "Filé de frango empanado",
        "Picles",
        "Alface",
        "Maionese de limão",
      ],
      removable: ["Picles", "Alface", "Maionese de limão"],
      extras: ["cheese", "bacon", "sauce"],
      image: "assets/frango-crocante.webp",
      badge: "CROCANTE",
    },
    {
      id: "jalapeno",
      name: "Jalapeño na Brasa",
      category: "burgers",
      price: 3690,
      description:
        "Carne na brasa com cheddar derretido, jalapeño em rodelas e maionese defumada.",
      ingredients: [
        "Pão com gergelim",
        "Blend bovino 160 g",
        "Queijo cheddar",
        "Jalapeño",
        "Maionese defumada",
      ],
      removable: ["Queijo cheddar", "Jalapeño", "Maionese defumada"],
      extras: ["cheese", "bacon", "sauce"],
      image: "assets/jalapeno.webp",
      badge: "PICANTE",
    },
    {
      id: "horta",
      name: "Horta da Casa",
      category: "burgers",
      price: 3090,
      description:
        "Hambúrguer de grão-de-bico com casquinha dourada, tomate e molho de ervas.",
      ingredients: [
        "Pão com gergelim",
        "Hambúrguer de grão-de-bico",
        "Alface",
        "Tomate",
        "Cebola roxa",
        "Molho de ervas",
      ],
      removable: ["Alface", "Tomate", "Cebola roxa", "Molho de ervas"],
      extras: ["cheese", "egg"],
      image: "assets/horta.webp",
      badge: "VEGETARIANO",
    },
    {
      id: "ovonachapa",
      name: "Ovo na Chapa",
      category: "burgers",
      price: 3490,
      description:
        "Ovo na chapa sobre o hambúrguer, cheddar, tiras de bacon e molho da casa.",
      ingredients: [
        "Pão brioche",
        "Blend bovino 160 g",
        "Ovo",
        "Queijo cheddar",
        "Bacon",
        "Molho da casa",
      ],
      removable: ["Ovo", "Queijo cheddar", "Bacon", "Molho da casa"],
      extras: ["egg", "bacon", "cheese", "sauce"],
      image: "assets/ovo-na-chapa.webp",
    },
    {
      id: "combo47",
      name: "Combo Clássico",
      category: "combos",
      price: 4390,
      description:
        "Clássico 47 + fritas de 120 g + refrigerante cola de 350 ml.",
      ingredients: [
        "Pão brioche",
        "Blend bovino 160 g",
        "Queijo cheddar",
        "Alface",
        "Tomate",
        "Cebola",
        "Molho da casa",
        "Fritas 120 g",
        "Refrigerante cola 350 ml",
      ],
      removable: [
        "Queijo cheddar",
        "Alface",
        "Tomate",
        "Cebola",
        "Molho da casa",
      ],
      extras: ["bacon", "cheese", "egg", "sauce", "patty"],
      image: "assets/classico-47.webp",
      badge: "COMPLETO",
    },
    {
      id: "combodouble",
      name: "Combo Duplo",
      category: "combos",
      price: 5390,
      description:
        "Duplo Fogo + fritas de 120 g + refrigerante cola de 350 ml.",
      ingredients: [
        "Pão brioche",
        "Dois blends bovinos de 120 g",
        "Queijo cheddar",
        "Picles",
        "Cebola",
        "Molho da casa",
        "Fritas 120 g",
        "Refrigerante cola 350 ml",
      ],
      removable: ["Queijo cheddar", "Picles", "Cebola", "Molho da casa"],
      extras: ["bacon", "cheese", "egg", "sauce", "patty"],
      image: "assets/burger-double.webp",
      badge: "FOME GRANDE",
    },
    {
      id: "fries",
      name: "Fritas da Casa",
      category: "sides",
      price: 1690,
      description: "Porção de 200 g. Douradas por fora, macias por dentro.",
      ingredients: ["Batata", "Sal", "Páprica"],
      removable: ["Sal", "Páprica"],
      extras: ["bacon", "cheese", "sauce"],
      image: "assets/fries.webp",
      badge: "CROCANTES",
    },
    {
      id: "onion",
      name: "Onion Rings",
      category: "sides",
      price: 1890,
      description: "Dez anéis de cebola empanados para acompanhar sua escolha.",
      ingredients: ["Cebola", "Empanado", "Sal"],
      removable: ["Sal"],
      extras: ["sauce"],
      image: "assets/onion-rings.webp",
      badge: "PARA DIVIDIR",
    },
    {
      id: "cola",
      name: "Refrigerante Cola",
      category: "drinks",
      price: 690,
      description: "Lata de 350 ml, servida gelada.",
      ingredients: ["Refrigerante sabor cola"],
      removable: [],
      extras: [],
      image: "assets/cola.webp",
    },
    {
      id: "lemonade",
      name: "Limonada da Casa",
      category: "drinks",
      price: 1190,
      description: "Limão, gelo e frescor. Copo de 400 ml.",
      ingredients: ["Limão", "Água", "Açúcar", "Gelo"],
      removable: ["Açúcar", "Gelo"],
      extras: [],
      image: "assets/limonada.webp",
    },
    {
      id: "water",
      name: "Água Mineral",
      category: "drinks",
      price: 490,
      description: "Sem gás. Garrafa de 500 ml.",
      ingredients: ["Água mineral"],
      removable: [],
      extras: [],
      image: "assets/agua.webp",
    },
    {
      id: "brownie",
      name: "Brownie da Brasa",
      category: "desserts",
      price: 1490,
      description:
        "Chocolate intenso, casquinha delicada e calda. Porção de 100 g.",
      ingredients: ["Brownie de chocolate", "Calda de chocolate"],
      removable: ["Calda de chocolate"],
      extras: [],
      image: "assets/brownie.webp",
    },
    {
      id: "shake",
      name: "Milk-shake Chocolate",
      category: "desserts",
      price: 1990,
      description: "Cremoso até a última gota. Copo de 400 ml.",
      ingredients: ["Sorvete de chocolate", "Leite", "Calda de chocolate"],
      removable: ["Calda de chocolate"],
      extras: [],
      image: "assets/shake.webp",
    },
  ],
};


/* A mesma comanda é desenhada no catálogo, no link do cliente e no balcão. */
(() => {
  "use strict";
  const money = (cents) =>
    (cents / 100).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  function el(tag, cls, text) {
    const element = document.createElement(tag);
    if (cls) element.className = cls;
    if (text !== undefined) element.textContent = text;
    return element;
  }
  function stages(delivery) {
    return [
      "Recebido",
      "Na chapa",
      delivery ? "Saiu para entrega" : "Pronto para retirar",
      delivery ? "Entregue" : "Retirado",
    ];
  }
  function render(root, order, { demo = false, advance } = {}) {
    const steps = stages(order.delivery);
    const current = order.times.length - 1;
    const header = el("section", "track-poster");
    header.append(
      el(
        "p",
        "track-kicker",
        demo ? "DEMONSTRAÇÃO · PEDIDO SIMULADO" : "COMANDA · " + order.label,
      ),
      el(
        "h2",
        "",
        order.approved ? steps[Math.max(0, current)] + "." : order.state,
      ),
      el(
        "p",
        "track-caption",
        order.delivery ? "Entrega" : "Retirada no balcão",
      ),
    );
    const flow = el("ol", "track-steps");
    for (const [index, name] of steps.entries()) {
      const li = el(
        "li",
        index <= current && order.approved ? "reached" : "",
        name,
      );
      if (index === current && order.approved)
        li.setAttribute("aria-current", "step");
      if (order.times[index])
        li.append(
          el(
            "time",
            "",
            new Date(order.times[index]).toLocaleTimeString("pt-BR", {
              hour: "2-digit",
              minute: "2-digit",
            }),
          ),
        );
      flow.append(li);
    }
    const receipt = el("section", "track-slip");
    receipt.append(
      el("h3", "", "Sua comanda"),
      el("p", "track-status", order.state),
    );
    if (order.name) receipt.append(el("p", "", order.name));
    if (order.items?.length) {
      const list = el("ul", "track-lines");
      for (const item of order.items) {
        const li = el("li");
        li.append(
          el("strong", "", item.quantity + "× " + item.name),
          el("span", "", money(item.quantity * item.unit)),
        );
        if (item.detail) li.append(el("small", "", item.detail));
        list.append(li);
      }
      receipt.append(list);
    } else if (order.summary)
      receipt.append(el("pre", "track-summary", order.summary));
    if (order.delivery && Number.isInteger(order.fee))
      receipt.append(el("p", "", "Frete · " + money(order.fee)));
    receipt.append(el("p", "track-total", "Total · " + money(order.total)));
    if (order.destination)
      receipt.append(el("p", "track-address", order.destination));
    const body = el("div", "track-columns"),
      progress = el("section", "track-progress");
    progress.append(header, flow);
    if (advance && order.approved && current < 3) {
      const next = [
        "Começar preparo",
        order.delivery
          ? "Marcar saída para entrega"
          : "Marcar pronto para retirada",
        order.delivery ? "Confirmar entrega" : "Confirmar retirada",
      ][Math.max(0, current)];
      const button = el("button", "track-action", next);
      button.type = "button";
      button.addEventListener("click", async () => {
        button.disabled = true;
        try {
          await advance();
        } finally {
          button.disabled = false;
        }
      });
      if (demo)
        progress.append(
          el(
            "p",
            "track-demo",
            "Teste a atualização do balcão neste pedido de exemplo.",
          ),
        );
      progress.append(button);
    }
    body.append(progress, receipt);
    root.replaceChildren(body);
  }
  window.BrasaComandas = { render };
  const page = document.getElementById("order-page");
  if (!page) return;
  const staff = location.pathname === "/balcao";
  const id = location.pathname.split("/").pop();
  const status = document.getElementById("panel-status"),
    list = document.getElementById("panel-list");
  let selected = "",
    seen = null,
    busy = false;
  async function refresh() {
    if (busy) return;
    busy = true;
    try {
      const response = await fetch(
        staff ? "/api/balcao" : "/api/pedidos/" + encodeURIComponent(id),
        { cache: "no-store" },
      );
      if (!response.ok)
        throw Error(
          response.status === 404
            ? "Pedido não encontrado."
            : "Falha ao atualizar. Confira a conexão.",
        );
      const data = await response.json();
      if (!staff) {
        render(page, data);
        status.textContent = "Atualização automática";
        return;
      }
      const orders = data.orders;
      const fresh = seen && orders.filter((o) => !seen.has(o.id)).length;
      seen = new Set(orders.map((o) => o.id));
      status.textContent = fresh
        ? "Nova comanda recebida!"
        : "Comandas pagas · atualização automática";
      if (fresh) document.title = "Nova comanda · Brasa 47";
      if (!orders.length) {
        page.replaceChildren(
          el("p", "track-empty", "Aguardando o primeiro pedido aprovado."),
        );
        list.replaceChildren();
        return;
      }
      if (!seen.has(selected)) selected = orders[0].id;
      function show() {
        const order = orders.find((o) => o.id === selected);
        const picker = list.querySelector("select") || el("select");
        picker.replaceChildren();
        picker.setAttribute("aria-label", "Escolher comanda paga");
        for (const o of orders)
          picker.add(
            new Option(
              o.label + " · " + (o.name || "Pedido") + " · " + money(o.total),
              o.id,
            ),
          );
        picker.value = selected;
        picker.onchange = () => {
          selected = picker.value;
          show();
        };
        if (!picker.isConnected)
          list.replaceChildren(picker);
        render(page, order, {
          advance: async () => {
            try {
              const result = await fetch("/api/balcao/" + order.id, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ step: order.times.length }),
              });
              if (!result.ok && result.status !== 409) throw Error();
              await refresh();
            } catch {
              status.textContent =
                "Não foi possível atualizar a etapa. Confira a comanda.";
            }
          },
        });
      }
      show();
    } catch (error) {
      status.textContent = error.message;
    } finally {
      busy = false;
    }
  }
  refresh();
  setInterval(() => {
    if (!document.hidden) refresh();
  }, 8000);
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) refresh();
  });
})();


/* Pedidos no navegador, sem dependências.
   1. Regras de preço e validação (funções puras).
   2. Estado e persistência do carrinho.
   3. Renderização e eventos da interface. */
(() => {
  "use strict";
  const data = window.BRASA_DATA;
  const productById = (id) =>
    data.products.find((product) => product.id === id);
  const money = (cents) =>
    (cents / 100).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  const quantity = (value) =>
    Math.min(99, Math.max(1, Math.floor(Number(value)) || 1));
  const unique = (values) => [...new Set(values)];
  const newId = () =>
    "item-" +
    (globalThis.crypto?.randomUUID?.() ||
      Date.now() + "-" + Math.random().toString(36).slice(2));
  const text = (value, max = 180) =>
    typeof value === "string" ? value.trim().slice(0, max) : "";
  // Qualquer texto inserido em um template HTML passa por escapeHTML.
  // Observações e dados pessoais nunca são interpretados como marcação.
  const escapeHTML = (value) =>
    String(value).replace(
      /[&<>"']/g,
      (char) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[char],
    );

  function normalizeItem(raw) {
    if (!raw || typeof raw !== "object") return null;
    const product = productById(raw.productId);
    if (!product) return null;
    return {
      id:
        typeof raw.id === "string" && /^item-[a-z0-9-]+$/i.test(raw.id)
          ? raw.id
          : newId(),
      productId: product.id,
      quantity: quantity(raw.quantity),
      extras: unique(Array.isArray(raw.extras) ? raw.extras : []).filter(
        (id) => product.extras.includes(id) && Object.hasOwn(data.extras, id),
      ),
      removed: unique(Array.isArray(raw.removed) ? raw.removed : []).filter(
        (name) =>
          product.removable.includes(name) &&
          product.ingredients.includes(name),
      ),
      notes: text(raw.notes),
    };
  }

  // O armazenamento é uma entrada não confiável. Ignoramos preços salvos,
  // itens fora do catálogo e adicionais que não pertencem ao produto.
  function normalizeCart(raw) {
    if (!Array.isArray(raw)) return [];
    const usedIds = new Set();
    return raw
      .slice(0, 50)
      .map(normalizeItem)
      .filter(Boolean)
      .map((item) => {
        if (usedIds.has(item.id)) item.id = newId();
        usedIds.add(item.id);
        return item;
      });
  }

  function unitPrice(item) {
    const product = productById(item.productId);
    return (
      product.price +
      item.extras.reduce((sum, id) => sum + data.extras[id].price, 0)
    );
  }
  const subtotal = (item) => unitPrice(item) * item.quantity;
  const total = (items) => items.reduce((sum, item) => sum + subtotal(item), 0);
  // Verifica formato internacional; não comprova que existe uma conta WhatsApp.
  const validPhone = (phone) =>
    typeof phone === "string" &&
    /^[1-9]\d{7,14}$/.test(phone) &&
    !/^(\d)\1+$/.test(phone);

  const cityLabel = data.deliveryCity + " – " + data.deliveryState;
  const normalizePlace = (value) =>
    String(value || "")
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

  function deliveryFee(customer) {
    if (customer.fulfillment === "pickup") return 0;
    const zone = data.deliveryZones.find(
      (zone) => zone.name === customer.neighborhood,
    );
    return zone && Number.isSafeInteger(zone.fee) && zone.fee >= 0
      ? zone.fee
      : null;
  }

  function validateCustomer(customer) {
    if (!text(customer.customerName, 80))
      return "Informe seu nome para organizar o pedido.";
    if (!["pickup", "delivery"].includes(customer.fulfillment))
      return "Selecione retirada ou entrega.";
    if (customer.fulfillment === "delivery") {
      if (customer.city !== cityLabel)
        return "Confira a cidade atendida antes de continuar.";
      if (!text(customer.street, 140))
        return "Informe a rua ou avenida da entrega.";
      if (!text(customer.number, 20)) return "Informe o número ou S/N.";
      if (!text(customer.neighborhood, 100))
        return "Informe o bairro da entrega.";
      if (deliveryFee(customer) === null)
        return "Bairro fora da área atendida. Escolha retirada no local.";
    }
    return "";
  }

  function orderSlip(items, customer) {
    const delivery = customer.fulfillment === "delivery";
    return {
      name: text(customer.customerName, 80),
      delivery,
      fee: deliveryFee(customer),
      destination: delivery
        ? [
            text(customer.street, 140),
            text(customer.number, 20),
            text(customer.neighborhood, 100),
            text(customer.city, 100),
            text(customer.cep, 9),
            text(customer.complement, 140),
          ]
            .filter(Boolean)
            .join(" · ")
        : "Retirada no balcão",
      items: items.map((item) => ({
        name: productById(item.productId).name,
        quantity: item.quantity,
        unit: unitPrice(item),
        detail: [
          ...item.extras.map((id) => data.extras[id].name),
          ...item.removed.map((name) => "Sem " + name),
          item.notes,
        ]
          .filter(Boolean)
          .join(" · "),
      })),
    };
  }
  function buildMessage(items, customer) {
    const lines = [`Cliente: ${text(customer.customerName, 80)}`];
    items.forEach((item) => {
      const product = productById(item.productId);
      lines.push("");
      lines.push(
        `${item.quantity}x ${product.name}`,
        item.extras.length
          ? "Adicionais: " +
              item.extras.map((id) => data.extras[id].name).join(", ")
          : "Sem adicionais",
      );
      if (item.removed.length)
        lines.push("Retirar: " + item.removed.join(", "));
      lines.push("", `Preço unitário: ${money(unitPrice(item))}`);
      if (text(item.notes)) lines.push("Observação: " + text(item.notes));
    });
    const fee = deliveryFee(customer);
    if (customer.fulfillment === "delivery")
      lines.push(
        "",
        "Produtos: " + money(total(items)),
        "Entrega: " + money(fee),
      );
    lines.push(
      "",
      `Total estimado: ${money(total(items) + fee)}`,
      "Podem confirmar meu pedido e o valor final?",
      "",
    );
    if (customer.fulfillment === "delivery") {
      const address = [
        `${text(customer.street, 140)}, ${text(customer.number, 20)}`,
        text(customer.neighborhood, 100),
        customer.city,
        text(customer.cep, 9),
        text(customer.complement, 140),
      ]
        .filter(Boolean)
        .join(" — ");
      lines.push("Meu endereço é " + address);
    } else {
      lines.push("Retirada no local.");
    }
    return lines.join("\n");
  }
  const whatsappUrl = (phone, message) =>
    validPhone(phone)
      ? `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
      : null;

  // Permite testar as regras com Node sem precisar de um navegador.
  window.BrasaCore = {
    normalizeCart,
    normalizeItem,
    unitPrice,
    subtotal,
    total,
    money,
    validPhone,
    deliveryFee,
    validateCustomer,
    buildMessage,
    orderSlip,
    whatsappUrl,
    escapeHTML,
  };
  if (typeof document === "undefined") return;

  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];
  const STORAGE_KEY = "brasa47.moderno.cart.v1";
  const catalogSignature = JSON.stringify({
    products: data.products.map(({ id, price, extras, removable }) => ({
      id,
      price,
      extras,
      removable,
    })),
    extras: data.extras,
  });
  let cart = [];
  let draft = null;
  let editingId = null;
  let returnToCart = false;
  let storageWarning = "";
  let toastTimer;
  const dialogTriggers = new WeakMap();

  function toast(message) {
    $("#toast").textContent = message;
    $("#toast").classList.add("visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(
      () => $("#toast").classList.remove("visible"),
      4000,
    );
  }

  function loadCart() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      if (!saved) return;
      if (saved.version !== 1 || !Array.isArray(saved.items))
        throw new Error("Formato inválido");
      cart = normalizeCart(saved.items);
      storageWarning =
        saved.catalogSignature !== catalogSignature ||
        JSON.stringify(cart) !== JSON.stringify(saved.items)
          ? "O catálogo ou os dados salvos mudaram. Seu carrinho foi atualizado; confira itens, personalizações e preços."
          : "";
    } catch {
      cart = [];
      storageWarning =
        "Não foi possível restaurar o carrinho. Você pode montar um novo pedido normalmente.";
    }
  }

  function saveCart() {
    try {
      if (!cart.length) {
        localStorage.removeItem(STORAGE_KEY);
        return;
      }
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ version: 1, items: cart, catalogSignature }),
      );
    } catch {
      storageWarning =
        "Seu navegador não permitiu salvar o carrinho. O pedido funciona nesta página, mas pode ser perdido ao fechá-la.";
    }
  }

  function openDialog(id) {
    const dialog = document.getElementById(id);
    if (dialog.open) return;
    dialogTriggers.set(dialog, document.activeElement);
    dialog.showModal();
    dialog.scrollTop = 0;
  }

  $$("dialog").forEach((dialog) => {
    dialog.addEventListener("close", () => {
      if (dialog.id === "product-dialog" && returnToCart) {
        returnToCart = false;
        renderCart();
        openDialog("cart-dialog");
        return;
      }
      const trigger = dialogTriggers.get(dialog);
      if (trigger?.isConnected && !document.querySelector("dialog[open]"))
        trigger.focus();
    });
    // Clique no próprio fundo, fora do retângulo do dialog.
    dialog.addEventListener("click", (event) => {
      if (event.target !== dialog) return;
      const box = dialog.getBoundingClientRect();
      if (
        event.clientX < box.left ||
        event.clientX > box.right ||
        event.clientY < box.top ||
        event.clientY > box.bottom
      )
        dialog.close();
    });
  });

  function cardHTML(product) {
    return `<article class="product-card"><button type="button" data-product="${escapeHTML(product.id)}" aria-label="Adicionar e personalizar ${escapeHTML(product.name)} — ${escapeHTML(money(product.price))}"><div class="card-photo"><img src="${escapeHTML(product.image)}" alt="${escapeHTML(product.name)} — imagem ilustrativa" loading="lazy" decoding="async" width="700" height="500">${product.badge ? `<span class="card-badge">${escapeHTML(product.badge)}</span>` : ""}</div><div class="card-body"><h3>${escapeHTML(product.name)}</h3><p>${escapeHTML(product.description)}</p><div class="card-bottom"><span class="card-price">${money(product.price)}</span><span class="add-button" aria-hidden="true">Adicionar <b>+</b></span></div></div></button></article>`;
  }

  function renderProducts(category) {
    const products = data.products.filter(
      (product) => product.category === category,
    );
    $("#product-grid").innerHTML = products.length
      ? products.map(cardHTML).join("")
      : '<p class="inline-empty">Nenhum produto nesta categoria.</p>';
    const categoryName =
      data.categories.find((item) => item.id === category)?.name || "Produtos";
    $("#menu-count").textContent =
      `${categoryName} · ${products.length} opções`;
    $$(".filter-button").forEach((button) =>
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.category === category),
      ),
    );
  }

  function quantityHTML(item, context) {
    const id = context === "product" ? "product-quantity" : `qty-${item.id}`;
    return `<div class="quantity" data-context="${context}" data-item="${item.id || ""}"><button type="button" data-step="-1" aria-label="Diminuir quantidade" ${item.quantity <= 1 ? "disabled" : ""}>−</button><input id="${id}" type="number" min="1" max="99" step="1" value="${item.quantity}" aria-label="Quantidade${context === "cart" ? " de " + escapeHTML(productById(item.productId).name) : ""}" inputmode="numeric"><button type="button" data-step="1" aria-label="Aumentar quantidade" ${item.quantity >= 99 ? "disabled" : ""}>+</button></div>`;
  }

  function openProduct(productId, itemId = null) {
    const product = productById(productId);
    if (!product) return;
    editingId = itemId;
    draft = normalizeItem(
      itemId
        ? cart.find((item) => item.id === itemId)
        : { productId, quantity: 1, extras: [], removed: [], notes: "" },
    );
    if (!draft) return;
    const extras = product.extras.filter((id) =>
      Object.hasOwn(data.extras, id),
    );
    const extraHTML = extras.length
      ? `<fieldset class="customization-group"><legend>Capriche nos adicionais</legend><p class="group-hint">Valores por unidade. Marque o que quiser.</p>${extras.map((id) => `<label class="option-label"><input type="checkbox" name="extra" value="${escapeHTML(id)}" ${draft.extras.includes(id) ? "checked" : ""}><span>${escapeHTML(data.extras[id].name)}</span><span class="option-price">+ ${money(data.extras[id].price)}</span></label>`).join("")}</fieldset>`
      : '<p class="notice">Este produto não possui adicionais pagos.</p>';
    const removedHTML = product.removable.length
      ? `<fieldset class="customization-group"><legend>Prefere sem algum ingrediente?</legend><p class="group-hint">Marque para retirar. O preço não diminui.</p>${product.removable.map((name) => `<label class="option-label"><input type="checkbox" name="removed" value="${escapeHTML(name)}" ${draft.removed.includes(name) ? "checked" : ""}><span>Sem ${escapeHTML(name.toLowerCase())}</span></label>`).join("")}</fieldset>`
      : "";
    $("#product-content").innerHTML =
      `<div class="product-modal-photo"><img src="${escapeHTML(product.image)}" alt="${escapeHTML(product.name)} — imagem ilustrativa" width="700" height="400"></div><div class="product-info"><p class="eyebrow">DO SEU JEITO · IMAGEM ILUSTRATIVA</p><h2 id="product-title" tabindex="-1">${escapeHTML(product.name)}</h2><p class="product-price">${money(product.price)} <small>preço base</small></p><p class="product-description">${escapeHTML(product.description)}</p><p class="ingredients-description"><strong>Ingredientes:</strong> ${escapeHTML(product.ingredients.join(", "))}.</p>${extraHTML}${removedHTML}<label class="field" for="product-notes">Alguma observação?<textarea id="product-notes" maxlength="180" rows="3" placeholder="Ex.: cortar ao meio. Alterações sujeitas à confirmação."></textarea></label><p class="privacy-note">Até 180 caracteres. Para unidades com personalizações diferentes, adicione cada versão separadamente ao carrinho.</p></div><div class="product-modal-footer">${quantityHTML(draft, "product")}<button id="add-product" class="button primary" type="button"><span id="add-label">${itemId ? "Salvar" : "Adicionar"}</span><strong id="product-total" aria-live="polite"></strong></button></div>`;
    $("#product-notes").value = draft.notes;
    if ($("#cart-dialog").open) {
      returnToCart = true;
      $("#cart-dialog").close();
    }
    openDialog("product-dialog");
    updateProductTotal();
  }

  function readDraft() {
    draft.extras = $$("#product-content input[name=extra]:checked").map(
      (input) => input.value,
    );
    draft.removed = $$("#product-content input[name=removed]:checked").map(
      (input) => input.value,
    );
    draft.notes = text($("#product-notes").value);
    draft.quantity = quantity($("#product-quantity").value);
  }

  function updateProductTotal() {
    readDraft();
    $("#product-total").textContent = money(subtotal(draft));
    const group = $("#product-content .quantity");
    group.querySelector('[data-step="-1"]').disabled = draft.quantity <= 1;
    group.querySelector('[data-step="1"]').disabled = draft.quantity >= 99;
  }

  function resetReview() {
    reviewedPayment = null;
    $("#order-review").hidden = true;
    $("#checkout-form").hidden = false;
    $("#message-preview").value = "";
    $("#whatsapp-link").removeAttribute("href");
  }

  function renderCart() {
    resetReview();
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    $$(".cart-count").forEach(
      (badge) => (badge.textContent = count ? String(count) : ""),
    );
    $$(".cart-trigger").forEach((button) =>
      button.setAttribute(
        "aria-label",
        count
          ? `Abrir meu pedido, ${count} itens, ${money(total(cart))}`
          : "Pedido vazio. Ir ao cardápio",
      ),
    );
    $("#mobile-total").textContent = count ? money(total(cart)) : "";
    $("#mobile-cart").classList.toggle("is-empty", !count);
    $("#cart-total").textContent = money(total(cart));
    updateFulfillment();
    $("#cart-details").hidden = !count;
    $("#storage-warning").hidden = !storageWarning;
    $("#storage-warning").textContent = storageWarning;
    $("#cart-items").innerHTML = !cart.length
      ? ""
      : cart
          .map((item) => {
            const product = productById(item.productId);
            return `<article class="cart-item" data-cart-item="${item.id}"><div class="cart-item-top"><img src="${escapeHTML(product.image)}" alt="" width="70" height="70"><div class="cart-item-title"><h3>${escapeHTML(product.name)}</h3><p>${item.quantity} × ${money(unitPrice(item))} / unidade</p></div><strong>${money(subtotal(item))}</strong></div>${item.extras.length ? `<p>Adicionais: ${escapeHTML(item.extras.map((id) => `${data.extras[id].name} (+${money(data.extras[id].price)}/un.)`).join(", "))}</p>` : ""}${item.removed.length ? `<p>Retirar: ${escapeHTML(item.removed.join(", "))} (sem desconto)</p>` : ""}${item.notes ? `<p>Observações: ${escapeHTML(item.notes)}</p>` : ""}<div class="cart-item-controls">${quantityHTML(item, "cart")}<button class="plain-button" type="button" data-edit="${item.id}" aria-label="Editar ${escapeHTML(product.name)}">Editar</button><button class="plain-button" type="button" data-remove="${item.id}" aria-label="Remover ${escapeHTML(product.name)}">Remover</button></div></article>`;
          })
          .join("");
  }

  function commitCart() {
    saveCart();
    renderCart();
  }

  function updateFulfillment() {
    const delivery =
      $("#checkout-form").elements.fulfillment.value === "delivery";
    $("#address-fields").hidden = !delivery;
    $("#delivery-cep").disabled = !delivery;
    $$("#delivery-details input, #delivery-details select").forEach((input) => {
      input.disabled = !delivery || $("#delivery-details").hidden;
      input.required = delivery && input.name !== "complement";
    });
    const zone = $("#delivery-zone").value;
    const fee = deliveryFee({ fulfillment: "delivery", neighborhood: zone });
    $("#delivery-fee").textContent =
      zone === "__outside"
        ? "Seu bairro está fora da área de entrega. Você pode escolher retirada no local."
        : fee === null
          ? "Selecione um bairro para consultar o frete."
          : (data.deliveryVerified
              ? "Entrega: "
              : "Entrega (taxa de exemplo): ") +
            money(fee) +
            " · Produtos e entrega: " +
            money(total(cart) + fee);
    $("#delivery-fee").parentElement.hidden = !zone;
    $("#checkout-error").hidden = true;
  }

  let demoOrder;
  const latestButton = $("#latest-order");
  let lastTracking = "";
  try {
    const saved = localStorage.getItem("brasa47.moderno.tracking");
    if (
      /^\/pagamento\/[0-9a-f-]{36}$/.test(saved) &&
      location.protocol !== "file:"
    )
      lastTracking = saved;
  } catch {
    /* O acompanhamento ainda pode ser aberto pelo link de retorno. */
  }
  latestButton.hidden = !lastTracking;
  latestButton.addEventListener("click", () => {
    if (demoOrder) openDemo();
    else if (lastTracking) location.assign(lastTracking);
  });
  let demoStaff = false;
  $("#demo-view").addEventListener("click",()=>{demoStaff=!demoStaff;openDemo();});
  function openDemo() {
    $("#demo-view").textContent=demoStaff?"Ver como cliente":"Experimentar balcão";
    $("#cart-dialog").close();
    openDialog("demo-track-dialog");
    window.BrasaComandas.render($("#demo-panel"), demoOrder, {
      demo: true,
      advance: !demoStaff ? null : () => {
        if (demoOrder.times.length < 4) demoOrder.times.push(Date.now());
        openDemo();
      },
    });
  }
  let paymentEnabled = false;
  let reviewedPayment = null;
  let checkoutBusy = false;

  function showPayment() {
    if (!reviewedPayment) return;
    const pickup = reviewedPayment.fulfillment === "pickup";
    const waiting = paymentEnabled && !pickup && !data.deliveryVerified;
    $("#pay-online").hidden = waiting;
    $("#pay-online").textContent = paymentEnabled
      ? "Pagar com Mercado Pago"
      : "Simular pagamento e acompanhar";
    $("#payment-note").textContent = waiting
      ? "Na entrega, confirme o frete e o valor final com a hamburgueria."
      : paymentEnabled
        ? "O Mercado Pago recebe o valor e os itens para processar o pagamento. O restaurante guarda o nome e o resumo para preparar o pedido."
        : "Demonstração do pagamento do pedido.";
  }

  $("#pay-online").addEventListener("click", async () => {
    if (checkoutBusy || !reviewedPayment) return;
    if (!paymentEnabled) {
      if (
        !demoOrder ||
        demoOrder.key !== reviewedPayment.key ||
        demoOrder.review !== reviewedPayment
      ) {
        const delivery = reviewedPayment.fulfillment === "delivery";
        demoStaff = false;
        demoOrder = {
          key: reviewedPayment.key,
          review: reviewedPayment,
          label: "Exemplo",
          delivery,
          times: [Date.now()],
          approved: true,
          state: "Pagamento simulado",
          total: reviewedPayment.expected,
          ...orderSlip(reviewedPayment.cart, {
            ...reviewedPayment,
            customerName: reviewedPayment.name,
          }),
        };
      }
      latestButton.hidden = false;
      openDemo();
      return;
    }
    const order = reviewedPayment;
    checkoutBusy = true;
    $("#pay-online").disabled = true;
    try {
      const result = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order),
      });
      const response = await result.json();
      if (!result.ok)
        throw Error(response.error || "Confira os dados e tente novamente.");
      if (/^\/pagamento\/[0-9a-f-]{36}$/.test(response.tracking)) {
        lastTracking = response.tracking;
        latestButton.hidden = false;
        try {
          localStorage.setItem("brasa47.moderno.tracking", lastTracking);
        } catch {}
      }
      if (reviewedPayment === order && !$("#order-review").hidden)
        location.assign(response.url);
    } catch (error) {
      $("#payment-note").textContent =
        error.message || "Não foi possível abrir o pagamento.";
    } finally {
      checkoutBusy = false;
      $("#pay-online").disabled = false;
    }
  });

  function reviewOrder(event) {
    event.preventDefault();
    if (!cart.length) {
      toast("Adicione um produto antes de revisar o pedido.");
      return;
    }
    const customer = Object.fromEntries(new FormData($("#checkout-form")));
    const error = validateCustomer(customer);
    $("#checkout-error").hidden = !error;
    $("#checkout-error").textContent = error;
    if (error) return;
    if (
      paymentEnabled &&
      customer.fulfillment === "delivery" &&
      !data.deliveryVerified
    ) {
      $("#checkout-error").hidden = false;
      $("#checkout-error").textContent =
        "Entrega online indisponível. Selecione retirada no local.";
      return;
    }
    reviewedPayment = {
      key: globalThis.crypto?.randomUUID?.(),
      cart: cart.map((item) => ({ ...item })),
      name: customer.customerName,
      fulfillment: customer.fulfillment,
      city: customer.city,
      cep: customer.cep,
      street: customer.street,
      number: customer.number,
      neighborhood: customer.neighborhood,
      complement: customer.complement,
      expected: total(cart) + deliveryFee(customer),
    };
    const slip = orderSlip(cart, customer);
    $("#review-receipt").textContent =
      customer.customerName + " · " + slip.destination;
    $("#review-amount").textContent =
      (slip.delivery
        ? "Produtos " +
          money(total(cart)) +
          " + frete " +
          money(slip.fee) +
          " · "
        : "") +
      "Total " +
      money(reviewedPayment.expected);
    showPayment();
    const message = buildMessage(cart, customer);
    const url = whatsappUrl(data.brand.whatsapp, message);
    $("#optional-whatsapp").open = false;
    $("#message-preview").value = message;
    $("#whatsapp-link").hidden = !url;
    $("#copy-order").hidden = Boolean(url);
    if (url) $("#whatsapp-link").href = url;
    $("#whatsapp-status").textContent = url
      ? "Confira os detalhes. O próximo botão abre o WhatsApp com a mensagem preenchida; você decide quando enviar."
      : "Você pode copiar o resumo para compartilhar o pedido.";
    $("#checkout-form").hidden = true;
    $("#order-review").hidden = false;
    $("#review-title").focus();
  }

  function browseEmptyCart() {
    const dialog = $("#cart-dialog");
    if (dialog.open) {
      dialogTriggers.delete(dialog);
      dialog.close();
    }
    if ($("#main-nav").classList.contains("is-open")) $("#nav-toggle").click();
    $("#cardapio").scrollIntoView({ block: "start" });
    $(".filter-button").focus({ preventScroll: true });
    toast("Não tem nada no seu carrinho ainda.");
  }

  // Delegação: um único ouvinte atende os botões criados dinamicamente.
  document.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    if (button.dataset.close)
      document.getElementById(button.dataset.close).close();
    if (button.classList.contains("cart-trigger")) {
      if (!cart.length) return browseEmptyCart();
      renderCart();
      openDialog("cart-dialog");
    }
    if (button.dataset.product) openProduct(button.dataset.product);
    if (button.dataset.category) renderProducts(button.dataset.category);
    if (button.hasAttribute("data-browse")) {
      $("#cart-dialog").close();
      $("#cardapio").scrollIntoView();
      $(".filter-button").focus({ preventScroll: true });
    }
    if (button.dataset.edit) {
      const item = cart.find((item) => item.id === button.dataset.edit);
      if (item) openProduct(item.productId, item.id);
    }
    if (button.dataset.remove) {
      cart = cart.filter((item) => item.id !== button.dataset.remove);
      commitCart();
      if (!cart.length) {
        $("#checkout-form").reset();
        return browseEmptyCart();
      }
      $("#cart-items button").focus();
      toast("Item removido do pedido.");
    }
    if (button.dataset.step) {
      const group = button.closest(".quantity");
      const input = group.querySelector("input");
      input.value = quantity(Number(input.value) + Number(button.dataset.step));
      input.dispatchEvent(new Event("change", { bubbles: true }));
      if (group.dataset.context === "cart") {
        const replacement = document
          .getElementById(`qty-${group.dataset.item}`)
          ?.closest(".quantity")
          .querySelector(`[data-step="${button.dataset.step}"]`);
        if (replacement && !replacement.disabled) replacement.focus();
        else document.getElementById(`qty-${group.dataset.item}`)?.focus();
      }
    }
    if (button.id === "add-product") {
      readDraft();
      if (!editingId && cart.length >= 50) {
        toast("Limite de 50 versões por pedido. Edite um item existente.");
        return;
      }
      if (editingId)
        cart = cart.map((item) =>
          item.id === editingId ? normalizeItem(draft) : item,
        );
      else cart.push(normalizeItem({ ...draft, id: newId() }));
      commitCart();
      $("#product-dialog").close();
      toast(
        editingId ? "Personalização atualizada." : "Adicionado ao seu pedido.",
      );
    }
    if (button.id === "clear-cart") {
      if (!window.confirm("Esvaziar todos os itens do carrinho?")) return;
      cart = [];
      commitCart();
      $("#checkout-form").reset();
      updateFulfillment();
      browseEmptyCart();
    }
  });

  $("#product-content").addEventListener("change", () => {
    $("#product-quantity").value = quantity($("#product-quantity").value);
    updateProductTotal();
  });
  $("#product-content").addEventListener("input", updateProductTotal);
  $("#cart-items").addEventListener("change", (event) => {
    if (!event.target.matches(".quantity input")) return;
    const group = event.target.closest(".quantity");
    const item = cart.find((item) => item.id === group.dataset.item);
    if (!item) return;
    item.quantity = quantity(event.target.value);
    const id = event.target.id;
    commitCart();
    document.getElementById(id)?.focus();
  });
  $("#checkout-form").addEventListener("submit", reviewOrder);
  $$("input[name=fulfillment]").forEach((input) =>
    input.addEventListener("change", updateFulfillment),
  );
  $("#back-checkout").addEventListener("click", () => {
    resetReview();
    $("#customer-name").focus();
  });
  $("#copy-order").addEventListener("click", async () => {
    const preview = $("#message-preview");
    try {
      if (!navigator.clipboard)
        throw new Error("Área de transferência indisponível");
      await navigator.clipboard.writeText(preview.value);
      $("#whatsapp-status").textContent =
        "Resumo copiado.";
    } catch {
      preview.focus();
      preview.select();
      $("#whatsapp-status").textContent =
        "Selecione e copie o resumo acima usando Ctrl+C ou a opção Copiar do celular. Nenhum pedido foi enviado.";
    }
  });
  $("#nav-toggle").addEventListener("click", () => {
    const isOpen = $("#main-nav").classList.toggle("is-open");
    $("#nav-toggle").setAttribute("aria-expanded", String(isOpen));
    $("#nav-toggle").setAttribute(
      "aria-label",
      isOpen ? "Fechar menu" : "Abrir menu",
    );
  });
  $$("#main-nav a").forEach((link) =>
    link.addEventListener("click", () => {
      $("#main-nav").classList.remove("is-open");
      $("#nav-toggle").setAttribute("aria-expanded", "false");
      $("#nav-toggle").setAttribute("aria-label", "Abrir menu");
    }),
  );
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      $("#main-nav").classList.contains("is-open")
    ) {
      $("#main-nav").classList.remove("is-open");
      $("#nav-toggle").setAttribute("aria-expanded", "false");
      $("#nav-toggle").setAttribute("aria-label", "Abrir menu");
      $("#nav-toggle").focus();
    }
  });
  $("#credits-button").addEventListener("click", () =>
    openDialog("credits-dialog"),
  );
  // Se outra aba mudar o carrinho, o resumo anterior deixa de ser válido.
  window.addEventListener("storage", (event) => {
    if (event.key !== STORAGE_KEY && event.key !== null) return;
    cart = [];
    loadCart();
    renderCart();
    if ($("#product-dialog").open) $("#product-dialog").close();
    if (!cart.length && $("#cart-dialog").open) return browseEmptyCart();
    toast("Carrinho atualizado em outra aba. Confira seu pedido.");
  });
  // Falha de imagem mantém um placeholder local, sem botão ou imagem quebrados.
  document.addEventListener(
    "error",
    (event) => {
      if (
        event.target.tagName === "IMG" &&
        !event.target.src.endsWith("/placeholder.svg")
      )
        event.target.src = "assets/placeholder.svg";
    },
    true,
  );

  let lookupVersion = 0;
  function clearDeliveryDetails() {
    ++lookupVersion;
    const fields = $("#checkout-form").elements;
    for (const name of [
      "street",
      "number",
      "complement",
      "neighborhood",
      "city",
    ])
      fields[name].value = "";
    $("#delivery-details").hidden = true;
    $("#cep-status").textContent = "";
    updateFulfillment();
  }
  function showDetails(message) {
    $("#delivery-city").value = cityLabel;
    $("#delivery-details").hidden = false;
    $("#cep-status").textContent = message;
    updateFulfillment();
  }
  async function lookupCep() {
    clearDeliveryDetails();
    const field = $("#delivery-cep");
    const digits = field.value.replace(/[^0-9]/g, "").slice(0, 8);
    field.value =
      digits.length > 5 ? digits.slice(0, 5) + "-" + digits.slice(5) : digits;
    if (digits.length !== 8) return;
    const version = lookupVersion;
    $("#cep-status").textContent = "Consultando CEP…";
    try {
      const response = await fetch(
        "https://viacep.com.br/ws/" + digits + "/json/",
        { signal: AbortSignal.timeout(7000), referrerPolicy: "no-referrer" },
      );
      if (!response.ok) throw Error();
      const result = await response.json();
      if (version !== lookupVersion) return;
      if (result.erro || !result.localidade) throw Error();
      if (
        normalizePlace(result.localidade) !==
          normalizePlace(data.deliveryCity) ||
        result.uf !== data.deliveryState
      ) {
        $("#cep-status").textContent =
          "Este CEP fica fora de " +
          cityLabel +
          ". Verifique o CEP ou escolha retirada.";
        return;
      }
      $("#checkout-form").elements.street.value = result.logradouro || "";
      const match = data.deliveryZones.find(
        (zone) => normalizePlace(zone.name) === normalizePlace(result.bairro),
      );
      $("#delivery-zone").value = match
        ? match.name
        : result.bairro
          ? "__outside"
          : "";
      showDetails("Confira o endereço e complete os campos que faltam.");
    } catch {
      if (version === lookupVersion)
        showDetails(
          "Consulta indisponível ou CEP não localizado. Confira o CEP ou preencha o endereço manualmente.",
        );
    }
  }

  function init() {
    $("#delivery-cep").addEventListener("input", lookupCep);
    $("#manual-address").addEventListener("click", () => {
      clearDeliveryDetails();
      $("#delivery-cep").value = "";
      showDetails(
        "Entrega em " + cityLabel + ". Informe a rua, o número e o bairro.",
      );
      $("#checkout-form").elements.street.focus();
    });
    $("#checkout-form").addEventListener("reset", () =>
      queueMicrotask(clearDeliveryDetails),
    );
    const selector = $("#delivery-zone");
    for (const zone of data.deliveryZones)
      selector.add(new Option(zone.name, zone.name));
    selector.add(new Option("Meu bairro não está na lista", "__outside"));
    selector.addEventListener("change", updateFulfillment);
    const brand = data.brand;
    if (location.protocol === "https:" || location.protocol === "http:") {
      fetch("/api/pagamento")
        .then(async (response) => {
          if (
            !response.ok ||
            !response.headers.get("content-type")?.includes("application/json")
          )
            return;
          paymentEnabled = (await response.json()).enabled === true;
          if (paymentEnabled) {
            $("#order-data-note").textContent =
              "Ao iniciar um pagamento, a hamburgueria registra nome, itens, instruções e, para entrega, o endereço. O Mercado Pago processa o pagamento. O carrinho também fica salvo neste navegador.";
            $("#demo-notice").hidden = true;
            showPayment();
          }
        })
        .catch(() => {});
    }

    $$(".logo").forEach((logo) =>
      logo.setAttribute("aria-label", `${brand.name} — início`),
    );
    $$("[data-brand]").forEach((element) => (element.textContent = brand.name));
    document.title = `${brand.name} — ${brand.tagline}`;
    const colors = {
      background: "--bg",
      surface: "--surface",
      accent: "--accent",
      text: "--text",
      highlight: "--yellow",
    };
    Object.entries(colors).forEach(([key, variable]) =>
      document.documentElement.style.setProperty(variable, brand.colors[key]),
    );
    $("#hero-photo").src = brand.heroImage;
    $("#about-photo").src = brand.aboutImage;
    $("#hero-desc").textContent = brand.heroDescription;
    const title = $("#hero-title");
    const [lead, ...rest] = brand.tagline.split("?");
    title.replaceChildren(
      document.createTextNode(rest.length ? lead + "?" : lead),
    );
    if (rest.length) {
      const emphasis = document.createElement("em");
      emphasis.textContent = rest.join("?").trim();
      title.append(emphasis);
    }
    const heroProduct = productById(brand.heroProductId);
    const tag = $("#hero-tag");
    if (heroProduct) {
      tag.textContent = heroProduct.name + " · " + money(heroProduct.price);
      tag.dataset.product = heroProduct.id;
    } else tag.hidden = true;
    if (brand.addressVerified && brand.address.trim() && brand.city.trim()) {
      const link = $("#map-link");
      link.href =
        "https://www.google.com/maps/search/?api=1&query=" +
        encodeURIComponent(brand.address + ", " + brand.city);
      link.hidden = false;
      $("#address-note").hidden = true;
    }
    if (validPhone(brand.whatsapp)) {
      $("#contact-link").href = "https://wa.me/" + brand.whatsapp;
      $("#contact-link").hidden = false;
      $("#contact-note").hidden = true;
    }
    $("#brand-story").textContent = brand.story;
    $("#brand-address").textContent = brand.address;
    $("#brand-city").textContent = brand.city;
    $("#brand-hours").innerHTML = brand.hours
      .map((hour) => `<li>${escapeHTML(hour)}</li>`)
      .join("");
    $("#brand-social").textContent = brand.instagramLabel;
    if (/^https:\/\/(www\.)?instagram\.com\//i.test(brand.instagram)) {
      const link = document.createElement("a");
      link.href = brand.instagram;
      link.textContent = brand.instagramLabel;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.className = "text-link";
      $("#brand-social").replaceChildren(link);
      $("#social-note").hidden = true;
    }
    $("#year").textContent = new Date().getFullYear();
    $("#featured-grid").innerHTML = data.products
      .filter((product) => product.featured)
      .map(cardHTML)
      .join("");
    $("#category-filters").innerHTML = data.categories
      .map(
        (category) =>
          `<button type="button" class="filter-button" data-category="${escapeHTML(category.id)}" aria-pressed="false"><small aria-hidden="true">${escapeHTML(category.symbol)}</small>${escapeHTML(category.name)}</button>`,
      )
      .join("");
    renderProducts(data.categories[0]?.id);
    loadCart();
    renderCart();
    updateFulfillment();
  }
  init();
})();
