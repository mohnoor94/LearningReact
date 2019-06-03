/**
 * returns a randomly selected item from array of items
 */

function choice(items) {
    return items[Math.floor(Math.random() * (items.length + 1))];
}

/**
 * removes the first matching item from items, if item exists, and returns it. Otherwise returns undefined.
 */
function remove(items, item) {
    const index = items.findIndex(e => e === item);

    if (index > -1) {
        items.splice(index, 1);
        return items;
    }

    // return undefined;
}

export default choice;
export {remove};