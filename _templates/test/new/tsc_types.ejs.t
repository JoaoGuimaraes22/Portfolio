---
to: ./<%=path%>/<%=name%>/<%=name%>.d.ts
---

declare namespace I<%= name %> {
    export interface IProps {
    }
}

export { I<%= name %> };