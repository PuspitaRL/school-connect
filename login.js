const loginForm = document.querySelector('#loginForm');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value;

    const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password
    });

    if (error) {
        alert('Login gagal: ' + error.message);
        return;
    }

    const { data: profile, error: profileError } = await supabaseClient
        .from('users')
        .select('role')
        .eq('auth_id', data.user.id)
        .single();

    if (profileError) {
        alert('Profil pengguna tidak ditemukan.');
        return;
    }

    if (profile.role === 'orang_tua') {

        window.location.href = 'parent-dashboard.html';

    } else if (profile.role === 'guru') {

        window.location.href = 'guru-dashboard.html';

    } else if (profile.role === 'admin') {

        alert('Login Admin berhasil. Dashboard Admin belum dibuat.');

    }
});


const togglePassword = document.querySelector('#togglePassword');
const passwordInput = document.querySelector('#password');

if (togglePassword && passwordInput) {

    togglePassword.addEventListener('click', () => {

        if (passwordInput.type === 'password') {

            passwordInput.type = 'text';
            togglePassword.textContent = 'Sembunyikan';

        } else {

            passwordInput.type = 'password';
            togglePassword.textContent = 'Lihat';

        }

    });

}