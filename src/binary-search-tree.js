const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor(){
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {

    if (this._root === null){           
      this._root = new Node(data);
      return;
    }

    let node  = this._root.data < data ? this._root.right : this._root.left;
    let parent = this._root;

    while(node != null){
      parent = node;
      node  = node.data < data ? node.right : node.left;
    }

    if(parent.data < data){
      parent.right = new Node(data);
    }else{
      parent.left = new Node(data);
    }
  }

  has(data) {
    let hasNode = false;
    if (this._root === null) return hasNode;

    let node = this._root;    
    while(node != null)
    {
      if (node.data === data){
        hasNode = true;
        break;
      }

      node  = node.data < data ? node.right : node.left;
    }

    return hasNode;
  }

  find(data) {
    if (this._root === null) return null;
    
    let node = this._root;    
    while(node != null)
    {
      if (node.data === data){
        return node;
      }

      node  = node.data < data ? node.right : node.left;
    }

    return null;
  }

  remove(data) {
    if (this._root === null) return;

    let parent = null;
    let node = this._root;

    if (this._root.data < data){
      node = this._root.right;
      parent = this._root;
    }

    if (this._root.data > data){
      node = this._root.left;
      parent = this._root;
    }
    
    while(node != null)
    {
      if (node.data === data){

          if(node.left === null && node.right === null)
          {
              node = null;
              
              if (parent.right !== null){
                if (parent.right.data === data){
                  parent.right = null;
                }
              }
              
              else if (parent.left !== null)
              {
                if (parent.left.data === data){
                  parent.left = null;
                }
              }
              
              break;
          }
          
          let newRight = node.right;
          let newLeft = node.left;

          if (parent === null){
            
            this._root = newRight;
            parent = this._root;

          }
          
          else if (newRight === null || parent.right === null){
            parent.right = null;
          }

          else if (parent.right.data > newRight.data){
            newLeft = newRight;
          } 

          else {
            parent.right = newRight;
          }    

          if (newLeft === null) break;

          if (parent.left === null){
            parent.left = newLeft;

          }else{
              if (parent.left.data > newLeft.data){
                parent.left.left = newLeft;
              }else{
                let leftTmp = parent.left;
                parent.left = newLeft;
                parent.left.left = leftTmp;
              }
          }          
          break;
      }

      if (node != null){

        parent = node;
        node  = node.data < data ? node.right : node.left;
      }
    }
  }

  min() {
    if (this._root === null) return null;

    let node = this._root;  
    let min = this._root.data;

    while(node != null)
    {
      if (node.data < min){
        min = node.data;
      }

      node  = node.left;
    }

    return min;
  }

  max() {
    if (this._root === null) return null;

    let node = this._root;  
    let max = this._root.data;

    while(node != null)
    {
      if (node.data > max){
        max = node.data;
      }

      node  = node.right;
    }

    return max;
  }
}

module.exports = {
  BinarySearchTree
};