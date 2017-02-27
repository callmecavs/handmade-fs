// accepts a path to the destination
function write (to) {
  // add task to empty the destination directory
  tasks.push(clean(base, to))

  // add write-related tasks to the queue
  tasks.push(mkdir(base, from, to))
  tasks.push(writefile)

  return this
}
