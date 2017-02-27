// accepts a path to the source files
function read (to) {
  from = to

  // add read-related tasks to the queue
  tasks.push(() => readdir(base, to))
  tasks.push(readfile)

  return this
}
