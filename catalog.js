const modelsData = [
    { id: 1, title: "Наличник с растительным орнаментом", category: "nalichnik", categoryName: "Наличник", region: "moscow", regionName: "Московская обл., г. Коломна", style: "merchant", styleName: "Купеческий", icon: "🌿", description: "Резной деревянный наличник XIX века с характерным для купеческой застройки растительным орнаментом. Сохранился на фасаде дома №14 по ул. Лажечникова. Восстановлен по сохранившемуся фрагменту правой половины методом симметричной достройки.", size: "1200 × 200 × 50 мм", material: "Дерево (сосна)", format: "STL, OBJ, STEP", accuracy: "±1.5 мм" },
    { id: 2, title: "Капитель коринфского ордера", category: "capital", categoryName: "Капитель", region: "tver", regionName: "Тверская обл., г. Торжок", style: "classic", styleName: "Классицизм", icon: "🏛️", description: "Капитель колонны в коринфском стиле с акантовыми листьями. Элемент портика усадебного дома середины XIX века.", size: "400 × 400 × 350 мм", material: "Белый камень", format: "STL, STEP", accuracy: "±1 мм" },
    { id: 3, title: "Карниз с модульонами", category: "cornice", categoryName: "Карниз", region: "yaroslavl", regionName: "Ярославская обл., г. Ростов", style: "baroque", styleName: "Барокко", icon: "🏗️", description: "Профильный карниз с декоративными модульонами, характерный для ярославской архитектуры XVIII века.", size: "2000 × 300 × 250 мм", material: "Штукатурка", format: "STL, OBJ", accuracy: "±2 мм" },
    { id: 4, title: "Лепной фриз «Вакханалия»", category: "frieze", categoryName: "Лепной фриз", region: "moscow", regionName: "Московская обл., г. Серпухов", style: "classic", styleName: "Классицизм", icon: "🎭", description: "Лепной фриз с античным сюжетом над порталом главного входа усадьбы.", size: "3000 × 400 × 80 мм", material: "Гипс", format: "STL, STEP", accuracy: "±1.5 мм" },
    { id: 5, title: "Лепная розетка «Солнце»", category: "rosette", categoryName: "Розетка", region: "kostroma", regionName: "Костромская обл., г. Нерехта", style: "eclectic", styleName: "Эклектика", icon: "☀️", description: "Потолочная лепная розетка диаметром 60 см с лучевым орнаментом.", size: "Ø 600 × 80 мм", material: "Гипс", format: "STL, OBJ", accuracy: "±1 мм" },
    { id: 6, title: "Замковый камень арки", category: "keystone", categoryName: "Замковый камень", region: "vologda", regionName: "Вологодская обл., г. Тотьма", style: "baroque", styleName: "Барокко", icon: "🗝️", description: "Замковый камень полуциркульной арки ворот с маскароном.", size: "350 × 450 × 200 мм", material: "Известняк", format: "STL, STEP", accuracy: "±1.5 мм" },
    { id: 7, title: "Наличник «Кокорник»", category: "nalichnik", categoryName: "Наличник", region: "vologda", regionName: "Вологодская обл., с. Кириллов", style: "wooden", styleName: "Деревянное зодчество", icon: "🏡", description: "Традиционный северный наличник с пропильной резьбой.", size: "1400 × 220 × 40 мм", material: "Дерево (ель)", format: "STL, OBJ", accuracy: "±2 мм" },
    { id: 8, title: "Капитель ионического ордера", category: "capital", categoryName: "Капитель", region: "yaroslavl", regionName: "Ярославская обл., г. Углич", style: "classic", styleName: "Классицизм", icon: "🏛️", description: "Капитель колонны ионического ордера с волютами.", size: "380 × 380 × 320 мм", material: "Белый камень", format: "STL, STEP", accuracy: "±1 мм" },
    { id: 9, title: "Карниз сухарный", category: "cornice", categoryName: "Карниз", region: "tver", regionName: "Тверская обл., г. Кашин", style: "merchant", styleName: "Купеческий", icon: "🏢", description: "Профильный карниз с «сухариками» — элемент купеческих доходных домов.", size: "1500 × 200 × 180 мм", material: "Штукатурка", format: "STL, OBJ", accuracy: "±2 мм" }
];

function renderModels(models) {
    const grid = document.getElementById('models-grid');
    const empty = document.getElementById('catalog-empty');
    const counter = document.getElementById('results-count');
    
    if (!grid) return;
    
    if (models.length === 0) {
        grid.innerHTML = '';
        if (empty) empty.style.display = 'block';
        if (counter) counter.textContent = 'Найдено: 0 моделей';
        return;
    }
    
    if (empty) empty.style.display = 'none';
    if (counter) counter.textContent = `Найдено: ${models.length} ${models.length === 1 ? 'модель' : 'моделей'}`;
    
    grid.innerHTML = models.map(model => `
        <div class="model-card" onclick="openModal(${model.id})">
            <div class="model-card__image">${model.icon}</div>
            <div class="model-card__body">
                <span class="model-card__category">${model.categoryName}</span>
                <h3 class="model-card__title">${model.title}</h3>
                <div class="model-card__meta">
                    <span>📍 ${model.regionName.split(',')[0]}</span>
                    <span>🎨 ${model.styleName}</span>
                </div>
                <span class="model-card__download">⬇ Скачать модель</span>
            </div>
        </div>
    `).join('');
}

function filterModels() {
    const category = document.getElementById('filter-category')?.value || 'all';
    const region = document.getElementById('filter-region')?.value || 'all';
    const style = document.getElementById('filter-style')?.value || 'all';
    const search = (document.getElementById('search-input')?.value || '').toLowerCase().trim();
    
    const filtered = modelsData.filter(model => {
        const matchCategory = category === 'all' || model.category === category;
        const matchRegion = region === 'all' || model.region === region;
        const matchStyle = style === 'all' || model.style === style;
        const matchSearch = !search || 
            model.title.toLowerCase().includes(search) ||
            model.description.toLowerCase().includes(search);
        return matchCategory && matchRegion && matchStyle && matchSearch;
    });
    
    renderModels(filtered);
}

function openModal(id) {
    const model = modelsData.find(m => m.id === id);
    if (!model) return;
    
    document.getElementById('modal-image').textContent = model.icon;
    document.getElementById('modal-category').textContent = model.categoryName;
    document.getElementById('modal-title').textContent = model.title;
    document.getElementById('modal-region').textContent = '📍 ' + model.regionName;
    document.getElementById('modal-style').textContent = '🎨 ' + model.styleName;
    document.getElementById('modal-description').textContent = model.description;
    document.getElementById('modal-size').textContent = model.size;
    document.getElementById('modal-material').textContent = model.material;
    document.getElementById('modal-format').textContent = model.format;
    document.getElementById('modal-accuracy').textContent = model.accuracy;
    
    document.getElementById('modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modal').classList.remove('active');
    document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', () => {
    renderModels(modelsData);
    
    const modalClose = document.getElementById('modal-close');
    const modalOverlay = document.getElementById('modal-overlay');
    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalOverlay) modalOverlay.addEventListener('click', closeModal);
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
    
    ['filter-category', 'filter-region', 'filter-style', 'search-input'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('input', filterModels);
            el.addEventListener('change', filterModels);
        }
    });
});