(()=>{"use strict";class t{constructor(t,s,e,i,o,c,r){this.id=Math.floor(1e5*Math.random()),this.project=t,this.title=s,this.description=e,this.dueDate=i,this.priority=o,this.notes=c,this.checkList=r}}class s{constructor(){this.tasks=[]}getTaskById(t){return this.tasks.find((s=>s.id===t))}getAll(){return this.tasks}getTaskIndex(t){return this.tasks.findIndex((s=>s.id===t.id))}}const e=new class{constructor(){this.projects={}}saveTask(e){if(e instanceof t){this.projects[e.project]||(this.projects[e.project]=new s);const t=this.projects[e.project];t.getTaskById(e.id)||t.tasks.push(e)}}updateTask(t){const s=this.projects[t.project],e=s.getTaskIndex(t);-1!==e&&(s.tasks[e]=t)}deleteTask(t){const s=this.projects[t.project],e=s.getTaskIndex(t);-1!==e&&s.tasks.splice(e,1)}},i=new t("project1","title1","description1","dueDate1","priority1","notes1","checkList1");e.saveTask(i),console.log(e),i.title="task2",e.updateTask(i),console.log(e);const o=new t("project2","title2","description2","dueDate2","priority2","notes2","checkList2");e.saveTask(o),console.log(e)})();
//# sourceMappingURL=main.js.map