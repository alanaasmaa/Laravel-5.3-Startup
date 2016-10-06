@if (Session::has('success'))
	{{ Session::get('success') }}
@endif

@if (Session::has('info'))
	{{ Session::get('info') }}
@endif

@if (Session::has('warning'))
	{{ Session::get('warning') }}
@endif

@if (Session::has('error'))
	{{ Session::get('error') }}
@endif

@if (count($errors) > 0)
	@foreach ($errors->all() as $error)
	<li>{{ $error }}</li>
	@endforeach
@endif