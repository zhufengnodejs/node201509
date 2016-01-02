1.  安装jspm
https://github.com/jspm/jspm-cli/blob/master/docs/getting-started.md
2. 初始化
jspm init
3. 新建html文件，并在文件中引入
```
    <script src="jspm_packages/npm/babel-core@5.8.34/browser.js"></script>
    <script src="jspm_packages/npm/babel-core@5.8.34/browser-polyfill.js"></script>
    <script type="text/babel">
        function say(name,...words){
            console.log(name,...words);
        }
        say('zfpx','hello','world')
    </script>
```
4.浏览器自动刷新
http://www.browsersync.cn/#install
```
browser-sync start --server --files "*.html,*.js"
```
