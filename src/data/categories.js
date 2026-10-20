import Category from '../models/Category'

const categories = [
    new Category({ id: 1, name: 'Mains', icon: '🍽️' }),
    new Category({ id: 2, name: 'Rice & Noodles', icon: '🍜' }),
    new Category({ id: 3, name: 'Appetizers', icon: '🥟' }),
    new Category({ id: 4, name: 'Desserts', icon: '🍰' }),
    new Category({ id: 5, name: 'Drinks', icon: '🥤' }),
]

export default categories