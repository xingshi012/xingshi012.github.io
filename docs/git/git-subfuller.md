---
sidebar_position: 2
---

# Git 较全常用命令总结

> 这次结合 `claude` 又总结了写常用命令，应该算是比较全的了

## 配置相关

```
git config --global user.name "name"
git config --global user.email "email"
git config --list  # 查看配置
```

## 仓库初始化

```
git init  # 初始化本地仓库
git clone <url>  # 克隆远程仓库
```

## 基本操作

```
git status  # 查看工作区状态
git add <file>  # 添加文件到暂存区
git add .  # 添加所有修改
git commit -m "提交说明"  # 提交到本地仓库
git commit -am "提交说明"  # add 和 commit 合并（仅对已跟踪文件有效）
```

## git 分支相关命令

 ### 查看本地分支

 ```
 git branch
 ``` 
 
### 创建分支

```
git branch <name>
```

### 切换分支

```
git checkout <name>  

# 新命令
git switch <name>  
```

### 创建并切换分支

```
git checkout -b <name> 

# 新命令
git switch -c <name>
```

### 合并指定分支到当前分支

```
git merge <name>  
```

### 删除分支

```
git branch -d <name>
```

## 远程命令

### 查看远程仓库

```
git remote -v 
```

### 添加远程仓库

```
git remote add origin <url>  
```

### 推送到远程仓库

```
git push origin <branch> 
```

### 推送并建立追踪关系

> 建立联系后，后续本地执行 `git push` 就可以 push 到这个所关联的远程分支了，不需要
>  `git push origin <branch> ` 这样繁琐的命令了

```
git push -u origin <branch>  
```

### 拉取并合并远程更改

> 日常开发最好用 `git merge` 防止代码被覆盖

```
git pull  
```

### 仅拉取远程更改，不合并

> 把远程更新的代码拉取到本地，自己决定是否需要合并到自己的本地开发分支

```
git fetch  
```

## 查看历史

```
git log  # 查看提交历史
git log --oneline  # 简洁查看
git log --graph  # 图形化查看
git diff  # 查看工作区与暂存区差异
git diff HEAD  # 查看工作区与最新提交的差异
```

## 撤销工作区修改

针对一些文件进行了修改，但是还没有执行 `git add`  命令时，使用此命令去回退文件，类似直接在文件中执行 `Ctrl Z` 撤回命令

```
git checkout -- <file> 

# 新命令
git restore <file>
```

### 取消暂存

适用于文件执行了 `git add` 命令，但是还没有 `git commit` 提交修改

```
git reset HEAD <file>

# 新命令
git restore --staged <file>

# 这只是把文件取消暂存，如果想继续撤回文件内容的修改，再执行

git restore <file>
```

### 回退更改

`git reset` 命令会回退代码到指定位置，`--hard` 会删除commit记录和修改，**慎用**
`git revert` 命令也是回退代码到指定位置，但是会创建新的提交，建议使用

> `git revert` 把代码回退到了指定位置，如果想回退到指定的 commit id 跟上 id 即可

```
git reset --hard HEAD^
git reset --hard <commit-id>

git revert <commit-id>
```

> [!NOTE] git revert三种模式
> ```
> git reset --soft HEAD^ # 只移动 HEAD，保留暂存区和工作区 
> git reset --mixed HEAD^ # 移动 HEAD，重置暂存区，保留工作区（默认） 
> git reset --hard HEAD^ # 全部重置，修改会丢失
> ```

## 暂存工作

> 适用于在自己的开发分支开发新功能，突然有一个bug需要切换到其他分支去修复的时候，又不想提交自己开发分支的半成品代码到线上，就可以使用 `git stash` 命令去暂存工作区的修改

```
git stash  # 暂存当前工作
git stash list  # 查看暂存列表
git stash pop  # 恢复暂存并删除
git stash apply  # 恢复暂存但不删除
```

## 标签管理

```
git tag  # 查看标签
git tag <name>  # 创建标签
git tag -a <name> -m "说明"  # 创建带说明的标签
git push origin <tagname>  # 推送标签到远程
git push origin --tags  # 推送所有标签
```

### 标签是什么？

标签就是给某个提交打一个**永久的、有意义的名字**，通常用于标记版本发布点。比如 `v1.0.0`、`v2.1.3` 等。

### 为什么需要标签？

```
# 没有标签时，你需要记住提交 ID
git checkout 3a8f9b2c  # 这是哪个版本？谁记得住？

# 有标签后
git checkout v1.0.0    # 一眼就知道是 1.0.0 版本
```

### 标签的实际应用场景

**场景1：版本发布**

```
# 开发完成，准备发布 1.0.0 版本
git tag v1.0.0
git push origin v1.0.0

# 用户可以直接下载这个版本
# GitHub 上会显示 Releases，可以下载源码压缩包
```

**场景2：回溯历史版本**

```
# 用户报告 v1.0.0 有 bug，需要查看那个版本的代码
git checkout v1.0.0

# 查看代码，定位问题
# 修复后发布 v1.0.1
git tag v1.0.1
```

## 标签的两种类型

**轻量标签（Lightweight Tag）**

```
# 就是一个指向提交的指针
git tag v1.0.0
```

**附注标签（Annotated Tag）** - 推荐使用

```
# 包含更多信息：打标签者、日期、说明
git tag -a v1.0.0 -m "正式发布 1.0.0 版本"

# 查看标签详细信息
git show v1.0.0
```

### 标签常用操作

```
# 查看所有标签
git tag

# 查看特定模式的标签
git tag -l "v1.*"

# 给历史提交打标签
git tag v0.9.0 <commit-id>

# 删除本地标签
git tag -d v1.0.0

# 删除远程标签
git push origin --delete v1.0.0

# 推送所有标签到远程
git push origin --tags

# 检出标签（会进入分离 HEAD 状态）
git checkout v1.0.0

# 基于标签创建分支（常用于修复老版本 bug）
git checkout -b hotfix-v1.0.0 v1.0.0
```

### 实际工作流示例

```
# 1. 开发完成一个版本
git add .
git commit -m "完成所有 v2.0.0 功能"

# 2. 打标签
git tag -a v2.0.0 -m "发布 2.0.0 版本
- 新增用户管理功能
- 优化性能
- 修复已知 bug"

# 3. 推送代码和标签
git push origin main
git push origin v2.0.0

# 4. 在 GitHub 上，可以基于这个标签创建 Release
#    用户可以下载 v2.0.0 的源码包或编译好的程序
```

### 标签 vs 分支的区别

- **分支**：可以移动，用于开发
- **标签**：固定不动，用于标记里程碑

```
# 分支会随着新提交移动
git commit -m "新提交"  # main 分支指针会移动

# 标签永远指向那个提交
git tag v1.0.0          # v1.0.0 永远指向当前提交
```

Reference:

https://github.com/xingshi012/learnGit

https://claude.ai/chat/734e1697-31a0-4c23-b998-a1ed4fe6b0e5