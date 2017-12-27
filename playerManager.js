let playerManager = {
    getUserKeyCode: (user_id) => {
        $.ajax({
            url: `http://c-dev-tc22.k12.com:8692/prek-test/keycode/keycode.jsp?userid=${user_id}`,
            type: 'GET',
            success: (resp) => {
                console.log(resp);
            },
            error: (err) => {
                console.log(err);
            }
        })
    },

    getUrl: (user_id) => {
        $.ajax({
            url: 'https://cdevtc15-learnx-svc.k12.com/learnx-svc/preview/upsertcontext',
            type: 'POST',
            headers: {
                keyCode: 'O9B909M9H9897-F99-J-I9J-89K-1-J-7-B9C9297-E9D9--N989U97-----I989J-1-I9D9Q9',
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({
                custom_lessonid: '316260',
                context_id: user_id.toString(),
                oauth_consumer_key: 'THEMEADMIN',
                lis_person_sourcedid: user_id.toString()
            }),
            processData: false,
            success: (resp) => {
                console.log(resp);
            },
            error: (err) => {
                console.log(err);
            }
        })
    }
};
