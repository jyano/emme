
BLOG00 = BLOGVID2WORKS = function () {
    $CSS({
        $: {M: 20},
        bd: {dp: 'fl'},
        d: {C: 'r', c: 'b'}
    })
    $table = $.t().a2($.dK('ct').A($.h1('Blog App')))
    $thead = $.tH().a2($table)
    $thTr = $.tr().a2($thead).A(
        $.th('AuthoR'), $.th('Title'),
        $.th('Url'), $.th('action'))
    $tbody = $.tB().a2($table).K('blogs-list')
    $tr = $.tr().a2($thead)
    $.ip().a2($.td().a2($tr)).K('user-ip')
    $.ip().a2($.td().a2($tr)).K('title-ip')
    $.ip().a2($.td().a2($tr)).K('url-ip')
    $.bt('Add', function () {
        blogs.create({
            user: $('.user-ip').V(),
            title: $('.title-ip').V(),
            url: $('.url-ip').V()
        })
    }).K('add-blog').a2($.td().a2($tr))                                //
    BlogView = GenView.tr.extend({
        btGroup_: function () {
            return $.td.A(
                $.bt('Edit').K('edit-blog'),
                $.bt('Delete').K('delete-blog'),
                $.bt('Update').K('update-blog').none(),
                $.bt('Cancel').K('cancel').none())
        },
        row: function (ob) {
            return [
                $.sp(ob.user).K('user'),
                $.sp(ob.title).K('title'),
                $.sp(ob.url).K('url'),
                [
                    $.bt('Edit').K('edit-blog'),
                    $.bt('Delete').K('delete-blog'),
                    $.bt('Update').K('update-blog').none(),
                    $.bt('Cancel').K('cancel').none()]
            ]
        },
        events: {
            'click .edit-blog': 'edit',
            'click .update-blog': 'update',
            'click .cancel': 'cancel',
            'click .delete-blog': 'delete'
        },
        edit: function () {
            var vw = this
            vw.$('.edit-blog').hide();
            vw.$('.delete-blog').hide();
            vw.$('.update-blog').show();
            vw.$('.cancel').show()
            var user = vw.$('.user').html()
            var title = vw.$('.title').html()
            var url = vw.$('.url').html()
            this.$('.user').E().A($.ip().K("user-update").val(user))
            this.$('.title').E().A($.ip().K("title-update").val(title))
            this.$('.url').E().A($.ip().K("url-update").val(url))// use .h( or .H( instead of E().A(
        },
        update: function () {
            var md = this.model
            md.set('user', $('.user-update').v())
            md.set('title', $('.title-update').v())
            md.set('url', $('.url-update').v())
            md.save(null, {
                success: function () {
                    $l('success updated!')
                }
            })
        },
        cancel: function () {
            blogsView.R()
        }, delete: function () {
            this.model.destroy()
        }
    })
    BlogsView = CollView.extend({subView: BlogView})
    blogs = new Blogs
    blogsView = new BlogsView({
        model: blogs,
        el: '.blogs-list'
    })
}
BLOG0 = BLOGVID2WORKS = function () {
    $CSS({
        $: {M: 20},
        bd: {dp: 'fl'},
        d: {C: 'r', c: 'b'}
    })
    $table = $.t().a2($.dK('ct').A($.h1('Blog App')))
    $thead = $.tH().a2($table)
    $thTr = $.tr().a2($thead).A(
        $.th('Author'), $.th('Title'),
        $.th('Url'), $.th('action'))
    $tbody = $.tB().a2($table).K('blogs-list')
    $tr = $.tr().a2($thead)
    $.ip().a2($.td().a2($tr)).K('user-ip')
    $.ip().a2($.td().a2($tr)).K('title-ip')
    $.ip().a2($.td().a2($tr)).K('url-ip')
    $.bt('Add', function () {
        blogs.create({
            user: $('.user-ip').V(),
            title: $('.title-ip').V(),
            url: $('.url-ip').V()
        })
    }).K('add-blog').a2($.td().a2($tr))
    //
    BlogView = GenView.tr.extend({
        btGroup_: function () {
            return $.td.A(
                $.bt('Edit').K('edit-blog'),
                $.bt('Delete').K('delete-blog'),
                $.bt('Update').K('update-blog').none(),
                $.bt('Cancel').K('cancel').none())
        },
        row: function (ob) {
            return [
                $.sp(ob.user).K('user'),
                $.sp(ob.title).K('title'),
                $.sp(ob.url).K('url'),
                [
                    $.bt('Edit').K('edit-blog'),
                    $.bt('Delete').K('delete-blog'),
                    $.bt('Update').K('update-blog').none(),
                    $.bt('Cancel').K('cancel').none()]
            ]
        },
        events: {
            'click .edit-blog': 'edit',
            'click .update-blog': 'update',
            'click .cancel': 'cancel',
            'click .delete-blog': 'delete'
        },
        edit: function () {
            var vw = this
            vw.$('.edit-blog').hide();
            vw.$('.delete-blog').hide();
            vw.$('.update-blog').show();
            vw.$('.cancel').show()
            var user = vw.$('.user').html()
            var title = vw.$('.title').html()
            var url = vw.$('.url').html()
            this.$('.user').E().A($.ip().K("user-update").val(user))
            this.$('.title').E().A($.ip().K("title-update").val(title))
            this.$('.url').E().A($.ip().K("url-update").val(url))// use .h( or .H( instead of E().A(
        },
        update: function () {
            var md = this.model
            md.set('user', $('.user-update').v())
            md.set('title', $('.title-update').v())
            md.set('url', $('.url-update').v())
            md.save(null, {
                success: function () {
                    $l('success updated!')
                }
            })
        },
        cancel: function () {
            blogsView.R()
        }, delete: function () {
            this.model.destroy()
        }
    })
    BlogsView = CollView.extend({subView: BlogView})
    blogs = new Blogs
    blogsView = new BlogsView({
        model: blogs,
        el: '.blogs-list'
    })
    blogs.fetch()
    Bb.M.prototype.id = '_id'
}


xfinity= 8155400410415531