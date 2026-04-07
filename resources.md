Compile Time

TS finds error in the program without giving the o/p. Just go ver the code and check for syntax errors or any other error.

How to run compile time?

tsc or ts-node.

RunTime

TS runs the code and gives o/p

How to run the code?

node dist/index.js


# Critical difference (this is the important part)

| Feature                  | Interface               | Class                      |
| ------------------------ | ----------------------- | -------------------------- |
| Exists at runtime        | ❌ No                   | ✅ Yes                     |
| Can create objects       | ❌ No                   | ✅ Yes (`new`)           |
| Contains logic (methods) | ❌ No (only signatures) | ✅ Yes                     |
| Used for                 | Type checking           | Object creation + behavior |

---

# 🔹 So what’s the exact truth?

* ✅ **Interface ~ “lightweight class (only structure)”**
* ✅ **Object is same in both cases**
* ❌ But interface **cannot replace a class**

---

# 🔹 Clean mental model

Think like this:

<pre class="overflow-visible! px-0!" data-start="1414" data-end="1523"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute end-1.5 top-1 z-2 md:end-2 md:top-1"></div><div class="w-full overflow-x-hidden overflow-y-auto pe-11 pt-3"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>Interface  ---> checks shape only</span><br/><span>Class      ---> builds + manages object</span><br/><span>Object     ---> actual data</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>
