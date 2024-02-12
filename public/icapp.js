export class application {
    constructor(ListItem) {
        this.ListItem = ListItem;
    }
    renderHmlt(item, h, pos) {
        //create li
        let li = document.createElement('li');
        let head = document.createElement('h4');
        head.innerText = h;
        li.append(head);
        let p = document.createElement('p');
        p.innerText = item;
        li.append(p);
        if (pos == 'end') {
            this.ListItem.prepend(li);
        }
        else {
            this.ListItem.append(li);
        }
    }
}
