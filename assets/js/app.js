var blog = new Vue({
  el: '#appblogs',
  data: {
    blogs:[],
    post:{
        category:'',
        date:'',
        thumbnail:'',
        title:'',
        description:"",
        content:'',
    },
    showDetail:false
  },
  created(){
    var images = [
      'images/service/web_design_icon.png',
      'images/service/photography_icon.png',
      'images/service/creativity_icon.png',
      'images/service/advetising_icon.png',
    ];
    // var e = 0;
    // for (var i = 0; i < 10; i++) {
    //     var obj = {
    //         category:'Git',
    //         date:'Monday February 5, 2018',
    //         thumbnail:images[e],
    //         title:'Start with Git',
    //         description:"Git is a distributed version control system.",
    //         content:`Git allows groups of people to work on the same documents (often code) at the same time, and without stepping on each other's toes. It's a distributed version control system.<br>
    //           Our terminal prompt below is currently in a directory we decided to name "project". To initialize a Git repository here, type the following command
    //           <pre><code>git init</code></pre>`,
    //     };
    //     this.blogs.push(obj);
    //     e++;
    //     if(e==4){
    //       e = 0;
    //     }
    // }
    this.blogs.push({
        category:'Git',
        date:'Monday February 5, 2018',
        thumbnail:images[0],
        title:'Start with Git',
        description:"Git is a distributed version control system",
        content:`Git allows groups of people to work on the same documents (often code) at the same time, and without stepping on each other's toes. It's a distributed version control system.<br>
          Our terminal prompt below is currently in a directory we decided to name "project". To initialize a Git repository here, type the following command
          <pre><code>git init</code></pre>
          A "octobox" directory now has an empty repository in /.git/. The repository is a hidden directory where Git operates.
          <p class="text-right"><a href="https://git-scm.com/docs/git-init">source</a></p>`,
    });
    this.blogs.push({
        category:'Git',
        date:'Monday February 5, 2018',
        thumbnail:images[0],
        title:'Checking the Status',
        description:"Command to see what the current state of our project",
        content:`Next up, let's type the git status command to see what the current state of our project is:
          <pre><code>git status</code></pre>
          <p class="text-right"><a href="https://git-scm.com/docs/git-status">source</a></p>`,
    });
    this.blogs.push({
        category:'Git',
        date:'Monday February 5, 2018',
        thumbnail:images[0],
        title:'Adding Changes',
        description:"Add file contents to the index",
        content:`For example: we have a octocat.txt file in project derectory.
        To tell Git to start tracking changes made to octocat.txt, we first need to add it to the staging area by using git add.
        Notice how Git says octocat.txt is "untracked"? That means Git sees that  octocat.txt is a new file.
          <pre><code>git add octocat.txt</code></pre>
          <p class="text-right"><a href="https://git-scm.com/docs/git-add">source</a></p>`,
    });
    this.blogs.push({
        category:'Git',
        date:'Monday February 5, 2018',
        thumbnail:images[0],
        title:'Committing',
        description:"Record changes to the repository",
        content:`To store our staged changes we run the commit command with a message describing what we've changed. 
          <pre><code>git commit -m "Add cute octocat story"</code></pre>
          <p class="text-right"><a href="https://git-scm.com/docs/git-commit">source</a></p>`,
    });
    this.blogs.push({
        category:'Git',
        date:'Monday February 5, 2018',
        thumbnail:images[0],
        title:'History',
        description:"Show commit logs",
        content:`Now let's browse them to see what we changed.
        Fortunately for us, there's git log. Think of Git's log as a journal that remembers all the changes we've committed so far, in the order we committed them.
          <pre><code>git log</code></pre>
          <p class="text-right"><a href="https://git-scm.com/docs/git-log">source</a></p>`,
    });
    this.blogs.push({
        category:'Git',
        date:'Monday February 5, 2018',
        thumbnail:images[0],
        title:'Remote Repositories',
        description:"Manage set of tracked repositories",
        content:`We've gone ahead and created a new empty GitHub repository for you to use with Try Git at  https://github.com/try-git/try_git.git. To push our local repo to the GitHub server we'll need to add a remote repository.
        This command takes a remote name and a repository URL, which in your case is https://github.com/try-git/try_git.git.
          <pre><code>git remote add origin https://github.com/try-git/try_git.git</code></pre>
          <p class="text-right"><a href="https://git-scm.com/docs/git-remote">source</a></p>`,
    });
    this.blogs.push({
        category:'Git',
        date:'Monday February 5, 2018',
        thumbnail:images[0],
        title:'Pushing Remotely',
        description:"Update remote refs along with associated objects",
        content:`The push command tells Git where to put our commits when we're ready, and now we're ready.
        The name of our remote is origin and the default local branch name is master. The -u tells Git to remember the parameters, so that next time we can simply run git push and Git will know what to do.
          <pre><code>git push -u origin master</code></pre>
          <p class="text-right"><a href="https://git-scm.com/docs/git-push">source</a></p>`,
    });
    this.blogs.push({
        category:'Git',
        date:'Monday February 5, 2018',
        thumbnail:images[0],
        title:'Pulling Remotely',
        description:"Fetch from and integrate with another repository or a local branch",
        content:`We've invited other people to our GitHub project who have pulled your changes, made their own commits, and pushed them.
        We can check for changes on our GitHub repository and pull down any new changes by running
          <pre><code>git pull origin master</code></pre>
          <p class="text-right"><a href="https://git-scm.com/docs/git-pull">source</a></p>`,
    });
    this.blogs.push({
        category:'Git',
        date:'Monday February 5, 2018',
        thumbnail:images[0],
        title:'Differences',
        description:"Show changes between commits, commit and working tree, etc",
        content:`Uh oh, looks like there have been some additions and changes to the octocat family. Let's take a look at what is different from our last commit by using the git diff command.
        In this case we want the diff of our most recent commit, which we can refer to using the HEAD pointer.
          <pre><code>git diff HEAD</code></pre>
          <p class="text-right"><a href="https://git-scm.com/docs/git-diff">source</a></p>`,
    });
    this.blogs.push({
        category:'Git',
        date:'Monday February 5, 2018',
        thumbnail:images[0],
        title:'Resetting the Stage',
        description:"Reset current HEAD to the specified state",
        content:`You can unstage files by using the git reset command.
          <pre><code>git reset octodog.txt</code></pre>
          <p class="text-right"><a href="https://git-scm.com/docs/git-reset">source</a></p>`,
    });
    this.blogs.push({
        category:'Git',
        date:'Monday February 5, 2018',
        thumbnail:images[0],
        title:'Undo',
        description:"Switch branches or restore working tree files",
        content:`Files can be changed back to how they were at the last commit by using the command: git checkout -- <target>. Go ahead and get rid of all the changes since the last commit for octocat.txt
          <pre><code>git checkout -- octocat.txt</code></pre>
          <p class="text-right"><a href="https://git-scm.com/docs/git-checkout">source</a></p>`,
    });
    this.blogs.push({
        category:'Git',
        date:'Monday February 5, 2018',
        thumbnail:images[0],
        title:'Branching Out',
        description:"List, create, or delete branches",
        content:`When developers are working on a feature or bug they'll often create a copy (aka. branch) of their code they can make separate commits to. Then when they're done they can merge this branch back into their main master branch.
          <pre><code>git branch clean_up</code></pre>
          <p class="text-right"><a href="https://git-scm.com/docs/git-branch">source</a></p>`,
    });
    this.blogs.push({
        category:'Git',
        date:'Monday February 5, 2018',
        thumbnail:images[0],
        title:'Switching Branches',
        description:"Switch branches with command checkout",
        content:`You can switch branches using the git checkout <branch> command..
          <pre><code>git checkout clean_up</code></pre>
          <p class="text-right"><a href="https://git-scm.com/docs/git-checkout">source</a></p>`,
    });
    this.blogs.push({
        category:'Git',
        date:'Monday February 5, 2018',
        thumbnail:images[0],
        title:'Removing All The Things',
        description:"Remove files from the working tree and from the index",
        content:`You can finally remove all those pesky octocats by using the git rm command which will not only remove the actual files from disk, but will also stage the removal of the files for us.
          <pre><code>git rm '*.txt'</code></pre>
          <p class="text-right"><a href="https://git-scm.com/docs/git-rm">source</a></p>`,
    });
    this.blogs.push({
        category:'Git',
        date:'Monday February 5, 2018',
        thumbnail:images[0],
        title:'Preparing to Merge',
        description:"Join two or more development histories together",
        content:`Incorporates changes from the named commits (since the time their histories diverged from the current branch) into the current branch. This command is used by git pull to incorporate changes from another repository and can be used by hand to merge changes from one branch into another.
          <pre><code>git merge clean_up</code></pre>
          <p class="text-right"><a href="https://git-scm.com/docs/git-merge">source</a></p>`,
    });
  },
  methods:{
    goToDetail(post){
      this.post = post;
      this.showDetail = true;
      $('html').addClass('showDetail');
    },
    backToBlog(){
      this.post = {
          category:'',
          date:'',
          thumbnail:'',
          title:'',
          description:"",
          content:'',
      };
      this.showDetail = false;
      $('html').removeClass('showDetail');
    }
  }
})