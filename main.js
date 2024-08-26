class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function invertTree(root) {
    if (root === null) {
        return null;
    }

    const queue = [root];

    while (queue.length > 0) {
        const node = queue.shift();

        // Swap the left and right children
        [node.left, node.right] = [node.right, node.left];

        // Add children to the queue if they exist
        if (node.left !== null) {
            queue.push(node.left);
        }
        if (node.right !== null) {
            queue.push(node.right);
        }
    }

    return root;
}

function arrayToTree(arr) {
    if (arr.length === 0) return null;

    const nodes = arr.map(val => val === null ? null : new TreeNode(val));
    for (let i = 0; i < nodes.length; i++) {
        if (nodes[i] !== null) {
            const leftIndex = 2 * i + 1;
            const rightIndex = 2 * i + 2;
            if (leftIndex < nodes.length) nodes[i].left = nodes[leftIndex];
            if (rightIndex < nodes.length) nodes[i].right = nodes[rightIndex];
        }
    }
    return nodes[0];
}

function treeToArray(root) {
    if (root === null) return [];

    const result = [];
    const queue = [root];

    while (queue.length > 0) {
        const node = queue.shift();
        if (node) {
            result.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            result.push(null);
        }
    }

    // Remove trailing nulls
    while (result[result.length - 1] === null) {
        result.pop();
    }

    return result;
}

function main(root) {
    const tree = arrayToTree(root);
    const invertedTree = invertTree(tree);
    const output = treeToArray(invertedTree);
    console.log(output);
}

const input = [5, 3, 8, 1, 7, 2, 6, 100, 3, -1];

main(input);