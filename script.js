// Бургер-меню
const burger = document.getElementById('burger');
const nav = document.querySelector('.nav');

if (burger) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        nav.classList.toggle('active');
    });

    document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('active');
            nav.classList.remove('active');
        });
    });
}

// Уведомления
function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
}

// Скачивание модели
function downloadModel() {
    showToast('📥 Модель подготовлена к скачиванию. В реальной версии здесь будет загрузка файла.');
}

// Сброс фильтров (для каталога)
function resetFilters() {
    const category = document.getElementById('filter-category');
    const region = document.getElementById('filter-region');
    const style = document.getElementById('filter-style');
    const search = document.getElementById('search-input');
    
    if (category) category.value = 'all';
    if (region) region.value = 'all';
    if (style) style.value = 'all';
    if (search) search.value = '';
    
    if (typeof filterModels === 'function') filterModels();
}