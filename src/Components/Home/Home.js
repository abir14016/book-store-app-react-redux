import React from 'react';
import BookItem from './BookItem';
import AddBook from './AddBook';

const Home = () => {
    return (
        <main class="py-12 2xl:px-6">
            <div class="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
                <div class="order-2 xl:-order-1">
                    <div class="flex items-center justify-between mb-12">
                        <h4 class="mt-2 text-xl font-bold">Book List</h4>

                        <div class="flex items-center space-x-4">
                            <button class="filter-btn active-filter" id="lws-filterAll">All</button>
                            <button class="filter-btn" id="lws-filterFeatured">Featured</button>
                        </div>
                    </div>

                    {/* booklist */}
                    <div class="lws-bookContainer">
                        <BookItem></BookItem>
                        <BookItem></BookItem>
                    </div>
                    {/* booklist */}

                </div>
                <div>
                    <AddBook></AddBook>
                </div>
            </div>
        </main>
    );
};

export default Home;